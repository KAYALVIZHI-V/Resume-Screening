function SkillBadge({ skill, matched }) {
  return (
    <span style={{
      display: "inline-block",
      margin: "5px",
      padding: "6px 12px",
      borderRadius: "20px",
      background: matched ? "#22c55e" : "#ef4444",
      color: "white"
    }}>
      {skill}
    </span>
  );
}

export default SkillBadge;
