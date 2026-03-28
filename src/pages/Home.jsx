import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero-section reveal active" style={{flexDirection: "column", alignItems: "center", textAlign: "center"}}>
      <div className="hero-container" style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "4rem", marginBottom: "4rem", width: "100%", flexWrap: "wrap"}}>
        <div className="hero-content" style={{textAlign: "left", flex: "1", minWidth: "300px"}}>
          <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Ramanuj Kumar</h1>
          <h2 className="role typing-text">Computer Science Engineer</h2>
          <p className="bio">Passionate B.Tech student at LPU specializing in Full-Stack Java (Spring Boot) & Data Engineering. I build scalable applications, interactive dashboards, and modern web solutions.</p>
          
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View My Work <i className="fas fa-arrow-right"></i></Link>
            <a href="/assets/CV_Ramanuj.pdf" download="Ramanuj_Kumar_CV.pdf" className="btn btn-secondary">Download Resume <i className="fas fa-download"></i></a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ramanuj-kumar1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/Ramanujkumar91" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="mailto:ramanuj.dav10@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="/assets/profile.jpg" alt="Ramanuj Kumar" className="hero-image" />
        </div>
      </div>

      <div className="achievements-section" style={{width: "100%", marginTop: "4rem"}}>
        <h3 className="section-subtitle" style={{marginBottom: "3rem", fontSize: "2rem", color: "var(--primary-color)", fontWeight: "700"}}>Professional Milestones</h3>
        <div className="achievements-container">
          <div className="achievement-card">
            <i className="fas fa-terminal achievement-icon"></i>
            <div className="achievement-info">
              <h4 style={{marginBottom: "1rem", fontSize: "1.3rem"}}>Full-Stack Developer</h4>
              <p style={{color: "var(--text-secondary)"}}>Developing scalable web apps using <strong>Spring Boot</strong> and <strong>React</strong> with a focus on clean architecture.</p>
            </div>
          </div>
          
          <div className="achievement-card">
            <i className="fas fa-code achievement-icon"></i>
            <div className="achievement-info">
              <h4 style={{marginBottom: "1rem", fontSize: "1.3rem"}}>LeetCode Enthusiast</h4>
              <p style={{color: "var(--text-secondary)"}}>Solved <strong>200+ problems</strong> mastering Data Structures and Algorithmic optimization.</p>
            </div>
          </div>
          
          <div className="achievement-card">
            <i className="fas fa-graduation-cap achievement-icon"></i>
            <div className="achievement-info">
              <h4 style={{marginBottom: "1rem", fontSize: "1.3rem"}}>Academic Excellence</h4>
              <p style={{color: "var(--text-secondary)"}}>Maintaining a <strong>high CGPA</strong> at LPU while actively engaging in technical research and projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
