import ShopNavigation from "@/components/ShopNavigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";
import burgerTray from "@/assets/product-burger-tray.jpg";
import deliBox from "@/assets/product-deli-box.jpg";
import coffeeCup from "@/assets/product-coffee-cup.jpg";

const Shop = () => {
  const products = [
    { id: 1, name: "Kraft Burger Tray", price: "£23.05", image: burgerTray },
    { id: 2, name: "No.4 Deli Box", price: "£27.40", image: deliBox },
    { id: 3, name: "12oz Coffee Cup", price: "£21.46", image: coffeeCup },
    { id: 4, name: "Food Tray - Small", price: "£18.50", image: burgerTray },
    { id: 5, name: "Salad Box Large", price: "£29.95", image: deliBox },
    { id: 6, name: "16oz Coffee Cup", price: "£24.99", image: coffeeCup },
    { id: 7, name: "Pizza Box 12\"", price: "£32.50", image: burgerTray },
    { id: 8, name: "Soup Container", price: "£22.80", image: deliBox },
  ];

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <ShopNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.name)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
