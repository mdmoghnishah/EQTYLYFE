import React, { useState } from 'react';
import Navlogo from '../assets/Navlogo.png';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white/80 backdrop-blur-md text-black py-4 px-6 shadow-md top-0 sticky z-100">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={Navlogo} alt="Eqty Lyfe Logo" className="w-[40px] h-auto" />
                    <span className="text-xl font-bold font-inter text-[#265CE1]">EQTY LYFE</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 font-inter text-sm font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
                        <span>Maximize Your Equity</span>
                        <RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <Link to="/why-eqtylyfe" className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
  <span>Why EQTY LYFE</span>
  <RiArrowDropDownLine className="text-2xl" />
</Link>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
                        <span>About</span><RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
                        <span>Learn More</span><RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-400">
                        <span>Sell Your Home</span>
                    </div>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100">Login</button>
                    <button className="text-white w-[100px] h-[40px] px-4 py-1 font-inter rounded hover:bg-blue-700 bg-[#265CE1]">Sign up</button>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? (
                            <RiCloseLine className="text-2xl text-blue-700" />
                        ) : (
                            <RiMenu3Line className="text-2xl text-blue-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white px-6 py-4 mt-4 shadow-md rounded-lg space-y-4 font-inter text-sm font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
                        <span>Maximize Your Equity</span>
                        <RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
                        <span>Why EQTY LYFE</span><RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
                        <span>About</span><RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
                        <span>Learn More</span><RiArrowDropDownLine className="text-2xl" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500">
                        <span>Sell Your Home</span>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                        <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Login</button>
                        <button className="bg-[#265CE1] text-white px-4 py-2 rounded hover:bg-blue-700">Sign up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
