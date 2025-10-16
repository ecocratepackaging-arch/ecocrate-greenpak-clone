import ShopNavigation from "@/components/ShopNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-background">
      <ShopNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="bg-card rounded-lg border border-border p-8 text-center">
          <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
          <Button className="bg-secondary hover:bg-secondary/90">
            Continue Shopping
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
