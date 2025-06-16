import { BatteryCharging } from "lucide-react";
import { useEffect, useState } from "react";
import ChargingOptions from "../components/ChargingOptions";
import { useAppSelector } from "../lib/hook";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [mobile, setMobile] = useState();
    const [amount, setAmount] = useState<number>();
    const { rechargeAmt } = useAppSelector((x: RootState) => x.rechargeSlice);
    const navigate = useNavigate();

    useEffect(() => {
        if (rechargeAmt) {
            setAmount(parseInt(rechargeAmt))
        }
    }, [rechargeAmt]);
    const scrollToTop = (route: string) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        navigate(`operators/${route}`)
    };

    return (
        <div className="min-h-screen font-sans border">
            {/* Hero Section */}
            <div className="bg-[#5300ef] text-white">

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

            {/* Info Steps Section */}
            <div className="bg-black text-white text-center py-12">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">Recharge your PrePay card now</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-18 max-w-5xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <img className="h-28 sm:h-52 mb-6" src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749621982/Freelancer/MobilePrepaid/step1-ABdtiOld_1_fh4eii.png" />
                        <h3 className="text-xl sm:text-4xl text-gray-100 mt-3 mb-3 ">
                            ENTER NUMBER
                        </h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img className="h-28 sm:h-52 mb-6" src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749621982/Freelancer/MobilePrepaid/step2-DsgWATYM_ojwmev.webp" />
                        <h3 className="text-xl sm:text-4xl text-gray-100 mt-3 mb-3 ">
                            CHOOSE AMOUNT
                        </h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img className="h-28 sm:h-52 mb-6" src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749622279/Freelancer/MobilePrepaid/step3-BzMfwEr-_bdss75.png" />
                        <h3 className="text-xl sm:text-4xl text-gray-100 mt-3 mb-3 ">
                            CHECK THE DATA
                        </h3>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img className="h-28 sm:h-52 mb-6" src="https://res.cloudinary.com/djcni3ioh/image/upload/v1749621981/Freelancer/MobilePrepaid/step4-DrNogxlb_ucl5le.webp" />
                        <h3 className="text-xl sm:text-4xl text-gray-100 mt-3 mb-3 ">
                            PAY
                        </h3>
                    </div>
                </div>
            </div>

            {/* Charging Sections */}

            <ChargingOptions
                title={"Telekom Charging"}
                titleTextColor="text-pink-600"
                itemTextColor="text-pink-600"
                itemTextHoverColor="group-hover:text-white"
                midTextColor="text-pink-500"
                mainBorderColorValue="border-red-700"
                midBorderColorValue="border-red-700"
                bgColorValue="hover:bg-red-500"
                scrollToTop={() => scrollToTop("Telekom")}
            />
            <ChargingOptions
                title={"Orange Charging"}
                titleTextColor="text-orange-600"
                itemTextColor="text-orange-600"
                itemTextHoverColor="group-hover:text-white"
                midTextColor="text-orange-500"
                mainBorderColorValue="border-orange-700"
                midBorderColorValue="border-orange-700"
                bgColorValue="hover:bg-orange-500"
                scrollToTop={() => scrollToTop("Orange")}
            />
            <ChargingOptions
                title={"Vodafone Charging"}
                titleTextColor="text-red-600"
                itemTextColor="text-red-600"
                itemTextHoverColor="group-hover:text-white"
                midTextColor="text-red-500"
                mainBorderColorValue="border-red-700"
                midBorderColorValue="border-red-700"
                bgColorValue="hover:bg-red-600"
                scrollToTop={() => scrollToTop("Vodafone")}
            />
        </div>
    )
}

export default Home


export const LogoIcon = () => {
    return (
        <div className="w-24 mr-2">
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