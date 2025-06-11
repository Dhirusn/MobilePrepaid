
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 text-sm py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Left Side - Logo */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center">
                        <LogoIcon />
                        <span className="text-4xl font-bold">cartela.info</span>
                    </div>
                </div>

                {/* Center Links */}
                <div className="flex gap-12 flex-wrap text-lg">
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:underline">FAQ</a>
                        <a href="#" className="hover:underline">How do I Recharge & Pay?</a>
                        <a href="#" className="hover:underline">Contact us</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:underline">Terms and conditions</a>
                        <a href="#" className="hover:underline">Privacy policy</a>
                        <a href="#" className="hover:underline">Cookie Policy</a>
                        <a href="#" className="hover:underline">Return policy</a>
                    </div>
                </div>
            </div>

            {/* Bottom Notice */}
            <div className="text-center text-gray-500 text-lg mt-8 px-4">
                <p>Cartela.info is an independent service and is not affiliated with other resellers.</p>
                <p className="mt-1">Copyright © 2025 cartela.info. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

 const LogoIcon = () => {
    return (
        <div className="w-18 mr-2">
            <svg viewBox="0 0 72 54" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27" cy="3" r="3" fill="#111" />
                <circle cx="39" cy="3" r="3" fill="#111" />
                <circle cx="51" cy="3" r="3" fill="#111" />
                <circle cx="15" cy="15" r="3" fill="#111" />
                <circle cx="27" cy="15" r="3" fill="#111" />
                <circle cx="39" cy="15" r="3" fill="#111" />
                <circle cx="3" cy="27" r="3" fill="#111" />
                <circle cx="15" cy="27" r="3" fill="#111" />
                <circle cx="27" cy="27" r="3" fill="#111" />
                <circle cx="39" cy="27" r="3" fill="#111" />
                <circle cx="51" cy="27" r="4" fill="#111" />
                <circle cx="63" cy="27" r="3" fill="#111" />
                <circle cx="15" cy="39" r="3" fill="#111" />
                <circle cx="27" cy="39" r="3" fill="#111" />
                <circle cx="39" cy="39" r="3" fill="#111" />
                <circle cx="27" cy="51" r="3" fill="#111" />
                <circle cx="39" cy="51" r="3" fill="#111" />
                <circle cx="51" cy="51" r="3" fill="#111" />
            </svg>
        </div>
    );
};