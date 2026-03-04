
import React, { useState, useMemo, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Navbar } from './components/Navbar';

/**
 * Utility to merge tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { ProductCard } from './components/ProductCard';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { ChatAssistant } from './components/ChatAssistant';
import { ComparisonModal } from './components/ComparisonModal';
import { PRODUCTS_DB, MARKUP_PERCENTAGE } from './constants';
import { Product, CartItem } from './types';
import { Search, Sparkles, Loader2, XCircle, Scale, X, Filter, ChevronDown, Package, LayoutDashboard } from 'lucide-react';
import { searchProducts, generateProductImage } from './services/gemini';
import { useAdmin } from './services/adminService';
import { AdminLayout } from './components/admin/AdminLayout';
import { DashboardOverview } from './components/admin/DashboardOverview';
import { ProductManager } from './components/admin/ProductManager';
import { ImportAutomation } from './components/admin/ImportAutomation';
import { SmartUpload } from './components/admin/SmartUpload';
import { UserManager } from './components/admin/UserManager';
import { ActivityLogs } from './components/admin/ActivityLogs';
import { SettingsPanel } from './components/admin/SettingsPanel';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  // View State
  const [currentView, setCurrentView] = useState<'store' | 'admin'>('store');
  const [adminTab, setAdminTab] = useState('dashboard');

  // Admin Service
  const admin = useAdmin();

  // Store State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Product Data State
  const [userProducts, setUserProducts] = useState<Product[]>([]);
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [productOverrides, setProductOverrides] = useState<Record<string, Product>>({});
  
  // AI Search State
  const [isAISearching, setIsAISearching] = useState(false);
  const [aiMatches, setAiMatches] = useState<string[] | null>(null);

  // Comparison State
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Combine static DB with user-added products
  const allProducts = useMemo(() => {
    const dbProducts = PRODUCTS_DB.map(p => {
      const overriddenProduct = productOverrides[p.id] || p;
      return {
        ...overriddenProduct,
        image: imageOverrides[p.id] || overriddenProduct.image
      };
    });
    return [...userProducts, ...dbProducts];
  }, [userProducts, imageOverrides, productOverrides]);

  // Derived Data
  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(allProducts.map(p => p.category)))],
    [allProducts]
  );

  const filteredProducts = useMemo(() => {
    if (aiMatches !== null) {
      return allProducts.filter(p => aiMatches.includes(p.id));
    }
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      return selectedCategory === 'All' 
        ? allProducts 
        : allProducts.filter(p => p.category === selectedCategory);
    }
    const searchTokens = term.split(/\s+/).filter(t => t.length > 0);
    return allProducts.filter(product => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      const searchableText = `${product.name} ${product.description} ${product.category} ${product.id}`.toLowerCase();
      return searchTokens.every(token => searchableText.includes(token));
    });
  }, [searchTerm, selectedCategory, allProducts, aiMatches]);

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (aiMatches !== null) setAiMatches(null);
  };

  const handleAISearch = async () => {
    if (!searchTerm.trim()) return;
    setIsAISearching(true);
    setAiMatches(null);
    try {
      const matches = await searchProducts(searchTerm, allProducts);
      setAiMatches(matches);
      admin.addLog({
        userId: '1',
        userName: 'Admin User',
        action: 'AI Search',
        details: `Searched for: ${searchTerm}`,
        type: 'Info'
      });
    } catch (error) {
      console.error("AI Search Failed", error);
    } finally {
      setIsAISearching(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setAiMatches(null);
    setSelectedCategory('All');
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { 
        ...product, 
        quantity: quantity, 
        finalPrice: product.price * (1 + MARKUP_PERCENTAGE) 
      }];
    });
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleComparison = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      if (prev.length >= 4) {
        alert("You can compare up to 4 items at a time.");
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromComparison = (id: string) => {
    setCompareList(prev => prev.filter(p => p.id !== id));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  // AI Handlers for Chat Assistant
  const aiHandlers = useMemo(() => ({
    addToCart: (productId: string, quantity: number) => {
      const product = allProducts.find(p => p.id === productId);
      if (product) {
        addToCart(product, quantity);
      } else {
        throw new Error(`Product with ID ${productId} not found.`);
      }
    },
    getCart: () => cart,
    clearCart: () => setCart([]),
    openQuoteModal: () => setIsQuoteModalOpen(true)
  }), [allProducts, cart]);

  // Product Management (Admin Only)
  const handleSaveProduct = (product: Product) => {
    const isUserProduct = userProducts.some(p => p.id === product.id);
    if (isUserProduct) {
        setUserProducts(prev => prev.map(p => p.id === product.id ? product : p));
    } else {
        const isDbProduct = PRODUCTS_DB.some(p => p.id === product.id);
        if (isDbProduct) {
            setProductOverrides(prev => ({ ...prev, [product.id]: product }));
        } else {
            setUserProducts(prev => [product, ...prev]);
        }
    }
    admin.addLog({
      userId: '1',
      userName: 'Admin User',
      action: 'Product Saved',
      details: `Saved product: ${product.name}`,
      type: 'Success'
    });
  };

  const handleUpdateProductImage = (id: string, newUrl: string) => {
    if (userProducts.some(p => p.id === id)) {
        setUserProducts(prev => prev.map(p => p.id === id ? { ...p, image: newUrl } : p));
        return;
    }
    if (productOverrides[id]) {
        setProductOverrides(prev => ({ ...prev, [id]: { ...prev[id], image: newUrl } }));
        return;
    }
    setImageOverrides(prev => ({ ...prev, [id]: newUrl }));
  };

  const handleUpdateProductDescription = (id: string, newDescription: string) => {
    if (userProducts.some(p => p.id === id)) {
        setUserProducts(prev => prev.map(p => p.id === id ? { ...p, description: newDescription } : p));
        return;
    }
    setProductOverrides(prev => {
        const existing = prev[id];
        if (existing) return { ...prev, [id]: { ...existing, description: newDescription } };
        const original = PRODUCTS_DB.find(p => p.id === id);
        if (original) return { ...prev, [id]: { ...original, description: newDescription } };
        return prev;
    });
  };

  // Render Admin View
  if (currentView === 'admin') {
    return (
      <AdminLayout 
        activeTab={adminTab} 
        onTabChange={setAdminTab}
        onExit={() => setCurrentView('store')}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={adminTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {adminTab === 'dashboard' && <DashboardOverview stats={admin.stats} />}
            {adminTab === 'products' && <ProductManager products={allProducts} />}
            {adminTab === 'smart-upload' && <SmartUpload />}
            {adminTab === 'imports' && <ImportAutomation jobs={admin.importJobs} onStartImport={admin.startImport} />}
            {adminTab === 'users' && <UserManager users={admin.users} />}
            {adminTab === 'logs' && <ActivityLogs logs={admin.logs} />}
            {adminTab === 'settings' && <SettingsPanel />}
          </motion.div>
        </AnimatePresence>
      </AdminLayout>
    );
  }

  // Render Store View
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        onCartClick={() => setIsQuoteModalOpen(true)}
        onAdminClick={() => setCurrentView('admin')}
      />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 print:hidden pb-32">
        
        {/* Responsive Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Product Catalog</h1>
            <p className="mt-2 text-slate-500 max-w-lg">
              Browse our premium collection of office and home furniture.
            </p>
          </div>
          <div className="flex flex-row md:flex-col items-center md:items-end justify-center gap-2">
             {aiMatches !== null && (
               <motion.span 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 shadow-sm"
               >
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Search Active
               </motion.span>
             )}
             <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                {filteredProducts.length} Items Found
             </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-4xl">
            <div className="relative flex-grow group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                </div>
                <input
                type="text"
                className="block w-full pl-11 pr-32 py-4 border border-slate-200 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm hover:shadow-md transition-all duration-200 text-base"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === 'Enter' && handleAISearch()}
                />
                
                <div className="absolute inset-y-0 right-2 flex items-center gap-1">
                {searchTerm && (
                    <button onClick={clearSearch} className="p-2 text-slate-300 hover:text-slate-500 transition-colors">
                      <XCircle className="w-5 h-5" />
                    </button>
                )}
                <button
                    onClick={handleAISearch}
                    disabled={isAISearching || !searchTerm.trim()}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200",
                      isAISearching ? 'bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-indigo-600'
                    )}
                >
                    {isAISearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    <span className="hidden sm:inline">AI Search</span>
                </button>
                </div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border",
                  selectedCategory === cat 
                    ? "bg-teal-600 text-white border-teal-600 shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-teal-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard 
                    product={product} 
                    onAdd={addToCart} 
                    onClick={handleProductClick}
                    onCompare={toggleComparison}
                    isComparing={compareList.some(p => p.id === product.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200"
            >
              <div className="bg-slate-50 p-4 rounded-full inline-block mb-4">
                 <Search className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-500 text-lg font-medium">No products found.</p>
              <button onClick={clearSearch} className="mt-6 text-teal-600 font-bold hover:underline">
                View All Products
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} OBRA Furniture. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Compare Button */}
      {compareList.length > 0 && (
        <button
          onClick={() => setIsCompareModalOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 animate-in slide-in-from-bottom-10"
        >
          <Scale className="w-5 h-5" />
          <span className="font-bold">Compare ({compareList.length})</span>
        </button>
      )}

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} cart={cart} updateQty={updateCartQty} remove={removeFromCart} />
      <ProductDetailsModal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} product={selectedProduct} onAddToCart={addToCart} />
      <ComparisonModal isOpen={isCompareModalOpen} onClose={() => setIsCompareModalOpen(false)} products={compareList} onRemove={removeFromComparison} onAddToCart={addToCart} />
      <ChatAssistant handlers={aiHandlers} />
    </div>
  );
}

export default App;
