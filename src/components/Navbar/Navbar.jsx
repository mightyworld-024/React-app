
import './Navbar.css';

function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Astrology Services', href: '#services' },
    { name: 'Kundli', href: '#consultation' },
    { name: 'Gemstones', href: '#rudraksha' },
    { name: 'Rudraksha', href: '#rudraksha' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="navbar-logo">
        <img src="/images/logo.png" alt="Astro Mitra Logo" />
      </a>

      {/* Navigation Links */}
      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={index === 0 ? 'active' : ''}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Consultation Button */}
      <a href="#consultation" className="navbar-cta">
        Book Consultation
      </a>

    </nav>
  );
}

export default Navbar;
