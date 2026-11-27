
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarDays,
  ArrowUpRight
} from 'lucide-react';

import './Contact.css';

// WhatsApp Business Number
const CONTACT = {
  whatsapp: '919315617614'
};

const contactOptions = [
  {
    title: 'WhatsApp',
    subtitle: 'सीधे बात करें',
    icon: MessageCircle,
    className: 'contact-whatsapp',
    message: 'Namaste, mujhe aapki astrology services ke baare mein jaankari chahiye.'
  },
  {
    title: 'Call',
    subtitle: 'कॉल करें',
    icon: Phone,
    className: 'contact-call',
    message: 'Namaste, main aapse astrology consultation ke liye baat karna chahta hoon.'
  },
  {
    title: 'Email',
    subtitle: 'ईमेल भेजें',
    icon: Mail,
    className: 'contact-email',
    message: 'Namaste, mujhe apni problem ke liye jyotishiya margdarshan chahiye.'
  },
  {
    title: 'Consultation Booking',
    subtitle: 'अपॉइंटमेंट बुक करें',
    icon: CalendarDays,
    className: 'contact-booking',
    message: 'Namaste, main apni consultation appointment book karna chahta hoon. Kripya mujhe details batayein.'
  }
];

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* HEADING */}

        <div className="contact-heading">

          <span>ASTRO MITRA</span>

          <h2>संपर्क करें</h2>

          <p>
            अपनी समस्या पर ज्योतिषीय मार्गदर्शन लें
          </p>

        </div>

        {/* CONTACT CARDS */}

        <div className="contact-grid">

          {contactOptions.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(item.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-card ${item.className}`}
                key={item.title}
              >

                <div className="contact-card-icon">
                  <Icon size={27} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>

                <ArrowUpRight
                  className="contact-arrow"
                  size={16}
                />

              </a>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <div className="contact-actions">

          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Namaste, mujhe aapki astrology services ke baare mein jaankari chahiye.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action whatsapp-action"
          >
            <MessageCircle size={18} />
            WhatsApp पर बात करें
          </a>

          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Namaste, main consultation book karna chahta hoon.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action call-action"
          >
            <Phone size={17} />
            Call Now
          </a>

        </div>

        <p className="contact-note">
          सही मार्गदर्शन के लिए आज ही हमसे जुड़ें।
        </p>

      </div>

    </section>
  );
}

export default Contact;
