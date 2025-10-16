import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Recycle, Package, ShieldCheck, Leaf, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Producer Compliance",
      description: "Complete compliance solutions for businesses trading in packaging, electronics, and batteries.",
    },
    {
      icon: Recycle,
      title: "Waste Recovery",
      description: "Professional waste recovery and recycling services for sustainable business operations.",
    },
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Eco-friendly packaging products designed for sustainability and efficiency.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroCarousel />

      {/* Quick Action Cards */}
      <section className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Find Nearest Collection Point</h3>
            <p className="text-muted-foreground mb-4">Locate eco-friendly collection points near you</p>
            <Button variant="outline" className="w-full">Find Now</Button>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Browse Products</h3>
            <p className="text-muted-foreground mb-4">Explore our range of sustainable packaging</p>
            <Button variant="outline" className="w-full">View Products</Button>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Join Our Community</h3>
            <p className="text-muted-foreground mb-4">Connect with us on social media</p>
            <Button variant="outline" className="w-full">Follow Us</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About EcoCrate</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Businesses are required by law to recover and recycle packaging waste, waste electrical goods, and batteries. 
            EcoCrate provides comprehensive legal compliance solutions to all such organizations.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            As a pioneer in post-consumer waste recovery, EcoCrate is an authorized waste recovery organization licensed to 
            recover and recycle Packaging, WEEE, Batteries & Accumulators on behalf of businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">1000+</h3>
              <p className="text-muted-foreground">Business Partners</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">20+ Years</h3>
              <p className="text-muted-foreground">Industry Experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Recycle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">100%</h3>
              <p className="text-muted-foreground">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join over 1,000 businesses already using EcoCrate for their compliance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
