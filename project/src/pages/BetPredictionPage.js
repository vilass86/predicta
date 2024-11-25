import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BetPredictionPage.css";

const BetPredictionPage = () => {
  const { id } = useParams(); // Extract dynamic ID from route
  const [matchDetails, setMatchDetails] = useState({});
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Simulate fetching match details based on ID
    const fetchMatchDetails = async () => {
      const data = {
        id,
        title: id === "1" ? "Liverpool vs Fulham" : "Bitcoin Prediction",
        eventDate: "2024-07-14T17:00:00Z",
        venue: id === "1" ? "Anfield Stadium" : "N/A",
        matchType: id === "1" ? "EPL" : "Crypto Market",
        creator: "betrayal",
        poolSize: id === "1" ? 300 : 500,
        bettors: id === "1" ? 20 : 45,
        odds: id === "1" ? 1.5 : 2.2,
        conditions: id === "1" 
          ? [
              "If Liverpool wins, all YES bettors win.",
              "If Liverpool can't win, creator and NO bettors win.",
            ]
          : [
              "Bitcoin must reach $70,000 for YES bettors to win.",
              "Otherwise, NO bettors win.",
            ],
      };
      setMatchDetails(data);
      updateCountdown(data.eventDate);
    };

    fetchMatchDetails();
  }, [id]);

  // Countdown Timer
  const updateCountdown = (eventDate) => {
    const eventTime = new Date(eventDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventTime - now;

      if (distance <= 0) {
        setCountdown("00:00:00");
        clearInterval(interval);
      } else {
        const hours = String(
          Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (60 * 1000)) / 1000)
        ).padStart(2, "0");
        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">BITREDICT</div>
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; {matchDetails.matchType}
        </nav>
        <div className="user-profile">8vk...JKD</div>
      </header>

      <main>
        {/* Match Details Section */}
        <section className="match-details">
          <h2>Match Details: {matchDetails.title}</h2>
          <div className="match-info">
            <p>
              Event Date: <span className="highlight">{matchDetails.eventDate}</span>
            </p>
            <p>
              Venue: <span className="highlight">{matchDetails.venue}</span>
            </p>
            <p>
              Match Type: <span className="highlight">{matchDetails.matchType}</span>
            </p>
          </div>
        </section>

        {/* Prediction Section */}
        <section className="prediction">
          {/* Left Content */}
          <div className="prediction-info">
            <h2>Will {matchDetails.title}?</h2>
            <div className="bet-frame">YES - {matchDetails.odds}</div>
            <p>
              Creator:{" "}
              <Link to={`/profile/${matchDetails.creator}`} className="creator-link">
                {matchDetails.creator}
              </Link>
            </p>
            <p>
              Pool Size: <strong>{matchDetails.poolSize} SOL</strong>
            </p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <p>Bettors: {matchDetails.bettors} users</p>
            <div className="countdown-box">
              <p className="countdown">{countdown}</p>
            </div>
            <div className="conditions-frame">
              <p>
                <strong>Conditions:</strong>
              </p>
              <ul>
                {matchDetails.conditions?.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Betting Placement Section */}
          <div className="bet-options-frame">
            <div className="bet-options">
              <button className="btn option">YES</button>
              <button className="btn option">Add Liquidity</button>
              <input
                type="number"
                className="bet-input"
                placeholder="Enter Amount"
              />
              <p>Expected Payout: $500</p>
              <button className="btn place-bet">Place Bet</button>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="comments">
          <h3>Comments</h3>
          <div className="comment">
            <p>
              <strong>User1:</strong> Liverpool has been in great form lately. I'm going all in!
            </p>
          </div>
          <div className="comment">
            <p>
              <strong>User2:</strong> Fulham might pull off an upset. Let's see.
            </p>
          </div>
          <div className="add-comment">
            <textarea placeholder="Add a comment..."></textarea>
            <button className="btn">Post Comment</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BetPredictionPage;
