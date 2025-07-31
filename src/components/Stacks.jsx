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
    <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full sm:max-w-md min-h-[200px]">
      <p className="text-base leading-relaxed text-center sm:text-left">
        Homeowners with mortgages, representing{' '}
        <span className="text-[#265CE1] font-semibold">62%</span> of all U.S. properties, have seen a remarkable{' '}
        <span className="text-[#265CE1] font-bold">$1.5 trillion increase</span> in equity since early 2023.
      </p>
    </div>

    {/* Right Card */}
    <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full sm:max-w-md flex flex-col justify-between min-h-[250px]">
  {/* Top Content: Percentage and Description in a Row */}
  <div className="flex flex-row items-center gap-3 mb-4">
    <span className="text-[#E96B27] font-bold text-4xl sm:text-5xl">9.6%</span>
    <p className="text-sm sm:text-base text-black leading-tight">
      Of Substantial Annual Gain<br />In One Year
    </p>
  </div>

  {/* Y-axis Labels + Graph */}
  <div className="relative w-full">
    {/* Y-Axis (left side) */}
    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-500 leading-none">
      <span>1.5T</span>
      <span>1.3T</span>
      <span>1.1T</span>
      <span>0.9T</span>
      <span>0.7T</span>
      <span>0T</span>
    </div>

    {/* Graph Bars */}
    <div className="pl-10">
      <div className="flex justify-between items-end mt-4 h-[100px]">
        {['2019', '2020', '2021', '2022', '2023'].map((year, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-6 h-2 bg-[#E96B27] rounded-full mb-1"></div>
            <span className="text-[10px] text-gray-600">{year}</span>
          </div>
        ))}
      </div>
    </div>
  </div>


</div>

  </div>

  {/* Bottom Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {/* Stat 1 */}
    <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center min-h-[180px]">
      <div className="text-green-600 text-3xl sm:text-4xl font-bold mb-1">$ 0k</div>
      <div className="text-sm sm:text-base font-medium">Average Equity of US Homes</div>
    </div>

    {/* Stat 2 */}
    <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center min-h-[180px]">
      <div className="text-green-600 text-3xl sm:text-4xl font-bold mb-1">$ 0+ trillion</div>
      <div className="text-sm sm:text-base font-medium">Trapped In US Homes</div>
    </div>
  </div>
</div>


  );
};

export default EquityStatsSection;
