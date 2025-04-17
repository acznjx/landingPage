import React, { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Broker from './components/Broker';
import Integracao from './components/API/Integration';
import Testimonials from './components/Testimonials';
import FormsWRA from './components/FormsWRA';
import Cookies from './components/Cookies';
import BitrixButtonScript from './assets/scripts/scripts'; // Corrigido
import Footer from './components/Footer';

import '../src/assets/scripts/scripts'; // Isso parece ser redundante, pode ser removido

interface Property {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Quando a integração com API estiver pronta, chame aqui
    // fetch('API_URL')
    //   .then(response => response.json())
    //   .then(data => setProperties(data));
  }, []);

  return (
    <div>
      <TopBar />
      <Hero />
      <Broker />
      <Integracao />

      {properties.length > 0 && (
        <div className="properties">
          <h2>Imóveis Disponíveis</h2>
          <div className="properties-container">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p className="property-price">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Testimonials />
      <FormsWRA />
      <Cookies />
      <BitrixButtonScript /> {/* Fechado corretamente */}
      <Footer />
    </div>
  );
}

export default App;
