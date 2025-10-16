import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import logo from "@/assets/ecocrate-logo.png";

const ShopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <strong>FREE</strong> NEXT WORKING DAY DELIVERY FOR ORDERS <strong>OVER £100</strong> (EX VAT) IF PLACED <strong>BEFORE 2pm</strong>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="EcoCrate" className="h-12 w-12" />
              <span className="text-2xl font-bold text-primary hidden sm:block">ECOCRATE</span>
            </Link>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search 1000's of products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-foreground hover:text-primary">
                <User className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="relative text-foreground hover:text-primary">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link
                to="/shop"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Shop All
              </Link>
              <Link
                to="/categories"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ShopNavigation;
