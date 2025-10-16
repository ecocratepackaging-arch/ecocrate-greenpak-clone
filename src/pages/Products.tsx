import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Box, Container, Truck } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      name: "Standard Packaging",
      description: "Durable, eco-friendly packaging solutions for everyday needs",
      sizes: "Small, Medium, Large",
      material: "100% Recycled Cardboard",
    },
    {
      icon: Box,
      name: "Premium Boxes",
      description: "High-quality packaging for premium products and shipping",
      sizes: "Custom sizes available",
      material: "Biodegradable Materials",
    },
    {
      icon: Container,
      name: "Industrial Containers",
      description: "Heavy-duty containers for industrial and bulk storage",
      sizes: "XL, XXL, Custom",
      material: "Sustainable Composite",
    },
    {
      icon: Truck,
      name: "Shipping Solutions",
      description: "Complete packaging solutions for logistics and shipping",
      sizes: "All standard sizes",
      material: "Recyclable Plastics",
    },
    {
      icon: Package,
      name: "Food Grade Packaging",
      description: "Safe, certified packaging for food and beverage products",
      sizes: "Various sizes",
      material: "FDA Approved Materials",
    },
    {
      icon: Box,
      name: "Custom Solutions",
      description: "Tailored packaging designed specifically for your needs",
      sizes: "Fully customizable",
      material: "Your choice of eco-materials",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of sustainable packaging solutions designed 
            to meet your business needs while protecting the environment
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm"><span className="font-semibold">Sizes:</span> {product.sizes}</p>
                  <p className="text-sm"><span className="font-semibold">Material:</span> {product.material}</p>
                </div>
                <Button className="w-full">Request Quote</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Eco-Friendly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Product Options</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Fast</div>
              <p className="text-muted-foreground">Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
