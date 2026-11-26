
import './ConsultationForm.css';

function ConsultationForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const dob = formData.get('dob');
    const birthTime = formData.get('birthTime');
    const birthPlace = formData.get('birthPlace');
    const phone = formData.get('phone');
    const topic = formData.get('topic');
    const details = formData.get('details');

    const message = `
🌟 *NEW CONSULTATION REQUEST*
━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📅 *Date of Birth:* ${dob}
⏰ *Birth Time:* ${birthTime}
📍 *Birth Place:* ${birthPlace}
📱 *Mobile Number:* ${phone}

🔮 *Consultation Topic:* ${topic}

💬 *Additional Details:*
${details || 'Not provided'}

━━━━━━━━━━━━━━━━━━
Sent via Astro Mitra Website
    `.trim();

    const whatsappURL = `https://wa.me/919315617614?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
    form.reset();
  };

  return (
    <section className="consultation-form-section" id="consultation">

      <div className="consultation-form-container">

        {/* LEFT SIDE - CONSULTATION FORM */}

        <div className="consultation-form-left">

          <div className="form-heading">

            <span className="form-eyebrow">
              ASTRO MITRA
            </span>

            <h2>
              अपनी कुंडली का व्यक्तिगत विश्लेषण करवाएं
            </h2>

            <p>
              सही मार्गदर्शन के लिए आज ही अपनी जानकारी साझा करें
            </p>

          </div>

          <form className="kundli-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="नाम *"
              name="name"
              required
            />

            <div className="form-row">

              <input
                type="date"
                name="dob"
                aria-label="जन्म तिथि"
                required
              />

              <input
                type="time"
                name="birthTime"
                aria-label="जन्म समय"
                required
              />

            </div>

            <input
              type="text"
              placeholder="जन्म स्थान *"
              name="birthPlace"
              required
            />

            <input
              type="tel"
              placeholder="मोबाइल / WhatsApp नंबर *"
              name="phone"
              pattern="[0-9]{10}"
              maxLength="10"
              inputMode="numeric"
              required
            />

            <select name="topic" defaultValue="" required>

              <option value="" disabled>
                किस विषय में परामर्श चाहिए? *
              </option>

              <option value="जन्म कुंडली विश्लेषण">
                जन्म कुंडली विश्लेषण
              </option>

              <option value="विवाह एवं कुंडली मिलान">
                विवाह एवं कुंडली मिलान
              </option>

              <option value="करियर एवं व्यवसाय">
                करियर एवं व्यवसाय
              </option>

              <option value="धन एवं वित्त">
                धन एवं वित्त
              </option>

              <option value="ग्रह दोष एवं उपाय">
                ग्रह दोष एवं उपाय
              </option>

              <option value="स्वास्थ्य परामर्श">
                स्वास्थ्य परामर्श
              </option>

              <option value="अन्य">
                अन्य
              </option>

            </select>

            <textarea
              name="details"
              placeholder="अपना सवाल लिखें (वैकल्पिक)"
              rows="4"
            />

            <button
              type="submit"
              className="consultation-submit-btn"
            >
              Book Consultation
              <span> → </span>
            </button>

            <div className="form-privacy">
              <span>🔒</span>
              आपकी जानकारी पूरी तरह गोपनीय रखी जाएगी।
            </div>

          </form>

        </div>


        {/* RIGHT SIDE - GALAXY EFFECT */}

        <div className="consultation-galaxy">

          {/* STARS */}

          <div className="galaxy-stars">

            {Array.from({ length: 45 }).map((_, i) => (
              <span
                key={i}
                className="galaxy-star"
                style={{
                  '--star-x': `${(i * 37 + 13) % 100}%`,
                  '--star-y': `${(i * 53 + 19) % 100}%`,
                  '--star-delay': `${(i % 7) * 0.4}s`
                }}
              />
            ))}

          </div>


          {/* NEBULA */}

          <div className="galaxy-nebula"></div>


          {/* ORBIT SYSTEM */}

          <div className="galaxy-orbit orbit-one">
            <span className="orbit-planet planet-one"></span>
          </div>

          <div className="galaxy-orbit orbit-two">
            <span className="orbit-planet planet-two"></span>
          </div>

          <div className="galaxy-orbit orbit-three">
            <span className="orbit-planet planet-three"></span>
          </div>


          {/* CENTRAL GALAXY */}

          <div className="galaxy-core">
            <div className="galaxy-core-inner">
              <span>✦</span>
            </div>
          </div>


          {/* GALAXY TEXT */}

          <div className="galaxy-caption">

            <span className="galaxy-caption-eyebrow">
              ✧ COSMIC GUIDANCE ✧
            </span>

            <h3>
              Your Stars.
              <br />
              Your Destiny.
            </h3>

            <p>
              Discover the cosmic connection between your birth
              and your destiny.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ConsultationForm;
