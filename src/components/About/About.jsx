
import './About.css';

const astrologerHighlights = [
  'वैदिक ज्योतिष मार्गदर्शन',
  'व्यक्तिगत कुंडली विश्लेषण',
  'करियर एवं विवाह परामर्श',
  'ग्रह दोष एवं ज्योतिषीय उपाय'
];

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-content">

        <span className="about-eyebrow">
          ASTRO MITRA
        </span>

        <h2>
          हमारे बारे में
        </h2>

        <p className="about-description">
          वैदिक ज्योतिष के प्राचीन ज्ञान और अनुभव के माध्यम से
          Astro Mitra आपके जीवन के महत्वपूर्ण निर्णयों में
          सही दिशा और मार्गदर्शन प्रदान करने का प्रयास करता है।
        </p>

        <div className="about-highlights">
          {astrologerHighlights.map((item) => (
            <div className="about-highlight" key={item}>
              <span className="about-check">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <a
  href="https://wa.me/919315617614?text=Namaste%2C%20mujhe%20jyotish%20paramarsh%20lena%20hai."
  className="about-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  हमसे परामर्श करें
  <span> → </span>
</a>

      </div>

    </section>
  );
}

export default About;
