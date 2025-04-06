import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleUpdateCart = () => {
    console.log("Cart updated");
    // Any additional logic for updating cart
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "discount10") {
      const discountAmount = subtotal * 0.1; // 10% discount
      setDiscount(discountAmount);
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code");
      setCouponApplied(false);
      setDiscount(0);
    }
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cart</h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-gray-300 font-medium">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              <div className="divide-y divide-gray-700">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 grid grid-cols-12 gap-4 items-center"
                  >
                    <div className="col-span-1">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="col-span-11 md:col-span-4 flex items-center gap-4">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-400 md:hidden">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-2 text-center">
                      ${item.price.toFixed(2)}
                    </div>

                    <div className="col-span-7 md:col-span-3 flex justify-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            Number.parseInt(e.target.value)
                          )
                        }
                        className="w-16 px-2 py-1 text-center rounded bg-gray-800 border border-gray-700 text-white"
                      />
                    </div>

                    <div className="col-span-4 md:col-span-2 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={handleUpdateCart}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Update Cart
                </button>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 px-4 py-2 rounded-md bg-white text-black"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap"
                >
                  Apply coupon
                </button>
              </div>

              {couponApplied && (
                <p className="mt-2 text-green-400 text-sm">
                  Coupon applied successfully! 10% discount.
                </p>
              )}
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Cart Totals</h2>

              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-blue-800">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between pb-4 border-b border-blue-800">
                    <span>Discount</span>
                    <span className="font-medium text-green-400">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between pb-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <ShoppingBag size={80} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Looks like you haven't added any products to your cart yet. Browse
            our products and find something that interests you.
          </p>
          <Link
            to="/products"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md transition-colors font-medium"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
}
