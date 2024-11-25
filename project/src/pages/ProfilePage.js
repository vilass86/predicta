import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-details">
          <img src="https://via.placeholder.com/80" alt="Profile" className="profile-picture" />
          <div>
            <h2>User123</h2>
            <p>Active Since: July 2024</p>
            <p>
              Wallet: <span>8vk...JKD</span>{' '}
              <button className="copy-btn">Copy</button>
            </p>
          </div>
        </div>
        <div className="quick-stats">
          <div className="stat-box">
            <h3>+50 SOL</h3>
            <p>Profit & Loss</p>
          </div>
          <div className="stat-box">
            <h3>75%</h3>
            <p>Win Rate</p>
          </div>
          <div className="stat-box">
            <h3>120</h3>
            <p>Total Bets</p>
          </div>
          <div className="stat-box">
            <h3>80</h3>
            <p>Won Bets</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {['overview', 'betting-history', 'created-predictions', 'community-activity'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`tab-button ${activeTab === tab ? 'active-tab' : ''}`}
          >
            {tab.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="content-section">
            <h3>Overview</h3>
            <div className="overview-grid">
              <div className="overview-box">
                <p><strong>Last Bet Placed:</strong></p>
                <p>2024-11-15 on "BTC will break $70,000".</p>
              </div>
              <div className="overview-box">
                <p><strong>Betting Volume:</strong></p>
                <ul>
                  <li>As Bettor: 150 SOL</li>
                  <li>As Creator: 300 SOL</li>
                </ul>
              </div>
              <div className="overview-box">
                <p><strong>Average Bet Size:</strong> 15 SOL</p>
              </div>
              <div className="overview-box">
                <p><strong>Biggest Win:</strong> 100 SOL</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'betting-history' && (
          <div className="content-section">
            <h3>Betting History</h3>
            <div className="betting-history-grid">
              <div className="history-box">
                <h4>Active Bets</h4>
                <p>2 active bets placed.</p>
              </div>
              <div className="history-box">
                <h4>Won Bets</h4>
                <p>80 bets won.</p>
              </div>
              <div className="history-box">
                <h4>Lost Bets</h4>
                <p>40 bets lost.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'created-predictions' && (
          <div className="content-section">
            <h3>Created Predictions</h3>
            <ul>
              <li>"BTC will break $70,000" - Active</li>
              <li>"Ethereum will cross $5,000" - Settled</li>
            </ul>
          </div>
        )}
        {activeTab === 'community-activity' && (
          <div className="content-section">
            <h3>Community Activity</h3>
            <div className="community-widget">
              <div className="comment-box">
                <p><strong>User123:</strong> "Excited about this match!"</p>
              </div>
              <div className="comment-box">
                <p><strong>User456:</strong> "Great prediction on the last game!"</p>
              </div>

              {/* Drop Comment Section */}
              <div className="drop-comment">
                <textarea placeholder="Leave a comment..."></textarea>
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
