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
                <h3>{exp.title}</h3>
                <p className="item-meta">{exp.company} • {exp.period}</p>
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
