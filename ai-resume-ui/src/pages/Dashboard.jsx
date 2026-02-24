import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [candidates, setCandidates] = useState([]);

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
              <th>Match %</th>
              <th>Matched Skills</th>
              <th>Missing Skills</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((c, index) => (
              <tr key={index}>
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

export default Dashboard;