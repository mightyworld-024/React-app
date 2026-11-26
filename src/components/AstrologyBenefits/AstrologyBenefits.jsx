
import {
  BriefcaseBusiness,
  Heart,
  Wallet,
  HeartPulse,
  GraduationCap,
  Users,
  Building2,
  Sparkles
} from 'lucide-react';

import './AstrologyBenefits.css';

const benefits = [
  { icon: BriefcaseBusiness, title: 'करियर' },
  { icon: Heart, title: 'विवाह एवं प्रेम' },
  { icon: Wallet, title: 'धन एवं समृद्धि' },
  { icon: HeartPulse, title: 'स्वास्थ्य' },
  { icon: GraduationCap, title: 'शिक्षा' },
  { icon: Users, title: 'परिवार एवं संबंध' },
  { icon: Building2, title: 'व्यवसाय' },
  { icon: Sparkles, title: 'आध्यात्मिक मार्गदर्शन' }
];

function AstrologyBenefits() {
  return (
    <section className="life-guidance-section" id="life-guidance">

      <div className="life-guidance-container">

        {/* CONTENT SECTION */}

        <div className="life-guidance-content">

          <span className="life-eyebrow">
            ASTRO MITRA
          </span>

          <h2>जीवन मार्ग</h2>

          <p className="life-description">
            जीवन के विभिन्न पहलुओं में ज्योतिषीय मार्गदर्शन प्राप्त करें
          </p>

          {/* BENEFITS GRID */}

          <div className="life-benefits-grid">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div className="life-benefit-card" key={item.title}>

                  <div className="life-benefit-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{item.title}</h3>

                </div>
              );
            })}

          </div>

          {/* CTA BUTTON */}

          <a href="#consultation" className="life-guidance-btn">
            व्यक्तिगत परामर्श प्राप्त करें
            <span> → </span>
          </a>

          <p className="life-guidance-note">
            आपकी कुंडली और आवश्यकताओं के अनुसार व्यक्तिगत मार्गदर्शन
          </p>

        </div>

      </div>

    </section>
  );
}

export default AstrologyBenefits;
