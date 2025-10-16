import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Leaf, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About EcoCrate</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading the way in sustainable packaging and waste recovery solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Businesses are required by law to recover and recycle packaging waste, waste electrical goods, 
            and batteries. EcoCrate provides comprehensive legal compliance solutions to all such organizations.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Established with a vision to make sustainable packaging accessible to all businesses, EcoCrate has 
            become a pioneer in post-consumer waste recovery. We are an authorized waste recovery organization 
            licensed to recover and recycle Packaging, WEEE, Batteries & Accumulators on behalf of businesses.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, EcoCrate is structured as a cooperative society owned by the very companies using our compliance 
            services. With over 1,000 members, we remain the most trusted waste recovery scheme in the industry.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to environmental protection and sustainable practices
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering the highest quality services to our clients
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Partnership</h3>
              <p className="text-muted-foreground">
                Building lasting relationships with our business community
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously improving our solutions and processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg text-center border border-border">
            <div className="text-5xl font-bold text-primary mb-2">1000+</div>
            <p className="text-xl font-semibold mb-2">Business Members</p>
            <p className="text-muted-foreground">Companies trust us with their compliance needs</p>
          </div>
          <div className="bg-card p-8 rounded-lg text-center border border-border">
            <div className="text-5xl font-bold text-primary mb-2">20+</div>
            <p className="text-xl font-semibold mb-2">Years Experience</p>
            <p className="text-muted-foreground">Pioneering waste recovery solutions</p>
          </div>
          <div className="bg-card p-8 rounded-lg text-center border border-border">
            <div className="text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-xl font-semibold mb-2">Compliance Rate</p>
            <p className="text-muted-foreground">Full legal compliance guaranteed</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl">
            To provide businesses with comprehensive, reliable, and sustainable waste recovery solutions 
            that ensure full legal compliance while protecting our environment for future generations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
