import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PoolsPage from "./pages/PoolsPage";
import OddysseyPage from "./pages/OddysseyPage";
import CreatePage from "./pages/CreatePage";
import StatsPage from "./pages/StatsPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import CommunityHubPage from "./pages/CommunityHubPage";
import BetPredictionPage from "./pages/BetPredictionPage";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  console.log("App component loaded");

  return (
    <Router>
      <ErrorBoundary>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<PoolsPage />} />
              <Route path="/pools" element={<PoolsPage />} />
              <Route path="/oddyssey" element={<OddysseyPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/community" element={<CommunityHubPage />} />
              <Route path="/bet/:id" element={<BetPredictionPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
