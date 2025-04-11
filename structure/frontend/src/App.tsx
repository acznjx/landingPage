import React, { useEffect } from 'react';

import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Broker from './components/Broker';
import Integracao from './components/API/Integration';
import Filter from './components/API/Filter';
import Property from './components/API/Property';
import Testimonials from './components/Testimonials';
import FormWRA from './components/formWRA';
import FloatingForm from './components/floatingForm';
import Cookies from './components/Cookies';
import Footer from './components/Footer';

import * as scripts from './assets/scripts/scripts';

function App() {
    useEffect(() => {
      const container = document.querySelector<HTMLDivElement>('.depoimento-carousel');
      if (container) {
        initCarousel(container);
      }
    }, []);
  
  return (
    <div>
      <TopBar />
      <Hero />
      <Broker />
      <Integracao />

      <Filter onFilter={(data) => console.log('Filtro aplicado:', data)} />

      <Property item={{ id: 1, name: 'Casa exemplo', price: 500000 }} />

      <Testimonials />
      <FormWRA />
      <FloatingForm />
      <Cookies />
      <Footer />
    </div>
  );
}

export default App;
