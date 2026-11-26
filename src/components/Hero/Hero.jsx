import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="home">

      {/* Hero Background Image */}
      <div className="hero-image">
        <img
          src="/images/hero-astrologer.png"
          alt="Astro Mitra Vedic Astrologer"
          className="hero-astrologer-img"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">

        <div className="hero-text">

          <h1>
            अपनी कुंडली को समझें,
            <span>अपने जीवन की दिशा जानें</span>
          </h1>

          <p>
            वैदिक ज्योतिष के आधार पर कुंडली विश्लेषण, करियर,
            विवाह, स्वास्थ्य और जीवन के महत्वपूर्ण प्रश्नों
            का सटीक मार्गदर्शन।
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">

            <a href="#consultation" className="hero-btn primary-btn">
              Book Kundli Consultation
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn whatsapp-btn"
            >
              <span>◉</span> WhatsApp पर बात करें
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">

            <div className="trust-item">
              <span>♙</span>
              Personal Consultation
            </div>

            <div className="trust-item">
              <span>♙</span>
              Confidential
            </div>

            <div className="trust-item">
              <span>☸</span>
              Vedic Astrology
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
