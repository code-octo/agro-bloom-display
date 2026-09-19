import fruitImage from "@/assets/agroc-fruit.jpg";
import floweringImage from "@/assets/agroc-flowering.jpg";
import indoorImage from "@/assets/agroc-indoor.jpg";
import agroImage from "@/assets/agroc-agro.jpg";
import landscapeImage from "@/assets/agroc-landscape.jpg";
import storyImage from "@/assets/agroc-story.jpg";

export const business = {
  name: "Agroc",
  phone: "+94 76 446 0030",
  whatsappNumber: "94764460030",
  email: "hello@example.lk",
  location: "Sri Lanka",
  hours: "Business Hours: Editable",
  tagline: "Plants, gardening and agricultural products.",
};

export type Category = { name: string; description: string; image: string; filter: string };
export const categories: Category[] = [
  { name: "Fruit Plants", description: "Fruit varieties for home gardens and farms.", image: fruitImage, filter: "Fruit" },
  { name: "Flowering Plants", description: "Colour and character for every garden.", image: floweringImage, filter: "Flowers" },
  { name: "Indoor Plants", description: "Fresh greenery for homes and workspaces.", image: indoorImage, filter: "Indoor" },
  { name: "Outdoor Plants", description: "Hardy plants for tropical outdoor spaces.", image: landscapeImage, filter: "Outdoor" },
  { name: "Vegetable Plants", description: "A simple start for your kitchen garden.", image: storyImage, filter: "Vegetable" },
  { name: "Agricultural Products", description: "Essentials for growing and garden care.", image: agroImage, filter: "Agro" },
];

export type Product = {
  name: string; category: string; price: string; status: string; description: string;
  image: string; tags: string[]; places: string[]; spaces: string[];
};
export const products: Product[] = [
  { name: "Mango Plant", category: "Fruit Plant", price: "From Rs. 1,500", status: "Available", description: "A tropical favourite for a sunny home garden or growing plot.", image: fruitImage, tags: ["Fruit", "Food / Vegetable"], places: ["Outdoor", "Garden", "Farm"], spaces: ["Medium", "Large"] },
  { name: "Guava Plant", category: "Fruit Plant", price: "From Rs. 1,200", status: "Available", description: "A rewarding fruit plant suited to warm, sunny conditions.", image: fruitImage, tags: ["Fruit", "Low Maintenance"], places: ["Outdoor", "Garden", "Farm"], spaces: ["Medium", "Large"] },
  { name: "Hibiscus", category: "Flowering Plant", price: "From Rs. 850", status: "Available", description: "Bold tropical flowers that bring colour to outdoor spaces.", image: floweringImage, tags: ["Flowers", "Decoration"], places: ["Outdoor", "Garden"], spaces: ["Small", "Medium", "Large"] },
  { name: "Aloe Vera", category: "Indoor / Medicinal", price: "From Rs. 650", status: "Available", description: "A practical, easy-care plant for bright indoor or sheltered areas.", image: indoorImage, tags: ["Decoration", "Low Maintenance"], places: ["Indoor", "Outdoor", "Garden"], spaces: ["Small", "Medium"] },
  { name: "Papaya Plant", category: "Fruit Plant", price: "From Rs. 900", status: "Limited Availability", description: "A fast-growing tropical fruit plant for gardens and farms.", image: fruitImage, tags: ["Fruit", "Food / Vegetable"], places: ["Outdoor", "Garden", "Farm"], spaces: ["Medium", "Large"] },
  { name: "Ornamental Plant", category: "Outdoor", price: "Contact for Price", status: "Available", description: "Decorative foliage selected to add form and texture outdoors.", image: landscapeImage, tags: ["Decoration", "Low Maintenance"], places: ["Outdoor", "Garden"], spaces: ["Small", "Medium", "Large"] },
];

export const articles = [
  { title: "Choosing the Right Plant for Your Garden", category: "Garden Planning", preview: "Consider sunlight, space and care needs before you bring a new plant home.", image: landscapeImage },
  { title: "How to Care for a Young Fruit Plant", category: "Plant Care", preview: "A simple guide to watering, feeding and supporting a healthy young plant.", image: storyImage },
  { title: "Common Gardening Mistakes Beginners Make", category: "For Beginners", preview: "Small changes in watering and placement can make a noticeable difference.", image: indoorImage },
];

export const gallery = [
  { label: "Nursery environment", image: storyImage },
  { label: "Fruit plants", image: fruitImage },
  { label: "Flowering plants", image: floweringImage },
  { label: "Indoor collection", image: indoorImage },
  { label: "Garden products", image: agroImage },
  { label: "Landscaping inspiration", image: landscapeImage },
  { label: "Plant preparation", image: storyImage },
];
