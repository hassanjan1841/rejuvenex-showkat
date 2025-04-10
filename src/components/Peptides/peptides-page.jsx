"use client";

import { useState } from "react";
import { Link } from "react-router";
import { Search, ChevronRight } from "lucide-react";
import { usePeptide } from "@/context/peptide-context";

export function PeptidesPage() {
  const { selectedPeptide, setSelectedPeptide, peptides } = usePeptide();
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const results = peptides.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (results.length > 0) {
      setSelectedPeptide(results[0]);
    }
  };

  if (!selectedPeptide) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-md text-black border-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-r-md flex items-center justify-center"
              aria-label="Search"
            >
              <Search size={20} className="text-white" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0 border-r border-gray-800">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-800">
              Peptides List
            </h2>
            <ul className="space-y-0">
              {peptides.map((peptide) => (
                <li key={peptide.id} className="border-b border-gray-800/50">
                  <button
                    onClick={() => setSelectedPeptide(peptide)}
                    className={`flex justify-between items-center w-full text-left py-3 px-0 transition-colors hover:text-blue-400 ${
                      selectedPeptide.id === peptide.id
                        ? "text-blue-400 font-medium"
                        : ""
                    }`}
                  >
                    <span>{peptide.name}</span>
                    <ChevronRight size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:pl-8 mt-8 md:mt-0 relative overflow-hidden">
            {/* Blue gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900 to-transparent opacity-30 z-0"></div>

            {/* Breadcrumb */}
            <div className="mb-6 relative z-10">
              <div className="flex items-center text-sm text-gray-400">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>
                  {selectedPeptide.name}{" "}
                  {selectedPeptide.shortName &&
                    `(${selectedPeptide.shortName})`}
                </span>
              </div>
            </div>

            <div className="relative z-10">
              {/* Product Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                {selectedPeptide.name}{" "}
                {selectedPeptide.shortName && (
                  <span className="text-blue-300">{`(${selectedPeptide.shortName})`}</span>
                )}
              </h1>

              {/* Product Description */}
              <div className="mb-12">
                <p className="text-gray-200 leading-relaxed text-lg">
                  {selectedPeptide.description}
                </p>
              </div>

              {/* Product Usage */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 tracking-wide">
                  PRODUCT USAGE
                </h2>
                <div className="text-gray-200 bg-blue-900/30 backdrop-blur-sm p-6 rounded">
                  <p className="mb-4 leading-relaxed">
                    {selectedPeptide.usage.disclaimer}
                  </p>
                  {selectedPeptide.usage.instructions && (
                    <div className="mt-8">
                      <p className="font-bold mb-2">
                        {selectedPeptide.id.toUpperCase()}-9604:-
                      </p>
                      <p>{selectedPeptide.usage.instructions}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Research Information */}
              {selectedPeptide.researchInfo.map((section, index) => (
                <div key={index} className="mb-12">
                  {section.title && (
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  )}
                  {section.content && (
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.image && (
                    <div className="my-6 flex justify-center">
                      <img
                        src={section.image || "/placeholder.svg"}
                        alt={`${selectedPeptide.name} research data`}
                        className="max-w-full rounded-lg border border-gray-700"
                        onError={(e) => {
                          const target = e.target;
                          target.src = `/placeholder.svg?height=300&width=500`;
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Promo Section */}
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <p className="text-gray-300 mb-2">
                      Get ready to elevate your research with top-quality
                      peptides!
                    </p>
                    <div className="text-xl font-bold">
                      Use promo code{" "}
                      <span className="text-blue-400">REJUVE15</span> to get a
                      15% discount!
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <img
                      src="/images/product-bottle.png"
                      alt="Product bottle"
                      className="h-32 object-contain"
                      onError={(e) => {
                        const target = e.target;
                        target.src = `/placeholder.svg?height=128&width=128`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
