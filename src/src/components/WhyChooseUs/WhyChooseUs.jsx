
import {
  Orbit,
  Compass,
  LockKeyhole,
  ShieldCheck,
  MonitorSmartphone,
  UserRoundCheck
} from 'lucide-react';

import './WhyChooseUs.css';

const reasons = [
  {
    icon: Orbit,
    title: 'प्रामाणिक कुंडली विश्लेषण'
  },
  {
    icon: Compass,
    title: 'सटीक ज्योतिषीय सलाह'
  },
  {
    icon: LockKeyhole,
    title: 'गोपनीय परामर्श'
  },
  {
    icon: ShieldCheck,
    title: 'सही समय में मार्गदर्शन'
  },
  {
    icon: MonitorSmartphone,
    title: 'ऑनलाइन Consultation'
  },
  {
    icon: UserRoundCheck,
    title: 'Practical Guidance'
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-choose">

      <div className="why-choose-container">

        <div className="why-heading">
          <span>ASTRO MITRA</span>
          <h2>क्यों चुनें Astro Mitra?</h2>
          <p>
            आपके जीवन के महत्वपूर्ण निर्णयों के लिए विश्वसनीय ज्योतिषीय मार्गदर्शन
          </p>
        </div>

        <div className="why-choose-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div className="why-card" key={reason.title}>

                <div className="why-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3>{reason.title}</h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
