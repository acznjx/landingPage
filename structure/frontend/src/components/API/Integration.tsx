import React, { useState, useEffect } from 'react';
import './PropertyList.css';

interface Property {
  image: { url: string }[];
  address: string;
  cityName: string;
  state: string;
  postalCode: string;
  bedrooms: number;
  totalBaths: number;
  price: number;
  propStatus: string;
  listingID: string;
  sqFt: number;
}

interface Filters {
  endereco: string;
  cidade: string;
  estado: string;
  quartos: string;
  banheiros: string;
  precoMin: string;
  precoMax: string;
  status: string;
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<Filters>({
    endereco: '',
    cidade: '',
    estado: '',
    quartos: '',
    banheiros: '',
    precoMin: '',
    precoMax: '',
    status: '',
  });
  const [visibleCount, setVisibleCount] = useState(6); // Inicia com 6 imóveis visíveis

  useEffect(() => {
    loadProperties();
  }, [filters]); // Recarrega as propriedades sempre que o filtro for alterado

  const loadProperties = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/properties');
      const json = await response.json();
      const imoveis: Property[] = Object.values(json.data);

      const filtered = imoveis.filter(item => {
        const address = item.address?.toLowerCase() || '';
        const city = item.cityName?.toLowerCase() || '';
        const state = item.state?.toLowerCase() || '';
        const postalCode = item.postalCode?.toLowerCase() || '';
        const bedrooms = item.bedrooms || 0;
        const bathrooms = item.totalBaths || 0;
        const price = item.price || 0;
        const status = item.propStatus?.toLowerCase() || '';
        const enderecoFiltro = filters.endereco.toLowerCase() || '';

        return (
          (!enderecoFiltro || address.includes(enderecoFiltro) || postalCode.includes(enderecoFiltro)) &&
          (!filters.cidade || city.includes(filters.cidade.toLowerCase())) &&
          (!filters.estado || state.includes(filters.estado.toLowerCase())) &&
          (!filters.quartos || bedrooms >= parseInt(filters.quartos)) &&
          (!filters.banheiros || bathrooms >= parseInt(filters.banheiros)) &&
          (!filters.precoMin || price >= parseFloat(filters.precoMin)) &&
          (!filters.precoMax || price <= parseFloat(filters.precoMax)) &&
          (!filters.status || status === filters.status.toLowerCase())
        );
      });

      setFilteredProperties(filtered);
      setProperties(filtered.slice(0, visibleCount)); // Exibe o número correto de imóveis inicialmente
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Carregar mais imóveis
  const loadMore = () => {
    const nextCount = visibleCount + 6;
    setVisibleCount(nextCount);
    setProperties(filteredProperties.slice(0, nextCount)); // Atualiza a lista de imóveis
  };

  // Voltar aos imóveis anteriores
  const goBackToProperties = () => {
    const prevCount = visibleCount - 6;
    if (prevCount >= 6) {
      setVisibleCount(prevCount);
      setProperties(filteredProperties.slice(0, prevCount)); // Atualiza a lista com menos imóveis
    }
  };

  const getImageUrl = (images: { url: string }[]) => {
    return images?.[0]?.url || images?.[1]?.url || images?.[2]?.url || 'default.jpg'; // Verificando até a terceira imagem
  };

  return (
    <div className="property-container">
      <div className="container">
        <h1>Encontre seu imóvel ideal</h1>
        <p>Com as melhores opções e localização, aqui você encontra a casa dos seus sonhos.</p>
      </div>

      {/* Filtro de Imóveis */}
      <div className="idx-omnibar">
        <input
          id="omnibar"
          className="idx-omnibar-input"
          type="text"
          name="endereco"
          value={filters.endereco}
          onChange={handleFilterChange}
          placeholder="City, Postal Code, Address, or Listing ID"
          autoComplete="off"
        />
        <select name="precoMin" value={filters.precoMin} onChange={handleFilterChange} className="idx-omnibar-select">
          <option value="">Min Price</option>
          <option value="500">US$500</option>
          <option value="1000">US$1,000</option>
          <option value="5000">US$5,000</option>
          <option value="10000">US$10,000</option>
          <option value="50000">US$50,000</option>
          <option value="100000">US$100,000</option>
          <option value="200000">US$200,000</option>
          <option value="500000">US$500,000</option>
          <option value="1000000">US$1,000,000</option>
        </select>

        <select name="precoMax" value={filters.precoMax} onChange={handleFilterChange} className="idx-omnibar-select">
          <option value="">Max Price</option>
          <option value="50000">US$50,000</option>
          <option value="100000">US$100,000</option>
          <option value="200000">US$200,000</option>
          <option value="500000">US$500,000</option>
          <option value="1000000">US$1,000,000</option>
          <option value="2000000">US$2,000,000</option>
        </select>

        <select name="quartos" value={filters.quartos} onChange={handleFilterChange} className="idx-omnibar-select">
          <option value="">Beds</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>

        <select name="banheiros" value={filters.banheiros} onChange={handleFilterChange} className="idx-omnibar-select">
          <option value="">Baths</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>

        <button className="idx-omnibar-extra-button" type="button" onClick={loadProperties}>
          <i className="fas fa-search" aria-hidden="true"></i><span>Search</span>
        </button>
      </div>

      {/* Exibição dos Imóveis */}
      <div className="properties">
        <div className="properties-container">
          {properties.map((item, index) => (
            <div key={index} className="property-card">
              <div className="property-image">
                <span className="property-status">{item.propStatus}</span>
                <img src={getImageUrl(item.image)} alt="Imagem do imóvel" />
              </div>
              <div className="property-info">
                <h3>{item.address || 'Endereço não disponível'}</h3>
                <p>{item.cityName || '-'}, {item.state || '-'}</p>
                <p className="listing-id">MLS: {item.listingID || 'N/A'}</p>
                <p className="property-price">US$ {item.price?.toLocaleString() || 'N/A'}</p>
                <div className="property-details">
                  <span>🛏 {item.bedrooms ?? '-'}</span>
                  <span>🛁 {item.totalBaths ?? '-'}</span>
                  <span>📐 {item.sqFt || '-'} ft²</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p className="no-results">Nenhum imóvel encontrado com os filtros aplicados.</p>
        )}

        <div className="pagination">
          <button onClick={goBackToProperties} disabled={visibleCount <= 6}>Voltar</button>
          <button onClick={loadMore} disabled={visibleCount >= filteredProperties.length}>Carregar mais</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
