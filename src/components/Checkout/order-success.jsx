"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  CheckCircle,
  Package,
  Truck,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Copy,
  Download,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/cart-context";

export function OrderSuccessPage() {
  const location = useLocation();
  const { clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState();

  // In a real app, you would get this from your backend or from the location state
  // For demo purposes, we're creating mock data
  useEffect(() => {
    // Clear the cart after successful order
    clearCart();

    // Create mock order details
    const mockOrderDetails = {
      orderId: Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0"),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      total: 50.0,
      paymentMethod: "Cash on delivery",
      items: [
        {
          id: "semax",
          name: "SEMAX",
          price: 50.0,
          quantity: 1,
        },
      ],
      billingDetails: {
        firstName: "John",
        lastName: "Doe",
        company: "Acme Inc",
        address: "123 Main Street",
        apartment: "Apt 4B",
        city: "San Francisco",
        state: "California",
        zipCode: "94105",
        country: "United States",
        phone: "+1 (555) 123-4567",
        email: "john.doe@example.com",
      },
    };

    // If there's order data in location state, use that instead
    if (location.state?.orderDetails) {
      setOrderDetails(location.state.orderDetails);
    } else {
      setOrderDetails(mockOrderDetails);
    }
  }, []);

  useEffect(() => {
    if (orderDetails) {
      // Trigger confetti effect only once when orderDetails is set
      launchConfetti();
    }
  }, []);
  const launchConfetti = () => {
    const duration = 3000; // Duration in milliseconds (3 seconds)

    const frame = () => {
      // Check if the current time is less than the end time
      //   if (Date.now() < endTime) {
      // Launch confetti particles
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // Schedule the next frame
      requestAnimationFrame(frame);
      // Stop and clear confetti after the duration
      setTimeout(() => {
        confetti.reset();
      }, duration);
    };

    // Start the animation
    frame();
  };

  const copyOrderId = () => {
    if (orderDetails) {
      navigator.clipboard.writeText(orderDetails.orderId);
      alert("Order ID copied to clipboard");
    }
  };

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-6">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300">
            Your order has been received and is being processed.
          </p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900/40 rounded-2xl overflow-hidden shadow-xl mb-12">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <div className="text-gray-400 text-sm mb-1">Order Number</div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">
                    #{orderDetails.orderId}
                  </span>
                  <button
                    onClick={copyOrderId}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    title="Copy order ID"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Date</div>
                  <div className="font-medium">{orderDetails.date}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-1">Total</div>
                  <div className="font-medium">
                    ${orderDetails.total.toFixed(2)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Payment Method
                  </div>
                  <div className="font-medium">
                    {orderDetails.paymentMethod}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Progress */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -translate-y-1/2"></div>

                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-2 z-10">
                      <CheckCircle size={20} className="text-white" />
                    </div>
                    <span className="text-sm font-medium">Confirmed</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mb-2 z-10">
                      <Package size={20} className="text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-400">Processing</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mb-2 z-10">
                      <Truck size={20} className="text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-400">Shipped</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mb-2 z-10">
                      <Calendar size={20} className="text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-400">Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>

              <div className="bg-black/30 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 text-gray-400 font-medium border-b border-gray-800">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <div className="divide-y divide-gray-800">
                  {orderDetails.items.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-4 p-4 items-center"
                    >
                      <div className="col-span-6 font-medium">{item.name}</div>
                      <div className="col-span-2 text-center">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="col-span-2 text-center">
                        {item.quantity}
                      </div>
                      <div className="col-span-2 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-black/20">
                  <div className="flex justify-between py-2">
                    <span>Subtotal</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span>Payment Method</span>
                    <span>{orderDetails.paymentMethod}</span>
                  </div>

                  <div className="flex justify-between py-2 font-bold">
                    <span>Total</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Billing Address</h2>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="font-medium mb-2">
                    {orderDetails.billingDetails.firstName}{" "}
                    {orderDetails.billingDetails.lastName}
                  </p>
                  {orderDetails.billingDetails.company && (
                    <p className="mb-2">
                      {orderDetails.billingDetails.company}
                    </p>
                  )}
                  <p className="mb-1">{orderDetails.billingDetails.address}</p>
                  {orderDetails.billingDetails.apartment && (
                    <p className="mb-1">
                      {orderDetails.billingDetails.apartment}
                    </p>
                  )}
                  <p className="mb-1">
                    {orderDetails.billingDetails.city},{" "}
                    {orderDetails.billingDetails.state}{" "}
                    {orderDetails.billingDetails.zipCode}
                  </p>
                  <p className="mb-4">{orderDetails.billingDetails.country}</p>

                  <div className="flex items-center gap-2 mb-2 text-gray-300">
                    <Phone size={16} />
                    <span>{orderDetails.billingDetails.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail size={16} />
                    <span>{orderDetails.billingDetails.email}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="bg-black/30 rounded-xl p-4">
                  <p className="font-medium mb-2">
                    {orderDetails.billingDetails.firstName}{" "}
                    {orderDetails.billingDetails.lastName}
                  </p>
                  {orderDetails.billingDetails.company && (
                    <p className="mb-2">
                      {orderDetails.billingDetails.company}
                    </p>
                  )}
                  <p className="mb-1">{orderDetails.billingDetails.address}</p>
                  {orderDetails.billingDetails.apartment && (
                    <p className="mb-1">
                      {orderDetails.billingDetails.apartment}
                    </p>
                  )}
                  <p className="mb-1">
                    {orderDetails.billingDetails.city},{" "}
                    {orderDetails.billingDetails.state}{" "}
                    {orderDetails.billingDetails.zipCode}
                  </p>
                  <p className="mb-4">{orderDetails.billingDetails.country}</p>

                  <div className="flex items-center gap-2 text-blue-400">
                    <MapPin size={16} />
                    <a href="#" className="hover:underline">
                      View on map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Continue Shopping
            <ArrowRight size={18} />
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Download size={18} />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
