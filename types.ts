export type Role = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'Active' | 'Suspended';
  lastActive: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  status?: 'Draft' | 'Published' | 'Archived';
  tags?: string[];
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  color: string;
  material: string;
  size?: string;
  configuration?: string;
  price?: number;
  stock: number;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
  finalPrice: number; // Price with markup
}

export interface CategoryData {
  name: string;
  count: number;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
  timestamp: string;
  type: 'Info' | 'Warning' | 'Error' | 'Success';
}

export interface ImportJob {
  id: string;
  type: 'CSV' | 'URL' | 'Spreadsheet';
  status: 'Pending' | 'Processing' | 'Completed' | 'Failed';
  progress: number;
  totalRows: number;
  processedRows: number;
  errorRows: number;
  timestamp: string;
  fileName?: string;
  sourceUrl?: string;
}

export interface ImageAnalysis {
  category: string;
  shape: string;
  structure: string;
  components: string[];
  dominantColor: string;
  secondaryColors: string[];
  material: string;
  sizeClass: 'small' | 'medium' | 'large';
  orientation: 'left' | 'right' | 'center';
  ocrText: string;
  brandName?: string;
  modelNumber?: string;
  semanticDescription: string;
}

export interface MatchResult {
  productId: string | null;
  variantId: string | null;
  productConfidence: number;
  variantConfidence: number;
  reasoning: string;
  suggestedAction: 'attach_variant' | 'attach_product' | 'review' | 'create';
}

export interface MediaUpload {
  id: string;
  file: File;
  preview: string;
  status: 'pending' | 'analyzing' | 'matched' | 'error';
  progress: number;
  analysis?: ImageAnalysis;
  match?: MatchResult;
  hash?: string;
}
