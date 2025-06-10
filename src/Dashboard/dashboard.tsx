import "./dashboard.css";
import ReactECharts from 'echarts-for-react';
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement);
const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Dashboard</h1>
                <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
            </div>

            <div className="stats-container">
                <div className="stat-card green-bg">
                    <h4>Total Recharges</h4>
                    <div className="stat-value">18,300</div>
                    <div className="stat-diff"><span className="arrow">↑</span> 3.2%</div>
                </div>

                <div className="stat-card blue-bg">
                    <h4>Credit Transfers</h4>
                    <div className="stat-value">7,250</div>
                    <div className="stat-diff"><span className="arrow">↑</span> 4.8%</div>
                </div>

                <div className="stat-card orange-bg">
                    <h4>Users</h4>
                    <div className="stat-value">5,840</div>
                    <div className="stat-diff down"><span className="arrow">↓</span> 4.8%</div>
                </div>

                <div className="stat-card gauge-card">
                    <GaugeChart/>
                </div>
            </div>
            <div className="dashboard">

                <div className="left-panel">
                    <div className="feature blue">
                        <div className="icon">📋</div>
                        <div className="info">
                            <div className="title">Multi-Step Recharge Form</div>
                            <div className="desc">Country → Operator → Number → Amount → Payment</div>
                        </div>
                    </div>

                    <div className="feature purple">
                        <div className="icon">💳</div>
                        <div className="info">
                            <div className="title">Payment Integrations</div>
                            <div className="desc">Netopia (Card), Coinbase Commerce (Crypto)</div>
                        </div>
                    </div>

                    <div className="feature orange">
                        <div className="icon">🛠️</div>
                        <div className="info">
                            <div className="title">Admin Dashboard</div>
                            <div className="desc">Role-Based Access, Stats & Logs</div>
                        </div>
                    </div>

                    <div className="feature green">
                        <div className="icon">🌐</div>
                        <div className="info">
                            <div className="title">International SIM Cards</div>
                            <div className="desc">Support for Product Listings</div>
                        </div>
                    </div>

                    <div className="logs-summary">
                        <div className="amount-title">Top-Up Logs</div>
                        <div className="amount">$25,842</div>
                        <div className="donut-placeholder">[Donut Chart]</div>
                    </div>
                </div>


                <div className="right-panel">
                    <div className="box logs">
                        <div className="title">Top-Up Logs</div>
                        <div className="bar purple-bar"></div>
                        <div className="bar blue-bar"></div>
                        <div className="bar orange-bar"></div>
                        <div className="bar cyan-bar"></div>
                    </div>

                    <div className="box revenue">
                        <div className="title">Revenue Statistics</div>
                        <div className="linechart-placeholder">[Line Chart]</div>
                    </div>

                    <div className="box activity">
                        <div className="title">Recent Activity</div>
                        <ul className="activity-list">
                            <li><span className="dot green"></span> Credit transfer <span className="time">2h ago</span></li>
                            <li><span className="dot blue"></span> Payment received <span className="time">3h ago</span></li>
                            <li><span className="dot pink"></span> New user registered <span className="time">1d ago</span></li>
                            <li><span className="dot violet"></span> Mobile recharge <span className="time">1d ago</span></li>
                        </ul>
                    </div>
                </div>
            </div>





            <div className="feature-grid">
                <div className="feature-card gradient-blue">
                    <div className="icon">🌐</div>
                    <div className="content">
                        <div className="title">Multi-Language</div>
                        <div className="subtitle">English, Romanian...</div>
                    </div>
                </div>

                <div className="feature-card gradient-purple">
                    <div className="icon">🔔</div>
                    <div className="content">
                        <div className="title">Notifications</div>
                        <div className="subtitle">After Successful Top-Ups or Transfers</div>
                    </div>
                </div>

                <div className="feature-card gradient-pink">
                    <div className="icon">📄</div>
                    <div className="content">
                        <div className="title">FAQ & Content</div>
                        <div className="subtitle">Editable by Admin</div>
                    </div>
                </div>

                <div className="feature-card gradient-green">
                    <div className="icon">⭐</div>
                    <div className="content">
                        <div className="title">VIP Numbers</div>
                        <div className="subtitle">Showcase Module</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard


// const Card = ({ title, value, percent, color }: any) => (
//     <div className="card">
//         <p>{title}</p>
//         <h3>{value}</h3>
//         <p style={{ color }}>{percent}</p>
//     </div>
// );

// const Module = ({ title, bg }: any) => (
//     <div className="module" style={{ backgroundColor: bg }}>{title}</div>
// );

const gaugeOption = {
    series: [
        {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            progress: {
                show: true,
                width: 10
            },
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.4, '#00c853'],
                        [0.7, '#ffeb3b'],
                        [1, '#f44336']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
                length: '70%',
                width: 8
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                fontSize: 16,
                color: '#333',
                offsetCenter: [0, '40%'],
                formatter: '{value}%'
            },
            data: [
                {
                    value: 68,
                    name: 'Performance'
                }
            ]
        }
    ]
};

const GaugeChart = () => {
    return (
        <div style={{ height: '200px', width: '100%' }}>
            <ReactECharts option={gaugeOption} style={{ height: '100%', width: '100%' }} />
        </div>
    );
};