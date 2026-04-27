const Contact = () => {
  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/VishalZ0110' },
    { icon: 'fas fa-graduation-cap', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=ny2znaIAAAAJ&hl=en' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/vishalyadavz789/' },
    { icon: 'fab fa-twitter', label: 'Twitter/X', url: 'https://x.com/zeheralv' },
    { icon: 'fab fa-instagram', label: 'Instagram', url: 'https://instagram.com/vishal_yadav._._' },
    { icon: 'fas fa-envelope', label: 'Email', url: 'mailto:vishalvy789@gmail.com' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm always happy to connect about research or collaborative projects. Feel free to reach out!</p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:vishalvy789@gmail.com" className="contact-email">vishalvy789@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-grid">
              {socialLinks.map((social) => (
                <a
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.label}
                >
                  <i className={social.icon}></i>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

