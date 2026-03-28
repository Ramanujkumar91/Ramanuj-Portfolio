function Projects() {
  return (
    <section className="section reveal active">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        
        {/* Project 1 */}
        <div className="project-card glass-card">
          <img src="/assets/saas_dashboard.png" alt="SaaS Dashboard AI Preview" className="project-image" />
          <div className="project-content">
            <span className="project-date">Feb 2026 - Present</span>
            <h3>SaaS System for Local Shopkeepers</h3>
            <p>Designed and developed a cloud-based SaaS application using Java (Spring Boot) to manage inventory, sales, billing, and customer data.</p>
            <ul className="project-features">
              <li>Built scalable RESTful APIs and implemented secure authentication & authorization using Spring Security and JWT.</li>
              <li>Optimized MySQL database queries, applied layered architecture, and integrated a responsive frontend.</li>
            </ul>
            <div className="project-tags">
              <span className="tag">Java</span><span className="tag">Spring Boot</span>
              <span className="tag">MySQL</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card glass-card">
          <img src="/assets/powerbi_dashboard.png" alt="Power BI Dashboard AI Preview" className="project-image" />
          <div className="project-content">
            <span className="project-date">Nov 2025 - Dec 2025</span>
            <h3>Interactive Power BI Dashboard</h3>
            <p>Created an interactive dashboard using Power BI to visualize key data insights and improve decision-making.</p>
            <ul className="project-features">
              <li>Developed a dynamic Power BI dashboard featuring real-time analytics, customized visuals, and user-friendly navigation.</li>
              <li>Built an interactive Power BI dashboard to present complex datasets through clear, insightful visualizations.</li>
            </ul>
            <div className="project-tags">
              <span className="tag">Power BI</span><span className="tag">Data Analytics</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card glass-card">
          <div className="project-image-placeholder excel-bg" style={{height: "200px", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #1d6f42, #217346)", color: "#fff", fontSize: "3rem"}}><i className="fas fa-file-excel"></i></div>
          <div className="project-content">
            <span className="project-date">Feb 2025 - Apr 2025</span>
            <h3>Interactive Dashboard - Excel</h3>
            <p>Created a dynamic Excel dashboard using Pivot Tables and Power Query to track and visualize key performance indicators (KPIs) for sales operations.</p>
            <ul className="project-features">
              <li>Leveraged advanced Excel formulas (e.g., SUMIFS, INDEX-MATCH) and conditional formatting to highlight critical trends.</li>
              <li>Automated weekly reporting by implementing Power Query for seamless data import and cleaning, reducing manual preparation time by 15%.</li>
            </ul>
            <div className="project-tags">
              <span className="tag">Advanced Excel</span><span className="tag">Power Query</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Projects;
