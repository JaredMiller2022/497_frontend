import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HomeContentSection from '../HomeContentSection';
import OurServices from '../OurServices';
// import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <HomeContentSection
        title="Our Services"
        color="#fff"
        content={<OurServices />}
      />
      {/* It's fine that the below two sections are empty for the demo. */}
      <HomeContentSection title="Our Coaches" color="#99ccff" />
      <HomeContentSection title="Testimonials" color="#fff" />
      {/*<Cards />*/}
      <Footer />
    </>
  )
}

export default Home;
