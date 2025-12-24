import { projects } from '../data/projects';

const Projects = () => {
  const renderDescription = (project) => {
    if (project.descriptionLink) {
      const parts = project.description.split(project.descriptionLink.text);
      return (
        <>
          {parts[0]}
          <a href={project.descriptionLink.url} target="_blank" rel="noopener noreferrer">
            {project.descriptionLink.text}
          </a>
          {parts[1] || ''}
        </>
      );
    }
    return project.description;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="list-container">
          {projects.map((project) => (
            <div className="list-item" key={project.id}>
              <div className="list-item-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="list-item-content">
                <h3>{project.title}</h3>
                <p className="item-meta">{project.tech}</p>
                <p className="item-description">{renderDescription(project)}</p>
                {project.links.length > 0 && (
                  <div className="item-links">
                    {project.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-link"
                        key={link.label}
                      >
                        {link.label}
                      </a>
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

export default Projects;
