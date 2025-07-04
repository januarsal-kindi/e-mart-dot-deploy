import React from "react";
import {  ShoppingCart } from "lucide-react";
import NavItem from "./navItem";

const Navbar = () => {
  const navData = [
    { name: "Home", to: "home-header" },
    { name: "Categories", to: "categories" },
    { name: "Products", to: "products-list" },
  ];
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
            {navData.map((item) => (
              <NavItem key={item.name} label={item.name} to={item.to} />
            ))}
          </nav>

          <div className="flex items-center space-x-4"></div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
