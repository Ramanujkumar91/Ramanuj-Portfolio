function Certificates() {
  const fallbackSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM1OGE2ZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzU4YTZmZiI+RHJvcCBwaG90byBoZXJlPC90ZXh0Pjwvc3ZnPg==";
  
  return (
    <section className="section reveal active">
      <h2 className="section-title">Certifications</h2>
      
      <div className="projects-grid">
        {/* Cert 1 */}
        <div className="project-card glass-card">
          <img src="/assets/cert_master_genai.jpg" alt="Master Generative AI & Generative AI tools" className="project-image" onError={(e) => e.target.src = fallbackSvg} />
          <div className="project-content">
            <span className="project-date">August 23, 2025</span>
            <h3>Master Generative AI & Generative AI tools (ChatGPT & more)</h3>
            <p>Certified by Infosys Springboard for mastering Generative AI concepts and tools.</p>
            <div className="project-tags"><span className="tag">Generative AI</span></div>
          </div>
        </div>
        {/* Cert 2 */}
        <div className="project-card glass-card">
          <img src="/assets/cert_build_genai.jpg" alt="Build Generative AI Apps and Solutions with No-Code Tools" className="project-image" onError={(e) => e.target.src = fallbackSvg} />
          <div className="project-content">
            <span className="project-date">August 23, 2025</span>
            <h3>Build Generative AI Apps and Solutions with No-Code Tools</h3>
            <p>Certified by Infosys Springboard. Developed practical skills in building AI apps using no-code platforms.</p>
            <div className="project-tags"><span className="tag">No-Code</span><span className="tag">GenAI App</span></div>
          </div>
        </div>
        {/* Cert 3 */}
        <div className="project-card glass-card">
          <img src="/assets/cert_chatgpt4_prompt.jpg" alt="ChatGPT-4 Prompt Engineering" className="project-image" onError={(e) => e.target.src = fallbackSvg} />
          <div className="project-content">
            <span className="project-date">August 12, 2025</span>
            <h3>ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM</h3>
            <p>Certified by Infosys Springboard in formulating optimal prompts to leverage powerful LLM models effectively.</p>
            <div className="project-tags"><span className="tag">Prompt Engineering</span></div>
          </div>
        </div>
        {/* Cert 4 */}
        <div className="project-card glass-card">
          <img src="/assets/cert_computational_theory.jpg" alt="Computational Theory" className="project-image" onError={(e) => e.target.src = fallbackSvg} />
          <div className="project-content">
            <span className="project-date">August 11, 2025</span>
            <h3>Computational Theory: Language Principle & Finite Automata Theory</h3>
            <p>Certified by Infosys Springboard. Gained theoretical foundation in automata and formal languages.</p>
            <div className="project-tags"><span className="tag">Theory of Computation</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Certificates;
