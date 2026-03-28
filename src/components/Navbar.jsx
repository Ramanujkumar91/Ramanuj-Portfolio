import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/" onClick={closeMenu}>RK.</Link>
      </div>
      <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
        <i className={`fas fa-${menuActive ? 'times' : 'bars'}`}></i>
      </div>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link></li>
        <li><Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/education" className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`} onClick={closeMenu}>Education</Link></li>
        <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/certificates" className={`nav-link ${location.pathname === '/certificates' ? 'active' : ''}`} onClick={closeMenu}>Certificates</Link></li>
        <li><Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/contact" className={`nav-link btn-contact`} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
