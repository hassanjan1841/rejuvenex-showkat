"use client";

import { useState } from "react";
import {
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
  X,
  Eye,
  Plus,
} from "lucide-react";

// Dummy affiliate data
const dummyAffiliates = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    registeredDate: "2025-01-15",
    status: "approved",
    earnings: 1250.75,
    referrals: 15,
    commission: 10,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    registeredDate: "2025-02-20",
    status: "approved",
    earnings: 875.5,
    referrals: 8,
    commission: 10,
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 (555) 345-6789",
    registeredDate: "2025-03-10",
    status: "pending",
    earnings: 0,
    referrals: 0,
    commission: 10,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 456-7890",
    registeredDate: "2025-03-25",
    status: "approved",
    earnings: 320.25,
    referrals: 3,
    commission: 10,
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 (555) 567-8901",
    registeredDate: "2025-04-05",
    status: "rejected",
    earnings: 0,
    referrals: 0,
    commission: 10,
  },
];

export function AffiliatesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentAffiliate, setCurrentAffiliate] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const itemsPerPage = 10;

  // Filter affiliates based on search term and status
  const filteredAffiliates = dummyAffiliates.filter((affiliate) => {
    const matchesSearch =
      affiliate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      affiliate.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter
      ? affiliate.status === statusFilter
      : true;
    return matchesSearch && matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredAffiliates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAffiliates = filteredAffiliates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleViewDetails = (affiliate: any) => {
    setCurrentAffiliate(affiliate);
    setShowDetailsModal(true);
  };

  const handleApproveAffiliate = (affiliateId: string) => {
    // In a real app, you would call an API to approve the affiliate
    alert(`Affiliate ${affiliateId} would be approved`);
  };

  const handleRejectAffiliate = (affiliateId: string) => {
    // In a real app, you would call an API to reject the affiliate
    alert(`Affiliate ${affiliateId} would be rejected`);
  };

  const handleDeleteAffiliate = (affiliateId: string) => {
    if (window.confirm("Are you sure you want to delete this affiliate?")) {
      // In a real app, you would call an API to delete the affiliate
      alert(`Affiliate ${affiliateId} would be deleted`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold">Affiliate Management</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search affiliates..."
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
            className="appearance-none pl-4 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={statusFilter || ""}
            onChange={(e) => setStatusFilter(e.target.value || null)}
          >
            <option value="">All Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Affiliates table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Affiliate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Earnings
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
              {paginatedAffiliates.map((affiliate) => (
                <tr key={affiliate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                          {affiliate.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {affiliate.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Joined: {affiliate.registeredDate}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Mail size={14} className="mr-1 text-gray-500" />
                      {affiliate.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <Phone size={14} className="mr-1 text-gray-500" />
                      {affiliate.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        affiliate.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : affiliate.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {affiliate.status.charAt(0).toUpperCase() +
                        affiliate.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <DollarSign size={14} className="mr-1 text-gray-500" />$
                      {affiliate.earnings.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {affiliate.referrals} referrals
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {affiliate.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApproveAffiliate(affiliate.id)}
                          className="text-green-600 hover:text-green-900 mr-2"
                          title="Approve"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button
                          onClick={() => handleRejectAffiliate(affiliate.id)}
                          className="text-red-600 hover:text-red-900 mr-2"
                          title="Reject"
                        >
                          <XCircle size={18} />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleViewDetails(affiliate)}
                      className="text-blue-600 hover:text-blue-900 mr-2"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteAffiliate(affiliate.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <Trash2 size={18} />
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
                    {Math.min(
                      startIndex + itemsPerPage,
                      filteredAffiliates.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {filteredAffiliates.length}
                  </span>{" "}
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

      {/* Affiliate Details Modal */}
      {showDetailsModal && currentAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Affiliate Details</h3>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Personal Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xl">
                        {currentAffiliate.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium">
                          {currentAffiliate.name}
                        </p>
                        <p className="text-gray-500">
                          <span
                            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                              currentAffiliate.status === "approved"
                                ? "bg-green-100 text-green-800"
                                : currentAffiliate.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {currentAffiliate.status.charAt(0).toUpperCase() +
                              currentAffiliate.status.slice(1)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2 text-gray-500" />
                        <span>{currentAffiliate.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-gray-500" />
                        <span>{currentAffiliate.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span>Joined: {currentAffiliate.registeredDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Affiliate Performance
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Earnings</p>
                        <p className="text-2xl font-bold text-green-600">
                          ${currentAffiliate.earnings.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Referrals</p>
                        <p className="text-xl font-semibold">
                          {currentAffiliate.referrals}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Commission Rate</p>
                        <p className="text-xl font-semibold">
                          {currentAffiliate.commission}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Referrals */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Recent Referrals
                </h4>
                {currentAffiliate.referrals > 0 ? (
                  <div className="bg-gray-50 rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            Customer
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                          >
                            Commission
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Dummy referral data */}
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            John Doe
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            2025-04-01
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">
                            $129.99
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-green-600">
                            $13.00
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            Jane Smith
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            2025-03-28
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">
                            $79.99
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-green-600">
                            $8.00
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            Robert Johnson
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            2025-03-25
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">
                            $199.99
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-green-600">
                            $20.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-md text-center text-gray-500">
                    No referrals yet
                  </div>
                )}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              {currentAffiliate.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      handleApproveAffiliate(currentAffiliate.id);
                      setShowDetailsModal(false);
                    }}
                    className="px-4 py-2 bg-green-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      handleRejectAffiliate(currentAffiliate.id);
                      setShowDetailsModal(false);
                    }}
                    className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Reject
                  </button>
                </>
              )}
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Affiliate Modal */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            setCurrentAffiliate(null);
            setShowAddModal(true);
          }}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Affiliate
        </button>
      </div>

      {/* Add Affiliate Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Add New Affiliate</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website/Social Media (Optional)
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter website or social media URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter commission rate"
                    defaultValue="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter any notes about this affiliate"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Affiliate would be added");
                  setShowAddModal(false);
                }}
                className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Affiliate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
