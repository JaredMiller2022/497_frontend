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
      <Footer />
    </>
  )
}

export default Home;
