import SkillBadge from "../components/SkillBadge";
import ScoreBar from "../components/ScoreBar";
import "../css/Results.css";
function Results() {
  const matched = ["React", "Node.js", "JavaScript"];
  const missing = ["MongoDB", "AWS"];

  return (
    <div className="container">
      <div className="card">
        <h2>Match Result</h2>
        <ScoreBar score={78} />
      <h3>Resume Text</h3>
       <p>{data.resumeText}</p>

       <h3>Job Description</h3>
     <p>{data.jobDescription}</p>
     
        <h3>Matched Skills</h3>
        {matched.map(s => <SkillBadge key={s} skill={s} matched />)}

        <h3>Missing Skills</h3>
        {missing.map(s => <SkillBadge key={s} skill={s} />)}
      </div>
    </div>
  );
}

export default Results;
