
import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-xl">Smart</span>
              <span className="text-yellow-500 font-bold text-xl">Bus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/features" className="text-gray-800 hover:text-blue-600 font-medium">Features</Link>
            <a href="#pricing" className="text-gray-800 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/features" className="text-gray-800 hover:text-blue-600 font-medium">Features</Link>
              <a href="#pricing" className="text-gray-800 hover:text-blue-600 font-medium">Pricing</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
