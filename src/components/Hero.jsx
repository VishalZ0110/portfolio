import portraitImage from '../assets/portrait.jpeg';

const heroSocial = [
  { icon: 'fas fa-graduation-cap', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=ny2znaIAAAAJ&hl=en' },
  { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/VishalZ0110' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/vishalyadavz789/' },
];

const CV_URL =
  'https://drive.google.com/file/d/1PPTeNhWFhypn_v7nq-tzXjVbl-wppqZ-/view?usp=sharing';

const Hero = () => {
  const scrollToPublications = (e) => {
    e.preventDefault();
    document.querySelector('#publications')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Vishal Yadav</h1>
          <h2>Researcher in 3D Computer Vision &amp; Spatial Intelligence</h2>
          <p>
            I build and study models that reason about geometry, semantics, and
            human interaction in 3D scenes. My work spans 3D reconstruction and
            surface representation, scene understanding, and vision-language
            geometric reasoning.
          </p>
          <div className="hero-buttons">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-file-alt"></i> Download CV
            </a>
            <a
              href="#publications"
              className="btn btn-secondary"
              onClick={scrollToPublications}
            >
              <i className="fas fa-book"></i> View Publications
            </a>
          </div>
          <div className="hero-social">
            {heroSocial.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <img src={portraitImage} alt="Vishal Yadav" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
