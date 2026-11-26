
import './Testimonials.css';

const testimonials = [
  {
    name: 'ग्राहक 01',
    review: 'यहाँ ग्राहक का वास्तविक अनुभव और प्रतिक्रिया दिखाई जाएगी।',
  },
  {
    name: 'ग्राहक 02',
    review: 'यहाँ ज्योतिषीय परामर्श से जुड़ा ग्राहक का अनुभव जोड़ें।',
  },
  {
    name: 'ग्राहक 03',
    review: 'यहाँ ग्राहक की प्रतिक्रिया और उनके अनुभव का विवरण जोड़ें।',
  },
  {
    name: 'ग्राहक 04',
    review: 'यहाँ Astro Mitra की सेवा के बारे में वास्तविक प्रतिक्रिया जोड़ें।',
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">

      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span>ASTRO MITRA</span>
          <h2>हमारे ग्राहकों के अनुभव</h2>
          <p>
            हमारे ग्राहकों के अनुभव और उनकी प्रतिक्रियाएं
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>

              <div className="testimonial-stars">
                ★ ★ ★ ★ ★
              </div>

              <div className="testimonial-quote">
                “{item.review}”
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.slice(-2)}
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <p>Astro Mitra Customer</p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
