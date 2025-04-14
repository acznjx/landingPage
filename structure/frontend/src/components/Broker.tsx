// src/components/Broker.tsx
import profileImg from '../assets/image/profile.jpg';

const Broker = () => {
  return (
    <section id="Corretor" className="py-16 px-8 bg-gradient-to-br from-[#1f1d1c] to-[#20201e] flex justify-center items-center text-[#fffcf2]">
      <div className="flex flex-wrap max-w-6xl items-center gap-10">
        
        {/* Texto do corretor */}
        <div className="flex-1 max-w-xl relative">
          <h2 className="text-4xl font-bold mb-6 relative inline-block">Ricardo Menezes</h2>
          <p className="text-lg leading-relaxed mb-4">
            Corretor de imóveis com mais de 15 anos de experiência no mercado. Especialista em investimentos imobiliários e no segmento de alto padrão, ele se destaca por sua abordagem estratégica e conhecimento aprofundado em análise de crédito.
          </p>
          <p className="text-lg leading-relaxed">
            Com certificações como CRECI 123456-SP e uma Certificação Internacional em Avaliação Imobiliária, Ricardo acompanha de perto as tendências do setor, ajudando clientes a tomar decisões assertivas. Atuando principalmente nas regiões de São Paulo e Rio de Janeiro, ele já auxiliou centenas de pessoas a encontrar o imóvel ideal, sempre com transparência e comprometimento.
          </p>
        </div>

        {/* Imagem do corretor */}
        <div className="flex-1 text-center">
          <img
            src={profileImg}
            alt="Corretor de imóveis"
            className="w-[400px] max-w-full rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Broker;
