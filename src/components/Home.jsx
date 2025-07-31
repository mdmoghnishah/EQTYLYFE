import React from 'react';
import Navbar from './Navbar';
import House from '../assets/House.png';
import Hand from '../assets/Hand.png';
import Clouds from '../assets/Clouds.png';
import Birds from '../assets/Birds.png';
import Plants from '../assets/Plants.png';
import Ellipse from '../assets/Ellipse.png';
import coin from '../assets/coin.png';
import Ellipse8 from '../assets/Ellipse8.png';
import EquityStatsSection from './Stacks';
import FinancialGoalSection from './FinacialGoal';
import HowItWorks from './Worklyfe';
import signup2 from '../assets/signup2.png';
import FooterSection from './FooterSection';
import tinyhouse from '../assets/tiny-house.png';



const Home = () => {
    return (
        <>
            <Navbar />
            <div className="w-full px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-[1400px] mx-auto">
                {/* Text Left Section */}
                <div className="max-w-xl space-y-6">
                    <h1 className="text-[32px] lg:text-[40px] font-[IBM Plex Serif] font-semibold text-[#265CE1]">
                        Put your Home Equity to Work
                    </h1>
                    <p className="text-base font-inter text-gray-800">
                        Achieve financial freedom through your home equity—no debt, no interest, no monthly payments, just opportunity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter Home Address"
                            className="w-[260px] h-[40px] border border-[#D1D5DB] rounded-md px-3 text-sm"
                        />
                        <button className="bg-[#265CE1] text-white w-[180px] h-[40px] rounded-md text-sm">
                            Get my Estimation
                        </button>
                    </div>
                </div>

                {/* Single Image Right */}
                <div className="w-full lg:w-[600px]">
                    <img src={tinyhouse} alt="House Illustration" className="w-full h-auto" />
                </div>
                

            </div>
            <div className="relative w-full max-w-[1562px] h-auto lg:h-[485px] mx-auto flex flex-col lg:flex-row justify-between items-center p-5 sm:p-10 lg:p-20 overflow-hidden">
                {/* Background Image */}
                <img
                    src={Ellipse8}
                    alt=""
                    className="absolute top-[150px] left-[-100px] w-[1300px] opacity-100 z-0 pointer-events-none hidden lg:block"
                />

                {/* Image Section */}
                <div className="relative z-10 mb-10 lg:mb-0">
                    <img src={coin} alt="" className="w-[300px] sm:w-[400px] lg:w-[500px]" />
                </div>

                {/* Text Section */}
                <div className="relative z-10 w-full lg:w-1/2 max-w-[500px] text-center lg:text-left px-4 sm:px-8 lg:pl-12">
                    <h2 className="font-inter font-bold text-[24px] sm:text-[32px] lg:text-[40px] text-[#265CE1] leading-snug">
                        EQTY LYFE’s Solution: Lump Sum
                    </h2>
                    <p className="mt-4 text-black text-sm sm:text-base leading-relaxed">
                        The EQTY LYFE LUM SUM product lets homeowners instantly convert home equity into cash without selling or taking on debt. As home values grow, homeowners can access their equity to fund expenses like debt repayment, home improvements, or personal needs. This simple solution offers financial flexibility while maintaining property ownership.
                    </p>
                    <button className="mt-5 h-[40px] text-white w-[200px] bg-[#265CE1] rounded">
                        Learn More
                    </button>
                </div>
            </div>
            <EquityStatsSection />
            <FinancialGoalSection />
            <HowItWorks />
            <div className="w-full flex justify-center mt-[90px] mb-[50px] px-4 z-10">
                <div className="w-full bg-[#265CE1] rounded-[10px] px-6 py-10 md:py-0 md:w-[926px] md:h-[253px] md:flex md:justify-between md:items-center md:px-[50px]">
                    {/* Left Content */}
                    <div className="flex flex-col gap-5 max-w-full md:max-w-[350px]">
                        <h2 className="text-white font-semibold text-[32px] md:text-[48px] tracking-[-0.012em] font-['IBM_Plex_Serif']">
                            Sign Up Today
                        </h2>
                        <p className="text-white text-sm md:text-base">
                            All it takes is a few simple steps to get your home to work for you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Enter Home Address"
                                className="w-full sm:w-[300px] h-[40px] rounded text-[14px] font-normal bg-white placeholder:text-[#9AB6FC] placeholder:text-[16px] pl-3"
                            />
                            <button className="text-[14px] w-full sm:w-[180px] text-[#265CE1] rounded font-medium bg-white px-2 py-2">
                                Get My Estimate
                            </button>
                        </div>
                    </div>

                    {/* Right Image (hidden on mobile) */}
                    <div className="hidden md:block">
                        <img
                            src={signup2}
                            alt="Signup Illustration"
                            className="h-[310px] w-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <FooterSection />


        </>

    );
};

export default Home;
