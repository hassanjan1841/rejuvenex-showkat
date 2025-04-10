"use client";

import { productData } from "@/data/product-info-data";
import { createContext, useContext, useState } from "react";

const PeptideContext = createContext();

export function PeptideProvider({ children }) {
  const [selectedPeptide, setSelectedPeptide] = useState(
    productData.length > 0 ? productData[0] : null
  );

  return (
    <PeptideContext.Provider
      value={{
        selectedPeptide,
        setSelectedPeptide,
        peptides: productData,
      }}
    >
      {children}
    </PeptideContext.Provider>
  );
}

export function usePeptide() {
  const context = useContext(PeptideContext);
  if (context === undefined) {
    throw new Error("usePeptide must be used within a PeptideProvider");
  }
  return context;
}
