"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Filter,
  ChevronDown,
  ChevronUp,
  Search,
  ShoppingCart,
} from "lucide-react";
import { categories, products } from "@/data/products";
import { useCart } from "@/context/cart-context";

export function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const { addToCart } = useCart();

  // Parse search query from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);

  // Filter products based on category and search query
  useEffect(() => {
    let result = products;

    // Filter by category if selected
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is already handled by the useEffect
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product.id, 1);
    alert(`Added ${product.name} to cart`);
  };

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="sm:w-[80%] w-full mx-auto px-4 py-8">
      {/* Search and Cart Bar - Mobile Only */}
      <div className="flex items-center gap-4 mb-6 ">
        <form onSubmit={handleSearch} className="flex flex-1">
          <input
            type="text"
            placeholder="Peptides..."
            className="w-full px-4 py-2 rounded-l-md bg-white focus:outline-none focus:inset-shadow text-black border-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-r-md flex items-center justify-center"
            aria-label="Search"
          >
            <Search size={20} className="text-white" />
          </button>
        </form>

        <Link
          to="/cart"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md flex items-center gap-2 whitespace-nowrap relative"
        >
          <ShoppingCart size={20} />
          <span>View Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-lg rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:max-w-64 shrink">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Filter size={20} className="mr-2" />
                Filters
              </h2>
              {selectedCategory && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search filter - shows current search if active */}
            {searchQuery && (
              <div className="mb-4 pb-2 border-b border-gray-700">
                <h3 className="font-semibold mb-2">Search</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-blue-400">"{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-gray-400 hover:text-white"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}

            <div className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer py-2 border-b border-gray-700"
                onClick={toggleCategory}
              >
                <h3 className="font-semibold">Category</h3>
                {isCategoryOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {isCategoryOpen && (
                <ul className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer py-1 hover:text-blue-400 transition-colors ${
                        selectedCategory === category
                          ? "text-blue-400 font-medium"
                          : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex items-center text-sm text-gray-400">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Products</span>
              {selectedCategory && (
                <>
                  <span className="mx-2">/</span>
                  <span>{selectedCategory}</span>
                </>
              )}
              {searchQuery && (
                <>
                  <span className="mx-2">/</span>
                  <span>Search: {searchQuery}</span>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6">
            {filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="w-full sm:max-w-[400px] flex-grow shrink rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-purple-500/20 backdrop-blur-sm p-6 flex justify-center items-center">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 text-start">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md w-full transition-colors"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-400">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search term.`
                  : "Try changing your filter criteria"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
