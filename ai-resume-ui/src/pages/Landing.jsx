import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>AI Resume Screening & Job Matching</h1>
      <p>
        Upload resumes, analyze job descriptions, and rank candidates using
        AI-inspired keyword matching.
      </p>

      <button onClick={() => navigate("/login")}>
  Start Screening
</button>
    </div>
  );
}

export default Landing;