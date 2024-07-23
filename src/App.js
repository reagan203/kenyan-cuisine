import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import LandingPage from './LandingPage'
import FAQ from './FAQ';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
