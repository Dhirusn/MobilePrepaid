import Chart from "react-apexcharts";
import GaugeChart from 'react-gauge-chart';
import { Globe, Bell, FileText, Star } from "lucide-react";

const Dashboard = () => {
    const revenueChart = {
        options: {
            chart: {
                id: "revenue"
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            },
            stroke: {
                curve: "smooth" as const, // 👈 cast as 'smooth' string literal
                width: 3
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#3b82f6"],
            tooltip: {
                enabled: true
            }
        },
        series: [
            {
                name: "Revenue",
                data: [30, 40, 45, 50, 49, 60]
            }
        ]
    };



    const pieChart = {
        options: {
            labels: ['Recharge', 'Credit Transfer', 'Mobile', 'Others', 'International'],
            legend: {
                show: false
            },
            stroke: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#06b6d4', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6']
        },
        series: [25, 20, 15, 20, 20]
    };




    <GaugeChart
        id="performance-gauge"
        nrOfLevels={30}
        arcsLength={[0.3, 0.4, 0.3]} // green, yellow, red
        colors={['#22c55e', '#facc15', '#f97316']}
        percent={0.75} // 75%
        arcPadding={0.02}
        needleColor="#000"
        needleBaseColor="#000"
    />
    return (
        <div className="min-h-screen bg-[#f5f7fa] p-6 font-sans">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="rounded-full w-10 h-10"
                />
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-teal-100 rounded-xl p-4 shadow text-center text-teal-600">
                    <h2 className="text-xl font-bold">Total Recharges</h2>
                    <p className="text-4xl font-bold">18,300</p>
                    <p className="text-lg font-bold text-green-500">↑ 3.2%</p>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 shadow text-center text-purple-600">
                    <h2 className="text-xl font-bold">Credit Transfers</h2>
                    <p className="text-4xl font-bold">7,250</p>
                    <p className="text-lg font-bold text-blue-500">↑ 4.8%</p>
                </div>
                <div className="bg-red-100 rounded-xl p-4 shadow text-center text-red-500">
                    <h2 className="text-xl font-bold">Users</h2>
                    <p className="text-4xl font-bold">5,840</p>
                    <p className="text-lg text-red-400">↑ 4.8%</p>
                </div>
                <div className="bg-[#e9fdf3] rounded-xl p-4 shadow text-center">
                    <p className="text-xl font-bold mb-2 text-green-600">Performance</p>
                    <div className="w-48 mx-auto">
                        <GaugeChart
                            id="performance-gauge"
                            nrOfLevels={30}
                            arcsLength={[0.3, 0.4, 0.3]}
                            colors={['#22c55e', '#facc15', '#f97316']}
                            percent={0.75}
                            arcPadding={0.02}
                            needleColor="#000"
                            needleBaseColor="#000"
                        />
                    </div>
                </div>

            </div>

            {/* Middle Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-2">
                    <div className="bg-blue-500 rounded-xl p-4 text-white">
                        <h3 className="font-semibold mb-1">Multi-Step Recharge Form</h3>
                        <p className="text-sm">Country → Operator → Number → Amount → Payment</p>
                    </div>
                    <div className="bg-purple-500 rounded-xl p-4 text-white">
                        <h3 className="font-semibold mb-1">Payment Integrations</h3>
                        <p className="text-sm">Netopia (Card), Coinbase Commerce (Crypto)</p>
                    </div>
                    <div className="bg-orange-500 rounded-xl p-4 text-white">
                        <h3 className="font-semibold mb-1">Admin Dashboard</h3>
                        <p className="text-sm">Role-Based Access, Stats & Logs</p>
                    </div>
                    <div className="bg-green-500 rounded-xl p-4 text-white">
                        <h3 className="font-semibold mb-1">International SIM Cards</h3>
                        <p className="text-sm">Support for Product Listings</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2 text-black">Top-Up Logs</h3>
                            <p className="text-2xl font-bold text-black mt-8">$25,842</p>
                        </div>
                        <div className="w-36 h-36">
                            <Chart
                                options={pieChart.options}
                                series={pieChart.series}
                                type="donut"
                                width="100%"
                            />
                        </div>
                    </div>

                </div>

                <div className=" flex flex-col gap-2">
                    <div className="bg-white rounded-xl p-4 shadow">
                        <h3 className="font-semibold text-lg mb-2">Top-Up Logs</h3>
                        <div className="space-y-2">
                            <div className="h-2 bg-pink-400 w-3/4 rounded-full"></div>
                            <div className="h-2 bg-purple-400 w-2/4 rounded-full"></div>
                            <div className="h-2 bg-cyan-400 w-5/6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow">
                        <h3 className="font-semibold text-lg mb-2">Revenue Statistics</h3>
                        <Chart
                            options={revenueChart.options}
                            series={revenueChart.series}
                            type="area" // ✅ Use area with smooth stroke
                            height={200}
                        />
                    </div>


                    <div className="bg-white rounded-xl p-4 shadow-lg col-span-1">
                        <h3 className="font-bold text-xl mb-2">Recent Activity</h3>
                        <ul className="text-sm space-y-2">
                            <li className="text-green-600 font-bold">✓ Credit transfer <span className="text-gray-500 ml-2">2h ago</span></li>
                            <li className="text-blue-600 font-bold">✓ Payment received <span className="text-gray-500 ml-2">2h ago</span></li>
                            <li className="text-pink-600 font-bold">✓ New user registered <span className="text-gray-500 ml-2">1d ago</span></li>
                            <li className="text-yellow-600 font-bold">✓ Mobile recharge <span className="text-gray-500 ml-2">1d ago</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-500 text-white rounded-xl p-4 col-span-1 flex items-center gap-3">
                    <Globe className="w-6 h-6" />
                    <div>
                        <h3 className="font-semibold mb-1">Multi-Language</h3>
                        <p className="text-sm">English, Romanian...</p>
                    </div>
                </div>

                <div className="bg-blue-400 text-white rounded-xl p-4 col-span-1 flex items-center gap-3">
                    <Bell className="w-6 h-6" />
                    <div>
                        <h3 className="font-semibold mb-1">Notifications</h3>
                        <p className="text-sm">After Successful Top-Ups or Transfers</p>
                    </div>
                </div>

                <div className="bg-orange-300 text-white rounded-xl p-4 col-span-1 flex items-center gap-3">
                    <FileText className="w-6 h-6" />
                    <div>
                        <h3 className="font-semibold mb-1">FAQ & Content</h3>
                        <p className="text-sm">Editable by Admin</p>
                    </div>
                </div>

                <div className="bg-green-400 text-white rounded-xl p-4 col-span-1 flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    <div>
                        <h3 className="font-semibold mb-1">VIP Numbers</h3>
                        <p className="text-sm">Showcase Module</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard