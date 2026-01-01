import "./Home.css";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="home container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Machine Learning <span>Model Gallery</span>
        </h1>
        <p className="hero-subtitle">
          A collection of end-to-end machine learning mini projects,
          organized by algorithms and deployed for live interaction.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="stats">
        <div className="stat-card card">
          <h3>Models</h3>
          <p>Supervised ML</p>
        </div>

        <div className="stat-card card">
          <h3>Projects</h3>
          <p>Mini + End-to-End</p>
        </div>

        <div className="stat-card card">
          <h3>Deployment</h3>
          <p>Live Demos</p>
        </div>
      </section>

      {/* Models Overview */}
      <section className="models-overview">
        <h2 className="section-title">Available Models</h2>

        <div className="model-grid">
          <div className="card model-card" onClick={() => navigate("/linear")}>
            <h3>Linear Regression</h3>
            <p className="muted">
              Predict continuous values using supervised learning.
            </p>
            <span className="status live">Live</span>
          </div>

          <div className="card model-card">
            <h3>Logistic Regression</h3>
            <p className="muted">
              Binary classification problems using probability estimation.
            </p>
            <span className="status live">Live</span>
          </div>

          <div className="card model-card">
            <h3>KNN</h3>
            <p className="muted">
              Instance-based learning using distance metrics.
            </p>
            <span className="status upcoming">Coming Soon</span>
          </div>

          <div className="card model-card">
            <h3>Decision Tree</h3>
            <p className="muted">
              Tree-based model for interpretable decisions.
            </p>
            <span className="status upcoming">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="usage">
        <h2 className="section-title">How to Use This Gallery</h2>
        <ul className="usage-list">
          <li>Navigate models from the top navigation bar</li>
          <li>Open any model to view its problem statement</li>
          <li>Interact with live demos wherever available</li>
          <li>Review datasets, metrics, and predictions</li>
        </ul>
      </section>

      {/* What Each Project Includes */}
      <section className="includes">
        <h2 className="section-title">Each Project Includes</h2>
        <div className="includes-grid">
          <div className="card">Problem Definition</div>
          <div className="card">Dataset Overview</div>
          <div className="card">Algorithm Explanation</div>
          <div className="card">Evaluation Metrics</div>
          <div className="card">Live Model Demo</div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="note">
        <p className="muted">
          This gallery is designed as a learning-first ML playground,
          focusing on clarity, reproducibility, and real-world relevance.
        </p>
      </section>
    </div>
    <Footer />
  </>
  );
};

export default Home;
