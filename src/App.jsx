import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AstrologyServices from './components/AstrologyServices/AstrologyServices';
import ConsultationPackages from './components/ConsultationPackages/ConsultationPackages';
import About from './components/About/About';
import ConsultationForm from './components/ConsultationForm/ConsultationForm';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Rudraksha from './components/Rudraksha/Rudraksha';
import Testimonials from './components/Testimonials/Testimonials';
import AstrologyBenefits from './components/AstrologyBenefits/AstrologyBenefits';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <AstrologyServices />
      <ConsultationPackages />
      <About />
      <ConsultationForm />
      <WhyChooseUs />
      <Rudraksha />
      <Testimonials />
      <AstrologyBenefits />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />


    </main>
  );
}

export default App;
