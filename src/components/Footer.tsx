import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/ecocrate-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="EcoCrate Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">EcoCrate</span>
            </div>
            <p className="text-primary-foreground/80">
              Leading provider of sustainable packaging solutions and waste recovery services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground">Products</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Producer Compliance</li>
              <li className="text-primary-foreground/80">Waste Recovery</li>
              <li className="text-primary-foreground/80">Recycling Solutions</li>
              <li className="text-primary-foreground/80">Packaging Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <button className="bg-primary-foreground text-primary px-4 py-2 rounded hover:bg-primary-foreground/90 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} EcoCrate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
