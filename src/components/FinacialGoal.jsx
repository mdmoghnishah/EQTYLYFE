import React from 'react';
import Illustration from '../assets/girl.png'; // Replace this with your own later
import BGPattern from '../assets/bgf.png'; // Replace with the actual background if needed

const FinancialGoalSection = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center py-12 px-4 sm:px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${BGPattern})`, // Use your background asset
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#265CE1] mb-2">
            Achieve Your Financial Goal
          </h2>
          <p className="text-gray-600 mb-6">
            With EQTY LYFE, the possibilities are endless!
          </p>

          {/* Buttons List */}
          <div className="space-y-3">
            {[
              'Fund An Education',
              'Consolidate Debt',
              'Renovate Your Home',
              'Make A Large Purchase',
              'Fund Your Retirement',
              'Diversification',
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-2 rounded-md shadow-md bg-white hover:bg-gray-100 text-[#265CE1] font-medium border border-gray-200`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right">
          <img
            src="https://www.eqtylyfe.com/why/fin1.svg"
            alt="Goal Illustration"
            className=" w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <p className="bg-white mt-4 px-4 py-2 text-sm text-gray-700 rounded-md shadow">
            Have your home equity help you pay off student loans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialGoalSection;
