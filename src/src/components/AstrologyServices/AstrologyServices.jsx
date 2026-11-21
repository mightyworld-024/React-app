
import {
  Orbit,
  HeartHandshake,
  BriefcaseBusiness,
  Wallet,
  Sun,
  ChartNoAxesCombined,
  Sparkles,
  Gem,
  HeartPulse
} from 'lucide-react';

import './AstrologyServices.css';

function AstrologyServices() {

  const services = [
    {
      icon: Orbit,
      title: 'जन्म कुंडली विश्लेषण'
    },
    {
      icon: HeartHandshake,
      title: 'विवाह एवं कुंडली मिलान'
    },
    {
      icon: BriefcaseBusiness,
      title: 'करियर एवं व्यवसाय'
    },
    {
      icon: Wallet,
      title: 'धन एवं वित्त'
    },
    {
      icon: Sun,
      title: 'ग्रह दोष एवं उपाय'
    },
    {
      icon: ChartNoAxesCombined,
      title: 'दशा एवं गोचर विश्लेषण'
    },
    {
      icon: Sparkles,
      title: 'प्रश्न कुंडली'
    },
    {
      icon: Gem,
      title: 'रत्न परामर्श'
    },
    {
      icon: HeartPulse,
      title: 'स्वास्थ्य परामर्श'
    }
  ];

  return (
    <section className="astrology-services" id="services">

      {/* Section Heading */}
      <div className="services-heading">

        <h2>हमारी ज्योतिष सेवाएं</h2>

        <p>
          जीवन के हर महत्वपूर्ण निर्णय में ज्योतिषीय मार्गदर्शन
        </p>

      </div>

      {/* Services Grid */}
      <div className="services-grid">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={index}>

              <div className="service-icon">
                <Icon size={30} strokeWidth={1.5} />
              </div>

              <h3>{service.title}</h3>

              <a href="#consultation" className="service-btn">
                और जानें
              </a>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default AstrologyServices;
