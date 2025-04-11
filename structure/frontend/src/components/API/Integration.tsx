import React, { useEffect, useState } from 'react';
import Property from './Property';
import Filter from './Filter';

const Integration: React.FC = () => {
  const [imoveis, setImoveis] = useState<any[]>([]);

  const carregarImoveis = async (filtros = {}) => {
    try {
      const resposta = await fetch('http://localhost:3000/api/properties');
      const json = await resposta.json();
      const dados = Object.values(json.data);

      const filtrados = dados.filter((item: any) => {
        const address = item.address?.toLowerCase() || '';
        const city = item.cityName?.toLowerCase() || '';
        const state = item.state?.toLowerCase() || '';
        const postalCode = item.postalCode?.toLowerCase() || '';
        const bedrooms = item.bedrooms || 0;
        const bathrooms = item.totalBaths || 0;
        const price = item.price || 0;
        const status = item.propStatus?.toLowerCase() || '';

        const enderecoFiltro = (filtros as any).endereco?.toLowerCase() || '';

        return (
          (!enderecoFiltro || address.includes(enderecoFiltro) || postalCode.includes(enderecoFiltro)) &&
          (!(filtros as any).cidade || city.includes((filtros as any).cidade.toLowerCase())) &&
          (!(filtros as any).estado || state.includes((filtros as any).estado.toLowerCase())) &&
          (!(filtros as any).quartos || bedrooms >= parseInt((filtros as any).quartos)) &&
          (!(filtros as any).banheiros || bathrooms >= parseInt((filtros as any).banheiros)) &&
          (!(filtros as any).precoMin || price >= parseFloat((filtros as any).precoMin)) &&
          (!(filtros as any).precoMax || price <= parseFloat((filtros as any).precoMax)) &&
          (!(filtros as any).status || status === (filtros as any).status.toLowerCase())
        );
      });

      setImoveis(filtrados.slice(0, 6));
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    }
  };

  useEffect(() => {
    carregarImoveis();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">
        ENCONTRAR MINHA CASA EM ORLANDO
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Aqui você encontra a casa em Orlando perfeita para moradia ou investimento
      </p>

      <Filter onFilter={carregarImoveis} />

      <div id="imoveis-container" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {imoveis.length > 0 ? (
          imoveis.map((item, index) => <Property key={index} item={item} />)
        ) : (
          <p className="text-white text-center col-span-3">Nenhum imóvel encontrado com os filtros aplicados.</p>
        )}
      </div>
    </div>
  );
};

export default Integration;
