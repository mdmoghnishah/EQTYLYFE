import React from 'react';
import Navbar from './Navbar';
import House from '../assets/house.png';
import Hand from '../assets/hand.png';
import Clouds from '../assets/clouds.png';
import Birds from '../assets/Birds.png';
import Plants from '../assets/Plants.png';
import Ellipse from '../assets/Ellipse.png';
import coin from '../assets/coin.png';
import Ellipse8 from '../assets/Ellipse8.png';

const Home = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full min-h-screen px-4 md:px-8 lg:px-16 xl:px-20 mt-16 md:mt-20 lg:mt-28">
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-[#265CE1] mb-4 md:mb-6">
                            Put your Home Equity to Work
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                            Achieve financial freedom through your home equity—no debt, no interest, no monthly payments, just opportunity
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input 
                                type="email"
                                placeholder="Enter Home Address"
                                className="flex-1 min-w-0 h-10 md:h-12 px-3 py-2 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#265CE1] focus:border-transparent" 
                            />
                            <button className="bg-[#265CE1] text-white h-10 md:h-12 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
                                Get my Estimation
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Content - Hero Image Section */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-64 sm:h-80 md:h-96 lg:h-[485px]">
                            {/* Sun or Ellipse - Top left */}
                            <img
                                src={Ellipse}
                                alt="Sun"
                                className="absolute top-4 sm:top-8 md:top-12 lg:top-[70px] left-0 w-8 sm:w-10 md:w-12 lg:w-[50px] z-0"
                            />

                            {/* Clouds - Top area */}
                            <img
                                src={Clouds}
                                alt="Clouds"
                                className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-1/4 sm:left-1/3 md:left-[130px] w-3/4 sm:w-2/3 md:w-[400px] z-0"
                            />

                            {/* Birds - Top Right */}
                            <img
                                src={Birds}
                                alt="Birds"
                                className="absolute top-12 sm:top-16 md:top-20 lg:top-[90px] right-8 sm:right-12 md:right-[140px] w-3/4 sm:w-2/3 md:w-[400px] z-10"
                            />

                            {/* Hand - Base layer */}
                            <img
                                src={Hand}
                                alt="Hand"
                                className="absolute bottom-0 right-0 w-4/5 sm:w-3/4 md:w-[630.71px] h-auto z-60"
                            />

                            {/* House - Centered above the hand */}
                            <img
                                src={House}
                                alt="House"
                                className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-[110px] left-1/4 sm:left-1/3 md:left-[185px] w-3/5 sm:w-1/2 md:w-[296.88px] h-auto z-10"
                            />

                            {/* Plants - Around house */}
                            <img
                                src={Plants}
                                alt="Plants"
                                className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-[105px] left-1/5 sm:left-1/4 md:left-[140px] w-4/5 sm:w-3/4 md:w-[400px] z-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* EQTY LYFE's Solution Section */}
            <div className="relative w-full py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-20 overflow-hidden">
                {/* Background Image */}
                <img
                    src={Ellipse8}
                    alt=""
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-none lg:w-[1300px] opacity-100 z-0 pointer-events-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                        {/* Left Content - Coin Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <img 
                                src={coin} 
                                alt="Coin illustration" 
                                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto" 
                            />
                        </div>

                        {/* Right Content - Text */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-inter font-bold text-[#265CE1] mb-4 lg:mb-6">
                                EQTY LYFE's Solution: Lump Sum
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-black mb-6 lg:mb-8 leading-relaxed">
                                The EQTY LYFE LUM SUM product lets homeowners instantly convert home equity into cash without selling or taking on debt. As home values grow, homeowners can access their equity to fund expenses like debt repayment, home improvements, or personal needs. This simple solution offers financial flexibility while maintaining property ownership.
                            </p>
                            <button className="bg-[#265CE1] text-white h-10 md:h-12 px-6 md:px-8 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
