import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, name, price, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-lg font-bold text-primary">From {price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-secondary hover:bg-secondary/90"
          onClick={onAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
