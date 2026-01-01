import { useState } from "react";
import "./Linear.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Linear() {
  // --- Original Logic State ---
  const [income, setIncome] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- New Design State ---
  const [darkMode, setDarkMode] = useState(false);

  // --- Original Logic ---
  const handlePredict = async () => {
    setError(null);
    setResult(null);

    if (!income || income <= 0) {
      setError("Please enter a valid income");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://ml-models-backend-80sn.onrender.com/predict-linear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ income: Number(income) }),
      });

      const data = await response.json();
      setResult(data.predicted_expense);
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // We toggle the class based on state
    <>
    <Navbar/>
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      
      <div className="card">
        {/* Header with Title and Toggle Button */}
        <div className="card-header">
          <div className="header-text">
            <h1>Expense Predictor</h1>
            <p className="subtitle">AI-Powered Financial Insights</p>
          </div>
          
        </div>

        <div className="input-group">
          <label>Monthly Income</label>
          <input
            type="number"
            placeholder="e.g. 50000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <button 
          className="predict-btn" 
          onClick={handlePredict} 
          disabled={loading}
        >
          {loading ? (
            <span className="loader"></span>
          ) : (
            "Calculate Expense"
          )}
        </button>

        {error && (
          <div className="message error">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            {error}
          </div>
        )}

        {/* Result Area with Animation */}
        <div className={`result-container ${result ? "show" : ""}`}>
          {result && (
            <>
              <span>Estimated Spending</span>
              <h2 className="price-tag">
                ₹ {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h2>
            </>
          )}
        </div>

      <div className="footer-credit">
        Built with <span className="heart">♥️</span> by Shreyash
      </div>
      </div>
    </div>
   <Footer/>
  </>
  );
}

export default Linear;