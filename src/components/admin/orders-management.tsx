"use client";

import { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  Filter,
  X,
  Package,
  Truck,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Trash2,
} from "lucide-react";

// Dummy order data
const dummyOrders = [
  {
    id: "ORD-7352",
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
    },
    date: "2025-04-10",
    status: "delivered",
    amount: 129.99,
    items: [
      { id: "1", name: "SEMAX", quantity: 1, price: 50.0 },
      { id: "2", name: "BPC-157", quantity: 1, price: 55.0 },
      { id: "3", name: "TB-500", quantity: 1, price: 24.99 },
    ],
    shipping: {
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "4242",
    },
    trackingNumber: "TRK123456789",
  },
  {
    id: "ORD-7351",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 234-5678",
    },
    date: "2025-04-10",
    status: "processing",
    amount: 79.99,
    items: [
      { id: "4", name: "CJC-1295", quantity: 1, price: 65.0 },
      { id: "5", name: "GHRP-6", quantity: 1, price: 14.99 },
    ],
    shipping: {
      address: "456 Oak Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    payment: {
      method: "PayPal",
      email: "sarah.johnson@example.com",
    },
    trackingNumber: null,
  },
  {
    id: "ORD-7350",
    customer: {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1 (555) 345-6789",
    },
    date: "2025-04-09",
    status: "shipped",
    amount: 199.99,
    items: [
      { id: "6", name: "Melanotan-2", quantity: 2, price: 55.0 },
      { id: "7", name: "HCG", quantity: 1, price: 89.99 },
    ],
    shipping: {
      address: "789 Pine St",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "United States",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "1234",
    },
    trackingNumber: "TRK987654321",
  },
  {
    id: "ORD-7349",
    customer: {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 (555) 456-7890",
    },
    date: "2025-04-09",
    status: "delivered",
    amount: 59.99,
    items: [
      { id: "8", name: "SEMAX", quantity: 1, price: 50.0 },
      { id: "9", name: "Shipping", quantity: 1, price: 9.99 },
    ],
    shipping: {
      address: "321 Maple Rd",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "United States",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "5678",
    },
    trackingNumber: "TRK456789123",
  },
  {
    id: "ORD-7348",
    customer: {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+1 (555) 567-8901",
    },
    date: "2025-04-08",
    status: "cancelled",
    amount: 149.99,
    items: [
      { id: "10", name: "ACE-031", quantity: 1, price: 50.0 },
      { id: "11", name: "CJC-1295", quantity: 1, price: 65.0 },
      { id: "12", name: "Shipping", quantity: 1, price: 34.99 },
    ],
    shipping: {
      address: "654 Cedar Ln",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "United States",
    },
    payment: {
      method: "PayPal",
      email: "david.wilson@example.com",
    },
    trackingNumber: null,
  },
];

