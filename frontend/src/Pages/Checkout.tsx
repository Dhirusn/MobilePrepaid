import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../lib/hook"
import type { RootState } from "../redux/store"

const Checkout = () => {
    const { moileNum, rechargeAmt, operatorName } = useAppSelector((x: RootState) => x.rechargeSlice);
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate("/payment")
    }
    return (
        <>
            <div className="bg-[#5300ef] h-[30vh] w-full mt-16">
                <div className="w-full md:w-[70%] m-auto ">
                    <h2 className="text-4xl font-bold text-white">Payment Steps</h2>
                </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md space-y-6 w-full md:w-[70%] m-auto relative bottom-20 md:bottom-42">
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="space-y-6 col-span-3 border-r-2 p-12">
                        <h2 className="text-red-500 text-2xl font-semibold">Check the data</h2>
                        <p className="text-gray-700 text-sm">Fill in your email address to receive the recharge confirmation.</p>
                        <input type="email" placeholder="Email address" className="w-full border border-gray-300 rounded-md p-3 text-sm" />
                        <div className="space-y-3 text-sm text-gray-700"><label className="flex items-start gap-2 cursor-pointer">
                            <input type="checkbox" className="mt-1" />
                            <span>I wish to receive commercial communications via email and SMS, in compliance with the confidentiality
                                clauses presented in the <a href="#" className="text-blue-500 underline">Privacy Policy</a>.</span></label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" /><span>I want a company invoice.</span></label>
                        </div>
                        <button onClick={handlePayment} className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-md font-semibold">
                            Continue to payment
                        </button>
                    </div>

                    <div className="space-y-6 col-span-2 p-12">
                        <h3 className="text-lg font-semibold text-gray-800">Order summary</h3>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p className="flex justify-between">
                                <span className="font-semibold">Phone number</span>
                                <span>{moileNum}</span></p><p className="flex justify-between">
                                <span className="font-semibold">Operator</span>
                                <span>{operatorName}</span></p>
                            <p className="flex justify-between">
                                <span className="font-semibold">Value</span>
                                <span>{rechargeAmt}</span>
                            </p>
                        </div>
                        <button className="bg-[#fdffff] text-sm py-2 w-full border border-gray-300">+ Load more numbers</button>
                        <div className="border-t pt-4 text-sm text-gray-800 space-y-2"><p className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-orange-600 font-semibold">35.74 RON</span>
                        </p>
                            <p className="flex justify-between">
                                <span className="text-gray-600">VAT</span>
                                <span className="text-orange-600 font-semibold">6.79 RON</span>
                            </p>
                            <p className="flex justify-between border-t pt-2 font-semibold">
                                <span>Total</span><span className="text-orange-600">42.53 RON</span>
                            </p></div><div className="flex gap-1 items-center justify-center mt-4">
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622398/Freelancer/MobilePrepaid/visa-E8j765w__o3wmsk.webp" alt="Visa" className="w-20" />
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622397/Freelancer/MobilePrepaid/mastercard-B8CIIhPs_iys73m.webp" alt="Mastercard" className="w-20" />
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622396/Freelancer/MobilePrepaid/maestro-Cfb98ZAI_tdc6uk.webp" alt="Maestro" className="w-20" />
                        </div>
                        <div className="flex gap-4 items-center justify-center mt-2">
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1750145085/Freelancer/MobilePrepaid/secured-BGjZpBUC_pbpyxg.webp" alt="Secured" className="w-40" />
                            <img src="https://res.cloudinary.com/djcni3ioh/image/upload/v1750145084/Freelancer/MobilePrepaid/mobilpay-BVLv3MSP_ksgz74.webp" alt="Netopia Payment" className="w-40" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout