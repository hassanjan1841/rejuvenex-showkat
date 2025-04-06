import { useCart } from "@/context/cart-context";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function CheckoutPage() {
  const { cart, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const total = subtotal; // Will be updated if discounts are applied

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "United States (US)",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "California",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "cash_on_delivery",
    couponCode: "",
  });

  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponField, setShowCouponField] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyCoupon = () => {
    if (formData.couponCode.toLowerCase() === "discount10") {
      setCouponApplied(true);
      alert("Coupon applied successfully! 10% discount.");
    } else {
      setCouponApplied(false);
      alert("Invalid coupon code");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    console.log("Cart items:", cart);

    // Create order details to pass to the success page
    const orderDetails = {
      orderId: Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0"),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      total: finalTotal,
      paymentMethod:
        formData.paymentMethod === "cash_on_delivery"
          ? "Cash on delivery"
          : formData.paymentMethod === "credit_card"
          ? "Credit Card"
          : "PayPal",
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      billingDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.companyName,
        address: formData.streetAddress,
        apartment: formData.apartment,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
      },
    };

    // Navigate to success page with order details
    navigate("/order-success", { orderDetails });
  };

  // Calculate discount if coupon applied
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discount;

  return (
    <div className="w-[80%] mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 ">Checkout</h1>

      {cart.length === 0 ? (
        <div className="bg-black/30 backdrop-blur-sm rounded-xl py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            You need to add some products to your cart before proceeding to
            checkout.
          </p>
          <Link
            to="/products"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md transition-colors font-medium"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  ">
            {/* Billing Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className=" backdrop-blur-sm shadow shadow-gray-300 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Billing Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block mb-2 text-sm font-medium"
                  >
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium"
                  >
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  >
                    <option value="United States (US)">
                      United States (US)
                    </option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom (UK)">
                      United Kingdom (UK)
                    </option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="streetAddress"
                    className="block mb-2 text-sm font-medium"
                  >
                    Street address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="House number and street name"
                    className="w-full px-4 py-2 rounded-md bg-white text-black mb-2"
                    required
                  />
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium"
                  >
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="state"
                    className="block mb-2 text-sm font-medium"
                  >
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  >
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="zipCode"
                    className="block mb-2 text-sm font-medium"
                  >
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black"
                    required
                  />
                </div>
              </div>

              <div className=" backdrop-blur-sm shadow shadow-gray-300 rounded-xl p-6">
                <label
                  htmlFor="orderNotes"
                  className="block mb-2 text-sm font-medium"
                >
                  Order notes (optional)
                </label>
                <textarea
                  id="orderNotes"
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full px-4 py-2 rounded-md bg-white text-black h-32"
                ></textarea>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <div className=" backdrop-blur-sm shadow shadow-gray-300 rounded-xl p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-6">Your Order</h2>

                <div className="mb-6">
                  <div className="flex justify-between font-medium mb-2 pb-2 border-b border-blue-800">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between py-2">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between py-2 border-t border-blue-800">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between py-2 text-green-400">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between py-2 border-t border-blue-800 font-bold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className=" backdrop-blur-sm shadow shadow-gray-500 rounded-xl p-6 sticky top-8">
                <div className="mb-6">
                  <div className="mb-4">
                    <p className="text-sm mb-2">
                      Have a coupon?{" "}
                      <button
                        type="button"
                        className="text-blue-400 hover:text-blue-300"
                        onClick={() => setShowCouponField(!showCouponField)}
                      >
                        Click here to enter your coupon code
                      </button>
                    </p>

                    {showCouponField && (
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text"
                          name="couponCode"
                          value={formData.couponCode}
                          onChange={handleInputChange}
                          placeholder="Coupon code"
                          className="flex-1 px-3 py-2 rounded-md bg-white text-black"
                        />
                        <button
                          type="button"
                          onClick={handleApplyCoupon}
                          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className=" backdrop-blur-sm shadow shadow-gray-500 rounded-xl p-6 sticky top-8">
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Cash on delivery</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Pay with cash upon delivery.
                  </p>

                  <div className="p-4 bg-white/10 rounded-md mb-4">
                    <p className="text-sm">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-blue-400 hover:underline"
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md transition-colors font-medium"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
