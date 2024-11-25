import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PoolsPage.css";
import { useNavigate } from "react-router-dom";

const PoolsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const poolData = [
    { id: 1, title: "BTC will break $70,000", category: "Crypto", progress: 350, total: 400, odds: "Yes - 1.70" },
    { id: 2, title: "Liverpool will win", category: "Sports", progress: 150, total: 200, odds: "No - 2.00" },
    { id: 3, title: "Elections 2024", category: "Politics", progress: 250, total: 300, odds: "Yes - 1.50" },
    { id: 4, title: "Marvel movie tops box office", category: "Entertainment", progress: 100, total: 200, odds: "No - 2.10" },
    { id: 5, title: "Ethereum will cross $5,000", category: "Crypto", progress: 180, total: 500, odds: "Yes - 1.60" },
    { id: 6, title: "World Cup Finals", category: "Sports", progress: 350, total: 400, odds: "Yes - 1.85" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (id) => {
    navigate(`/bet/${id}`);
  };

  const handleCategoryToggle = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="pools-page">
      <header className="navbar">
        <div className="logo">BITREDICT</div>
        <nav>
          <a href="/create" className="btn-create">
            Create Prediction
          </a>
        </nav>
      </header>

      <main className="container">
        <h1 className="section-title">Trending Pools</h1>

        {/* Slider Section */}
        <Slider {...sliderSettings} className="slider">
          {poolData.map((pool) => (
            <div key={pool.id} className="pool-card" onClick={() => handleCardClick(pool.id)}>
              <div className="category-badge">{pool.category}</div>
              <h2 className="pool-title">{pool.title}</h2>
              <div className="betting-option">{pool.odds}</div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(pool.progress / pool.total) * 100}%` }}></div>
                <div className="progress-bar-text">
                  {pool.progress}/{pool.total} SOL
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Category Filters */}
        <div className="categories-section">
          <button className="btn-toggle" onClick={() => handleCategoryToggle("active")}>
            Active
          </button>
          <button className="btn-toggle" onClick={() => handleCategoryToggle("filled")}>
            Filled
          </button>
          <button className="btn-toggle" onClick={() => handleCategoryToggle("settled")}>
            Settled
          </button>
          <button className="btn-dropdown">Show Categories</button>
        </div>

        {/* Prediction Cards */}
        <div className="prediction-cards">
          {poolData.map((pool) => (
            <div key={pool.id} className="grid-card" onClick={() => handleCardClick(pool.id)}>
              <div className="category-badge">{pool.category}</div>
              <h2 className="grid-title">{pool.title}</h2>
              <div className="betting-option">{pool.odds}</div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(pool.progress / pool.total) * 100}%` }}></div>
                <div className="progress-bar-text">
                  {pool.progress}/{pool.total} SOL
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PoolsPage;
