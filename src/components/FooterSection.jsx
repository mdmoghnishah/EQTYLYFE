import React from 'react';
import { FaLinkedinIn, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/Logo.png';

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#265CE1] text-white py-10 px-4">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
    
    {/* Left Section - Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
      <div>
        <h4 className="text-[14px] font-semibold mb-2 font-serif">Maximize Your Equity</h4>
        <ul className="space-y-1 text-[12px]">
          <li>How It Works</li>
          <li>HEI?</li>
          <li>FAQ's</li>
        </ul>
      </div>

      <div>
        <h4 className="text-[14px] font-semibold mb-2 font-serif">Why EQTY LYFE?</h4>
        <ul className="space-y-1 text-[12px]">
          <li>Achieve Your Goals</li>
          <li>Lump Sum</li>
        </ul>
      </div>

      <div>
        <h4 className="text-[14px] font-semibold mb-2 font-serif">Learn More</h4>
        <ul className="space-y-1 text-[12px]">
          <li>Dashboard</li>
          <li>Calculators</li>
          <li>Blog</li>
        </ul>
      </div>

      <div>
        <h4 className="text-[14px] font-semibold mb-2 font-serif">About</h4>
        <ul className="space-y-1 text-[12px]">
          <li>Our Team</li>
          <li>Careers</li>
          <li>Partner With Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>

    {/* Right Section - Newsletter */}
    <div className="flex-1 flex flex-col items-start lg:items-end lg:text-left">
      <h4 className="text-center self-center text-[14px] font-semibold ml-12 mb-2 font-inter  ">Newsletter</h4>
      <p className="text-[12px] mb-4 max-w-[300px]">
        Get tips, knowledge, and resources to help you learn more about utilizing your home to the max. Sign up today to be the first to learn and also get notified about our upcoming events and product launches!
      </p>

      {/* Email + Button */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4 w-full max-w-[300px]">
        <input
          type="email"
          placeholder="Email"
          className="flex-1 px-3 py-1 text-black text-[12px] rounded bg-white placeholder:text-[#33BD47]"
        />
        <button className="px-4 py-1 bg-[#33BD47] text-white text-[12px] rounded">
          Sign Up
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 justify-start lg:justify-end w-full">
        <FaLinkedinIn className="text-[#33BD47] text-xl hover:text-white cursor-pointer" />
        <FaSquareFacebook className="text-[#33BD47] text-xl hover:text-white cursor-pointer" />
        <FaXTwitter className="text-[#33BD47] text-xl hover:text-white cursor-pointer" />
      </div>
    </div>
  </div>

  {/* Bottom Logo & Text */}
  <div className="flex flex-col items-center mt-10 gap-3 text-center">
    <div className="flex items-center gap-2">
      <img src={logo} alt="EQTY LYFE Logo" className="w-[46px] h-[36px]" />
      <span className="text-[20px] font-semibold uppercase font-Inter">Eqty Lyfe</span>
    </div>
    <p className="text-[12px]">@EQTY LYFE 2025. All Rights Reserved.</p>
  </div>
</footer>

  );
};

export default FooterSection;
