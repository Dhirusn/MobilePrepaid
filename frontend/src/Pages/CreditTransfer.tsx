import { Zap } from "lucide-react";
import { useState } from "react";

const CreditTransfer = () => {

    const [country, setCountry] = useState('Afghanistan');
    const [operator, setOperator] = useState('');
    const [phone, setPhone] = useState(0);
    const [amount, setAmount] = useState(0);

    const amounts = [
        { received: '5 EUR', charged: '6.17$' },
        { received: '5.95 EUR', charged: '7$' },
        { received: '7.14 EUR', charged: '8$' },
        { received: '9.52 EUR', charged: null },
        { received: '11 EUR', charged: '13$' },
        { received: '20 EUR', charged: '21$' },
    ];

    return (
        <>
            <div className="bg-[#5300ef] h-[30vh] w-full mt-16">
                <div className="w-full md:w-[70%] m-auto ">
                    <h2 className="text-4xl font-bold text-white">Credit Transfer</h2>
                </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md space-y-6 w-full md:w-[70%] m-auto relative bottom-20 md:bottom-42">


                {/* Country Dropdown */}
                <div>
                    <label className="block mb-1 font-medium">Country</label>
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                        <option>Afghanistan</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>

                {/* Operator Selection */}
                <div>
                    <label className="block mb-1 font-medium">Operator</label>
                    <div className="grid grid-cols-3 mt-2 gap-4">
                        {[
                            'https://res.cloudinary.com/djcni3ioh/image/upload/v1749722277/Freelancer/MobilePrepaid/orange-Cx5kTvgo_ahgzgs.webp',
                            'https://res.cloudinary.com/djcni3ioh/image/upload/v1749722277/Freelancer/MobilePrepaid/vodafone-l20nFlOT_q0fvmi.webp',
                            'https://res.cloudinary.com/djcni3ioh/image/upload/v1749722277/Freelancer/MobilePrepaid/telekom-DJyOyqOP_ronkpd.png'
                        ].map((op) => (
                            <button
                                key={op}
                                onClick={() => setOperator(op)}
                                className={`p-2 md:p-4 border  rounded ${operator === op ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                    }`}
                            >
                                <img src={op} className="object-contain h-16" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Phone Number Input */}
                <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                        type="text"
                        placeholder="+40 ex: XXX XXX XXX"
                        value={phone}
                        onChange={(e:any) => setPhone(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                {/* Amount Selection */}
                <div>
                    <label className="block mb-1 font-medium">Amount</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                        {amounts.map((amt, index) => (
                            <button
                                key={index}
                                onClick={() => setAmount(index)}
                                className={`border p-3 rounded text-left border-gray-300 opacity-70 ${amount === index ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'
                                    }`}
                            >
                                <div className="text-sm text-blue-600 font-medium">Amount received: {amt.received}</div>
                                <div className="text-xs text-gray-500">incl. local taxes {amt.received} Net</div>
                                <div className="text-xs text-gray-600 mt-1">Amount charged: {amt.charged}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recharge Button */}

                <button disabled className="mt-4 p-3 rounded font-bold w-full md:w-64 bg-gray-300 text-gray-500">
                    <p className="flex justify-center gap-1">
                        <Zap />
                        Recharge Now
                    </p>
                </button>
            </div>
        </>

    )
}

export default CreditTransfer