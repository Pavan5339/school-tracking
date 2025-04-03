
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">1234 School St, Education City, EC 12345</p>
              <p className="mb-2">Email: contact@smartbus.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-300 transition-colors">Features</Link></li>
              <li><a href="#pricing" className="hover:text-blue-300 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SmartBus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
