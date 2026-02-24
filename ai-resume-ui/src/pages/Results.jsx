import SkillBadge from "../components/SkillBadge";
import ScoreBar from "../components/ScoreBar";

function Results() {
  const matched = ["React", "Node.js", "JavaScript"];
  const missing = ["MongoDB", "AWS"];

  return (
    <div className="container">
      <div className="card">
        <h2>Match Result</h2>
        <ScoreBar score={78} />

        <h3>Matched Skills</h3>
        {matched.map(s => <SkillBadge key={s} skill={s} matched />)}

        <h3>Missing Skills</h3>
        {missing.map(s => <SkillBadge key={s} skill={s} />)}
      </div>
    </div>
  );
}

export default Results;
