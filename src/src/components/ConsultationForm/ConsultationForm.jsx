
import './ConsultationForm.css';

function ConsultationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // We will connect WhatsApp or the backend here.
  };

  return (
    <section className="consultation-form-section" id="consultation">

      <div className="consultation-form-container">

        <div className="form-heading">
          <span className="form-eyebrow">ASTRO MITRA</span>

          <h2>अपनी कुंडली का व्यक्तिगत विश्लेषण करवाएं</h2>

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
            required
          />

          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              किस विषय में परामर्श चाहिए? *
            </option>
            <option value="जन्म कुंडली विश्लेषण">जन्म कुंडली विश्लेषण</option>
            <option value="विवाह एवं कुंडली मिलान">विवाह एवं कुंडली मिलान</option>
            <option value="करियर एवं व्यवसाय">करियर एवं व्यवसाय</option>
            <option value="धन एवं वित्त">धन एवं वित्त</option>
            <option value="ग्रह दोष एवं उपाय">ग्रह दोष एवं उपाय</option>
            <option value="स्वास्थ्य परामर्श">स्वास्थ्य परामर्श</option>
            <option value="अन्य">अन्य</option>
          </select>

          <textarea
            name="details"
            placeholder="अपना सवाल लिखें (वैकल्पिक)"
            rows="4"
          />

          <button type="submit" className="consultation-submit-btn">
            Book Consultation
            <span> → </span>
          </button>

          <div className="form-privacy">
            <span>🔒</span>
            आपकी जानकारी पूरी तरह गोपनीय रखी जाएगी।
          </div>

        </form>

      </div>

    </section>
  );
}

export default ConsultationForm;
