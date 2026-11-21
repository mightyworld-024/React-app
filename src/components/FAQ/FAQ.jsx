
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const questions = [
  {
    question: 'क्या कुंडली सही होती है?',
    answer:
      'कुंडली वैदिक ज्योतिष की पारंपरिक गणनाओं पर आधारित होती है। इसकी व्याख्या जन्म विवरण और ज्योतिषीय पद्धति के अनुसार की जाती है।'
  },
  {
    question: 'कुंडली विश्लेषण में कितना समय लगता है?',
    answer:
      'विश्लेषण का समय आपके प्रश्नों और चुने गए परामर्श पैकेज पर निर्भर करता है। विस्तृत विश्लेषण में अधिक समय लग सकता है।'
  },
  {
    question: 'क्या जन्म समय जरूरी है?',
    answer:
      'हाँ, सटीक जन्म समय कुंडली के लग्न और भावों की गणना के लिए महत्वपूर्ण होता है।'
  },
  {
    question: 'ऑनलाइन कुंडली Consultation कैसे होती है?',
    answer:
      'आप अपनी जन्म संबंधी जानकारी और प्रश्न साझा करते हैं। इसके बाद निर्धारित समय पर ऑनलाइन व्यक्तिगत परामर्श दिया जाता है।'
  },
  {
    question: 'क्या फल सभी के बदल सकते हैं?',
    answer:
      'ज्योतिषीय व्याख्या व्यक्ति की जन्म कुंडली और वर्तमान दशा एवं गोचर के आधार पर अलग-अलग हो सकती है।'
  },
  {
    question: 'क्या सवालों का चयन कुंडली के आधार पर किया जाता है?',
    answer:
      'आप अपनी आवश्यकता के अनुसार करियर, विवाह, परिवार, धन या अन्य विषयों पर प्रश्न पूछ सकते हैं।'
  }
];

const stars = [
  { x: 50, y: 9 },
  { x: 78, y: 22 },
  { x: 91, y: 49 },
  { x: 77, y: 78 },
  { x: 48, y: 91 },
  { x: 19, y: 75 },
  { x: 9, y: 43 },
  { x: 27, y: 19 },
  { x: 50, y: 30 },
  { x: 69, y: 50 },
  { x: 50, y: 70 },
  { x: 31, y: 50 }
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [4, 5], [5, 6], [6, 7], [7, 0],
  [0, 8], [8, 9], [9, 2],
  [9, 10], [10, 4], [10, 11], [11, 6]
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">

      <div className="faq-container">

        <div className="faq-layout">

          {/* LEFT: ANIMATED NAKSHATRA */}

          <div className="faq-cosmos">

            <div className="cosmos-glow"></div>

            <div className="zodiac-orbit orbit-one"></div>
            <div className="zodiac-orbit orbit-two"></div>
            <div className="zodiac-orbit orbit-three"></div>

            <div className="constellation">

              <svg
                className="constellation-lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {connections.map(([start, end], index) => (
                  <line
                    key={index}
                    x1={stars[start].x}
                    y1={stars[start].y}
                    x2={stars[end].x}
                    y2={stars[end].y}
                    className="constellation-line"
                  />
                ))}
              </svg>

              {stars.map((star, index) => (
                <span
                  key={index}
                  className={`star star-${index + 1}`}
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`
                  }}
                />
              ))}

            </div>

            <div className="cosmos-center">
              <span className="cosmos-symbol">✧</span>
              <div>ॐ</div>
              <p>नक्षत्र एवं ज्योतिष</p>
            </div>

            <div className="cosmos-caption">
              THE UNIVERSE HAS A PLAN
            </div>

          </div>

          {/* RIGHT: FAQ ACCORDION */}

          <div className="faq-content">

            <div className="faq-heading">
              <span>ASTRO MITRA</span>
              <h2>FAQ</h2>
              <p>अक्सर पूछे जाने वाले सवाल</p>
            </div>

            <div className="faq-list">

              {questions.map((item, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  key={item.question}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                  >

                    <span>{item.question}</span>

                    <span className="faq-toggle">
                      {activeIndex === index
                        ? <Minus size={17} />
                        : <Plus size={17} />
                      }
                    </span>

                  </button>

                  <div
                    className="faq-answer-wrapper"
                    style={{
                      gridTemplateRows:
                        activeIndex === index ? '1fr' : '0fr'
                    }}
                  >

                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;
