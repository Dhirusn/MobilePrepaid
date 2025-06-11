
const Navbar = () => {
    return (
        <nav className="w-full text-white py-4 px-8 flex justify-between items-center text-sm font-medium relative bg-[#5300ef] text-white">
            <div className="text-2xl font-bold tracking-wide">cartela.info</div>
            <ul className="hidden md:flex gap-6">
                <li>Home</li>
                <li>Operators</li>
                <li>Packages</li>
                <li>Credit Transfer</li>
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