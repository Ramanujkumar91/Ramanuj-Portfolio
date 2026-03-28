function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fa-code",
      skills: ["C", "C++", "JavaScript", "Java", "Python"]
    },
    {
      title: "Frameworks & Libs",
      icon: "fa-layer-group",
      skills: ["Spring Boot", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Tools & Platforms",
      icon: "fa-toolbox",
      skills: ["Git", "GitHub", "Power BI", "Excel"]
    },
    {
      title: "Soft Skills",
      icon: "fa-users",
      skills: ["Collaborative Teamwork", "Adaptability", "Problem Solving"]
    }
  ];

  const skillIcons = {
    "C": "fas fa-code",
    "C++": "fas fa-code",
    "JavaScript": "fab fa-js",
    "Java": "fab fa-java",
    "Python": "fab fa-python",
    "Spring Boot": "fas fa-leaf",
    "Pandas": "fas fa-table",
    "NumPy": "fas fa-calculator",
    "Matplotlib": "fas fa-chart-line",
    "Power BI": "fas fa-chart-bar",
    "Excel": "fas fa-file-excel",
    "Git": "fab fa-git-alt",
    "GitHub": "fab fa-github",
    "Collaborative Teamwork": "fas fa-users",
    "Adaptability": "fas fa-adjust",
    "Problem Solving": "fas fa-lightbulb"
  };

  return (
    <section className="section reveal active">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category-card">
              <div className="skill-icon-wrapper">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h3>{category.title}</h3>
              <div className="skills-badges">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="badge">
                    <i className={skillIcons[skill] || 'fas fa-check-circle'} style={{marginRight: '0.5rem'}}></i>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
