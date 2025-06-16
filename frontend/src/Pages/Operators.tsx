import { BatteryCharging } from "lucide-react"
import { LogoIcon } from "./Home"
import { useState } from "react";
import ChargingOptions from "../components/ChargingOptions";
import { useParams } from "react-router-dom";

const Operators = () => {
    const [mobile, setMobile] = useState();
    const [amount, setAmount] = useState();
    const { opt } = useParams();

    const bgColor =
        opt === "Orange"
            ? "bg-orange-500"
            : opt === "Vodafone"
                ? "bg-red-600"
                : opt === "Telekom"
                    ? "bg-purple-700"
                    : "bg-gray-500";

    return (
        <div className="min-h-screen bg-black text-white font-sans border">
            {/* Hero Section */}
            <div className={`${bgColor} text-white`}>

                <div className="px-6 md:px-16 pt-20 pb-16 grid md:grid-cols-2 items-center gap-10">
                    <div>
                        <div className="flex flex-col items-start mb-8">
                            <div className="items-center hidden md:flex">
                                <LogoIcon />
                                <span className="text-6xl font-bold">cartela.info</span>
                            </div>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold mb-1">Recharge your PrePay card</h1>
                        <p className="text-xl md:text-3xl font-bold mb-1">Recharge your card online.</p>
                        <p className="text-xl md:text-3xl font-bold mb-1">Instantly, without an account.</p>
                        <div className="flex gap-3 mt-6">
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622398/Freelancer/MobilePrepaid/visa-E8j765w__o3wmsk.webp" alt="Visa" className="w-16" />
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622397/Freelancer/MobilePrepaid/mastercard-B8CIIhPs_iys73m.webp" alt="MasterCard" className="w-16" />
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622396/Freelancer/MobilePrepaid/maestro-Cfb98ZAI_tdc6uk.webp" alt="Maestro" className="w-16" />
                        </div>
                    </div>

                    {/* Mobile Recharge Box */}
                    <div className="border-2 border-white w-full md:max-w-xs mx-auto rounded-[30px] p-1 bg-black">
                        <div className="text-black rounded-[30px] w-full max-w-xs mx-auto shadow-md border-2 border-black bg-[#5300ef]">
                            <div className="flex items-center mb-5 text-white w-full p-2 ml-3">
                                <BatteryCharging size={32} />
                                <h3 className="font-semibold text-2xl text-white ml-1"> Mobile Recharge</h3>
                            </div>
                            <div className="bg-white rounded-[30px] p-5">
                                <label className="font-semibold text-2xl block mb-1">Enter number</label>
                                <input
                                    type="text"
                                    value={mobile}
                                    onChange={(e: any) => setMobile(e.target.value)}
                                    placeholder="📱 Enter your phone number"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <label className="font-semibold text-2xl block mb-1">Put your amount</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e: any) => setAmount(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <div className="flex items-start mb-4 justify-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="mt-1 mr-2 accent-indigo-600 h-4 w-4"
                                    />
                                    <label htmlFor="terms" className="text-lg text-gray-600">
                                        Accept <a href="#" className="text-indigo-600 underline">terms and conditions</a>
                                    </label>
                                </div>

                                <button

                                    className={`w-full py-2 rounded-md font-semibold ${amount! > 0 && mobile !== null
                                        ? 'bg-[#5300ef] text-white cursor-pointer hover:bg-pink-700'
                                        : 'bg-gray-400 text-white cursor-not-allowed'
                                        }`}
                                    disabled={!(amount! > 0 && mobile !== null)}

                                >
                                    Quick Recharge
                                </button>

                                <button className="mt-3 text-pink-600 border border-pink-600 w-full py-2 rounded-md text-sm font-semibold hover:bg-pink-50">
                                    Load more numbers
                                </button>



                                {
                                    amount! > 0 && mobile !== null ?
                                        (
                                            <div className="mt-2 flex flex-col gap-1">
                                                <p className="text-sm text-gray-500">Telephone operator: {"test"}</p>
                                                <p className="text-sm text-gray-500">Number you are recharging: {mobile}</p>
                                                <p className="text-sm text-gray-500">Credit value: {amount}</p>
                                                <p className="text-sm text-gray-500">Active period: 30 days</p>
                                                <p className="text-sm text-gray-500">Grace period: 300 days</p>
                                                <p className="text-sm text-gray-500">Total payment:</p>
                                            </div>
                                        )
                                        : (
                                            <p className="text-xs text-gray-600 mt-4 flex items-center">
                                                <span className="mr-1">ℹ️</span> Price will appear once all fields are filled.
                                            </p>
                                        )
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* Charging Sections */}
            <ChargingOptions
                title={opt!}
                titleTextColor="pink-700"
                itemTextColor="pink-700"
                itemTextHoverColor="white"
                midTextColor="pink-400"
                mainBorderColorValue="red-700"
                midBorderColorValue="pink-700"
                bgColorValue="pink-500"
            />
        </div>
    )
}

export default Operators