import { useState } from "react";
import { useParams, Link } from "react-router";
import { ChevronUp, ChevronDown } from "lucide-react";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { products } from "@/data/products";

export function ProductDetailPage() {
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === productName);
  console.log("product", product);
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/products"
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Create image gallery items from product images
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      : [];

  console.log("images", images);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Implement add to cart functionality
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-white">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-white"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Product Images */}
          <div className="">
            <ImageGallery items={images} />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300 mb-4">{product.dosage}</p>
            <p className="text-3xl font-bold mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-l-md transition-colors"
                >
                  <ChevronDown size={16} />
                </button>
                <div className="bg-gray-800 px-4 py-2 w-12 text-center">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-r-md transition-colors"
                >
                  <ChevronUp size={16} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md flex-1 transition-colors"
              >
                Add to cart
              </button>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">SKU:</span> {product.sku}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">Tags:</span>{" "}
                  {product.tags.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
