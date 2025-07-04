import React from "react";
import { Search, ShoppingCart, ShoppingBag, Shield, Truck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <div className="text-xl font-semibold text-gray-900">
              <span>Grocery</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-primary font-medium border-b-2 border-primary pb-1"
            >
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              News
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Right side icons and button */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
            <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer" />
            {/* <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                Shop now
              </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
