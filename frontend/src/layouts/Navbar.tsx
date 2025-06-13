import { BadgeDollarSign, Box, CardSim, CircleHelp, CircleX, Gem, Globe, HandCoins, House, SquareMenu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showOperators, setShowOperators] = useState(false);
    const [showPackages, setShowPackages] = useState(false);
    return (
        <>
            <nav className="w-full text-white py-4 px-6 flex justify-between items-center text-sm font-medium relative bg-[#5300ef]">
                <div className="flex text-2xl font-bold tracking-wide"><LogoIcon /> cartela.info</div>



                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <Link to="/"><li>Home</li></Link>
                    <li className="relative group">
                        <span className="cursor-pointer">Operators</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg z-10 cursor-pointer">
                            <li><Link to="/operators/Orange" className="block px-4 py-2 hover:bg-gray-300">Orange</Link></li>
                            <li><Link to="/operators/Vodafone" className="block px-4 py-2 hover:bg-gray-300">Vodafone</Link></li>
                            <li><Link to="/operators/Telekom" className="block px-4 py-2 hover:bg-gray-300">Telekom</Link></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="cursor-pointer">Packages</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg z-10 cursor-pointer">
                            <li><Link to="/packages/Orange" className="block px-4 py-2 hover:bg-gray-300">Orange</Link></li>
                            <li><Link to="/packages/Vodafone" className="block px-4 py-2 hover:bg-gray-300">Vodafone</Link></li>
                            <li><Link to="/packages/Telekom" className="block px-4 py-2 hover:bg-gray-300">Telekom</Link></li>
                        </ul>
                    </li>
                    <Link to="/credit-transfer"><li>Credit Transfer</li></Link>
                    <li>International Cards</li>
                    <li>Gold</li>
                    <li>Numbers</li>
                    <li>How to Recharge & Pay</li>
                    <li>FAQ</li>
                </ul>

                {/* Language & VIP */}
                <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-white text-black rounded md:block hidden">VIP</span>
                    <span>🌐 En</span>
                </div>
                <div className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(true)}>
                    <SquareMenu />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#2b00a5] z-50 p-5 overflow-y-auto">
                    <div className="flex justify-between items-center mb-6 text-white text-xl font-bold">
                        <div>cartela.info</div>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <CircleX />
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 text-white">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center gap-3"><House /> Home</Link>

                        {/* Operators Dropdown */}
                        <div className="bg-[#3c00ce] rounded-xl px-4 py-3">
                            <button onClick={() => setShowOperators(!showOperators)} className="w-full flex justify-between items-center">
                                <span className="flex items-center gap-3"><CardSim /> Operators</span>
                                <span>{showOperators ? "▲" : "▼"}</span>
                            </button>
                            {showOperators && (
                                <ul className="mt-2 pl-6">
                                    <li><Link to="/operators/Orange" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Orange</Link></li>
                                    <li><Link to="/operators/Vodafone" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Vodafone</Link></li>
                                    <li><Link to="/operators/Telekom" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Telekom</Link></li>
                                </ul>
                            )}
                        </div>

                        {/* Packages Dropdown */}
                        <div className="bg-[#3c00ce] rounded-xl px-4 py-3">
                            <button onClick={() => setShowPackages(!showPackages)} className="w-full flex justify-between items-center">
                                <span className="flex items-center gap-3"><Box /> Packages</span>
                                <span>{showPackages ? "▲" : "▼"}</span>
                            </button>
                            {showPackages && (
                                <ul className="mt-2 pl-6">
                                    <li><Link to="/packages/Orange" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Orange</Link></li>
                                    <li><Link to="/packages/Vodafone" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Vodafone</Link></li>
                                    <li><Link to="/packages/Telekom" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Telekom</Link></li>
                                </ul>
                            )}
                        </div>

                        <Link to="/credit-transfer" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center gap-3"><BadgeDollarSign /> Credit Transfer</Link>
                        <Link to="/international-cards" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center gap-3"><Globe /> International Cards</Link>
                        <Link to="/gold-numbers" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center justify-between">
                            <span className="flex items-center gap-3"><Gem /> Gold Numbers</span>
                            <span className="text-xs bg-white text-black px-2 py-1 rounded">VIP</span>
                        </Link>
                        <Link to="/how-to-recharge" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center gap-3"><HandCoins /> How to Recharge & Pay</Link>
                        <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#3c00ce] rounded-xl px-4 py-3 flex items-center gap-3"><CircleHelp /> FAQ</Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar




const LogoIcon = () => {
    return (
        <div className="w-10 mr-2">
            <svg viewBox="0 0 72 54" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27" cy="3" r="3" fill="#FFFFFF" />
                <circle cx="39" cy="3" r="3" fill="#FFFFFF" />
                <circle cx="51" cy="3" r="3" fill="#FFFFFF" />
                <circle cx="15" cy="15" r="3" fill="#FFFFFF" />
                <circle cx="27" cy="15" r="3" fill="#FFFFFF" />
                <circle cx="39" cy="15" r="3" fill="#FFFFFF" />
                <circle cx="3" cy="27" r="3" fill="#FFFFFF" />
                <circle cx="15" cy="27" r="3" fill="#FFFFFF" />
                <circle cx="27" cy="27" r="3" fill="#FFFFFF" />
                <circle cx="39" cy="27" r="3" fill="#FFFFFF" />
                <circle cx="51" cy="27" r="4" fill="#FFFFFF" />
                <circle cx="63" cy="27" r="3" fill="#FFFFFF" />
                <circle cx="15" cy="39" r="3" fill="#FFFFFF" />
                <circle cx="27" cy="39" r="3" fill="#FFFFFF" />
                <circle cx="39" cy="39" r="3" fill="#FFFFFF" />
                <circle cx="27" cy="51" r="3" fill="#FFFFFF" />
                <circle cx="39" cy="51" r="3" fill="#FFFFFF" />
                <circle cx="51" cy="51" r="3" fill="#FFFFFF" />
            </svg>
        </div>
    );
};