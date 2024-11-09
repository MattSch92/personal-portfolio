import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Photography from './components/Photography';
import MapGallery from './components/MapGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Photography />
      <MapGallery /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
