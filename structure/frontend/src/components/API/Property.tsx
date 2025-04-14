import React from 'react';

interface PropertyProps {
  item: any;
}

const Property: React.FC<PropertyProps> = ({ item }) => {
  return (
    <div className="card-imovel bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="card-imagem-container relative">
        <img src={item.image?.[0]?.url || 'caminho/da-imagem-padrao.jpg'} alt="Imagem do imóvel" className="w-full h-48 object-cover" />
        <span className="status-label absolute top-4 left-4 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">{item.propStatus || 'Status desconhecido'}</span>
      </div>
      <div className="card-conteudo p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.address || 'Endereço não disponível'}</h3>
        <p className="text-gray-600">{item.cityName || '-'}, {item.state || '-'}</p>
        <p className="text-gray-500 text-sm">MLS: {item.listingID || 'N/A'}</p>
        <p className="text-yellow-600 text-lg font-bold mt-2">US$ {item.price?.toLocaleString() || 'N/A'}</p>
        <div className="detalhes flex justify-between mt-4 text-sm text-gray-600">
          <span>🛏 {item.bedrooms ?? '-'}</span>
          <span>🛁 {item.totalBaths ?? '-'}</span>
          <span>📐 {item.sqFt || '-'} ft²</span>
        </div>
      </div>
    </div>
  );
};

export default Property;