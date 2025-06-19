import "../styles/animation.css";

const Success = () => {

    const handleRipple = (e: any) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = 'absolute bg-white bg-opacity-30 rounded-full transform scale-0 animate-ping';

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    return (

        <div className="gradient-bg min-h-screen overflow-hidden relative mt-4">
            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    ['1/4', 'bg-yellow-400', '0s'],
                    ['1/3', 'bg-pink-400', '0.5s'],
                    ['1/2', 'bg-blue-400', '1s'],
                    ['2/3', 'bg-green-400', '1.5s'],
                    ['3/4', 'bg-purple-400', '2s'],
                    ['1/5', 'bg-red-400', '0.3s'],
                    ['4/5', 'bg-indigo-400', '1.8s'],
                ].map(([left, color, delay], i) => (
                    <div
                        key={i}
                        className={`confetti absolute top-0 left-${left} w-2 h-2 ${color} rounded`}
                        style={{ animationDelay: delay }}
                    />
                ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="float absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
                <div className="float absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-5 rounded-full" style={{ animationDelay: '-2s' }}></div>
                <div className="float absolute bottom-32 left-1/4 w-12 h-12 bg-white bg-opacity-15 rounded-full" style={{ animationDelay: '-4s' }}></div>
                <div className="float absolute top-1/3 right-1/3 w-8 h-8 bg-white bg-opacity-20 rounded-full" style={{ animationDelay: '-1s' }}></div>
            </div>

            {/* Main Card */}
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="glass bg-white bg-opacity-10 border border-white border-opacity-20 rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl">
                    {/* Icon */}
                    <div className="bounce-in mb-8">
                        <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="slide-up mb-8 text-black" style={{ animationDelay: '0.2s' }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Success!</h1>
                        <p className="text-xl text-black text-opacity-90 mb-2">Payment Completed</p>
                        <p className="text-black text-opacity-70">Your transaction has been processed successfully</p>
                    </div>

                    {/* Details */}
                    <div className="slide-up glass bg-white bg-opacity-10 rounded-2xl p-6 mb-8 border border-white border-opacity-10" style={{ animationDelay: '0.4s' }}>
                        <div className="flex justify-between items-center mb-4 text-black">
                            <span className="text-black text-opacity-70">Amount</span>
                            <span className="text-2xl font-bold text-black">$129.99</span>
                        </div>
                        <div className="flex justify-between items-center mb-4 text-black">
                            <span className="text-black text-opacity-70">Transaction ID</span>
                            <span className="text-black font-mono text-sm">#TXN-2024-001</span>
                        </div>
                        <div className="flex justify-between items-center text-black">
                            <span className="text-black text-opacity-70">Date</span>
                            <span className="text-black">May 23, 2025</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="slide-up space-y-4" style={{ animationDelay: '0.6s' }}>
                        <button
                            onClick={handleRipple}
                            className="relative w-full bg-white text-purple-600 font-semibold py-4 px-6 rounded-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                        >
                            Download Receipt
                        </button>
                        <button
                            onClick={handleRipple}
                            className="relative w-full bg-transparent border-2 border-white border-opacity-30 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                            Continue Shopping
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="slide-up mt-8 text-black text-opacity-60 text-sm" style={{ animationDelay: '0.8s' }}>
                        <p>Thank you for your purchase!</p>
                        <p>A confirmation email has been sent to your inbox.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Success