import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="w-full text-white py-4 px-8 flex justify-between items-center text-sm font-medium relative bg-[#5300ef]">
            <div className="text-2xl font-bold tracking-wide">cartela.info</div>
            <ul className="hidden md:flex gap-6">
                <Link to={"/"}>
                    <li>Home</li>
                </Link>


                <li className="relative group">
                    <span className="cursor-pointer">Operators</span>
                    <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg mt-2 z-10 cursor-pointer">
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Orange</a></li>
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Vodafone</a></li>
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Telekom</a></li>
                    </ul>
                </li>


                <li className="relative group">
                    <span className="cursor-pointer">Packages</span>
                    <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg mt-2 z-10 cursor-pointer">
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Orange</a></li>
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Vodafone</a></li>
                        <li><a className="block px-4 py-2 hover:bg-gray-300">Telekom</a></li>
                    </ul>
                </li>
                <Link to={"/credit-transfer"}>
                    <li>Credit Transfer</li>
                </Link>
                <li>International Cards</li>
                <li>Gold</li>
                <li>Numbers</li>
                <li>How to Recharge & Pay</li>
                <li>FAQ</li>
                <li>News</li>
            </ul>

            <div className="flex items-center gap-3">
                <span className="text-xs px-2 py-1 bg-white text-black rounded">VIP</span>
                <span>🌐 En</span>
            </div>
        </nav>
    )
}

export default Navbar