function About() {
  return (
    <section className="section reveal active">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text glass-card">
          <h3>Who am I?</h3>
          <p>Hello! I am Ramanuj Kumar, a B.Tech Computer Science student currently studying at Lovely Professional University. I am deeply passionate about solving real-world challenges through technology. I excel in Java full-stack development using Spring Boot and have a strong aptitude for data visualization and engineering.</p>
          <p>I thrive in collaborative environments, leveraging my strengths in project management, calm and collective problem-solving, and continuous learning to deliver optimal software solutions.</p>
          <div className="about-details">
            <div className="detail-item"><strong>Email:</strong> ramanuj.dav10@gmail.com</div>
            <div className="detail-item"><strong>Mobile:</strong> +91-9142869255</div>
            <div className="detail-item">
              <strong>Links:</strong> 
              <a href="https://www.linkedin.com/in/ramanuj-kumar1" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
              <a href="https://github.com/Ramanujkumar91" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </div>
          </div>
        </div>
        <div className="about-stats glass-card">
          <div className="stat-box">
            <i className="fas fa-laptop-code"></i>
            <h4>Web & Apps</h4>
            <p>Spring Boot, React & Java</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-chart-pie"></i>
            <h4>Data & AI</h4>
            <p>Python, Power BI, Excel</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-users"></i>
            <h4>Soft Skills</h4>
            <p>Project Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
