import React from "react";
import { ArrowRight, Send } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import hook for navigation
import "../styles/Cta.css";

const Cta = () => {
  const navigate = useNavigate(); // Initialize hook

  const handleSubmitClick = () => {
    navigate("/submit"); // Redirect to the submission page
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="icon-badge">
          <Send size={24} />
        </div>

        <h2>Ready to Publish Your Research?</h2>
        <p>
          Submit your manuscript and join a community of leading legal scholars
          shaping the future of law and technology.
        </p>

        <button className="cta-btn" onClick={handleSubmitClick}>
          Submit Your Manuscript <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Cta;