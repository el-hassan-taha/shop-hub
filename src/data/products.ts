export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  subcategory: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  features: string[];
  specifications: Record<string, string>;
  variants?: {
    name: string;
    options: string[];
  }[];
  isNew?: boolean;
}

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 299.99,
    salePrice: 249.99,
    category: "Electronics",
    subcategory: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 342,
    stock: 45,
    features: ["Active Noise Cancellation", "30-hour battery", "Premium sound quality", "Comfortable fit"],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Color Options": "Black, Silver, Blue"
    },
    variants: [
      { name: "Color", options: ["Black", "Silver", "Blue"] }
    ]
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    description: "Advanced smartwatch with health tracking, GPS, and water resistance up to 50 meters.",
    price: 399.99,
    category: "Electronics",
    subcategory: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 567,
    stock: 78,
    features: ["Heart rate monitoring", "GPS tracking", "Water resistant", "7-day battery"],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery": "7 days",
      "Water Resistance": "50m",
      "Connectivity": "Bluetooth, WiFi"
    }
  },
  {
    id: "3",
    name: "Professional Camera Lens",
    description: "High-performance 50mm f/1.8 lens perfect for portraits and low-light photography.",
    price: 549.99,
    category: "Electronics",
    subcategory: "Photography",
    image: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1606244864456-8bee63fce472?w=500&h=500&fit=crop"],
    rating: 4.9,
    reviewCount: 234,
    stock: 23,
    features: ["f/1.8 aperture", "Weather sealed", "Fast autofocus", "Premium optics"],
    specifications: {
      "Focal Length": "50mm",
      "Max Aperture": "f/1.8",
      "Mount": "Universal",
      "Weight": "650g"
    }
  },
  {
    id: "4",
    name: "Designer Leather Jacket",
    description: "Premium genuine leather jacket with modern fit and timeless style.",
    price: 449.99,
    salePrice: 349.99,
    category: "Fashion",
    subcategory: "Outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 189,
    stock: 34,
    features: ["Genuine leather", "Multiple pockets", "Comfortable fit", "Premium quality"],
    specifications: {
      "Material": "Genuine Leather",
      "Sizes": "S, M, L, XL",
      "Color": "Black, Brown",
      "Care": "Professional clean only"
    },
    variants: [
      { name: "Size", options: ["S", "M", "L", "XL"] },
      { name: "Color", options: ["Black", "Brown"] }
    ]
  },
  {
    id: "5",
    name: "Running Shoes Pro",
    description: "Lightweight professional running shoes with advanced cushioning technology.",
    price: 159.99,
    category: "Fashion",
    subcategory: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"],
    rating: 4.5,
    reviewCount: 456,
    stock: 120,
    features: ["Breathable mesh", "Advanced cushioning", "Lightweight", "Durable sole"],
    specifications: {
      "Weight": "280g",
      "Sizes": "7-13",
      "Colors": "Red, Blue, Black",
      "Technology": "Air cushion"
    },
    variants: [
      { name: "Size", options: ["7", "8", "9", "10", "11", "12", "13"] },
      { name: "Color", options: ["Red", "Blue", "Black"] }
    ]
  },
  {
    id: "6",
    name: "Luxury Watch Collection",
    description: "Elegant automatic watch with sapphire crystal and premium leather strap.",
    price: 1299.99,
    category: "Fashion",
    subcategory: "Accessories",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    rating: 4.9,
    reviewCount: 123,
    stock: 15,
    features: ["Automatic movement", "Sapphire crystal", "Water resistant", "Premium leather strap"],
    specifications: {
      "Movement": "Automatic",
      "Case Material": "Stainless Steel",
      "Water Resistance": "100m",
      "Strap": "Genuine Leather"
    }
  },
  {
    id: "7",
    name: "4K Ultra HD Smart TV",
    description: "65-inch 4K Smart TV with HDR support and built-in streaming apps.",
    price: 899.99,
    salePrice: 749.99,
    category: "Electronics",
    subcategory: "TVs",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&h=500&fit=crop"],
    rating: 4.6,
    reviewCount: 789,
    stock: 56,
    features: ["4K resolution", "HDR10+", "Smart features", "Voice control"],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "3840 x 2160",
      "Refresh Rate": "120Hz",
      "Smart Features": "Built-in"
    }
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    description: "Premium ergonomic chair with lumbar support and adjustable features for maximum comfort.",
    price: 499.99,
    category: "Home & Garden",
    subcategory: "Furniture",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop"],
    rating: 4.8,
    reviewCount: 423,
    stock: 67,
    features: ["Lumbar support", "Adjustable height", "Breathable mesh", "360° swivel"],
    specifications: {
      "Material": "Mesh & Steel",
      "Weight Capacity": "300 lbs",
      "Adjustments": "Multiple",
      "Warranty": "5 years"
    }
  },
  {
    id: "9",
    name: "Coffee Maker Deluxe",
    description: "Programmable coffee maker with thermal carafe and auto-brew feature.",
    price: 129.99,
    category: "Home & Garden",
    subcategory: "Kitchen",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop"],
    rating: 4.4,
    reviewCount: 567,
    stock: 89,
    features: ["Programmable", "Thermal carafe", "Auto-brew", "12-cup capacity"],
    specifications: {
      "Capacity": "12 cups",
      "Type": "Drip",
      "Features": "Programmable",
      "Warranty": "2 years"
    }
  },
  {
    id: "10",
    name: "Yoga Mat Premium",
    description: "Extra thick yoga mat with non-slip surface and carrying strap.",
    price: 49.99,
    category: "Sports & Outdoors",
    subcategory: "Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 234,
    stock: 156,
    features: ["Extra thick", "Non-slip", "Eco-friendly", "Carrying strap included"],
    specifications: {
      "Thickness": "6mm",
      "Material": "TPE",
      "Size": "72\" x 24\"",
      "Colors": "Purple, Blue, Green"
    },
    variants: [
      { name: "Color", options: ["Purple", "Blue", "Green"] }
    ]
  },
  {
    id: "11",
    name: "Gaming Laptop Ultra",
    description: "High-performance gaming laptop with RTX graphics and 144Hz display.",
    price: 1799.99,
    category: "Electronics",
    subcategory: "Computers",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop"],
    rating: 4.8,
    reviewCount: 456,
    stock: 23,
    features: ["RTX 4060", "144Hz display", "RGB keyboard", "High-speed SSD"],
    specifications: {
      "Processor": "Intel i7",
      "RAM": "16GB DDR5",
      "Storage": "1TB SSD",
      "Graphics": "RTX 4060"
    }
  },
  {
    id: "12",
    name: "Wireless Gaming Mouse",
    description: "Professional wireless gaming mouse with customizable RGB and 20000 DPI sensor.",
    price: 89.99,
    category: "Electronics",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop"],
    rating: 4.6,
    reviewCount: 678,
    stock: 234,
    features: ["20000 DPI", "Wireless", "RGB lighting", "Programmable buttons"],
    specifications: {
      "DPI": "20000",
      "Connectivity": "Wireless",
      "Battery": "70 hours",
      "Buttons": "8 programmable"
    }
  },
  {
    id: "13",
    name: "Bestseller Novel Collection",
    description: "Award-winning fiction novel from critically acclaimed author.",
    price: 24.99,
    category: "Books",
    subcategory: "Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop"],
    rating: 4.9,
    reviewCount: 1234,
    stock: 456,
    features: ["Hardcover", "First edition", "Signed copy", "Award-winning"],
    specifications: {
      "Format": "Hardcover",
      "Pages": "384",
      "Publisher": "Premium Books",
      "ISBN": "978-1234567890"
    }
  },
  {
    id: "14",
    name: "Mountain Bike Pro",
    description: "Professional mountain bike with carbon frame and hydraulic disc brakes.",
    price: 1499.99,
    category: "Sports & Outdoors",
    subcategory: "Cycling",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 345,
    stock: 12,
    features: ["Carbon frame", "Hydraulic brakes", "27.5\" wheels", "21-speed"],
    specifications: {
      "Frame": "Carbon fiber",
      "Gears": "21-speed",
      "Wheel Size": "27.5 inches",
      "Brakes": "Hydraulic disc"
    }
  },
  {
    id: "15",
    name: "Camping Tent 4-Person",
    description: "Waterproof 4-person tent with easy setup and excellent ventilation.",
    price: 199.99,
    category: "Sports & Outdoors",
    subcategory: "Camping",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=500&fit=crop"],
    rating: 4.5,
    reviewCount: 289,
    stock: 45,
    features: ["Waterproof", "Easy setup", "4-person capacity", "Storage pockets"],
    specifications: {
      "Capacity": "4 persons",
      "Waterproof": "3000mm",
      "Setup Time": "5 minutes",
      "Weight": "4.5kg"
    }
  },
  {
    id: "16",
    name: "Designer Sunglasses",
    description: "Luxury designer sunglasses with polarized lenses and UV protection.",
    price: 249.99,
    category: "Fashion",
    subcategory: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop"],
    rating: 4.8,
    reviewCount: 456,
    stock: 78,
    features: ["Polarized lenses", "UV400 protection", "Premium materials", "Designer case included"],
    specifications: {
      "Lens": "Polarized",
      "UV Protection": "100%",
      "Frame": "Titanium",
      "Case": "Included"
    }
  },
  {
    id: "17",
    name: "Bluetooth Speaker Portable",
    description: "Waterproof portable Bluetooth speaker with 360° sound and 20-hour battery.",
    price: 79.99,
    category: "Electronics",
    subcategory: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"],
    rating: 4.6,
    reviewCount: 567,
    stock: 145,
    features: ["Waterproof", "360° sound", "20-hour battery", "Portable"],
    specifications: {
      "Battery": "20 hours",
      "Waterproof": "IPX7",
      "Bluetooth": "5.0",
      "Weight": "500g"
    }
  },
  {
    id: "18",
    name: "Indoor Plant Collection",
    description: "Set of 3 low-maintenance indoor plants perfect for home decoration.",
    price: 59.99,
    category: "Home & Garden",
    subcategory: "Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 234,
    stock: 89,
    features: ["Low maintenance", "Air purifying", "Decorative pots", "Care guide included"],
    specifications: {
      "Quantity": "3 plants",
      "Pot Size": "6 inches",
      "Light": "Low to medium",
      "Care": "Easy"
    }
  },
  {
    id: "19",
    name: "Kids LEGO Set Giant",
    description: "1000-piece LEGO building set with instruction manual and storage box.",
    price: 149.99,
    category: "Toys & Games",
    subcategory: "Building Toys",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop"],
    rating: 4.9,
    reviewCount: 789,
    stock: 123,
    features: ["1000 pieces", "Age 8+", "Storage box", "Instruction manual"],
    specifications: {
      "Pieces": "1000",
      "Age Range": "8-14 years",
      "Theme": "Architecture",
      "Box Size": "Large"
    }
  },
  {
    id: "20",
    name: "Board Game Family Night",
    description: "Strategic board game for 2-6 players, perfect for family game nights.",
    price: 39.99,
    category: "Toys & Games",
    subcategory: "Board Games",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&h=500&fit=crop"],
    rating: 4.6,
    reviewCount: 456,
    stock: 234,
    features: ["2-6 players", "Strategy game", "45-60 min playtime", "Award-winning"],
    specifications: {
      "Players": "2-6",
      "Age": "10+",
      "Playtime": "45-60 minutes",
      "Type": "Strategy"
    }
  },
  // Continue with more products to reach 30+
  {
    id: "21",
    name: "Electric Toothbrush Pro",
    description: "Smart electric toothbrush with pressure sensor and multiple brushing modes.",
    price: 129.99,
    category: "Home & Garden",
    subcategory: "Personal Care",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 345,
    stock: 167,
    features: ["Pressure sensor", "5 modes", "2-week battery", "Travel case"],
    specifications: {
      "Battery": "14 days",
      "Modes": "5",
      "Timer": "2 minutes",
      "Warranty": "2 years"
    }
  },
  {
    id: "22",
    name: "Mechanical Keyboard RGB",
    description: "Premium mechanical keyboard with RGB backlighting and custom switches.",
    price: 159.99,
    category: "Electronics",
    subcategory: "Gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"],
    rating: 4.8,
    reviewCount: 567,
    stock: 89,
    features: ["Mechanical switches", "RGB lighting", "Programmable keys", "Wrist rest"],
    specifications: {
      "Switch Type": "Mechanical",
      "Layout": "Full size",
      "Backlighting": "RGB",
      "Connection": "USB-C"
    }
  },
  {
    id: "23",
    name: "Drone Camera 4K",
    description: "Professional drone with 4K camera, GPS, and intelligent flight modes.",
    price: 799.99,
    category: "Electronics",
    subcategory: "Drones",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 234,
    stock: 34,
    features: ["4K camera", "GPS", "30 min flight", "Obstacle avoidance"],
    specifications: {
      "Camera": "4K 60fps",
      "Flight Time": "30 minutes",
      "Range": "7km",
      "Features": "GPS, Obstacle detection"
    }
  },
  {
    id: "24",
    name: "Desk Lamp LED Smart",
    description: "Smart LED desk lamp with adjustable brightness and color temperature.",
    price: 69.99,
    category: "Home & Garden",
    subcategory: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop"],
    rating: 4.5,
    reviewCount: 289,
    stock: 156,
    features: ["Adjustable brightness", "Color temperature", "USB charging", "Eye protection"],
    specifications: {
      "Power": "12W LED",
      "Brightness Levels": "5",
      "Color Temperature": "3000K-6000K",
      "USB Port": "Yes"
    }
  },
  {
    id: "25",
    name: "Fitness Tracker Band",
    description: "Advanced fitness tracker with heart rate monitor and sleep tracking.",
    price: 49.99,
    category: "Electronics",
    subcategory: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop"],
    rating: 4.4,
    reviewCount: 678,
    stock: 234,
    features: ["Heart rate monitor", "Sleep tracking", "Water resistant", "7-day battery"],
    specifications: {
      "Display": "OLED",
      "Battery": "7 days",
      "Sensors": "Heart rate, Accelerometer",
      "Waterproof": "5ATM"
    }
  },
  {
    id: "26",
    name: "Backpack Laptop Professional",
    description: "Durable laptop backpack with USB charging port and anti-theft design.",
    price: 79.99,
    category: "Fashion",
    subcategory: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"],
    rating: 4.6,
    reviewCount: 456,
    stock: 145,
    features: ["USB charging port", "Anti-theft", "Water resistant", "Laptop compartment"],
    specifications: {
      "Capacity": "30L",
      "Laptop Size": "Up to 17 inches",
      "Material": "Water-resistant nylon",
      "Features": "USB port, Anti-theft"
    }
  },
  {
    id: "27",
    name: "Air Purifier Home",
    description: "HEPA air purifier for large rooms with smart air quality monitoring.",
    price: 299.99,
    category: "Home & Garden",
    subcategory: "Appliances",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 345,
    stock: 67,
    features: ["HEPA filter", "Smart monitoring", "Quiet operation", "Large room coverage"],
    specifications: {
      "Coverage": "500 sq ft",
      "Filter": "HEPA H13",
      "Noise Level": "24-50 dB",
      "Smart Features": "Air quality sensor"
    }
  },
  {
    id: "28",
    name: "Tennis Racket Professional",
    description: "High-performance tennis racket with graphite frame and premium strings.",
    price: 199.99,
    category: "Sports & Outdoors",
    subcategory: "Tennis",
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=500&h=500&fit=crop"],
    rating: 4.8,
    reviewCount: 234,
    stock: 56,
    features: ["Graphite frame", "Premium strings", "Lightweight", "Professional grade"],
    specifications: {
      "Weight": "300g",
      "Head Size": "100 sq in",
      "Grip Size": "4 3/8",
      "Material": "Graphite"
    }
  },
  {
    id: "29",
    name: "Cookbook Gourmet Collection",
    description: "Comprehensive cookbook with 500+ recipes from world-renowned chefs.",
    price: 34.99,
    category: "Books",
    subcategory: "Cooking",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop"],
    rating: 4.9,
    reviewCount: 567,
    stock: 234,
    features: ["500+ recipes", "Full-color photos", "Step-by-step", "Chef tips"],
    specifications: {
      "Pages": "456",
      "Format": "Hardcover",
      "Recipes": "500+",
      "Photos": "Full color"
    }
  },
  {
    id: "30",
    name: "Action Figure Collectible",
    description: "Limited edition collectible action figure with accessories and display stand.",
    price: 89.99,
    category: "Toys & Games",
    subcategory: "Collectibles",
    image: "https://images.unsplash.com/photo-1654749053575-0777bbb7fb4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: ["https://images.unsplash.com/photo-1587221488547-8ea17d23b7b8?w=500&h=500&fit=crop"],
    rating: 4.7,
    reviewCount: 289,
    stock: 45,
    features: ["Limited edition", "Multiple accessories", "Display stand", "Highly detailed"],
    specifications: {
      "Height": "12 inches",
      "Material": "High-quality plastic",
      "Edition": "Limited",
      "Accessories": "15+ pieces"
    }
  },
];

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
}

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    userId: "u1",
    userName: "John Smith",
    rating: 5,
    title: "Amazing sound quality!",
    comment: "These headphones exceeded my expectations. The noise cancellation is superb and battery life is fantastic.",
    date: "2024-09-15",
    helpful: 45
  },
  {
    id: "r2",
    productId: "1",
    userId: "u2",
    userName: "Sarah Johnson",
    rating: 4,
    title: "Great but pricey",
    comment: "Love the sound quality but wish they were a bit more affordable. Still worth it though!",
    date: "2024-09-10",
    helpful: 23
  },
  {
    id: "r3",
    productId: "2",
    userId: "u3",
    userName: "Mike Davis",
    rating: 5,
    title: "Perfect fitness companion",
    comment: "Tracks everything I need. Battery lasts the entire week as promised. Highly recommend!",
    date: "2024-09-12",
    helpful: 67
  },
];
