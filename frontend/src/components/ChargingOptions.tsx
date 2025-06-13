



const ChargingOptions = ({
    title,
    titleTextColor,
    itemTextColor,
    itemTextHoverColor,
    midTextColor,
    mainBorderColorValue,
    midBorderColorValue,
    bgColorValue }: {
        title: string,
        titleTextColor: string,
        itemTextColor: string,
        itemTextHoverColor: string,
        midTextColor: string,
        mainBorderColorValue: string,
        midBorderColorValue: string,
        bgColorValue: string

    }) => {
    const chargingOptions = [
        { euro: "3", lei: "25.52" },
        { euro: "4", lei: "34.02" },
        { euro: "5", lei: "42.53" },
        { euro: "6", lei: "51.03" },
        { euro: "7", lei: "59.54" },
        { euro: "8", lei: "68.04" },
        { euro: "9", lei: "76.55" },
        { euro: "10", lei: "85.06" },
        { euro: "12", lei: "92.07" },
        { euro: "15", lei: "117.58" },
        { euro: "20", lei: "160.11" },
        { euro: "25", lei: "202.64" },
        { euro: "30", lei: "241.61" },
        { euro: "35", lei: "283.55" },
        { euro: "40", lei: "325.48" },
        { euro: "50", lei: "409.36" },
        { euro: "60", lei: "483.22" },
        { euro: "75", lei: "619.03" },
        { euro: "100", lei: "828.71" },
        { euro: "Over", lei: "Euro" },
    ];
    return (
        <div className=" bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
            <h2 className={`text-2xl md:text-5xl font-bold text-${titleTextColor} mb-10`}>
                {title}
            </h2>
            <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-full md:max-w-6xl border-${mainBorderColorValue}`}>
                {chargingOptions.map((item, idx) => (
                    <div key={idx}
                        className={`w-44 h-44 rounded-full flex flex-col items-center justify-center text-center border-0 md:border-4 border-${midBorderColorValue} px-2 py-2 cursor-pointer`}>
                        <div key={idx} className={`w-38 h-38 rounded-full flex flex-col items-center justify-center text-center text-${midTextColor} border-2 border-${midBorderColorValue} hover:bg-${bgColorValue} hover:text-white group`}>
                            <span className={`font-bold text-3xl ${itemTextColor} group-hover:text-${itemTextHoverColor}`}>
                                {item.euro} Euro
                            </span>
                            <span className="font-normal text-2xl">
                                {item.lei} Euro
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChargingOptions