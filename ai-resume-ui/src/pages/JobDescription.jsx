function JobDescription() {
  return (
    <div className="container">
      <div className="card">
        <h2>Job Description</h2>
        <textarea rows="6" placeholder="Paste job description here..." />
        <br /><br />
        <button>Analyze Match</button>
      </div>
    </div>
  );
}

export default JobDescription;
