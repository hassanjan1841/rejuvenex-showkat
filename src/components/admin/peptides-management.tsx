"use client"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, ChevronLeft, ChevronRight, Eye, X } from "lucide-react"
import { productData } from "../../data/product-info-data"

export function PeptidesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [currentPeptide, setCurrentPeptide] = useState<any>(null)

  const itemsPerPage = 10

  // Filter peptides based on search term
  const filteredPeptides = productData.filter(
    (peptide) =>
      peptide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peptide.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredPeptides.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPeptides = filteredPeptides.slice(startIndex, startIndex + itemsPerPage)

  const handleAddPeptide = () => {
    setShowAddModal(true)
  }

  const handleEditPeptide = (peptide: any) => {
    setCurrentPeptide(peptide)
    setShowEditModal(true)
  }

  const handleViewPeptide = (peptide: any) => {
    setCurrentPeptide(peptide)
    setShowViewModal(true)
  }

  const handleDeletePeptide = (peptideId: string) => {
    if (window.confirm("Are you sure you want to delete this peptide information?")) {
      // In a real app, you would call an API to delete the peptide
      alert(`Peptide ${peptideId} would be deleted`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-xl font-semibold">Peptides Information Management</h2>
        <button
          onClick={handleAddPeptide}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Peptide
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search peptides..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>

      {/* Peptides table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Peptide Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Short Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Research Sections
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
              {paginatedPeptides.map((peptide) => (
                <tr key={peptide.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{peptide.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{peptide.shortName || "-"}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{peptide.researchInfo.length} sections</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewPeptide(peptide)}
                      className="text-green-600 hover:text-green-900 mr-4"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleEditPeptide(peptide)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeletePeptide(peptide.id)}
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
                  <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredPeptides.length)}</span> of{" "}
                  <span className="font-medium">{filteredPeptides.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

      {/* View Peptide Modal */}
      {showViewModal && currentPeptide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {currentPeptide.name} {currentPeptide.shortName && `(${currentPeptide.shortName})`}
              </h3>
              <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-gray-500">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Description</h4>
                  <p className="text-gray-900">{currentPeptide.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Usage Disclaimer</h4>
                  <p className="text-gray-900">{currentPeptide.usage.disclaimer}</p>
                </div>

                {currentPeptide.usage.instructions && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Usage Instructions</h4>
                    <p className="text-gray-900">{currentPeptide.usage.instructions}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Research Information</h4>
                  <div className="space-y-4">
                    {currentPeptide.researchInfo.map((section, index) => (
                      <div key={index} className="border border-gray-200 rounded-md p-4">
                        {section.title && <h5 className="font-medium text-gray-900 mb-2">{section.title}</h5>}
                        {section.content && <p className="text-gray-700 mb-2">{section.content}</p>}
                        {section.image && (
                          <div className="mt-2">
                            <img
                              src={section.image || "/placeholder.svg"}
                              alt={`Research data for ${currentPeptide.name}`}
                              className="max-w-full h-auto rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Peptide Modal would be similar to the product modals but with fields specific to peptide information */}
    </div>
  )
}
