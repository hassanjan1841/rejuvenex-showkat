import {
  Facebook,
  Instagram,
  Twitter,
  PinIcon as Pinterest,
  CircleStop,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-[95%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-8">
              <img src="src/assets/asset-0.webp" alt="logo" />
            </div>
          </div>

          <div className="lg:ml-auto">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <Pinterest size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b  border-white inline-block">
              Our Company
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b  border-white inline-block">
              Our Policies
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Shipping & Returns Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b  border-white inline-block">
              Shopping
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Shopping Cart
                </a>
              </li>
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b  border-white inline-block">
              Promotions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CircleStop size={12} className="text-white mr-2" />
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Our Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Rejuvenexx. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              (xxx) xxxxx | info@rejuvenexx.co
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
