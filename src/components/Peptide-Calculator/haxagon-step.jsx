// components/HexagonStep.tsx
import React from "react";

export default function HexagonStep({
  step,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[300px] h-[260px] md:w-[450px] md:h-[400px]">
        <div className="w-full h-full hexagon-bg rounded-lg shadow-md relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <div className="text-4xl font-bold text-gray-400">{step}</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-[80%]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
