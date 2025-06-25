import { Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import { fetchCountriesAsync, fetchOperatorAsync } from "../redux/reducers/apiAction";
import type { RootState } from "../redux/store";
import type { Country } from "../redux/slices/reloadlySlice";
import type { IGeographicalRechargePlan, IOperatorType } from "../redux/interfaces/operatorType";
import { setMobileNum, setAmount, setOperatorName, setRechargeCurrency, setOperatorId } from "../redux/slices/rechargeSlice";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const CreditTransfer = () => {
    const dispatch = useAppDispatch();
    const [country, setCountry] = useState<Country>();
    const [geoLocation, setGeoLocation] = useState<IGeographicalRechargePlan>();
    const [operator, setOperator] = useState<IOperatorType>();
    const [phone, setPhone] = useState<string>();
    const [amt, setAmt] = useState<number>();
    const { countries, operators, loading } = useAppSelector((x: RootState) => x.reloadlySlice);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCountriesAsync({ args: "" }))
    }, [dispatch]);


    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedName = e.target.value;
        const selectedCountry = countries.find(c => c.name === selectedName);
        setCountry(selectedCountry);
        if (selectedCountry?.isoName) {
            dispatch(fetchOperatorAsync({ isoName: selectedCountry.isoName }))
        }
    };

    const handleGeolocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGeo = e.target.value;
        console.log(selectedGeo)
        const selectGeoLocation = operator?.geographicalRechargePlans.find(c => c.locationName === selectedGeo);
        setGeoLocation(selectGeoLocation)
        console.log(selectGeoLocation)
    }

    const handleRechargeNow = () => {
        if (phone) {
            dispatch(setMobileNum(phone));
        }
        if (amt) {
            dispatch(setAmount(amt))
        }
        if (amt && phone) {
            navigate("/payment/checkout")
        }
    }


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
                        value={country?.name}
                        onChange={handleCountryChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    >

                        <option value="">Select a country</option>
                        {countries.map((c) => (
                            <option key={c.isoName} value={c.name}>
                                {c.name}
                            </option>
                        ))}

                    </select>
                </div>

                {/* Operator Selection */}
                {
                    country && country.isoName && (
                        <div>
                            {
                                loading ? (
                                    <div className="flex items-center justify-center">
                                        <p className="text-black font-bold">loading operators...</p>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block mb-1 font-medium">Operator</label>
                                        <div className="grid grid-cols-3 mt-2 gap-4">
                                            {operators.map((op) => (
                                                <button
                                                    key={op.id}
                                                    onClick={() => {
                                                        setOperator(op);
                                                        dispatch(setOperatorName(op.name));
                                                        dispatch(setRechargeCurrency(op.senderCurrencyCode));
                                                        dispatch(setOperatorId(op.id))
                                                    }}
                                                    className={`p-2 md:p-4 border  rounded ${operator === op ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                                        }`}
                                                >
                                                    {op.logoUrls && op.logoUrls[1] ? (
                                                        <img src={op.logoUrls[1]} className="object-contain h-16 mx-auto" />
                                                    ) : (
                                                        <div className="h-16 flex items-center justify-center text-sm text-gray-500">
                                                            No Image
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div >
                                )
                            }
                        </div>

                    )
                }
                {/* <div>
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
                </div> */}

                {/* Amount Selection */}

                {
                    operator && (
                        <>
                            {
                                operator && operator.geographicalRechargePlans.length > 0 && (
                                    <div className="text-black">
                                        <label className="block mb-1 font-medium">Geolocation</label>
                                        <select
                                            value={geoLocation?.locationName}
                                            onChange={handleGeolocationChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        >

                                            <option value="">Select Geolocation</option>
                                            {operator.geographicalRechargePlans.map((c) => (
                                                <option className="text-black" key={c.locationCode} value={c.locationName}>
                                                    {c.locationName}
                                                </option>
                                            ))}

                                        </select>
                                    </div>
                                )
                            }
                            {
                                geoLocation && geoLocation.fixedAmounts.length > 0 && (
                                    <div>
                                        <label className="block mb-1 font-medium">Amount</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                                            {geoLocation && geoLocation.fixedAmounts.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setAmt(item)}
                                                    className={`border p-3 rounded text-left border-gray-300 opacity-70 ${item === amt ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'
                                                        }`}
                                                >
                                                    <div className="text-sm text-blue-600 font-medium">Amount received: {item}</div>
                                                    <div className="text-xs text-gray-500">incl. local taxes {item} Net</div>
                                                    <div className="text-xs text-gray-600 mt-1">Amount charged: {item}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                            <div>
                                <label className="block mb-1 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+40 ex: XXX XXX XXX"
                                    value={phone}
                                    onChange={(e: any) => setPhone(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 md:w-64 p-2 mt-1"
                                />
                            </div>

                            {
                                operator && operator.fixedAmounts.length > 0 && (
                                    <div>
                                        <label className="block mb-1 font-medium">Amount</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                                            {operator && operator.fixedAmounts.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setAmt(item)}
                                                    className={`border p-3 rounded text-left border-gray-300 opacity-70 ${item === amt ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'
                                                        }`}
                                                >
                                                    <div className="text-sm text-blue-600 font-medium">Amount received: {item}</div>
                                                    <div className="text-xs text-gray-500">incl. local taxes {item} Net</div>
                                                    <div className="text-xs text-gray-600 mt-1">Amount charged: {item}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                        </>
                    )
                }

                {/* Recharge Button */}

                <button className={clsx(`mt-4 p-3 rounded font-bold w-full md:w-64 py-3`,
                    amt && phone ? 'bg-orange-400 text-white' : 'bg-gray-300 text-gray-600'
                )}
                    onClick={handleRechargeNow}>
                    <p className="flex justify-center gap-1">
                        <Zap />
                        Recharge Now
                    </p>
                </button>
            </div >
        </>

    )
}

export default CreditTransfer