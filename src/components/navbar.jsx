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
import { useCart } from "@/context/cart-context";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="w-full bg-transparent  ">
      <header className="px-4 py-6 flex justify-between items-center sm:w-[80%] mx-auto  text-white">
        <Logo />

        {/* Burger Button */}
        <button
          className="xl:hidden text-white hover:cursor-pointer transition-colors"
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
        <nav className="hidden xl:flex items-center space-x-8 bg-blue">
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
          <div className="relative group">
            <Link
              href="/peptides"
              className="flex items-center hover:text-[#a07eff] transition-colors"
            >
              Peptides
              <ChevronDown className="ml-1 w-4 h-4" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-[700px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
              <div className="py-3 px-4 bg-[#0a1a2a]/90 backdrop-blur-md rounded-lg shadow-xl border border-[#2a3a4a] overflow-hidden">
                <div className="mb-3 pb-2 border-b border-[#2a3a4a]">
                  <span className="text-xs font-semibold text-[#a07eff]">
                    RESEARCH PEPTIDES
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Column 1 */}
                  <div className="space-y-2">
                    <Link
                      href="/peptides/ace-031"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      ACE-031
                    </Link>
                    <Link
                      href="/peptides/aod-9604"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      AOD-9604
                    </Link>
                    <Link
                      href="/peptides/cjc-1295-dac"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      CJC-1295 DAC
                    </Link>
                    <Link
                      href="/peptides/dsip"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      DSIP
                    </Link>
                    <Link
                      href="/peptides/dsip-5mg"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      DSIP 5mg
                    </Link>
                    <Link
                      href="/peptides/epithalon"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Epithalon (Epitalon)
                    </Link>
                    <Link
                      href="/peptides/ghk-cu"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      GHK-Cu 50mg (Copper Peptide)
                    </Link>
                    <Link
                      href="/peptides/ghrp-2"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      GHRP-2
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-2">
                    <Link
                      href="/peptides/sermorelin-acetate"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Sermorelin Acetate (5mg)
                    </Link>
                    <Link
                      href="/peptides/ghrp-6"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      GHRP-6
                    </Link>
                    <Link
                      href="/peptides/glp-1"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      GLP-1 5 MG
                    </Link>
                    <Link
                      href="/peptides/hexarelin-acetate"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Hexarelin Acetate
                    </Link>
                    <Link
                      href="/peptides/hcg"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      HCG (Human Chorionic Gonadotropin)
                    </Link>
                    <Link
                      href="/peptides/ipamorelin"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Ipamorelin
                    </Link>
                    <Link
                      href="/peptides/igf-1-lr3"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      IGF-1 LR3
                    </Link>
                    <Link
                      href="/peptides/melanotan-1"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Melanotan-1 (MT-1)
                    </Link>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-2">
                    <Link
                      href="/peptides/oxytocin"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Oxytocin 2mg
                    </Link>
                    <Link
                      href="/peptides/selank"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Selank (5mg)
                    </Link>
                    <Link
                      href="/peptides/semax"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Semax (5mg)
                    </Link>
                    <Link
                      href="/peptides/semaglutide"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Semaglutide 5MG
                    </Link>
                    <Link
                      href="/peptides/tesamorelin"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Tesamorelin (5mg)
                    </Link>
                    <Link
                      href="/peptides/tb500"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      TB500
                    </Link>
                    <Link
                      href="/peptides/tirzepatide"
                      className="block py-1.5 hover:text-[#a07eff] transition-colors"
                    >
                      Tirzepatide (10mg)
                    </Link>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2a3a4a]">
                  <Link
                    href="/peptides/all"
                    className="text-xs text-[#a07eff] hover:text-[#c66eff] transition-colors"
                  >
                    View All Peptides →
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
