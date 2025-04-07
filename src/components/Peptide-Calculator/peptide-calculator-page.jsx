"use client";

import { useState, useEffect } from "react";
import {
  Save,
  Droplet,
  Package,
  Beaker,
  PenLine,
  FileText,
} from "lucide-react";
import haxagon from "@/assets/haxagon.webp";
import HexagonStep from "@/components/Peptide-Calculator/haxagon-step";

export function PeptideCalculatorPage() {
  const [volume, setVolume] = useState("30 units");
  const [peptideValue, setPeptideValue] = useState("");
  const [waterValue, setWaterValue] = useState("");
  const [waterUnit, setWaterUnit] = useState("ml");
  const [peptideQuantity, setPeptideQuantity] = useState("");
  const [results, setResults] = useState({
    units: 0,
    doses: 0,
    doseInMl: 0,
  });

  useEffect(() => {
    calculateResults();
  }, [volume, peptideValue, waterValue, peptideQuantity]);

  const calculateResults = () => {
    const volumeValue = parseInt(volume.split(" ")[0]); // Extract numeric value from volume
    const peptide = parseFloat(peptideValue) || 0;
    const water = parseFloat(waterValue) || 0;
    const peptideQty = parseFloat(peptideQuantity) || 0;

    if (peptide > 0 && water > 0 && peptideQty > 0) {
      const concentration = peptide / water; // mg/ml
      const unitsPerDose = (peptideQty / concentration) * (volumeValue / 100);
      const doses = peptide / peptideQty;
      const doseInMl = peptideQty / concentration;

      setResults({
        units: unitsPerDose.toFixed(2),
        doses: doses.toFixed(2),
        doseInMl: doseInMl.toFixed(2),
      });
    } else {
      setResults({ units: 0, doses: 0, doseInMl: 0 });
    }
  };

  return (
    <div className="min-h-screen  text-white pb-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          STREAMLINE YOUR RESEARCH WITH ACCURACY
        </h1>

        <p className="text-lg mb-12 max-w-4xl">
          Our Peptide Dosage Calculator simplifies your research by providing
          quick, precise dosage calculations. Just input the required parameters
          to ensure accurate measurements and optimal results in your
          experiments.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left Column - Steps */}
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center justify-center pb-12">
              <div className=" flex justify-start gap-8 md:gap-16 lg:gap-24 w-full">
                {/* Left Column */}
                <div className="flex flex-col gap-[60px] w-full">
                  <div className="relative z-0">
                    <HexagonStep
                      step="01"
                      title="Select Syringe Volume"
                      description="Choose from 0.3mL, 0.5mL, or 1mL"
                    />
                  </div>
                  <div className="relative  z-20">
                    <HexagonStep
                      step="03"
                      title="Enter Bac Water Volume"
                      description="Enter the volume in milliliters (mL) or International Units (IU)."
                    />
                  </div>
                  <div className="relative z-40 ">
                    <HexagonStep
                      step="05"
                      title="View Calculation Results"
                      description="The results of your inputs will be shown for your review."
                    />
                  </div>
                </div>

                {/* Right Column (staggered & layered) */}
                <div className="flex flex-col gap-[60px] w-full absolute left-52 top-52 ">
                  <div className="relative z-10 ">
                    <HexagonStep
                      step="02"
                      title="Input Compound Quantity"
                      description="Enter the total milligrams (mg) for up to three Compound vials."
                    />
                  </div>
                  <div className="relative z-30 ">
                    <HexagonStep
                      step="04"
                      title="Specify Compound Dose"
                      description="Enter the required dosage in milligrams (mg) or micrograms (mcg)."
                    />
                  </div>
                  <div className="relative z-50 ">
                    <HexagonStep
                      step="06"
                      title="Save Your Calculation"
                      description="Click the save icon to store your calculation, with the option to add a title and notes."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calculator */}
          <div className="space-y-4">
            <div className="max-w-[500px]">
              <div className="flex flex-col gap-5 overflow-hidden shadow-xl">
                {/* Volume Input */}
                <div className="p-6 border-b border-[#2a2a3a] bg-[#1e1e2d] rounded-2xl">
                  <div className="flex items-start">
                    <div className="flex-1 flex flex-col items-start justify-center gap-5">
                      <div className="bg-[#c93fc9] rounded-lg p-2 mr-4">
                        <PenLine className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-semibold mr-4">Volume</div>
                    </div>
                    <div className="flex-[2]">
                      <div className="text-sm text-gray-400 mb-8">
                        Select syringe's total volume
                      </div>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <select
                            className="w-full bg-[#6a3a9c] text-white rounded-lg px-4 py-2 appearance-none"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                          >
                            <option value="30 units">30 units</option>
                            <option value="50 units">50 units</option>
                            <option value="100 units">100 units</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Peptide Input */}
                <div className="p-6 border-b border-[#2a2a3a] bg-[#1e1e2d] rounded-2xl">
                  <div className="flex items-start">
                    <div className="flex-1 flex flex-col items-start justify-center gap-5">
                      <div className="bg-[#c93fc9] rounded-lg p-2 mr-4">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-semibold mr-4">Peptide</div>
                    </div>
                    <div className="flex-[2]">
                      <div className="text-sm text-gray-400 mb-8">
                        Enter Peptide's Quantity
                      </div>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Enter value"
                            className="w-full bg-[#6a3a9c] text-white rounded-lg px-4 py-2 placeholder-[#a78cc7]"
                            value={peptideValue}
                            onChange={(e) => setPeptideValue(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Water Input */}
                <div className="p-6 border-b border-[#2a2a3a] bg-[#1e1e2d] rounded-2xl">
                  <div className="flex items-start">
                    <div className="flex-1 flex flex-col items-start justify-center gap-5">
                      <div className="bg-[#c93fc9] rounded-lg p-2 mr-4">
                        <Droplet className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-semibold mr-4">Water</div>
                    </div>
                    <div className="flex-[2]">
                      <div className="text-sm text-gray-400 mb-8">
                        Enter Bacteriostatic Water Quantity
                      </div>
                      <div className="flex items-center">
                        <div className="flex-1 flex justify-between gap-2">
                          <input
                            type="text"
                            placeholder="Enter value"
                            className="w-52 bg-[#6a3a9c] text-white rounded-lg px-4 py-2 placeholder-[#a78cc7]"
                            value={waterValue}
                            onChange={(e) => setWaterValue(e.target.value)}
                          />
                          <select
                            className="w-20 bg-[#6a3a9c] text-white rounded-lg px-3 py-2 appearance-none"
                            value={waterUnit}
                            onChange={(e) => setWaterUnit(e.target.value)}
                          >
                            <option value="ml">ml</option>
                            <option value="cc">cc</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Peptide Quantity */}
                <div className="p-6 border-b border-[#2a2a3a] bg-[#1e1e2d] rounded-2xl">
                  <div className="flex items-start">
                    <div className="flex-1 flex flex-col items-start justify-center gap-5">
                      <div className="bg-[#c93fc9] rounded-lg p-2 mr-4">
                        <PenLine className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-semibold mr-4">Peptide</div>
                    </div>
                    <div className="flex-[2]">
                      <div className="text-sm text-gray-400 mb-8">
                        Enter the Quantity of Peptide
                      </div>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Enter value"
                            className="w-full bg-[#6a3a9c] text-white rounded-lg px-4 py-2 placeholder-[#a78cc7]"
                            value={peptideQuantity}
                            onChange={(e) => setPeptideQuantity(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Results */}
                <div className="p-6 bg-[#1e1e2d] rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xl font-semibold">Formulate</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{results.units}</div>
                      <div className="text-sm">Units</div>
                    </div>
                  </div>

                  {/* Results text */}
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Draw {results.units} units for 1mg doses</li>
                    <li>
                      With a concentration of {peptideValue / waterValue || 0}
                      mg/mL, each vial contains {results.doses} doses or{" "}
                      {results.doseInMl} doses in mL
                    </li>
                  </ul>

                  {/* Save button */}
                  <div className="mt-6 text-right">
                    <button className="bg-white text-[#1e1e2d] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                      Save Calculator
                    </button>
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
