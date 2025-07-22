import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   const handleNavClick = (page) => {
  //     navigateTo(page);
  //     setIsMobileMenuOpen(false);
  //   };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/homepage"
            className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            F1.STREET
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/homepage"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/category"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Tees
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-white hover:text-gray-300 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* <Link
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Link> */}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/homepage"
              className="block w-full text-left px-3 py-2 text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block w-full text-left px-3 py-2 text-white hover:text-gray-300"
            >
              Products
            </Link>
            <Link
              to="/category"
              className="block w-full text-left px-3 py-2 text-white hover:text-gray-300"
            >
              Tees
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
