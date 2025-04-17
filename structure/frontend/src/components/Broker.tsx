// Broker.jsx
import React from 'react';
import profileImg from '../assets/image/profile.jpg';

const Broker = () => {
  return (
    <section id="Corretor" className="corretor-section">
      <div className="corretor-container">
        {/* Texto do corretor */}
        <div className="corretor-text">
          <h2>Ricardo Menezes</h2>
          <p>
            Corretor de imóveis com mais de 15 anos de experiência no mercado. Especialista em investimentos
            imobiliários e no segmento de alto padrão, ele se destaca por sua abordagem estratégica e
            conhecimento aprofundado em análise de crédito.
          </p>
          <p>
            Com certificações como CRECI 123456-SP e uma Certificação Internacional em Avaliação Imobiliária,
            Ricardo acompanha de perto as tendências do setor, ajudando clientes a tomar decisões assertivas.
            Atuando principalmente nas regiões de São Paulo e Rio de Janeiro, ele já auxiliou centenas de
            pessoas a encontrar o imóvel ideal, sempre com transparência e comprometimento.
          </p>
        </div>

        {/* Imagem do corretor */}
        <div className="corretor-image">
          <img src={profileImg} alt="Corretor de imóveis" />
        </div>
      </div>
    </section>
  );
};

export default Broker;
