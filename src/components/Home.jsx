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
import EquityStatsSection from './Stacks';
import FinancialGoalSection from './FinacialGoal';
import HowItWorks from './Worklyfe';
import signup2 from '../assets/signup2.png';
import FooterSection from './footerSection';

const Home = () => {
    return (
        <>
            <Navbar />
            <div class="w-[1222px] h-[385px] mt-[117px] ">
                <div class="w-[369px] h-[329px] mt-[198px] ml-[225px]">
                    <h1 class="w-full text-[40px] size-25 font-[IBM Plex Serif] font-semibold  tracking-normal leading-none text-[#265CE1]">Put your Home Equity to Work</h1>
                    <p class="w-full leading-none size-18 font-inter tracking-normal text-l">Achieve financial freedom through your home equity—no debt, no interest, no monthly payments, just opportunity</p>
                    <div class="w-[384px] h-[40px] gap-8 ">
                        <input type="email"
                            placeholder="Enter Home Address"
                            class="w-[200px] h-[40px] opacity-100 border  border-[#D1D5DB] rounded-[6px] pt-2 pr-[56px] pb-2 pl-3" />
                        <button class="bg-[#265CE1] text-white w-[163px] h-[40px] opacity-100 gap-[10px] rounded-[6px]  px-4 py-2 ">Get my Estimation</button>
                    </div>
                    <div className="absolute w-[667.92px] h-[485.10px] top-[117px] left-[750px] opacity-100">
                        <div className="relative w-full h-full">

                            {/* Sun or Ellipse - Top left */}
                            <img
                                src={Ellipse}
                                alt="Sun"
                                className="absolute top-[70px] left-[-10px] w-[50px] z-0"
                            />

                            {/* Clouds - Top area */}
                            <img
                                src={Clouds}
                                alt="Clouds"
                                className="absolute top-20 left-[130px] w-[400px] z-0"
                            />

                            {/* Birds - Top Right */}
                            <img
                                src={Birds}
                                alt="Birds"
                                className="absolute top-[90px] right-[140px] w-[400px] z-10"
                            />

                            {/* Hand - Base layer */}
                            <img
                                src={Hand}
                                alt="Hand"
                                className="absolute bottom-0 right-0 w-[630.71px] h-[184.65px] z-60"
                            />

                            {/* House - Centered above the hand */}
                            <img
                                src={House}
                                alt="House"
                                className="absolute bottom-[110px] left-[185px] w-[296.88px] h-[254.05px] z-10"
                            />

                            {/* Plants - Around house */}
                            <img
                                src={Plants}
                                alt="Plants"
                                className="absolute bottom-[105px] left-[140px] w-[400px] z-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-[1562px] h-[485px] ml-[50px] flex justify-between items-center p-20 overflow-hidden">
                {/* Background Image */}
                <img
                    src={Ellipse8}
                    alt=""
                    className="absolute top-[150px] left-[-100px] w-[1300px] opacity-100 z-0 pointer-events-none"
                />

                {/* Content */}
                <div className="relative z-10">
                    <img src={coin} alt="" className="w-[500px] mb-20" />
                </div>

                <div className="w-[400px] h-[400px] relative mr-100 z-10">
                    <h2 className="w-full font-inter font-bold text-[40px] text-[#265CE1]">
                        EQTY LYFE’s Solution: Lump Sum
                    </h2>
                    <p className="mt-4 text-black">
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
            <div className="w-full bg-[#265CE1] rounded-[10px] mt-[200px] mb-[50px] px-6 py-10 md:py-0 md:mt-[200px] md:ml-[257px] md:w-[926px] md:h-[253px] md:flex md:justify-between md:items-center md:px-[50px] z-10">
            
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
                            <FooterSection />


        </>

    );
};

export default Home;
