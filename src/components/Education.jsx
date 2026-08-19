import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="list-container">
          {education.map((edu) => (
            <div className="list-item education-item" key={edu.id}>
              <div className="list-item-content">
                <h3>{edu.degree}</h3>
                <p className="item-meta">
                  {edu.institution} • {edu.location}
                </p>
                <p className="item-meta">{edu.specialization}</p>
                <p className="item-period">{edu.period}</p>
                <ul className="education-details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="advisors">
                  <span className="advisors-label">Research with</span>
                  <div className="advisors-list">
                    {edu.advisors.map((a) => (
                      <span key={a.name}>
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="advisor-link"
                        >
                          {a.name}
                        </a>
                        {a.note ? ` (${a.note})` : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
