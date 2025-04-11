import React from 'react';

interface PropertyProps {
  item: any;
}

const Property: React.FC<PropertyProps> = ({ item }) => {
  return (
    <div className="card-imovel">
      <div className="card-imagem-container">
        <img src={item.image?.[0]?.url || 'caminho/da-imagem-padrao.jpg'} alt="Imagem do imóvel" className="card-img" />
        <span className="status-label">{item.propStatus || 'Status desconhecido'}</span>
      </div>
      <div className="card-conteudo">
        <h3>{item.address || 'Endereço não disponível'}</h3>
        <p className="cidade">
          {item.cityName || '-'}, {item.state === 'FL' ? 'Florida' : item.state || '-'}
        </p>
        <p className="mls">MLS: {item.listingID || 'N/A'}</p>
        <p className="preco">US$ {item.price?.toLocaleString() || 'N/A'}</p>
        <div className="detalhes">
          <span>🛏 {item.bedrooms ?? '-'}</span>
          <span>🛁 {item.totalBaths ?? '-'}</span>
          <span>📐 {item.sqFt || '-'} ft²</span>
        </div>
      </div>
    </div>
  );
};

export default Property;
