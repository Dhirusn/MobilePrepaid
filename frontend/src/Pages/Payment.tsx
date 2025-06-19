
const Payment = () => {
    return (

        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Details</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">Mobile Number</label>
                            <input type="tel" placeholder="XX-7000000000" className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-gray-600">Name on Card</label>
                            <input type="text" placeholder="John Doe" className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>

                        <div>
                            <label className="block mb-1 text-sm text-gray-600">Card Number</label>
                            <input type="text" placeholder="1234 5678 9012 3456" className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block mb-1 text-sm text-gray-600">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-1 text-sm text-gray-600">CVC</label>
                                <input type="text" placeholder="123" className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3 rounded-lg transition">Pay $49.99</button>
                    </form>
                </div>

                <div className="bg-gray-50 p-8 border-l border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">Choose Payment Method</h3>

                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/512px-Visa.svg.png" className="h-6 mr-4" alt="Visa" />
                            <p className="text-gray-700 font-medium">Credit / Debit Card</p>
                        </div>

                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition">
                            <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" className="h-6 mr-4" alt="PayPal" />
                            <p className="text-gray-700 font-medium">PayPal</p>
                        </div>

                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="h-6 mr-4" alt="Apple" />
                            <p className="text-gray-700 font-medium">Apple Pay</p>
                        </div>
                    </div>

                    <div className="mt-10 border-t pt-6">
                        <h4 className="text-gray-700 font-semibold mb-2">Order Summary</h4>
                        <div className="flex justify-between text-gray-600">
                            <span>Subscription Plan</span>
                            <span>$49.99</span>
                        </div>
                        <div className="flex justify-between text-gray-600 mt-1">
                            <span>Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-gray-800 mt-4">
                            <span>Total</span>
                            <span>$49.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment