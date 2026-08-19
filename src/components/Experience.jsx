import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="list-container">
          {experiences.map((exp) => (
            <div className="list-item" key={exp.id}>
              <div className="list-item-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="list-item-content">
                <h3 className="company-name">
                  {exp.company}
                  {exp.location ? <span className="company-location"> — {exp.location}</span> : null}
                </h3>
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
                <p className="item-description">{exp.description}</p>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="item-achievements">
                    {exp.tags.map((tag) => (
                      <span className="achievement-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
