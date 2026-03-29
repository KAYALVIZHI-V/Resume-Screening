import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Dashboard.css";
function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate(); // ✅ YOU FORGOT THIS
const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/match/ranked",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCandidates(response.data.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

return (
    <div className="container">
      <div className="card">
        <h2>Candidate Ranking</h2>

        <table width="100%">
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
              <th>Match %</th>
              <th>Matched Skills</th>
              <th>Missing Skills</th>
            </tr>
          </thead>

       <tbody>
  {candidates.map((c, index) => (
    <tr key={index}>
      <td>{c.user?.name}</td>
      <td>{c.user?.email}</td>
      <td>{c.matchPercentage}%</td>
      <td>{c.matchedSkills?.join(", ")}</td>
      <td>{c.missingSkills?.join(", ")}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}
   