import laptop from "../assets/laptop.webp";
import iphone from "../assets/iphone.png";
import pc from "../assets/pc.png";
import sony from "../assets/sony.png"
import logi from "../assets/logi.png"
import mac from "../assets/mac.png"
import monitor from "../assets/moni.png"

export const categories = [
  {
    id: 1,
    name: "Laptops",
    description: "High-performance laptops for gaming, work, and everyday use.",
    image: laptop,
  },
  {
    id: 2,
    name: "Smartphones",
    description: "Discover the latest Android and iPhone devices with cutting-edge technology.",
    image: iphone,
  },
  {
    id: 3,
    name: "Gaming",
    description: "Consoles, gaming accessories, and powerful hardware for every gamer.",
    image: pc,
  },
  {
    id: 4,
    name: "Accessories",
    description: "Essential tech accessories including chargers, cables, cases, and more.",
    image: sony,
  },
  {
    id: 5,
    name: "Monitors",
    description: "Full HD, QHD, and 4K monitors designed for work, gaming, and entertainment.",
    image: monitor,
  },
  {
    id: 6,
    name: "Keyboards",
    description: "Mechanical and wireless keyboards built for productivity and gaming.",
    image: "https://picsum.photos/400/300?random=6",
  },
];

export const products = [
  {
    id: 1,
    name: "ASUS ROG Strix G16",
    description: "Intel Core i7 • RTX 4060 • 16GB RAM • 1TB SSD",
    price: 1499,
    stock: 18,
    rating: 4.8,
    reviews: 124,
    image: laptop,
    category: "Laptops",
    featured: true,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description: "Apple M2 • 16GB RAM • 512GB SSD",
    price: 1399,
    stock: 10,
    rating: 4.9,
    reviews: 212,
    image: mac,
    category: "Laptops",
    featured: true,
  },
  {
    id: 3,
    name: "iPhone 17 Pro",
    description: "256GB • Titanium",
    price: 1099,
    stock: 22,
    rating: 4.9,
    reviews: 310,
    image: iphone,
    category: "Smartphones",
    featured: true,
  },
  {
    id: 4,
    name: "Samsung Galaxy S25",
    description: "256GB • Snapdragon",
    price: 999,
    stock: 15,
    rating: 3.7,
    reviews: 180,
    image: "https://picsum.photos/500/500?random=14",
    category: "Smartphones",
    featured: false,
  },
  {
    id: 5,
    name: "Logitech G Pro X",
    description: "Mechanical Gaming Keyboard",
    price: 149,
    stock: 40,
    rating: 4.6,
    reviews: 90,
    image: logi,
    category: "Keyboards",
    featured: false,
  },
  {
    id: 6,
    name: "SteelSeries Rival 5",
    description: "Gaming Mouse",
    price: 69,
    stock: 55,
    rating: 4.5,
    reviews: 64,
    image: "https://picsum.photos/500/500?random=16",
    category: "Accessories",
    featured: false,
  },
  {
    id: 7,
    name: "LG UltraGear 27\"",
    description: "165Hz QHD Gaming Monitor",
    price: 329,
    stock: 12,
    rating: 4.8,
    reviews: 76,
    image: "https://picsum.photos/500/500?random=17",
    category: "Monitors",
    featured: true,
  },
  {
    id: 8,
    name: "PlayStation 5",
    description: "Slim Edition",
    price: 499,
    stock: 8,
    rating: 4.9,
    reviews: 420,
    image: "https://picsum.photos/500/500?random=18",
    category: "Gaming",
    featured: true,
  },
];

export const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 5,
    comment: "Excellent quality and fast delivery.",
  },
  {
    id: 2,
    user: "Sarah Smith",
    rating: 4,
    comment: "Great product for the price.",
  },
  {
    id: 3,
    user: "Michael Brown",
    rating: 5,
    comment: "Highly recommended!",
  },
];

export const cartItems = [
  {
    id: 1,
    productId: 1,
    quantity: 1,
  },
  {
    id: 2,
    productId: 5,
    quantity: 2,
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Gaming Collection",
    subtitle: "Up to 40% OFF",
    image: "https://picsum.photos/1600/700?random=101",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Latest Tech Products",
    image: "https://picsum.photos/1600/700?random=102",
  },
  {
    id: 3,
    title: "Summer Deals",
    subtitle: "Limited Time Offers",
    image: "https://picsum.photos/1600/700?random=103",
  },
];

export const brands = [
  "Apple",
  "Samsung",
  "ASUS",
  "MSI",
  "Dell",
  "HP",
  "Lenovo",
  "Logitech",
  "Sony",
];