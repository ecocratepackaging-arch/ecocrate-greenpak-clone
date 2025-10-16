import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ShieldCheck, Recycle, Leaf, FileCheck, Truck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Producer Compliance",
      description: "Comprehensive compliance services ensuring your business meets all legal requirements for waste recovery and recycling.",
    },
    {
      icon: Recycle,
      title: "Waste Recovery",
      description: "Professional waste recovery services for packaging, WEEE, batteries, and accumulators with full documentation.",
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      description: "Expert guidance on implementing sustainable practices and achieving your environmental goals.",
    },
    {
      icon: FileCheck,
      title: "Compliance Reporting",
      description: "Detailed reporting and documentation to ensure full compliance with environmental regulations.",
    },
    {
      icon: Truck,
      title: "Collection Services",
      description: "Convenient waste collection and transportation services for businesses of all sizes.",
    },
    {
      icon: Phone,
      title: "Support & Training",
      description: "Ongoing support and training programs to help your team understand and implement best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete waste recovery and compliance solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
              <p className="text-muted-foreground">Get in touch to discuss your compliance needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Assessment</h3>
              <p className="text-muted-foreground">We analyze your requirements and create a plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Implementation</h3>
              <p className="text-muted-foreground">We set up your compliance and recovery systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">Continuous monitoring and support for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Compliance?</h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to assist you with all your waste recovery and compliance needs
          </p>
          <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
