import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import "./StatsPage.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const StatsPage = () => {
  // Example data for charts
  const lineChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Volume (SOL)",
        data: [500, 700, 800, 600, 900],
        borderColor: "rgba(15, 217, 123, 1)",
        backgroundColor: "rgba(15, 217, 123, 0.2)",
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Transactions",
        data: [200, 300, 400, 350, 500],
        backgroundColor: "rgba(15, 217, 123, 0.8)",
      },
    ],
  };

  return (
    <div className="stats-page">
      <h1 className="page-title">Platform Statistics</h1>

      {/* Stats Boxes */}
      <div className="stats-container">
        <div className="stats-box" data-tip="This shows the number of daily transactions">
          <h2>Daily Transactions</h2>
          <p>2,356</p>
        </div>
        <div className="stats-box" data-tip="This shows the number of daily users">
          <h2>Daily Users</h2>
          <p>1,245</p>
        </div>
        <div className="stats-box" data-tip="This shows the total daily volume in SOL">
          <h2>Daily Volume</h2>
          <p>5,340 SOL</p>
        </div>
        <div className="stats-box" data-tip="Active prediction pools currently open">
          <h2>Active Pools</h2>
          <p>124</p>
        </div>
        <div className="stats-box" data-tip="Prediction pools that have closed for betting">
          <h2>Closed Pools</h2>
          <p>98</p>
        </div>
        <div className="stats-box" data-tip="Prediction pools that have been settled">
          <h2>Settled Pools</h2>
          <p>85</p>
        </div>
        <div className="stats-box" data-tip="The highest single payout won so far">
          <h2>Highest Amount Won</h2>
          <p>1,200 SOL</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-container">
          <h2>30-Day Volume</h2>
          <Line data={lineChartData} />
        </div>
        <div className="chart-container">
          <h2>30-Day Transactions</h2>
          <Bar data={barChartData} />
        </div>
      </div>

      {/* ReactTooltip Component */}
      <ReactTooltip place="top" type="dark" effect="solid" />
    </div>
  );
};

export default StatsPage;
