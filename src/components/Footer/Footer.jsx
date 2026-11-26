import "./Footer.css";
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  Globe,
  PlayCircle,
  ArrowUpRight,
  Orbit,
  MessageCircle
} from 'lucide-react';

import './Footer.css';

// CONTACT DETAILS
const contactDetails = {
  phone: '+91 93156 17614',
  email: 'info@astromitraindia.com',
  location: 'Haryana, India'
};

// SOCIAL MEDIA LINKS

const socialLinks = {
  website: '#',
  instagram: '#',
  youtube: '#'
};

// FOOTER LINKS

const footerLinks = {
  quick: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Kundli', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ],

  services: [
    { name: 'जन्म कुंडली विश्लेषण', href: '#services' },
    { name: 'विवाह एवं कुंडली मिलान', href: '#services' },
    { name: 'करियर एवं व्यवसाय', href: '#services' },
    { name: 'धन एवं वित्त', href: '#services' },
    { name: 'रत्न परामर्श', href: '#gemstones' },
    { name: 'रुद्राक्ष परामर्श', href: '#gemstones' },
    { name: 'व्यक्तिगत परामर्श', href: '#consultation' }
  ]
};

// WHATSAPP LINK

const whatsappLink =
  'https://wa.me/919315617614?text=Hello%20Astro%20Mitra%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.';

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* MAIN FOOTER */}

        <div className="footer-main">

          {/* BRAND COLUMN */}

          <div className="footer-brand">

            <div className="footer-logo-icon">
              <Orbit size={35} strokeWidth={1.4} />
            </div>

            <h2>ASTRO MITRA</h2>

            <p className="footer-tagline">
              सही मार्गदर्शन, बेहतर कल के लिए
            </p>

            <p className="footer-brand-description">
              वैदिक ज्योतिष के माध्यम से जीवन के महत्वपूर्ण
              निर्णयों में व्यक्तिगत मार्गदर्शन प्राप्त करें।
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <ArrowUpRight size={12} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* SERVICES */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <ArrowUpRight size={12} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* CONTACT COLUMN */}

          <div className="footer-column footer-contact">

            <h3>Contact</h3>

            <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
              <Phone size={15} />
              <span>{contactDetails.phone}</span>
            </a>

            <a href="mailto:info@astromitraindia.com">
              <Mail size={15} />
              <span>{contactDetails.email}</span>
            </a>

            <div className="footer-address">
              <MapPin size={15} />
              <span>{contactDetails.location}</span>
            </div>

            {/* WHATSAPP CONTACT BUTTON */}

            <a
              href={whatsappLink}
              className="footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Astro Mitra on WhatsApp"
            >

              <MessageCircle className="whatsapp-icon" />

              <span className="whatsapp-text">
                <strong>Contact Astro Mitra</strong>
                <small>Chat with us on WhatsApp</small>
              </span>

              <ArrowUpRight className="whatsapp-arrow" size={17} />

            </a>

            {/* SOCIAL MEDIA */}

            <div className="footer-socials">

              <a
                href={socialLinks.website}
                aria-label="Website"
              >
                <Globe size={17} />
              </a>

              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
              >
                <Camera size={17} />
              </a>

              <a
                href={socialLinks.youtube}
                aria-label="YouTube"
              >
                <PlayCircle size={17} />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="footer-divider"></div>

        {/* LEGAL LINKS */}

        <div className="footer-legal">

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <span>|</span>

          <a href="/terms-and-conditions">
            Terms & Conditions
          </a>

          <span>|</span>

          <a href="/disclaimer">
            Disclaimer
          </a>

        </div>

        {/* DISCLAIMER */}

        <div className="footer-disclaimer">

          <p>
            ज्योतिषीय मार्गदर्शन पारंपरिक वैदिक ज्योतिषीय
            मान्यताओं पर आधारित है। इसे निश्चित परिणाम या
            पेशेवर चिकित्सा, कानूनी अथवा वित्तीय सलाह का
            विकल्प न समझें।
          </p>

        </div>

        {/* COPYRIGHT */}

        <div className="footer-copyright">

          © {new Date().getFullYear()} Astro Mitra.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
