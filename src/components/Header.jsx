import React, { useRef } from "react";
import amico from "../assets/amico.png";
import barChart from "../assets/barChart.png";
import vector6 from "../assets/Vector6.png";
import vector4 from "../assets/Vector4.png";
import brokenCoin from "../assets/broken-coin.png";
import Sun from "../assets/Sun.png";
import pana from "../assets/pana.png";
import vector from "../assets/Vector.png";
import cloudVector from "../assets/cloudVector.png";
import whiteCloud from "../assets/whiteCloud.png";
import amico1 from "../assets/amico1.png";
import amico2 from "../assets/amico2.png";
import amico3 from "../assets/amico3.png";
import rafiki from "../assets/rafiki.png";
import FooterSection from "./FooterSection";
import signup from "../assets/sign-up.png";
import Navbar from "./Navbar";




import { useEffect } from "react";

const Headder = () => {
    const solutionRef = useRef(null);

    const handleScroll = () => {
        if (solutionRef.current) {
            solutionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    useEffect(() => {
        const onScroll = () => {
            const section = document.getElementById("our-solution");
            if (window.scrollY > 300) {
                section?.classList.remove("hidden");
                section?.classList.add("opacity-100");
            } else {
                section?.classList.add("hidden");
                section?.classList.remove("opacity-100");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <Navbar />
            <div className="w-full bg-white overflow-x-hidden">

                <div className="relative w-full min-h-[724px] bg-white flex flex-col items-center">
                    {/* Backgrounds */}
                    <img
                        src={vector6}
                        alt="Left background"
                        className="hidden lg:block absolute left-[-259px] top-[208px] w-[852px] h-[515px] rotate-[360.71deg] object-contain z-0"
                    />
                    <img
                        src={vector4}
                        alt="Right background"
                        className="hidden lg:block absolute right-0 top-0 h-full object-contain z-0"
                    />

                    {/* Top Section: Title + Subtext */}
                    <div className="relative z-10 mt-12 lg:absolute lg:top-[25px] lg:left-[213px] flex flex-col gap-2 items-center lg:items-start px-4 lg:px-0 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[100%] font-bold font-['IBM_Plex_Serif'] text-[#265CE1]">
                            How EQTY LYFE Works
                        </h1>
                        <p className="text-base sm:text-lg lg:text-[20px] font-normal text-gray-900 max-w-md lg:max-w-[582px] font-['Inter']">
                            EQTY LYFE is bringing new possibilities for homeowners to utilize their equity.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-between w-full px-4 mt-12 lg:mt-0 lg:absolute lg:top-[230px] gap-10 lg:gap-0">
                        {/* Left side - Before EQTY */}
                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-[250px]">
                            <div className="relative flex gap-2 items-center justify-center lg:justify-start mb-2">
                                <img
                                    src={barChart}
                                    alt="Bar Chart"
                                    className="w-[80px] sm:w-[100px] lg:w-[106px] h-auto rounded-md z-10"
                                />
                                <img
                                    src={brokenCoin}
                                    alt="Broken Coin"
                                    className="w-[40px] pt-[139px] sm:w-[48px] h-auto z-10"
                                />
                            </div>
                            <h4 className="text-[#265CE1] font-extrabold text-xl mb-2">Before EQTY LYFE</h4>
                            <p className="text-base max-w-sm mb-4 font-inter text-[#6B7280] font-semibold">
                                The traditional method of releasing your home equity typically involves either taking
                                out a loan, which requires repayment with interest, or selling your entire home.
                            </p>
                        </div>

                        {/* Right side - After EQTY */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8 lg:pr-[250px]">
                            <div className="mb-2 flex justify-center lg:justify-start w-full">
                                <img
                                    src={amico}
                                    alt="Amico"
                                    className="w-[300px] md:w-[360px] lg:w-[180px] h-auto"
                                />
                            </div>
                            <h4 className="text-[#265CE1] text-2xl font-extrabold mb-2">After EQTY LYFE</h4>
                            <p className="text-base text-[#6B7280] max-w-sm mb-4 font-semibold">
                                With EQTY LYFE, you can now convert your home equity into a valuable resource by
                                utilizing our various investment options.
                            </p>

                            {/* Input + Button */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Enter Home Address"
                                    className="w-full text-[#9AB6FC] sm:w-[233px] h-10 px-3 border border-gray-400 rounded-md text-base"
                                />
                                <button
                                    onClick={handleScroll}
                                    className="w-full sm:w-[143px] h-10 bg-[#265CE1] text-white font-medium text-sm rounded-md"
                                >
                                    Get My Estimate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ========== Layer 2: Our Solution Section ========== */}
                <div
                    id="solution"
                    ref={solutionRef}
                    className="relative w-full h-[524px] bg-[#EEF3FF] flex justify-center items-center"
                >
                    {/* Sun image inside this section */}
                    {/* Sun Image */}
                    <img
                        src={Sun}
                        alt="Sun"
                        className="absolute top-[61px] right-[60px] w-[120px] sm:w-[148px] sm:h-[148px]"
                    />

                    <div
                        style={{
                            width: "291px",
                            height: "48px",
                            position: "absolute",
                            top: "54px",
                            left: "213px",

                            fontFamily: "'IBM Plex Serif', serif",
                            fontWeight: 600,
                            fontSize: "48px",
                            lineHeight: "48px",
                            letterSpacing: "-1.2%",
                            color: "#265CE1",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        Our Solution
                    </div>


                    <img
                        src={pana}
                        alt="Descriptive Alt Text"
                        className="absolute w-[383px] h-[301.9px] top-[222px] left-[373px] opacity-100 rotate-0"
                    />
                    <img
                        src={vector}
                        alt="Descriptive Alt"
                        className="absolute w-[126px] h-[71px] top-[198px] left-[188px] opacity-100 "
                    />
                    <img
                        src={vector}
                        alt="Descriptive Alt"
                        className="absolute w-[126px] h-[71px] top-[147px] left-[278px] opacity-100 "
                    />
                    <img
                        src={cloudVector}
                        alt="Descriptive Alt"
                        className="absolute w-[126px] h-[71px] top-[174px] left-[247px] opacity-100 rotate180"
                    />


                    <img
                        src={vector}
                        alt="Descriptive Alt"
                        className="absolute w-[126px] h-[71px] top-[161px] left-[790px] opacity-100 "
                    />
                    <img
                        src={vector}
                        alt="Descriptive Alt"
                        className="absolute w-[126px] h-[71px] top-[218px] left-[1085px] opacity-100 "
                    />

                    <img
                        src={whiteCloud}
                        alt="Descriptive Alt"
                        className="absolute w-[332px] h-[182px] top-[143px] left-[817px] opacity-100"
                    />

                    <div className="absolute top-[190px] left-[850px] flex flex-col items-center text-center z-10">
                        <h2 className="w-[150px] h-[36px] text-[var(--Main-Color,#265CE1)] text-[28px] font-bold font-['IBM_Plex_Serif'] leading-[100%] flex items-center justify-center">
                            Lump Sum
                        </h2>

                        <div className="w-[225px] h-[75px] mt-2 text-[#265CE1] font-inter font-normal text-[12px] leading-[100%]">
                            Many homeowners have untapped home value and worry about accessing their equity.
                            EQTY LYFE helps you liquidate your equity and turn it into cash to achieve your financial goals.
                        </div>
                    </div>




                </div>

                {/* ========== Layer 3: EQTY LYFE Section Placeholder ========== */}
                <div
                    id="layer3"
                    className="relative w-full max-w-[916px] mx-auto px-4 sm:px-6 lg:px-0 mt-[82px]"
                >
                    {/* Heading */}
                    <h1 className="text-[32px] sm:text-[48px] font-semibold font-['IBM_Plex_Serif'] leading-[1.2] tracking-[-0.012em] text-[#265CE1] text-center sm:text-left">
                        The EQTY LYFE Process
                    </h1>

                    {/* Shared card styles: Responsive + Stacked on mobile */}
                    {[1, 2, 3, 4].map((_, idx) => (
                        <div
                            key={idx}
                            className={`mt-[40px] w-full bg-[#FFEDD5] rounded-[10px] flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 gap-[20px]`}
                        >
                            {/* Cards alternate image/text per card index */}
                            {idx % 2 === 0 ? (
                                <>
                                    {/* Text on left */}
                                    <div className="max-w-full sm:max-w-[300px] text-right sm:text-right">
                                        <h2 className="text-[24px] sm:text-[32px] font-bold font-['IBM_Plex_Serif'] text-[#265CE1] leading-[36px] tracking-[-0.012em] mb-[15px]">
                                            {idx === 0 && 'Our Focus'}
                                            {idx === 2 && 'Investing Partnership'}
                                        </h2>
                                        <p className="text-[14px] sm:text-[16px] font-normal font-['Inter'] leading-snug text-[#111827]">
                                            {idx === 0 &&
                                                'At Eqty Lyfe, we help homeowners register and manage their home equity effectively. By partnering with us, you gain access to opportunities and strategies tailored to maximize your home equity and achieve your financial goals.'}
                                            {idx === 2 &&
                                                "EQTY LYFE's investment method partners with major financial institutions to securitize homeowners' equity and invest it in trade markets. For example, the S&P offers strong historical performance and full transparency."}
                                        </p>
                                    </div>

                                    {/* Serial Number */}
                                    <div className="w-[60px] sm:w-[77px] h-[60px] sm:h-[77px] bg-white rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-[28px] sm:text-[40px] font-bold font-['IBM_Plex_Serif'] text-[#265CE1] leading-[100%]">
                                            {idx + 1}
                                        </span>
                                    </div>

                                    {/* Image */}
                                    <div className="w-full sm:w-[250px] h-[200px] sm:h-[250px]">
                                        <img
                                            src={idx === 0 ? amico1 : amico3}
                                            alt={`EQTY LYFE Step ${idx + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Image */}
                                    <div className="w-full sm:w-[250px] h-[200px] sm:h-[250px]">
                                        <img
                                            src={idx === 1 ? amico2 : rafiki}
                                            alt={`EQTY LYFE Step ${idx + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Serial Number */}
                                    <div className="w-[60px] sm:w-[77px] h-[60px] sm:h-[77px] bg-white rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-[28px] sm:text-[40px] font-bold font-['IBM_Plex_Serif'] text-[#265CE1] leading-[100%]">
                                            {idx + 1}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="max-w-full sm:max-w-[300px] text-left">
                                        <h2 className="text-[24px] sm:text-[32px] font-bold font-['IBM_Plex_Serif'] text-[#265CE1] leading-[36px] tracking-[-0.012em] mb-[15px]">
                                            {idx === 1 && 'Financial Institution'}
                                            {idx === 3 && 'Equity Selling Option'}
                                        </h2>
                                        <p className="text-[14px] sm:text-[16px] font-normal font-['Inter'] leading-snug text-[#111827]">
                                            {idx === 1 &&
                                                "At Eqty Lyfe, we focus on securitizing homeowners' equity by working with major financial institutions. This collaboration allows us to effectively secure your home equity and identify the most suitable investment strategy tailored to your financial objectives."}
                                            {idx === 3 &&
                                                "At Eqty Lyfe, we focus on securitizing homeowners' equity by working with major financial institutions. This collaboration allows us to effectively secure your home equity and identify the most suitable investment strategy tailored to your financial objectives."}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>



                {/* ========== Layer 4: sign in ========== */}
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
                                src={signup}
                                alt="Signup Illustration"
                                className="h-[310px] w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                <FooterSection />
                {/* <div className="bg-[#265CE1] w-full h-[292px] mt-[50px]">
                Footer
                </div> */}

            </div>
        </>
    );
};

export default Headder;
