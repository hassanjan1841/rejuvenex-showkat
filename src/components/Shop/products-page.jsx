"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import { products, categories } from "../../data/products";

export function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink">
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
            </div>
          </div>

          <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 max-md:grid-cols-2 lg:grid-cols-3  gap-6">
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
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Added ${product.name} to cart`);
                      // Implement add to cart functionality
                    }}
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
              <p className="text-gray-400">Try changing your filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
