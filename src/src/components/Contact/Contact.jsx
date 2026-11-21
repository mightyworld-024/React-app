
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarDays,
  ArrowUpRight
} from 'lucide-react';

import './Contact.css';

// Add actual business contact details before publishing.
const CONTACT = {
  whatsapp: '',
  phone: '',
  email: ''
};

const contactOptions = [
  {
    title: 'WhatsApp',
    subtitle: 'सीधे बात करें',
    icon: MessageCircle,
    className: 'contact-whatsapp',
    href: CONTACT.whatsapp
      ? `https://wa.me/${CONTACT.whatsapp}`
      : '#consultation'
  },
  {
    title: 'Call',
    subtitle: 'कॉल करें',
    icon: Phone,
    className: 'contact-call',
    href: CONTACT.phone
      ? `tel:${CONTACT.phone}`
      : '#consultation'
  },
  {
    title: 'Email',
    subtitle: 'ईमेल भेजें',
    icon: Mail,
    className: 'contact-email',
    href: CONTACT.email
      ? `mailto:${CONTACT.email}`
      : '#consultation'
  },
  {
    title: 'Consultation Booking',
    subtitle: 'अपॉइंटमेंट बुक करें',
    icon: CalendarDays,
    className: 'contact-booking',
    href: '#consultation'
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
                href={item.href}
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
            href={
              CONTACT.whatsapp
                ? `https://wa.me/${CONTACT.whatsapp}`
                : '#consultation'
            }
            className="contact-action whatsapp-action"
          >
            <MessageCircle size={18} />
            WhatsApp पर बात करें
          </a>

          <a
            href={CONTACT.phone ? `tel:${CONTACT.phone}` : '#consultation'}
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
