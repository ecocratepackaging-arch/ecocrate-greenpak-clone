import ShopNavigation from "@/components/ShopNavigation";
import ProductHero from "@/components/ProductHero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Package, Coffee, Box, Container, ShoppingBag, Utensils, FileText, Salad } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import burgerTray from "@/assets/product-burger-tray.jpg";
import deliBox from "@/assets/product-deli-box.jpg";
import coffeeCup from "@/assets/product-coffee-cup.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    { icon: Utensils, title: "Food Trays", link: "/shop" },
    { icon: Coffee, title: "Hot Drink Paper Cups", link: "/shop" },
    { icon: Salad, title: "Salad Boxes", link: "/shop" },
    { icon: Box, title: "Deli Boxes", link: "/shop" },
    { icon: Container, title: "Portion Pots & Lids", link: "/shop" },
    { icon: Package, title: "Salad Bowls", link: "/shop" },
    { icon: FileText, title: "Greaseproof Paper", link: "/shop" },
    { icon: ShoppingBag, title: "Bags", link: "/shop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ShopNavigation />

      {/* Hero Section 1 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <ProductHero
            image={burgerTray}
            productName="Kraft Burger Tray"
            title="Street Food Classics"
            subtitle="Wide Range of Food Trays"
            price="£23.05"
            link="/shop"
          />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <ProductHero
            image={deliBox}
            productName="No.4 Deli Box"
            title="Deli Takeaway Flexibility"
            subtitle="Wide Range of Deli Box sizes"
            price="£27.40"
            link="/shop"
            reverse
          />
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <ProductHero
            image={coffeeCup}
            productName="12oz Green Effect Coffee Cup"
            title="Coffee to Go?"
            subtitle="8oz, 10oz, 12oz & 16oz available"
            price="£21.46"
            link="/shop"
          />
        </div>
      </section>

      {/* Confidence Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop with confidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Free Next Day Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Free Next-Day Delivery tracked via DPD, orders over £100.*</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Up-to 30% Cheaper</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We produce the highest quality products, at the lowest possible price.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Apply for a customer account to see your order history and other benefits.</p>
                <Link to="/login">
                  <Button className="bg-secondary hover:bg-secondary/90">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop Popular Ranges</h2>
            <Link to="/shop">
              <Button className="bg-secondary hover:bg-secondary/90">Shop Now</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
