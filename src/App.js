import React from 'react';
import Card from './components/Card';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
function App() {
  return (
    <div className = 'min-h-screen py-10 px-3 sm: px-5 bg-grapy-100'>
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
