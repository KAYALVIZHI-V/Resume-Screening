function ScoreBar({ score }) {
  return (
    <div style={{ background: "#e5e7eb", borderRadius: "10px" }}>
      <div style={{
        width: `${score}%`,
        background: "#2563eb",
        padding: "10px",
        borderRadius: "10px",
        color: "white"
      }}>
        {score}%
      </div>
    </div>
  );
}

export default ScoreBar;
