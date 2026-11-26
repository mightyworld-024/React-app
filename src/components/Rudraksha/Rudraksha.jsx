
import './Rudraksha.css';

const items = [
  {
    image: '/images/gemstones/gem1.png',
    title: 'Certified Gemstones',
    subtitle: 'प्रमाणित रत्नों का चयन',
    button: 'अभी देखें'
  },
  {
    image: '/images/gemstones/gem2.png',
    title: 'Rudraksha',
    subtitle: 'रुद्राक्ष की विभिन्न श्रेणियां',
    button: 'अभी देखें'
  },
  {
    image: '/images/gemstones/gem3.png',
    title: 'Gemstone Consultation',
    subtitle: 'उचित रत्न के लिए परामर्श',
    button: 'अभी जानें'
  },
  {
    image: '/images/gemstones/gem4.png',
    title: 'Rudraksha Selection',
    subtitle: 'रुद्राक्ष चयन में मार्गदर्शन',
    button: 'अभी जानें'
  }
];

function Rudraksha() {
  return (
    <section className="rudraksha-section" id="gemstones">

      <div className="rudraksha-container">

        <div className="rudraksha-heading">
          <span>ASTRO MITRA</span>
          <h2>रत्न और रुद्राक्ष</h2>
          <p>
            अपनी आवश्यकताओं के अनुसार सही विकल्प चुनें
          </p>
        </div>

        <div className="rudraksha-grid">

          {items.map((item) => (
            <div className="rudraksha-card" key={item.title}>

              <div className="rudraksha-icon">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rudraksha-card-image"
                />
              </div>

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

              <a href="#consultation" className="rudraksha-btn">
                {item.button}
              </a>

            </div>
          ))}

        </div>

        <div className="rudraksha-bottom">

          <h3>
            रत्न एवं रुद्राक्ष के लिए व्यक्तिगत परामर्श लें
          </h3>

          <p>
            अपनी कुंडली और आवश्यकताओं के अनुसार मार्गदर्शन प्राप्त करें।
          </p>

          <a href="#consultation" className="rudraksha-cta">
            परामर्श बुक करें →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Rudraksha;
