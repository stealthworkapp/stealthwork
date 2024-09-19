import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="text-white text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                onClick={onClose}
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={onClose}
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={onClose}
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/ip-location"
                onClick={onClose}
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                IP Location
              </Link>
            </li>
            <li>
              <a
                href="https://duranirving.setmore.com/irvingduran"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black p-4 text-white fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            StealthWork
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/services"
              className="hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="hover:text-gray-300 transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/ip-location"
              className="hover:text-gray-300 transition duration-300"
            >
              IP Location
            </Link>
            <a
              href="https://duranirving.setmore.com/irvingduran"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              Book Now
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
