import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-12 h-12" />
                    <a href="#" className="font-bold text-xl ml-4">
                        Amal Academy
                    </a>
                </div>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white text-2xl focus:outline-none"
                >
                    ☰
                </button>
                <ul className="hidden lg:flex gap-8">
                    <li><a href="#" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="hover:text-gray-300">About</a></li>
                    <li><a href="#" className="hover:text-gray-300">Courses</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-56 bg-gray-900 text-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                >
                    ✖
                </button>
                <ul className="flex flex-col items-center mt-20 space-y-6">
                    <li><a href="#" className="text-lg hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="text-lg hover:text-gray-400">About</a></li>
                    <li><a href="#" className="text-lg hover:text-gray-400">Courses</a></li>
                    <li><a href="#" className="text-lg hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
