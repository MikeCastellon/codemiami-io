import React from 'react';
import Header from './components/Header';
import About from './components/About';
import RecentWorks from './components/RecentWorks';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Header />
      <About />
      <RecentWorks />
      <Partners />
      <Testimonials />
      <Staff />
      <Contact />
      </div>
      
    <div className='footer'>
      <Footer />
    </div>
    </div>
  )
}

export default App;
