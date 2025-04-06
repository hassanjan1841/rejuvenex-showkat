import { useState, useEffect } from "react";
import { PenLine, FileText, Droplet } from "lucide-react";

export default function CalculatorSection() {
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
    <section className="py-16 bg-gradient-to-br from-[#3a1c5a] to-[#0a0a14] max-lg:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left side - Text content */}
          <div className="max-w-[400px] lg:pr-8">
            <h2 className="text-5xl font-bold mb-6">
              Peptide
              <br />
              Calculator
            </h2>
            <p className="text-gray-300 text-lg">
              The Peptide Calculator is your go-to tool for accurately
              determining compound dosages tailored to your needs. With just a
              few inputs, you can easily calculate precise amounts for optimal
              results in your research or treatment. Streamline your dosing
              process with this reliable and user-friendly tool.
            </p>
          </div>

          {/* Right side - Calculator */}
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
    </section>
  );
}
