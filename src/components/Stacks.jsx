import React from 'react';

const EquityStatsSection = () => {
  return (
    <div className="bg-[#265CE1] w-full py-12 px-4 md:px-10 text-white">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
        Don’t Miss Out
      </h2>

      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-10">
        {/* Left Card */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full sm:max-w-md">
          <p className="text-base leading-relaxed text-center sm:text-left">
            Homeowners with mortgages, representing{' '}
            <span className="text-[#265CE1] font-semibold">62%</span> of all U.S. properties, have seen a remarkable{' '}
            <span className="text-[#265CE1] font-bold">$1.5 trillion increase</span> in equity since early 2023.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full sm:max-w-md flex flex-col justify-center items-center">
          <span className="text-red-600 font-bold text-4xl sm:text-5xl mb-2">9.6%</span>
          <span className="text-center text-sm sm:text-base">
            Of Substantial Annual Gain In One Year
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Stat 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
          <div className="text-green-600 text-3xl sm:text-4xl font-bold mb-1">$ 0k</div>
          <div className="text-sm sm:text-base font-medium">Average Equity of US Homes</div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
          <div className="text-green-600 text-3xl sm:text-4xl font-bold mb-1">$ 0+ trillion</div>
          <div className="text-sm sm:text-base font-medium">Trapped In US Homes</div>
        </div>
      </div>
    </div>
  );
};

export default EquityStatsSection;
