import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="list-container">
          {experiences.map((exp) => (
            <div className="list-item" key={exp.id}>
              <div className="list-item-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="list-item-content">
                {exp.roles && exp.roles.length > 1 ? (
                  <div className="experience-roles-section">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="experience-timeline">
                      {exp.roles.map((role, idx) => (
                        <div className="timeline-item" key={idx}>
                          <div className="timeline-badge-container">
                            <span className="timeline-badge"></span>
                            {idx < exp.roles.length - 1 && <span className="timeline-line"></span>}
                          </div>
                          <div className="timeline-content">
                            <h4 className="role-title">{role.title}</h4>
                            <p className="role-period">{role.period}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>{exp.roles ? exp.roles[0].title : exp.title}</h3>
                    <p className="item-meta">
                      {exp.company} • {exp.roles ? exp.roles[0].period : exp.period}
                    </p>
                  </>
                )}
                <p className="item-description">{exp.description}</p>
                <div className="item-achievements">
                  {exp.achievements.map((achievement) => (
                    <span className="achievement-tag" key={achievement}>
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
