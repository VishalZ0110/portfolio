import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    if (!isHomePage) return; // Let the link navigate normally if not on home page
    
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research Interests' },
    { href: '#publications', label: 'Publications' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>Vishal Yadav</h2>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              {isHomePage ? (
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={`/${link.href}`}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="nav-item">
            <Link
              to="/blogs"
              className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-blog"></i> Blogs
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1PPTeNhWFhypn_v7nq-tzXjVbl-wppqZ-/view?usp=sharing"
              className="nav-link cv-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-alt"></i> CV
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
