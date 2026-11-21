
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

function FinalCTA() {
  return (
    <section className="final-cta-section" id="final-cta">

      <div className="final-cta-overlay"></div>

      <div className="final-cta-content">

        <a href="#consultation" className="final-cta-btn">
          अपनी परामर्श बुक करें
          <ArrowRight size={17} />
        </a>

      </div>

    </section>
  );
}

export default FinalCTA;
