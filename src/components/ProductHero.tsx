import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductHeroProps {
  image: string;
  productName: string;
  title: string;
  subtitle: string;
  price: string;
  link: string;
  reverse?: boolean;
}

const ProductHero = ({ image, productName, title, subtitle, price, link, reverse }: ProductHeroProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <img src={image} alt={productName} className="w-full h-auto" />
      </div>
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        <p className="text-primary text-sm font-medium mb-2">{productName}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <h3 className="text-xl md:text-2xl text-muted-foreground mb-4">{subtitle}</h3>
        <p className="text-lg mb-6">From <span className="font-bold">{price}</span></p>
        <Link to={link}>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg">
            SHOP NOW →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductHero;
