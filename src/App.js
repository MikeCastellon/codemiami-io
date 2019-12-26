import React from 'react';
import Header from './components/Header';
import About from './components/About';
import RecentWorks from './components/RecentWorks';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <RecentWorks />
      <Partners />
      <Testimonials />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
