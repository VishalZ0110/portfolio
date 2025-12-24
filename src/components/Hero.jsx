import portraitImage from '../assets/portrait.jpeg';

const Hero = () => {
  const handleGetInTouch = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Vishal Yadav</h1>
          <h2>CV Research Engineer & 3D Vision Enthusiast</h2>
          <p>Passionate about combining 3D Vision and Applied research to solve real-world problems.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary" onClick={handleGetInTouch}>
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1PPTeNhWFhypn_v7nq-tzXjVbl-wppqZ-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fas fa-eye"></i> View CV
            </a>
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