export function OrdersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);

  const itemsPerPage = 10;

  // Filter orders based on search term and status
  const filteredOrders = dummyOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleViewOrder = (order: any) => {
    setCurrentOrder(order);
    setShowOrderModal(true);
  };

  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    // In a real app, you would call an API to update the order status
    alert(`Order ${orderId} status would be updated to ${newStatus}`);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Package className="h-5 w-5 text-blue-500" />;
      case "shipped":
        return <Truck className="h-5 w-5 text-purple-500" />;
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "cancelled":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold">Orders Management</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        <div className="relative">
          <select
            className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={statusFilter || ""}
            onChange={(e) => setStatusFilter(e.target.value || null)}
          >
            <option value="">All Status</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Filter
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          {statusFilter && (
            <button
              onClick={() => setStatusFilter(null)}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Orders table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">
                      {order.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {order.customer.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.customer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewOrder(order)}
                      className="text-blue-600 hover:text-blue-900"
                      title="View Order"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(startIndex + itemsPerPage, filteredOrders.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">{filteredOrders.length}</span>{" "}
                  results
                </p>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        currentPage === index + 1
                          ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {showOrderModal && currentOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                Order Details - {currentOrder.id}
              </h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Order Summary */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Order Summary
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Date:</span>
                      <span>{currentOrder.date}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                          currentOrder.status
                        )}`}
                      >
                        {getStatusIcon(currentOrder.status)}
                        <span className="ml-1 capitalize">
                          {currentOrder.status}
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold">
                        ${currentOrder.amount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment:</span>
                      <span>{currentOrder.payment.method}</span>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Customer Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="font-medium mb-1">
                      {currentOrder.customer.name}
                    </p>
                    <p className="text-gray-600 mb-1">
                      {currentOrder.customer.email}
                    </p>
                    <p className="text-gray-600">
                      {currentOrder.customer.phone}
                    </p>
                  </div>
                </div>

                {/* Shipping Information */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Shipping Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="mb-1">{currentOrder.shipping.address}</p>
                    <p className="mb-1">
                      {currentOrder.shipping.city},{" "}
                      {currentOrder.shipping.state}{" "}
                      {currentOrder.shipping.zipCode}
                    </p>
                    <p className="mb-2">{currentOrder.shipping.country}</p>
                    {currentOrder.trackingNumber ? (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                          Tracking Number:
                        </p>
                        <p className="font-medium">
                          {currentOrder.trackingNumber}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Order Items
                </h4>
                <div className="bg-gray-50 rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentOrder.items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50">
                        <td
                          colSpan={3}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right"
                        >
                          Total
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold">
                          ${currentOrder.amount.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Update Status */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Update Order Status
                </h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      handleUpdateStatus(currentOrder.id, "processing")
                    }
                    className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center ${
                      currentOrder.status === "processing"
                        ? "bg-blue-100 text-blue-800 border border-blue-300"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={currentOrder.status === "processing"}
                  >
                    <Package className="h-4 w-4 mr-1" />
                    Processing
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(currentOrder.id, "shipped")
                    }
                    className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center ${
                      currentOrder.status === "shipped"
                        ? "bg-purple-100 text-purple-800 border border-purple-300"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={currentOrder.status === "shipped"}
                  >
                    <Truck className="h-4 w-4 mr-1" />
                    Shipped
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(currentOrder.id, "delivered")
                    }
                    className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center ${
                      currentOrder.status === "delivered"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={currentOrder.status === "delivered"}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Delivered
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(currentOrder.id, "cancelled")
                    }
                    className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center ${
                      currentOrder.status === "cancelled"
                        ? "bg-red-100 text-red-800 border border-red-300"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={currentOrder.status === "cancelled"}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Cancelled
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowOrderModal(false)}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Order Modal */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setCurrentOrder(null);
            setShowAddOrderModal(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Order
        </button>
      </div>

      {/* Add Order Modal */}
      {showAddOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add New Order</h3>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                {/* Order Information */}
                <div>
                  <h4 className="text-md font-medium mb-3">
                    Order Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Order ID
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Auto-generated"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Order Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div>
                  <h4 className="text-md font-medium mb-3">
                    Customer Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter customer name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div>
                  <h4 className="text-md font-medium mb-3">
                    Shipping Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter street address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter state"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter ZIP code"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter country"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h4 className="text-md font-medium mb-3">
                    Payment Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Payment Method
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Cash on Delivery">
                          Cash on Delivery
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Payment Details
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Card last 4 digits or PayPal email"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="text-md font-medium mb-3">Order Items</h4>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                          >
                            Total
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              <option value="">Select a product</option>
                              <option value="SEMAX">SEMAX</option>
                              <option value="BPC-157">BPC-157</option>
                              <option value="TB-500">TB-500</option>
                              <option value="CJC-1295">CJC-1295</option>
                              <option value="GHRP-6">GHRP-6</option>
                            </select>
                          </td>
                          <td className="px-6 py-4">
                            <input
                              type="number"
                              min="1"
                              defaultValue="1"
                              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mx-auto block"
                            />
                          </td>
                          <td className="px-6 py-4 text-right">
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              defaultValue="50.00"
                              className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ml-auto block"
                            />
                          </td>
                          <td className="px-6 py-4 text-right font-medium">
                            $50.00
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                              title="Remove Item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    + Add Another Item
                  </button>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Subtotal:</span>
                    <span>$50.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Shipping:</span>
                    <span>$9.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Tax:</span>
                    <span>$4.50</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">$64.49</span>
                  </div>
                </div>
              </form>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddOrderModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Order would be added");
                  setShowAddOrderModal(false);
                }}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
