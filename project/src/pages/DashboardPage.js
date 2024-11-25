import React, { useState } from "react";
import "./DashboardPage.css";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const menuItems = [
    "Profile",
    "Financial Summary",
    "Performance Charts",
    "Notifications",
    "Interactive Widgets",
    "Settings",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <>
            <div className="profile">
              <div className="profile-box">
                <span>Active Since</span>
                <p>Jan 2024</p>
              </div>
              <div className="profile-box">
                <span>Total Bets</span>
                <p>500 SOL</p>
              </div>
              <div className="profile-box">
                <span>As Creator</span>
                <p>200 SOL</p>
              </div>
              <div className="profile-box">
                <span>As Bettor</span>
                <p>300 SOL</p>
              </div>
              <div className="profile-box">
                <span>Won Bets</span>
                <p>150</p>
              </div>
              <div className="profile-box">
                <span>Profit & Loss</span>
                <p>+100 SOL</p>
              </div>
            </div>
            {/* Betting History Below Profile */}
            <div className="section betting-history">
              <h3>Betting History</h3>
              <div className="filters">
                <div className="filter-box">Active</div>
                <div className="filter-box">Won</div>
                <div className="filter-box">Lost</div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Prediction</th>
                    <th>Result</th>
                    <th>Amount</th>
                    <th>Payout</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chelsea wins against Leicester</td>
                    <td>Win</td>
                    <td>30 SOL</td>
                    <td>90 SOL</td>
                    <td>
                      <button className="action-button">Claim</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Liverpool wins vs Fulham</td>
                    <td>Loss</td>
                    <td>40 SOL</td>
                    <td>0 SOL</td>
                    <td>Settled (Lost)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case "Financial Summary":
        return (
          <div className="section">
            <h3>Financial Summary</h3>
            <div className="profile">
              <div className="profile-box">
                <span>Total Staked</span>
                <p>500 SOL</p>
              </div>
              <div className="profile-box">
                <span>Biggest Win</span>
                <p>150 SOL</p>
              </div>
              <div className="profile-box">
                <span>Average Bet Size</span>
                <p>20 SOL</p>
              </div>
            </div>
          </div>
        );

      case "Performance Charts":
        return (
          <div className="section">
            <h3>Performance Charts</h3>
            <p>Here we will display PnL Trend, Betting Activity, and Win/Loss Ratio charts.</p>
          </div>
        );

      case "Notifications":
        return (
          <div className="section">
            <h3>Notifications</h3>
            <ul>
              <li>Bets Settled: Chelsea wins</li>
              <li>New Prediction: World Cup Finals</li>
              <li>Platform Update: New features added</li>
            </ul>
          </div>
        );

      case "Interactive Widgets":
        return (
          <div className="section">
            <h3>Interactive Widgets</h3>
            <ul>
              <li>Performance Goals: "Place 50 bets" - Progress: 30/50</li>
              <li>Achievements: "Top Bettor" Badge</li>
            </ul>
          </div>
        );

      case "Settings":
        return (
          <div className="section">
            <h3>Settings</h3>
            <p>Settings page content here...</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-page">
      <header className="header">
        <div className="logo">LOGO</div>
        <div className="wallet-box">Wallet: 0x1234...abcd</div>
      </header>

      <main className="container">
        <div className="dashboard-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Dashboard</h3>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={activeTab === item ? "active" : ""}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    window.location.href = "/create";
                  }}
                >
                  Create Prediction
                </button>
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <div className="main-content">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
