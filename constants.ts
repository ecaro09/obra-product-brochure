
import { Product } from './types';

export const MARKUP_PERCENTAGE = 0.00; // 0% Markup

// Helper to generate consistent, high-quality AI product images on the fly
const getImg = (id: string, category: string, name: string) => {
  const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const prompt = `professional product photography of ${name}, ${category}, white background, soft studio lighting, modern furniture design, high resolution, 4k, minimalistic`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=800&nologo=true&seed=${seed}`;
};

export const PRODUCTS_DB: Product[] = [
  {
    "id": "088",
    "name": "Storage Steel Cabinet - OBRA Office Furniture",
    "description": "This durable storage steel cabinet offers secure and spacious storage for tools, equipment, or office supplies, featuring adjustable shelves for customized organization.",
    "price": 9180.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/luh2-1.png",
    "stock": 25
  },
  {
    "id": "oboyoa",
    "name": "Wall Display Bookshelf",
    "description": "A multipurpose shelf is a flexible storage solution designed to hold a variety of items, from books and decor to kitchenware or office supplies.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/wall-1.png",
    "stock": 15
  },
  {
    "id": "cbt46015",
    "name": "Mini-Conference Round Table",
    "description": "This Mini-Conference Round Table is perfect for prompt meetings and quick client inquiries. 2.5cm thickness and sleek chrome plated stand.",
    "price": 4899.0,
    "category": "Reception & Conference",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044390.jpg",
    "stock": 8
  },
  {
    "id": "wls017",
    "name": "2-doors Sliding Glass Steel Cabinet",
    "description": "Revolutionize your storage with our 2 Doors Sliding Glass Steel Cabinet. Featuring a 12mm thick tempered glass counter-top.",
    "price": 7299.0,
    "category": "Cabinet & Storage",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/21-3.jpg?fit=600%2C343&ssl=1",
    "stock": 12
  },
  {
    "id": "obd102",
    "name": "D102 Bar Chair",
    "description": "This stylish leather bar chair combines comfort and elegance, featuring a cushioned seat and backrest upholstered in premium leather.",
    "price": 2632.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/lmaoo.png",
    "stock": 40
  },
  {
    "id": "16",
    "name": "L Type Executive Office Table",
    "description": "L-type Executive Office Table with durable steel frame, grommet, mobile pedestal, and side drawer with safety lock.",
    "price": 0.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/1000043587.jpg?fit=600%2C600&ssl=1",
    "stock": 10
  },
  {
    "id": "jd302",
    "name": "JD302 Bar Chair",
    "description": "This sleek bar chair offers a modern design with a comfortable seat and sturdy base, making it an ideal addition to any bar.",
    "price": 2497.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/garry.png",
    "stock": 35
  },
  {
    "id": "os01w",
    "name": "5 Layer Open Shelves",
    "description": "Enhance your workspace organization with our 5-Layer Open Shelves. Designed with a knock-down structure, electrostatic powder coating.",
    "price": 8299.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/15-3-1.jpg",
    "stock": 18
  },
  {
    "id": "ch206a",
    "name": "High-back Leatherette Executive Chair",
    "description": "Versatile and ergonomic office chair. Features 360-degree Swivel, Chrome-plated Star-base, PU Leather Upholstery.",
    "price": 10499.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/CH206A-ITO-NA.jpg",
    "stock": 15
  },
  {
    "id": "1771_obct-1709-24",
    "name": "Conference Table - 10 Seater",
    "description": "Meet the future of conference tables: the sleek 2 Conference Table MDF Board with Tubular Steel.",
    "price": 13399.0,
    "category": "Reception & Conference",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/58.jpg?resize=150%2C150&ssl=1",
    "stock": 5
  },
  {
    "id": "33ja",
    "name": "3-Door Wardrobe With 3 Drawers",
    "description": "Versatile 3-door wardrobe with 3 drawers provides ample storage space, featuring hanging sections, shelves, and deep drawers.",
    "price": 20182.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/aurora-light-mode.png",
    "stock": 7
  },
  {
    "id": "846",
    "name": "4-Seater Workstation with Dividers",
    "description": "Enhance your office space with this stylish and functional 4-seater workstation. 240W x 120D x 75H cm.",
    "price": 29899.0,
    "category": "Workstation",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161269.png",
    "stock": 4
  },
  {
    "id": "2161_obwt-st4mp-240b",
    "name": "4 Seater Workstation Table",
    "description": "Maximize your office space with our versatile 2 and 4 seater Workstation Bundle. 240w x 120d x75h.",
    "price": 19699.0,
    "category": "Workstation",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/1000044036.jpg?fit=600%2C600&ssl=1",
    "stock": 6
  },
  {
    "id": "903bkonsx",
    "name": "Mesh Office Teller Chair",
    "description": "Upgrade your office with the Mesh Office Teller Chair. 360-degree swivel.",
    "price": 4299.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/903B-PIX.png",
    "stock": 20
  },
  {
    "id": "ob6524",
    "name": "4-Layer Shoe Rack",
    "description": "This updated shoe rack features an additional tier for even more storage.",
    "price": 1610.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/6524-shoe-rack.png",
    "stock": 30
  },
  {
    "id": "ob001c2jnsx",
    "name": "Leatherette Stool Chair",
    "description": "Versatile seating option designed for modern workspaces, offering adjustable height.",
    "price": 2300.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/001C2JNSX-office-stool-chair.png",
    "stock": 25
  },
  {
    "id": "obip5001",
    "name": "Restaurant Table Base",
    "description": "A table base for our restaurant table top.",
    "price": 1552.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/table-base.png",
    "stock": 50
  },
  {
    "id": "ob6523",
    "name": "Shoe Rack",
    "description": "This sleek and durable shoe rack offers multiple tiers for organizing footwear, helping you maximize space in your home.",
    "price": 937.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/6523-shoe-rack.png",
    "stock": 35
  },
  {
    "id": "obfit14",
    "name": "1-Door 4-Drawer Dresser Cabinet",
    "description": "A 1-door, 4-drawer dresser cabinet combines functionality and style, featuring ample storage space.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/dsds.png",
    "stock": 10
  },
  {
    "id": "95cjnsx",
    "name": "Fabric Clerical Chair",
    "description": "Upgrade your office setup with the Fabric Clerical Chair without armrest.",
    "price": 1999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/95CJNSX-PIXEL.png",
    "stock": 28
  },
  {
    "id": "ob3107110",
    "name": "Manolya Wide Table Top",
    "description": "This durable restaurant table is designed to withstand daily use, featuring a sturdy base and a sleek tabletop.",
    "price": 5130.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/manolya2-1.png",
    "stock": 15
  },
  {
    "id": "jef1",
    "name": "Jefferson Office Desk",
    "description": "Streamline your workspace with the Gentleprince Jefferson Office Desk OD-01.",
    "price": 13899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/jefferson2_540x-1.webp",
    "stock": 12
  },
  {
    "id": "oftg",
    "name": "Glass Top Office Table",
    "description": "Revolutionize your workspace with our sleek office desk, featuring a glass top, side drawer with safety lock.",
    "price": 9599.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000046024.jpg",
    "stock": 10
  },
  {
    "id": "3lrh",
    "name": "3 Layer Vertical Steel Filing Cabinet",
    "description": "Maximize your office organization with our Superior Gang Drawer, designed for efficiency and security.",
    "price": 6799.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044668.jpg",
    "stock": 18
  },
  {
    "id": "1980ajnsx",
    "name": "Mesh Office Chair (1980A)",
    "description": "High-quality and ergonomic chair designed to provide comfort. Features 360-degree swivel, Lumbar support.",
    "price": 3399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1980A.png",
    "stock": 22
  },
  {
    "id": "898ajnsx",
    "name": "Mesh Office Chair (898)",
    "description": "Enhance your work environment with our premium Mesh Office Chair. Crafted with attention to detail.",
    "price": 3999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/898AJNSX-PIXEL.png",
    "stock": 20
  },
  {
    "id": "sapiranget",
    "name": "5 Layer Bookshelf",
    "description": "A 5-layer bookshelf offers ample vertical storage with multiple tiers, perfect for organizing books.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/sdsd.png",
    "stock": 15
  },
  {
    "id": "bk",
    "name": "Executive Office Chair (BK)",
    "description": "The High-back Leatherette Executive Chair is a stylish and comfortable office chair.",
    "price": 5399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/49DJNTY-NEWWWW-1.jpg",
    "stock": 12
  },
  {
    "id": "obcasinha",
    "name": "Chest of Drawer",
    "description": "A chest of drawers is a tall storage unit with multiple drawers, designed to organize clothing and accessories.",
    "price": 5700.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/chch.png",
    "stock": 8
  },
  {
    "id": "103",
    "name": "L Type Executive Office Table",
    "description": "Experience the pinnacle of office sophistication with our Executive Table, featuring a pristine melamine finish.",
    "price": 14899.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/103-16_18-3.jpg?resize=150%2C150&ssl=1",
    "stock": 6
  },
  {
    "id": "mad140",
    "name": "Office Desk (Madison)",
    "description": "This robust desk features a key-lock triple side drawer, a melamine wood grain surface for a touch of elegance.",
    "price": 18599.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/madison2_720x.webp",
    "stock": 5
  },
  {
    "id": "ob4204",
    "name": "Kapito Table Top",
    "description": "This durable restaurant table is designed to withstand daily use, featuring a sturdy base and a sleek tabletop.",
    "price": 3307.0,
    "category": "Office Table",
    "image": "https://cdn.obrafurniture.com/wp-content/uploads/2024/10/kapito.png",
    "stock": 20
  },
  {
    "id": "wls040",
    "name": "Metal Display Cabinet (Wood Grain)",
    "description": "Metal Display Cabinet, Powder-Coated Finish, Wood Grain Laminate, Swing Glass Doors, Security Lock.",
    "price": 11299.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/5-1-2.jpg",
    "stock": 10
  },
  {
    "id": "95cjnsxa",
    "name": "Fabric Clerical Chair with Armrest",
    "description": "Elevate your office experience with our high-quality Fabric Clerical Chair with armrest.",
    "price": 2199.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/95CJNSX-PIXEL-1.png",
    "stock": 25
  },
  {
    "id": "14",
    "name": "TV Rack",
    "description": "This sleek TV rack combines modern design with practicality, providing a sturdy and stylish platform for your television.",
    "price": 3277.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/tv-rack.png",
    "stock": 12
  },
  {
    "id": "001c2nsx",
    "name": "Leatherette Stool Chair (Sleek)",
    "description": "Elevate your space with our sleek and stylish Leatherette Stool Chair.",
    "price": 1899.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000043576.jpg",
    "stock": 18
  },
  {
    "id": "a25816",
    "name": "L-Type Executive Table (Mobile Pedestal)",
    "description": "Create a professional and organized workspace with this L-type executive table.",
    "price": 17899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161277.png",
    "stock": 4
  },
  {
    "id": "86",
    "name": "8-Door 6-Drawers Wardrobe",
    "description": "This spacious 8-door, 6-drawer wardrobe provides extensive storage for all your clothing, shoes, and accessories.",
    "price": 21600.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/liverpool.png",
    "stock": 3
  },
  {
    "id": "2166_obwt-st4mp-120b",
    "name": "2 Seater Workstation Table (Brown)",
    "description": "Maximize your office space with our versatile 2 seater Workstation Bundle.",
    "price": 11899.0,
    "category": "Workstation",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/2-SEATER-BROWN-WITH-MOBILE-PED.jpg?fit=600%2C600&ssl=1",
    "stock": 6
  },
  {
    "id": "lb01",
    "name": "Steel Locker Cabinet (1 Door)",
    "description": "The One-door locker Cabinet is a versatile storage solution that combines functionality with durability.",
    "price": 5399.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/4-1-3.jpg",
    "stock": 20
  },
  {
    "id": "sm",
    "name": "Electric Adjustable Home & Office Table",
    "description": "This Electric adjustable office table is designed to provide flexibility and comfort in your workspace.",
    "price": 16828.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161261.png",
    "stock": 5
  },
  {
    "id": "595",
    "name": "Med Back Office Chair (Off-White/Red)",
    "description": "Upgrade your workspace with our Med Back Office Chair, designed for both style and comfort.",
    "price": 4300.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000053158-2.jpg",
    "stock": 10
  },
  {
    "id": "ob3107-2",
    "name": "Manolya Table Top",
    "description": "This durable restaurant table is designed to withstand daily use, featuring a sturdy base.",
    "price": 3307.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/manolya-1.png",
    "stock": 25
  },
  {
    "id": "d001gjnt4y",
    "name": "Executive Office Chair (Luxurious)",
    "description": "Enhance your office space with our high-back leatherette executive chair. 360-degree swivel.",
    "price": 11899.0,
    "category": "Office Chair",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/18-2-1.jpg?fit=600%2C600&ssl=1",
    "stock": 8
  },
  {
    "id": "ys1102",
    "name": "Office Chair (YS1102)",
    "description": "Experience the ultimate in comfort and style with this high-quality office chair.",
    "price": 3399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/YS-1102-PIXEL.jpg",
    "stock": 15
  },
  {
    "id": "sj8888c",
    "name": "Durable Chrome-Plated Bench",
    "description": "Durable Chrome-Plated Gang Chair with Perforated Seat and Back rest.",
    "price": 7899.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/10-2-3.jpg",
    "stock": 10
  },
  {
    "id": "3",
    "name": "Clerical Mesh Chair",
    "description": "Discover the ultimate in comfort and support with our Clerical Mesh Chair.",
    "price": 2899.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000045151-1.jpg",
    "stock": 30
  },
  {
    "id": "1495_obgc-s4",
    "name": "Gang Chair - 4 Seater",
    "description": "Streamline your seating with our durable Gang Chair, designed for high-traffic areas.",
    "price": 8199.0,
    "category": "Office Chair",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/31-2.jpg?fit=800%2C1200&ssl=1",
    "stock": 8
  },
  {
    "id": "4303",
    "name": "Modern Home Office Desk",
    "description": "Elevate your workspace with our modern home office desk, featuring an MDF table top.",
    "price": 4699.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044477.jpg",
    "stock": 14
  },
  {
    "id": "1771_obct-1709-320",
    "name": "Conference Table - 12 Seater",
    "description": "Meet the future of conference tables: the sleek 2 Conference Table MDF Board with Tubular Steel.",
    "price": 20299.0,
    "category": "Reception & Conference",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/58.jpg?fit=600%2C600&ssl=1",
    "stock": 4
  },
  {
    "id": "49djnty",
    "name": "Executive Office Chair (49DJNTY)",
    "description": "The high-back leatherette executive chair is designed to provide both style and comfort.",
    "price": 5399.0,
    "category": "Office Chair",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/07/1000045098.jpg?fit=600%2C600&ssl=1",
    "stock": 15
  },
  {
    "id": "9927",
    "name": "Office Chair (9927)",
    "description": "The High-back Leatherette Executive Chair is a premium chair designed for executives.",
    "price": 4799.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/9927-PIXEL.jpg",
    "stock": 12
  },
  {
    "id": "ys814",
    "name": "Office Chair (YS814)",
    "description": "The mid-back office chair is designed to provide comfort and functionality for your work environment.",
    "price": 3399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/YS814-PIXEL.jpg",
    "stock": 18
  },
  {
    "id": "ys651",
    "name": "Office Chair (YS651)",
    "description": "The Mid-back Mesh Office Chair is a high-quality chair that offers both comfort and functionality.",
    "price": 3099.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/YS651-PIXEL.jpg",
    "stock": 20
  },
  {
    "id": "069w",
    "name": "4-Door Aparatus Steel Cabinet",
    "description": "This robust 4-door apparatus steel cabinet provides ample storage for tools, equipment, and supplies.",
    "price": 10125.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/aparatus2.png",
    "stock": 8
  },
  {
    "id": "ob373",
    "name": "1-Door 3-Drawer Chest of Drawer",
    "description": "A 1-door, 3-drawer chest of drawers offers a practical storage solution with a combination of open and concealed space.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://cdn.obrafurniture.com/wp-content/uploads/2024/10/Untitled-design-3.png",
    "stock": 10
  },
  {
    "id": "brw",
    "name": "Office Desk (Solid)",
    "description": "Upgrade your workspace with this Solid Office Table, featuring a sturdy design.",
    "price": 3949.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000051012.png",
    "stock": 15
  },
  {
    "id": "oboyot",
    "name": "Wall Display Bookshelf (Turquoise)",
    "description": "A multipurpose shelf is a flexible storage solution designed to hold a variety of items.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/turq.png",
    "stock": 12
  },
  {
    "id": "066",
    "name": "Heavy Duty Steel Rack (066)",
    "description": "Enhance your storage solutions with our robust 5-layer Steel Metal Rack.",
    "price": 6299.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044880.jpg",
    "stock": 14
  },
  {
    "id": "straight2",
    "name": "Partition 2 Straight",
    "description": "Optimize your office layout with our Straight Type partitions, perfect for creating seamless divisions.",
    "price": 32861.0,
    "category": "Workstation",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Screenshot-2024-10-02-191950-2.png",
    "stock": 5
  },
  {
    "id": "gds01",
    "name": "Freestanding Table",
    "description": "Elevate your workspace with our Freestanding Table featuring a sleek metal top and sturdy frame.",
    "price": 4499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/10-2-1.jpg",
    "stock": 18
  },
  {
    "id": "1864_obot-oft100",
    "name": "2 Tone Office Table - 100cm",
    "description": "Elevate your workspace with our chic 2-tone office table. 100W x 50D x 75Hcm.",
    "price": 4599.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/12-4-1.jpg?resize=150%2C150&ssl=1",
    "stock": 15
  },
  {
    "id": "gt1607",
    "name": "Glass Top Executive Office Table (180cm)",
    "description": "Enhance your office with our sleek and modern furniture set, featuring a tempered glass counter-top.",
    "price": 20299.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/6-3.webp?fit=800%2C1200&ssl=1",
    "stock": 6
  },
  {
    "id": "a1816",
    "name": "L-Type Executive Office Table (Built-in Fan)",
    "description": "Enhance your workspace with this modern L-Type Executive Office Table. Features built-in wire management and fan.",
    "price": 25799.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161272.png",
    "stock": 4
  },
  {
    "id": "straight",
    "name": "Partition 2 Straight (Variation)",
    "description": "Optimize your office layout with our Straight Type partitions.",
    "price": 33953.0,
    "category": "Workstation",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Screenshot-2024-10-02-191950-1.png",
    "stock": 5
  },
  {
    "id": "2171_obot-wst-2",
    "name": "2 & 4 Seater Workstation Table (Oak Gray)",
    "description": "Discover the perfect blend of form and function with our 2 and 4 seater Workstation.",
    "price": 8699.0,
    "category": "Workstation",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/ALC-2-sEATER-BROWN-WORKSSTAION.jpg?fit=600%2C600&ssl=1",
    "stock": 6
  },
  {
    "id": "sq160",
    "name": "Modern L Type Executive Office Table",
    "description": "Experience the pinnacle of office sophistication with our Executive Table.",
    "price": 16299.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000004678.jpg",
    "stock": 8
  },
  {
    "id": "max120br",
    "name": "2 Tone Office Table (Hazel Brown)",
    "description": "Elevate your workspace with our 2-tone office table. 120cm.",
    "price": 4799.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/11-3.jpg?fit=600%2C600&ssl=1",
    "stock": 16
  },
  {
    "id": "yn966",
    "name": "Executive Office Chair (YN966)",
    "description": "The High-back Mesh Executive Chair is a top-of-the-line office chair that combines style, comfort, and functionality.",
    "price": 6399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000045354.jpg",
    "stock": 10
  },
  {
    "id": "133hocp",
    "name": "2 Door Sliding Wardrobe",
    "description": "The 2 Door Sliding Wardrobe is a sleek, modern storage solution with a clean white finish.",
    "price": 10925.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/santiago.png",
    "stock": 8
  },
  {
    "id": "ob100cjnsx",
    "name": "Fabric Office Chair",
    "description": "A fabric office chair is a comfortable and breathable seating option.",
    "price": 3070.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/YS946-6-BLK-fabric-office-chair.png",
    "stock": 22
  },
  {
    "id": "18",
    "name": "Executive Office Table (180cm)",
    "description": "Modernize your office with our elegant furniture set, featuring a 12mm thick tempered glass top.",
    "price": 223699.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/52.jpg?resize=150%2C150&ssl=1",
    "stock": 3
  },
  {
    "id": "rgh1",
    "name": "4 Layer Vertical Steel Filing Cabinet",
    "description": "Discover unparalleled organization with our 4 Layer Vertical Steel Filing Cabinet.",
    "price": 7499.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000046333.png",
    "stock": 14
  },
  {
    "id": "1588_obot-7009",
    "name": "Office Table (7009)",
    "description": "Enhance your workspace with our stylish office desk, boasting a smooth Melamine finish.",
    "price": 9199.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/13-3.jpg",
    "stock": 12
  },
  {
    "id": "obmood",
    "name": "Multi-use Table/Bookshelf",
    "description": "A multi-use table/bookshelf combines the functionality of a work surface and storage unit.",
    "price": 0.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/mood.png",
    "stock": 10
  },
  {
    "id": "ob1718t",
    "name": "Display Shelf/Book Shelf",
    "description": "A display shelf or bookshelf is a versatile piece of furniture used to organize and showcase items.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/tobacco.png",
    "stock": 15
  },
  {
    "id": "ob4614",
    "name": "Maracaibo Table Top",
    "description": "This durable restaurant table is designed to withstand daily use.",
    "price": 3307.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/maracaibo.png",
    "stock": 20
  },
  {
    "id": "obnt5185_244",
    "name": "Chest of Drawers (Vertical)",
    "description": "A chest of drawers is a storage unit with multiple drawers, designed to organize clothing.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/hhh.png",
    "stock": 9
  },
  {
    "id": "adm120",
    "name": "Office Desk (Adams)",
    "description": "Unlock efficiency with the OBRAAdams Office Desk OD-02.",
    "price": 12999.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/adams2_aaceafee-1169-4e50-9ca0-282d3ea72b2b_540x.webp",
    "stock": 10
  },
  {
    "id": "a1823",
    "name": "L-Type Executive Table (Curved Legs)",
    "description": "Upgrade your office with this stylish L-Type Executive Table.",
    "price": 21499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161274-1.png",
    "stock": 5
  },
  {
    "id": "ch230a",
    "name": "Office Chair (CH230A)",
    "description": "The High-back Leatherette Executive Chair is a versatile and functional office chair.",
    "price": 8699.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/528JNVY.jpg",
    "stock": 14
  },
  {
    "id": "americano",
    "name": "Chest of Drawer (White)",
    "description": "A white chest of drawers offers a sleek and modern storage solution.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/gg-1.png",
    "stock": 11
  },
  {
    "id": "881n11f2jnryblk",
    "name": "Office Chair (Mid-back)",
    "description": "The Mid-back Office Chair is the perfect addition to any office space.",
    "price": 7899.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/881N1-1F2JNRY-BLK-B-2.jpg",
    "stock": 16
  },
  {
    "id": "a28516",
    "name": "Executive Office Table (Built-in Safe)",
    "description": "Transform your workspace with this Executive Office Table featuring a sleek metal frame and a built-in safe.",
    "price": 15899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161267.png",
    "stock": 6
  },
  {
    "id": "ow",
    "name": "Office Chair With Headrest",
    "description": "Enhance Your Comfort with Our Office Chair with Headrest.",
    "price": 3800.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000053156.jpg",
    "stock": 20
  },
  {
    "id": "max01",
    "name": "2 Tone Office Table (MAX01)",
    "description": "Elevate your workspace with our 2-tone office table.",
    "price": 4799.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/11-3.jpg",
    "stock": 18
  },
  {
    "id": "ltype2",
    "name": "Partition 4 L-Type",
    "description": "Maximize your workspace efficiency with our L-Type partitions.",
    "price": 102953.0,
    "category": "Workstation",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Screenshot-2024-10-02-182317-5.png",
    "stock": 3
  },
  {
    "id": "089",
    "name": "Storage Steel Cabinet With 3 Drawers",
    "description": "This sturdy storage steel cabinet with 3 drawers provides secure and organized storage.",
    "price": 10125.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/nanaman-1.png",
    "stock": 9
  },
  {
    "id": "ym323",
    "name": "Office Chair (YM323)",
    "description": "The Mid-back Office Chair is a high-quality and functional chair.",
    "price": 3299.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/ym-323-FIXEL.jpg",
    "stock": 24
  },
  {
    "id": "ys337",
    "name": "Office Chair (YS337)",
    "description": "The mid-back office chair is designed to provide comfort and functionality.",
    "price": 2999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/YS337-PIXEL.jpg",
    "stock": 25
  },
  {
    "id": "392djnty",
    "name": "Executive Office Chair (392)",
    "description": "The High-back Mesh with Fabric Executive Chair is a high-quality office chair.",
    "price": 8499.0,
    "category": "Office Chair",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/392DJNTY-PIXEL.jpg?fit=592%2C615&ssl=1",
    "stock": 10
  },
  {
    "id": "1801",
    "name": "Executive Table (1801)",
    "description": "Elevate your professional space with our Executive Table.",
    "price": 21499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000043902.jpg",
    "stock": 5
  },
  {
    "id": "106bkonsx",
    "name": "Office Chair (106BK)",
    "description": "Enhance your office environment with the Fabric Office Teller Chair.",
    "price": 3999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/600x600-39.jpg",
    "stock": 18
  },
  {
    "id": "3608481908996257000",
    "name": "Executive Office Chair (Leatherette)",
    "description": "The High-back Leatherette Executive Chair is a stylish and comfortable chair.",
    "price": 7999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/07/1000045092.jpg",
    "stock": 14
  },
  {
    "id": "1495_obgc-5s",
    "name": "Gang Chair - 5 Seater",
    "description": "Streamline your seating with our durable Gang Chair.",
    "price": 10899.0,
    "category": "Office Chair",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/31-2.jpg?fit=800%2C1200&ssl=1",
    "stock": 6
  },
  {
    "id": "302c",
    "name": "Wire Shelves",
    "description": "This wire shelving unit offers an additional layer of sturdy, open-grid shelves.",
    "price": 5560.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/XM-302-wire-shelves.png",
    "stock": 20
  },
  {
    "id": "blk",
    "name": "Home Office Desk (Black)",
    "description": "Available in black with white legs, it's perfect for any office.",
    "price": 3199.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000049598.jpg",
    "stock": 25
  },
  {
    "id": "wls39",
    "name": "Metal Display Cabinet (WLS39)",
    "description": "Discover the perfect blend of durability and design with our Metal Steel Cabinet.",
    "price": 11299.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/7-4-3.jpg",
    "stock": 10
  },
  {
    "id": "22fm01wht",
    "name": "Conference Table (Glass)",
    "description": "Enhance your conference room with our sleek and modern Glass Conference Table.",
    "price": 28799.0,
    "category": "Reception & Conference",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/viber_image_2024-06-12_16-09-10-562.jpg",
    "stock": 4
  },
  {
    "id": "915jnty",
    "name": "Office Chair (915)",
    "description": "The High-back Mesh Executive Chair is a versatile and ergonomic office chair.",
    "price": 4699.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/915JNTY.jpg-PIXEL.jpg",
    "stock": 15
  },
  {
    "id": "39",
    "name": "3 Sliding Door Wardrobe",
    "description": "This modern 3 sliding door wardrobe offers generous storage space.",
    "price": 19575.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/click.png",
    "stock": 5
  },
  {
    "id": "obgeri",
    "name": "Shoe Cabinet",
    "description": "A shoe cabinet is a specialized storage solution designed to neatly organize and protect footwear.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Untitled-design-1.png",
    "stock": 15
  },
  {
    "id": "067w",
    "name": "2-Door Swing Glass Door Steel Cabinet",
    "description": "This durable 2-door swing glass steel cabinet offers secure storage with a sleek design.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/lifelong.png",
    "stock": 12
  },
  {
    "id": "528jnvy",
    "name": "Office Chair (528)",
    "description": "The high-back leatherette executive chair is designed to provide both comfort and style.",
    "price": 7999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/07/1000045113.jpg",
    "stock": 10
  },
  {
    "id": "240d",
    "name": "Spacious Conference Table (400W)",
    "description": "Enhance your office with our compact conference table.",
    "price": 15299.0,
    "category": "Reception & Conference",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000051756-1.png",
    "stock": 6
  },
  {
    "id": "nkcn01",
    "name": "L Type Executive Office Table (160cm)",
    "description": "This high-quality office desk is ideal for professionals seeking both functionality and style.",
    "price": 9699.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000052401.jpg",
    "stock": 8
  },
  {
    "id": "1b",
    "name": "Visitor Chair (Black)",
    "description": "Elevate your office aesthetic with our 2 Visitor Chair.",
    "price": 1999.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/29-2.jpg",
    "stock": 30
  },
  {
    "id": "oboyob",
    "name": "Wall Display Bookshelf (Burgundy)",
    "description": "A multipurpose shelf is a flexible storage solution.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/burg-2.png",
    "stock": 12
  },
  {
    "id": "alc16",
    "name": "Modern L Type Executive Office Table",
    "description": "Experience the pinnacle of office sophistication with our Executive Table.",
    "price": 16499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044029.jpg",
    "stock": 5
  },
  {
    "id": "t62",
    "name": "Office Chair (T62)",
    "description": "Enhance your office environment with our Mesh Office Chair Leatherette Office Chair.",
    "price": 4399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/T62.png",
    "stock": 20
  },
  {
    "id": "ez120b",
    "name": "Office Table (Hazel Brown)",
    "description": "Elevate your workspace with our sleek Hazel Brown Office Desk.",
    "price": 4899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/44.jpg",
    "stock": 15
  },
  {
    "id": "301alpx2",
    "name": "Office Chair (301)",
    "description": "The Mesh Office Chair is a high-quality and functional chair.",
    "price": 3699.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/301ALPX2-PIXEL.jpg",
    "stock": 22
  },
  {
    "id": "04ajnsx",
    "name": "High Back Mesh Executive Chair",
    "description": "Elevate your office with our High Back Mesh Executive Chair.",
    "price": 4499.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000043584.jpg",
    "stock": 18
  },
  {
    "id": "120x",
    "name": "Sleek Executive Office Table (120cm)",
    "description": "Optimize your workspace with our sleek executive office table.",
    "price": 9500.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/08/1000051758.png?fit=1080%2C1080&ssl=1",
    "stock": 10
  },
  {
    "id": "ob4272",
    "name": "Yeni Wenge Table Top",
    "description": "This durable restaurant table is designed to withstand daily use.",
    "price": 2673.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/yeni.png",
    "stock": 30
  },
  {
    "id": "t01",
    "name": "Metal Office Table",
    "description": "Discover the perfect blend of style and sustainability with our acid-washed phosphatized desk.",
    "price": 5499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/25-2.png",
    "stock": 12
  },
  {
    "id": "208",
    "name": "Scratch-Proof Melamine Office Table",
    "description": "Upgrade your workspace with our scratch-proof Melamine Office Table.",
    "price": 4899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/19-3.jpg",
    "stock": 14
  },
  {
    "id": "528fj",
    "name": "Executive Office Chair (528FJ)",
    "description": "Step into the realm of comfort and elegance with our High-back Leatherette Executive Chair.",
    "price": 5699.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/7-2.png",
    "stock": 16
  },
  {
    "id": "ob3107-1",
    "name": "Manolya Table Top (60CM)",
    "description": "This durable restaurant table is designed to withstand daily use.",
    "price": 2673.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/manolya.png",
    "stock": 25
  },
  {
    "id": "01",
    "name": "Executive Office Chair With Cushion Headrest",
    "description": "Upgrade your workspace with our Executive Mesh Chair.",
    "price": 3499.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000052402.jpg",
    "stock": 15
  },
  {
    "id": "ob50013",
    "name": "50013 Bar Chair",
    "description": "This stylish leather bar chair combines comfort and elegance.",
    "price": 2835.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/lmao.png",
    "stock": 20
  },
  {
    "id": "133w",
    "name": "2 Door Sliding Wardrobe (White)",
    "description": "The 2 Door Sliding Wardrobe is a sleek, modern storage solution.",
    "price": 14850.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Santiago-1.33-white-2.png",
    "stock": 6
  },
  {
    "id": "1618",
    "name": "L Shape Office Table (Brown)",
    "description": "Discover unparalleled durability and organization with our premium office solution.",
    "price": 18999.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/3-1-1.jpg?fit=600%2C600&ssl=1",
    "stock": 5
  },
  {
    "id": "3lr1",
    "name": "3 Layer Lateral Filing Cabinet",
    "description": "Secure your workspace with our Superior Gang Locking System Storage Unit.",
    "price": 11299.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000044670.jpg",
    "stock": 8
  },
  {
    "id": "ft120",
    "name": "Training Table (Foldable)",
    "description": "The Foldable MDF Board Table with Durable Caster Wheels is a space-saving solution.",
    "price": 8699.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/11-3-3.jpg",
    "stock": 12
  },
  {
    "id": "vms4",
    "name": "Visitors Mesh Chair",
    "description": "Welcome your guests in comfort and style with our Visitor Mesh Chair.",
    "price": 2399.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/1000045105.jpg",
    "stock": 30
  },
  {
    "id": "ob5410",
    "name": "Mermer Table Top",
    "description": "This durable restaurant table is designed to withstand daily use.",
    "price": 3307.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/mermer.png",
    "stock": 25
  },
  {
    "id": "ob5655",
    "name": "Monaco Table Top",
    "description": "This durable restaurant table is designed to withstand daily use.",
    "price": 3307.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/monaco.png",
    "stock": 25
  },
  {
    "id": "a28514",
    "name": "L-Type Executive Table (Side Drawer)",
    "description": "Elevate your workspace with this L-type executive table.",
    "price": 12599.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161279-1.png",
    "stock": 6
  },
  {
    "id": "140",
    "name": "Modern Home Office Desk (Mobile Pedestal)",
    "description": "Elevate your home office with our modern desk featuring an MDF table top.",
    "price": 8199.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/11-3-1.jpg",
    "stock": 10
  },
  {
    "id": "6dnkc",
    "name": "Office Table With Drawers",
    "description": "Upgrade your office with our 2-tone Office Table.",
    "price": 6999.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/22-2-2.jpg",
    "stock": 14
  },
  {
    "id": "a1619",
    "name": "L-Type Executive Table (Side & Long Drawers)",
    "description": "Upgrade your office with the L-type executive table, designed for both functionality and modern style.",
    "price": 21899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161276.png",
    "stock": 5
  },
  {
    "id": "ltype",
    "name": "Partition 4 L-Type",
    "description": "Maximize your workspace efficiency with our L-Type partitions.",
    "price": 102953.0,
    "category": "Workstation",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Screenshot-2024-10-02-182317-4.png",
    "stock": 3
  },
  {
    "id": "1647_obot-czybw-12",
    "name": "Office Desk (Hazel Brown 120)",
    "description": "Upgrade your office with our sophisticated desk.",
    "price": 5499.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/8-4.jpg?fit=600%2C600&ssl=1",
    "stock": 15
  },
  {
    "id": "ys277",
    "name": "Executive Office Chair (YS277)",
    "description": "The Mesh Executive Chair is a high-quality office chair that combines comfort, functionality, and style.",
    "price": 3799.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/YS277-PIXEL.jpg",
    "stock": 18
  },
  {
    "id": "140x",
    "name": "Elegant Executive Office Table (140cm)",
    "description": "Elevate your office with our elegant executive office table.",
    "price": 9899.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/08/1000051758.png",
    "stock": 7
  },
  {
    "id": "1647_obot-czyog-12",
    "name": "Office Desk (Oak Gray 120)",
    "description": "Upgrade your office with our sophisticated desk.",
    "price": 5499.0,
    "category": "Office Table",
    "image": "https://i0.wp.com/obrafurniture.com/wp-content/uploads/2024/06/8-4.jpg?fit=600%2C600&ssl=1",
    "stock": 15
  },
  {
    "id": "b1204",
    "name": "Office Table With Mobile Pedestal",
    "description": "Discover the perfect blend of style and functionality with our 2-tone office table.",
    "price": 9599.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com.cdn.hstgr.net/wp-content/uploads/2024/06/B1204-B.jpg",
    "stock": 10
  },
  {
    "id": "032af2jnt4yblk",
    "name": "Office Chair (032A)",
    "description": "The High-back Leatherette Executive Chair is designed to provide both style and comfort.",
    "price": 14199.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/07/1000043602.jpg",
    "stock": 12
  },
  {
    "id": "801a",
    "name": "Stylish MDF Office Desk (120cm)",
    "description": "Upgrade your workspace with this executive office table featuring a durable MDF board.",
    "price": 14499.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/11/1000161266.png",
    "stock": 8
  },
  {
    "id": "ob0104",
    "name": "0104 Bar Chair",
    "description": "This cozy terry cloth bar chair combines comfort and style.",
    "price": 2835.0,
    "category": "Office Chair",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/terry.png",
    "stock": 25
  },
  {
    "id": "5003",
    "name": "Office Table (5003)",
    "description": "Maximize your workspace efficiency with our premium system unit bin.",
    "price": 8699.0,
    "category": "Office Table",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/06/27-1.webp",
    "stock": 14
  },
  {
    "id": "ravena",
    "name": "6-Drawer Chest of Drawer",
    "description": "A 6-drawer chest of drawers provides versatile storage solutions.",
    "price": 0.0,
    "category": "Cabinet & Storage",
    "image": "https://obrafurniture.com/wp-content/uploads/2024/10/Untitled-design-2.png",
    "stock": 8
  },
  // --- New Inventory Items ---
  { id: "sh3014", name: "SH-3014 Executive Table", category: "Executive Table", price: 0, stock: 10, image: "media/image56.jpeg", description: "Premium executive desk with modern finish." },
  { id: "ams7907", name: "AMS7907 Foldable Table", category: "Executive Table", price: 0, stock: 10, image: "media/image68.jpeg", description: "Versatile foldable table for executive use." },
  { id: "rk-bgz1040ag", name: "RK-BGZ1040AG Executive Desk", category: "Executive Table", price: 0, stock: 10, image: "media/image78.jpeg", description: "High-end executive desk with spacious surface." },
  { id: "rk-sz1025885", name: "RK-SZ1025885 Office Table", category: "Executive Table", price: 0, stock: 10, image: "media/image83.jpeg", description: "Durable office table for executive offices." },
  { id: "nkt-006-14", name: "NKT-006 Executive Table (1.4M)", category: "Executive Table", price: 0, stock: 10, image: "media/image112.jpeg", description: "1.4 meter executive table." },
  { id: "nkt-006-12", name: "NKT-006 Executive Table (1.2M)", category: "Executive Table", price: 0, stock: 10, image: "media/image113.jpeg", description: "1.2 meter compact executive table." },
  { id: "ot-209", name: "OT-209 Executive Desk", category: "Executive Table", price: 0, stock: 10, image: "media/image116.jpeg", description: "Classic executive desk design." },
  { id: "part-l-type", name: "L-Type Partition System", category: "Workstation", price: 0, stock: 10, image: "media/image149.png", description: "L-type layout partition for office cubicles." },
  { id: "part-straight", name: "Straight Partition System", category: "Workstation", price: 0, stock: 10, image: "media/image151.png", description: "Linear partition system for open plan offices." },
  { id: "acc-frosted-glass", name: "Frosted Glass Panel Samples", category: "Accessories", price: 0, stock: 10, image: "media/image154.jpeg", description: "Sample swatches for frosted glass partitions." },
  { id: "acc-alum-outlet", name: "Aluminum Outlet Panel", category: "Accessories", price: 0, stock: 10, image: "media/image164.jpeg", description: "Integrated aluminum outlet solution for workstations." },
  { id: "wls-067", name: "WLS-067 Heavy Duty Rack", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image170.jpeg", description: "Industrial grade heavy duty metal rack." },
  { id: "wls-066", name: "WLS-066 Metal Rack", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image171.jpeg", description: "Durable metal storage rack." },
  { id: "dg-d4", name: "DG-D4 Filing Cabinet", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image180.jpeg", description: "4-drawer vertical filing cabinet." },
  { id: "ld-a2", name: "LD-A2 Lateral File", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image181.jpeg", description: "2-drawer lateral filing cabinet." },
  { id: "ld-a3-a4", name: "LD-A3/A4 Lateral File", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image182.jpeg", description: "3 and 4 drawer lateral filing options." },
  { id: "wls-041", name: "WLS-041 Metal Cabinet", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image198.jpeg", description: "Secure metal storage cabinet." },
  { id: "lockers", name: "Steel Locker Series", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image213.jpeg", description: "Multi-door steel locker lineup." },
  { id: "ja-c02-24", name: "JA-C02-24 Conference Table", category: "Reception & Conference", price: 0, stock: 10, image: "media/image232.jpeg", description: "Large format conference table." },
  { id: "nkt-9012", name: "NKT-9012 Workstation Cluster", category: "Workstation", price: 0, stock: 10, image: "media/image249.jpeg", description: "Collaborative workstation cluster." },
  { id: "gang-chair", name: "Gang Chair Lineup", category: "Office Chair", price: 0, stock: 10, image: "media/image255.jpeg", description: "Waiting area gang chairs." },
  { id: "m-01c2jnsx", name: "M-01C2JNSX Stool", category: "Office Chair", price: 0, stock: 10, image: "media/image260.jpeg", description: "Adjustable drafting stool." },
  { id: "001c2jnsx", name: "001C2JNSX Stool", category: "Office Chair", price: 0, stock: 10, image: "media/image261.jpeg", description: "Ergonomic stool." },
  { id: "375bkonsx", name: "375BKONSX Teller Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image267.jpeg", description: "High-rise teller chair." },
  { id: "ym-895-blk", name: "YM-895-BLK Mesh Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image272.jpeg", description: "Breathable mesh back office chair." },
  { id: "093ajnu4x", name: "093AJNU4X Office Chair (Gray)", category: "Office Chair", price: 0, stock: 10, image: "media/image273.jpeg", description: "Modern gray office chair." },
  { id: "ys-651-new", name: "YS 651 Ergonomic Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image284.jpeg", description: "Ergonomic task chair." },
  { id: "ys-814-new", name: "YS 814 Office Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image285.jpeg", description: "Comfortable mid-back chair." },
  { id: "ys-9003", name: "YS-9003AJNSX Executive Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image286.jpeg", description: "Premium executive seating." },
  { id: "301ajnt3x", name: "301AJNT3X Mesh Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image289.jpeg", description: "Professional mesh chair." },
  { id: "ys-1102-new", name: "YS-1102 Executive Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image290.jpeg", description: "Luxury executive chair." },
  { id: "04ajnsx-new", name: "04AJNSX High Back Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image292.jpeg", description: "High back mesh executive chair." },
  { id: "ys-2913", name: "YS-2913 Office Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image293.jpeg", description: "Contemporary office seating." },
  { id: "375h", name: "375H High Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image296.jpeg", description: "High drafting chair." },
  { id: "ys-277", name: "YS-277AJNSX Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image297.jpeg", description: "Supportive office chair." },
  { id: "ys-219", name: "YS-219 Visitor Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image298.jpeg", description: "Comfortable visitor chair." },
  { id: "ys-1048", name: "YS-1048 Executive Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image299.jpeg", description: "Classic executive design." },
  { id: "ys-4901", name: "YS-4901 Office Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image300.png", description: "Modern task chair." },
  { id: "3009b", name: "3009B Office Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image301.jpeg", description: "Standard office chair." },
  { id: "1826djnty", name: "1826DJNTY Executive Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image303.jpeg", description: "Plush executive chair." },
  { id: "9927-new", name: "9927 Executive Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image304.jpeg", description: "High-back leatherette chair." },
  { id: "ys-333", name: "YS-333A/B Series", category: "Office Chair", price: 0, stock: 10, image: "media/image314.jpeg", description: "Versatile office chair series." },
  { id: "69gjnt3y", name: "69GJNT3Y Mesh Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image321.jpeg", description: "Breathable mesh back chair." },
  { id: "392djnt3y", name: "392DJNT3Y Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image324.jpeg", description: "Ergonomic mesh chair." },
  { id: "778a-gry", name: "778A Office Chair (Gray)", category: "Office Chair", price: 0, stock: 10, image: "media/image329.jpeg", description: "Gray fabric office chair." },
  { id: "061b", name: "061B Premium Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image350.jpeg", description: "Premium quality office chair." },
  { id: "benny-l", name: "BENNY-L Lounge Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image351.jpeg", description: "Comfortable lounge seating." },
  { id: "puff-l", name: "PUFF-L Soft Seating", category: "Office Chair", price: 0, stock: 10, image: "media/image352.jpeg", description: "Soft seating for reception areas." },
  { id: "bill-qe", name: "BILL-QE Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image353.jpeg", description: "Modern reception chair." },
  { id: "e001a-1", name: "E001A-1 Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image354.jpeg", description: "Standard task chair." },
  { id: "s09-fm", name: "S09-FM Stackable Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image355.jpeg", description: "Stackable chair for events." },
  { id: "nc-c-114", name: "NC-C-114 Visitor Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image356.jpeg", description: "Chrome frame visitor chair." },
  { id: "c-106", name: "C-106 Visitor Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image359.jpeg", description: "Mesh back visitor chair." },
  { id: "vcl-3308", name: "VCL-3308 Mesh Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image360.jpeg", description: "Ergonomic mesh chair." },
  { id: "093fm", name: "093FM Office Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image361.jpeg", description: "Standard operator chair." },
  { id: "308fm-blk", name: "308FM-BLK Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image362.jpeg", description: "Black fabric office chair." },
  { id: "nc-c-116", name: "NC-C-116 Leatherette Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image365.jpeg", description: "Leatherette visitor chair." },
  { id: "b-49", name: "B-49 Visitor Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image366.jpeg", description: "Comfortable guest chair." },
  { id: "nc-b-44y", name: "NC-B-44Y Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image367.jpeg", description: "Office chair with armrests." },
  { id: "nc-b-82", name: "NC-B-82 Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image368.jpeg", description: "Task chair." },
  { id: "nc-b-46y", name: "NC-B-46Y Fabric Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image369.jpeg", description: "Fabric upholstered chair." },
  { id: "nc-c006gry", name: "NC-C006 Gray Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image372.jpeg", description: "Gray visitor chair." },
  { id: "nc-c006blk", name: "NC-C006 Black Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image373.jpeg", description: "Black visitor chair." },
  { id: "j67blk", name: "J67BLK Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image374.jpeg", description: "Black ergonomic chair." },
  { id: "j67brwn", name: "J67BRWN Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image375.jpeg", description: "Brown ergonomic chair." },
  { id: "b-8001c", name: "B-8001C Visitor Chair", category: "Office Chair", price: 0, stock: 10, image: "media/image376.jpeg", description: "Visitor chair with sled base." },
  { id: "ac-812", name: "AC-812 Theater Seat", category: "Home Furniture", price: 0, stock: 10, image: "media/image382.png", description: "Premium home theater seating." },
  { id: "6202-tv", name: "6202 TV Rack", category: "Home Furniture", price: 0, stock: 10, image: "media/image383.jpeg", description: "Modern TV stand unit." },
  { id: "6107-cab", name: "6107 Cabinet", category: "Home Furniture", price: 0, stock: 10, image: "media/image384.jpeg", description: "Multi-purpose home cabinet." },
  { id: "rk-cj404050", name: "RK-CJ404050 Rack", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image392.jpeg", description: "Compact storage rack." },
  { id: "rk-cj904840", name: "RK-CJ904840 Rack", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image395.jpeg", description: "Large storage rack." },
  { id: "yh-01d", name: "YH-01D/L Wardrobe", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image429.jpeg", description: "Stylish bedroom wardrobe." },
  { id: "yh-04d", name: "YH-04D/L Wardrobe", category: "Cabinet & Storage", price: 0, stock: 10, image: "media/image432.jpeg", description: "Spacious wardrobe unit." },
  { id: "terry-dining", name: "TERRY Dining Set", category: "Home Furniture", price: 0, stock: 10, image: "media/image453.jpeg", description: "Complete dining table and chairs set." },
  { id: "cy-01-dining", name: "CY-01 Dining Set", category: "Home Furniture", price: 0, stock: 10, image: "media/image454.jpeg", description: "Modern dining set." },
  { id: "poxy-6", name: "POXY 6-Seater Set", category: "Home Furniture", price: 0, stock: 10, image: "media/image455.jpeg", description: "6-seater dining table set." },
  { id: "poxy-8", name: "POXY 8-Seater Set", category: "Home Furniture", price: 0, stock: 10, image: "media/image456.jpeg", description: "8-seater dining table set." },
  { id: "ghana", name: "GHANA Dining Set", category: "Home Furniture", price: 0, stock: 10, image: "media/image457.jpeg", description: "Elegant dining room set." }
];
