function Resume() {
  return (
    <section className="section reveal active">
      <h2 className="section-title">My Resume</h2>
      <div className="resume-container">
        <div className="resume-actions">
          <a href="/assets/resume.jpg" download className="btn btn-primary">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
        <div className="resume-image-wrapper glass-card">
          <img 
            src="/assets/resume.jpg" 
            alt="Ramanuj Kumar Resume" 
            className="resume-img" 
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x1100?text=Resume+Image+Not+Found+in+assets/resume.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;
