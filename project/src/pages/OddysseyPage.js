import React, { useState } from "react";
import "./OddysseyPage.css";

const OddysseyPage = () => {
  const matches = [
    { time: "10:00", team1: "SK Poltava", team2: "Metalist", odds1: 2.75, oddsX: 3.02, odds2: 2.4, over: 1.85, under: 2.0 },
    { time: "12:15", team1: "Al Najma", team2: "Alhazm", odds1: 3.2, oddsX: 3.2, odds2: 2.35, over: 2.1, under: 1.8 },
    { time: "17:30", team1: "Empoli", team2: "Udinese", odds1: 2.78, oddsX: 2.9, odds2: 2.88, over: 1.95, under: 2.1 },
    { time: "19:45", team1: "Venezia", team2: "Lecce", odds1: 2.8, oddsX: 3.25, odds2: 3.25, over: 2.0, under: 1.85 },
  ];

  const [slip, setSlip] = useState([]);
  const [selectedOdds, setSelectedOdds] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const addToSlip = (matchIndex, outcome, odds) => {
    const match = matches[matchIndex];
    const newSlip = [...slip, { match: `${match.team1} vs ${match.team2}`, pick: outcome, odds }];
    setSlip(newSlip);
    setSelectedOdds({ ...selectedOdds, [`${matchIndex}-${outcome}`]: true });
  };

  const openHowItWorks = () => setShowPopup(true);
  const closeHowItWorks = () => setShowPopup(false);

  const handleSubmitSlip = () => {
    if (slip.length < 10) {
      alert("Please fill out all 10 matches before submitting!");
      return;
    }
    alert("Slip submitted successfully!");
    setSlip([]);
    setSelectedOdds({});
  };

  return (
    <div className="oddyssey-page">
      {/* Top Bar */}
      <div className="top-bar">
        <a href="#!" onClick={openHowItWorks} className="how-it-works-link">
          How it works
        </a>
        <div className="horizontal-boxes">
          <div className="box">Place your predictions</div>
          <div className="box">Hit 10/10 matches</div>
          <div className="box">Win a Lifetime Subscription</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Matches Section */}
        <div className="matches-list">
          <div className="matches-header">
            <span>Time</span>
            <span>Match</span>
            <span>1</span>
            <span>X</span>
            <span>2</span>
            <span>Over</span>
            <span>Under</span>
          </div>
          {matches.map((match, index) => (
            <div className="match-row" key={index}>
              <span>{match.time}</span>
              <span>{`${match.team1} vs ${match.team2}`}</span>
              {["odds1", "oddsX", "odds2", "over", "under"].map((type) => (
                <span
                  key={type}
                  className={`odd-box ${
                    selectedOdds[`${index}-${type}`] ? "selected" : ""
                  }`}
                  onClick={() => addToSlip(index, type, match[type])}
                >
                  {match[type]}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Slip Section */}
        <div className="slip">
          <div className="slip-header">Your Slip</div>
          {slip.length === 0 ? (
            <div className="no-slip">No selections yet</div>
          ) : (
            <>
              <div className="slip-table">
                <div className="slip-row slip-header-row">
                  <span>Match</span>
                  <span>Pick</span>
                  <span>Odd</span>
                </div>
                {slip.map((item, index) => (
                  <div key={index} className="slip-row">
                    <span>{item.match}</span>
                    <span>{item.pick}</span>
                    <span>{item.odds}</span>
                  </div>
                ))}
              </div>
              <div className="slip-footer">
                <input type="number" className="amount-input" placeholder="Enter amount" />
                <button className="submit-slip" onClick={handleSubmitSlip}>
                  Submit Slip
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>How it Works</h2>
            <p>
              Make Your Picks: Select one option for each of the 10 matches. Choose between Moneyline and Over/Under 2.5 goals.
            </p>
            <p>Submit Your Slip: A fixed fee of 0.15 SOL applies to each slip.</p>
            <button className="popup-close" onClick={closeHowItWorks}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OddysseyPage;
