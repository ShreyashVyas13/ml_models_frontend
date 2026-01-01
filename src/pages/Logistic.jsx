import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Logistic.css";

const Logistic = () => {
  const [formData, setFormData] = useState({
    no_of_dependents: "",
    education: 1,
    self_employed: 0,
    income_annum: "",
    loan_amount: "",
    loan_term: "",
    cibil_score: "",
    residential_assets_value: "",
    commercial_assets_value: "",
    luxury_assets_value: "",
    bank_asset_value: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      // Make sure your backend port is correct
      const res = await fetch("http://127.0.0.1:5000/predict-logistic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Backend error. Is the server running?");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        
        {/* UNIQUE CLASS: logistic-card */}
        <div className="logistic-card">
          
          <div className="logistic-header">
            <h1>Loan Approval Prediction</h1>
          </div>

          {/* UNIQUE CLASS: logistic-grid */}
          <div className="logistic-grid">
            
            {/* Input Groups */}
            <div className="logistic-input-group">
              <label>Dependents</label>
              <input type="number" name="no_of_dependents" placeholder="e.g. 2" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Annual Income</label>
              <input type="number" name="income_annum" placeholder="₹ Value" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Loan Amount</label>
              <input type="number" name="loan_amount" placeholder="₹ Value" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Loan Term (Months)</label>
              <input type="number" name="loan_term" placeholder="e.g. 360" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>CIBIL Score</label>
              <input type="number" name="cibil_score" placeholder="e.g. 750" onChange={handleChange} />
            </div>

            {/* Assets */}
            <div className="logistic-input-group">
              <label>Residential Assets</label>
              <input type="number" name="residential_assets_value" placeholder="₹ Value" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Commercial Assets</label>
              <input type="number" name="commercial_assets_value" placeholder="₹ Value" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Luxury Assets</label>
              <input type="number" name="luxury_assets_value" placeholder="₹ Value" onChange={handleChange} />
            </div>

            <div className="logistic-input-group">
              <label>Bank Assets</label>
              <input type="number" name="bank_asset_value" placeholder="₹ Value" onChange={handleChange} />
            </div>

            {/* Dropdowns */}
            <div className="logistic-input-group">
              <label>Education</label>
              <select name="education" onChange={handleChange}>
                <option value={1}>Graduate</option>
                <option value={0}>Not Graduate</option>
              </select>
            </div>

            <div className="logistic-input-group">
              <label>Employment</label>
              <select name="self_employed" onChange={handleChange}>
                <option value={0}>Salaried</option>
                <option value={1}>Self Employed</option>
              </select>
            </div>

          </div>

          {/* UNIQUE CLASS: logistic-btn */}
          <button className="logistic-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? <span className="logistic-loader"></span> : "Predict Approval"}
          </button>

          {/* UNIQUE CLASS: logistic-result */}
          {result && (
            <div className={`logistic-result ${result.loan_approved ? "is-approved" : "is-rejected"}`}>
              <span className="logistic-icon">
                {result.loan_approved ? "✅" : "❌"}
              </span>
              <div className="logistic-result-text">
                <h3>{result.loan_approved ? "Loan Approved" : "Loan Rejected"}</h3>
                <p>Probability: {(result.approval_probability * 100).toFixed(1)}%</p>
              </div>
            </div>
          )}
<div className="footer-credit">
        Built with <span className="heart">♥️</span> by Shreyash
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logistic;