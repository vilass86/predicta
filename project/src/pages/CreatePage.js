import React, { useState } from "react";
import "./CreatePage.css";

const CreatePrediction = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    odds: "",
    poolSize: "",
  });

  const [activeTab, setActiveTab] = useState("basic"); // Tabs: basic, advanced, preview
  const [tooltip, setTooltip] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prediction successfully created!");
  };

  const handleTooltip = (message) => {
    setTooltip(message);
    setTimeout(() => setTooltip(null), 3000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <form onSubmit={handleSubmit}>
            {/* Prediction Title */}
            <div className="form-group">
              <label htmlFor="title">
                Prediction Title
                <span
                  className="tooltip-icon"
                  onMouseEnter={() =>
                    handleTooltip("Provide a concise title for your prediction.")
                  }
                >
                  ?
                </span>
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., BTC will reach $70,000 by December"
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="sports">Sports</option>
                <option value="cryptocurrency">Cryptocurrency</option>
                <option value="politics">Politics</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">
                Description (Optional)
                <span
                  className="tooltip-icon"
                  onMouseEnter={() =>
                    handleTooltip("Optional details about your prediction.")
                  }
                >
                  ?
                </span>
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide additional details about your prediction"
              ></textarea>
            </div>
          </form>
        );

      case "advanced":
        return (
          <>
            {/* Odds */}
            <div className="form-group">
              <label htmlFor="odds">Odds</label>
              <input
                type="number"
                id="odds"
                value={formData.odds}
                onChange={handleChange}
                placeholder="e.g., 2.5"
                min="1"
                step="0.01"
                required
              />
              <div className="help-text">
                Set the multiplier for this prediction.
              </div>
            </div>

            {/* Pool Size */}
            <div className="form-group">
              <label htmlFor="poolSize">Initial Pool Size</label>
              <input
                type="number"
                id="poolSize"
                value={formData.poolSize}
                onChange={handleChange}
                placeholder="e.g., 100"
                min="1"
                step="1"
                required
              />
              <div className="help-text">
                Specify the initial amount of SOL for this prediction pool.
              </div>
            </div>
          </>
        );

      case "preview":
        return (
          <div className="preview-section">
            <h3>Prediction Preview</h3>
            <p>
              <strong>Title:</strong> {formData.title || "N/A"}
            </p>
            <p>
              <strong>Category:</strong> {formData.category || "N/A"}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {formData.description || "No description provided."}
            </p>
            <p>
              <strong>Odds:</strong> {formData.odds || "N/A"}
            </p>
            <p>
              <strong>Pool Size:</strong> {formData.poolSize || "N/A"} SOL
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="create-prediction">
      <header className="header">
        <div className="logo">LOGO</div>
        <button className="connect-wallet">Connect Wallet</button>
      </header>

      <main className="container">
        <div className="tabs">
          <button
            className={activeTab === "basic" ? "active" : ""}
            onClick={() => setActiveTab("basic")}
          >
            Basic
          </button>
          <button
            className={activeTab === "advanced" ? "active" : ""}
            onClick={() => setActiveTab("advanced")}
          >
            Advanced
          </button>
          <button
            className={activeTab === "preview" ? "active" : ""}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
        </div>

        <div className="form-container">
          <div className="form-title">Create a Prediction</div>
          {renderTabContent()}
          {activeTab === "preview" && (
            <button onClick={handleSubmit} className="submit-btn">
              Submit Prediction
            </button>
          )}
        </div>

        <a href="/dashboard" className="back-link">
          &larr; Back to Dashboard
        </a>

        {/* Tooltip */}
        {tooltip && <div className="tooltip">{tooltip}</div>}
      </main>
    </div>
  );
};

export default CreatePrediction;
