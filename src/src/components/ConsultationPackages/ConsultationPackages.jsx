
import './ConsultationPackages.css';

const packages = [
  {
    name: 'Basic Kundli',
    price: '₹XXX',
    subtitle: 'प्रारंभिक विश्लेषण',
    duration: '30 मिनट',
    features: [
      'जन्म कुंडली विश्लेषण',
      'लग्न',
      'राशि',
      'नक्षत्र',
      'ग्रह स्थिति'
    ]
  },
  {
    name: 'Detailed Kundli',
    price: '₹XXX',
    subtitle: 'विस्तृत विश्लेषण',
    duration: '60 मिनट',
    features: [
      'जन्म कुंडली विश्लेषण',
      'लग्न',
      'राशि',
      'नक्षत्र',
      'दशा एवं गोचर',
      'योग विश्लेषण'
    ]
  },
  {
    name: 'Premium Consultation',
    price: '₹XXX',
    subtitle: 'व्यक्तिगत मार्गदर्शन',
    duration: '90 मिनट',
    features: [
      'जन्म कुंडली विश्लेषण',
      'लग्न',
      'राशि',
      'नक्षत्र',
      'दशा एवं गोचर',
      'उपाय एवं विस्तृत मार्गदर्शन'
    ]
  }
];

function ConsultationPackages() {
  return (
    <section className="consultation-packages" id="packages">

      <div className="packages-heading">
        <span className="packages-label">ASTRO MITRA</span>
        <h2>हमारे परामर्श पैकेज</h2>
        <p>
          अपनी आवश्यकताओं के अनुसार सही विकल्प चुनें
        </p>
      </div>

      <div className="packages-grid">

        {packages.map((item) => (
          <div className="package-card" key={item.name}>

            <h3>{item.name}</h3>

            <div className="package-price">
              {item.price}
            </div>

            <p className="package-subtitle">
              ({item.subtitle})
            </p>

            <div className="package-duration">
              <span>◷</span> {item.duration}
            </div>

            <ul className="package-features">
              {item.features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#consultation" className="package-btn">
              Book Now
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ConsultationPackages;
