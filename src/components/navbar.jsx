import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  CircleArrowRight,
  Menu,
  X,
} from "lucide-react";
import Logo from "@/components/Home/logo";
import { Link } from "react-router";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full bg-transparent  ">
      <header className="px-4 py-6 flex justify-between items-center sm:w-[80%] mx-auto  text-white">
        <Logo />

        {/* Burger Button */}
        <button
          className="lg:hidden text-white hover:cursor-pointer transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          {isSidebarOpen ? (
            <X className="w-10 h-10" />
          ) : (
            <Menu className="w-10 h-10" />
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#0a1a2a] text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="p-4">
            <Logo />
          </div>
          <nav className="space-y-4 px-4">
            <Link
              to="/"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/calculator"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Calculator
            </Link>
            <Link
              to="/peptides"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Peptides
            </Link>
            <Link
              to="/affiliate"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Affiliate
            </Link>
            <Link
              to="/about-us"
              className="block hover:text-[#a07eff] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block hover:text-[#a07eff] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className=" bg-[#333333] hover:bg-[#000] text-white text-center w-fit px-5 py-2 flex items-center  rounded-full transition-all"
            >
              Join Us Now
              <CircleArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 bg-blue">
          <Link to="/" className="hover:text-[#a07eff] transition-colors">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-[#a07eff] transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/calculator"
            className="hover:text-[#a07eff] transition-colors"
          >
            Calculator
          </Link>
          <Link
            to="/peptides"
            className="hover:text-[#a07eff] transition-colors"
          >
            Peptides
          </Link>
          <Link
            to="/affiliate"
            className="hover:text-[#a07eff] transition-colors"
          >
            Affiliate
          </Link>
          <Link
            to="/about-us"
            className="hover:text-[#a07eff] transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-[#a07eff] transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/join"
            className=" bg-[#333333] hover:bg-[#000] text-white text-center w-fit px-5 py-2 flex items-center  rounded-full transition-all"
          >
            Join Us Now
            <CircleArrowRight className="ml-1 w-5 h-5" />
          </Link>
        </nav>
      </header>
    </div>
  );
}
