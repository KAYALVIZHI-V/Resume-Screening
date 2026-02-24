import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadResume() {

  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

   const response = await axios.post(
  "http://localhost:5000/api/match/score",
  { resumeText, jobDescription },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

navigate("/results", { state: response.data });

  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

  return (
    <div>
      <h2>Upload Resume</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Paste Resume Text"
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <textarea
          placeholder="Enter Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />

        <button type="submit">Calculate Match</button>
      </form>
    </div>
  );
}

export default UploadResume;