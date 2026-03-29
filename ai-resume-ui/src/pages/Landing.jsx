import { useNavigate } from "react-router-dom";
import "../css/Landing.css";

function Landing() {

  const navigate = useNavigate();

  return (

    <div className="landing-container">

      {/* LEFT SIDE IMAGE */}
      <div className="landing-left"></div>

      {/* RIGHT SIDE CONTENT */}
      <div className="landing-right">

        <h1 className="landing-title">
          AI Resume Screening
        </h1>

        <p className="landing-text"> 
          Upload resumes and automatically match candidates
          with job descriptions using intelligent keyword
          analysis.
        </p>

        <button
          className="start-btn"
          onClick={() => navigate("/login")}
        >
          Start Screening
        </button>

      </div>

    </div>

  );
}

export default Landing;