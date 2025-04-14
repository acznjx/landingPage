import React from 'react';

interface FilterProps {
  onFilter: (filtros: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filtros = {
      endereco: (document.getElementById('filtro-endereco') as HTMLInputElement).value.trim(),
      cidade: (document.getElementById('filtro-cidade') as HTMLInputElement).value.trim(),
      estado: (document.getElementById('filtro-estado') as HTMLInputElement).value.trim(),
      quartos: (document.getElementById('filtro-quartos') as HTMLInputElement).value.trim(),
      banheiros: (document.getElementById('filtro-banheiros') as HTMLInputElement).value.trim(),
      precoMin: (document.getElementById('filtro-preco-min') as HTMLInputElement).value.trim(),
      precoMax: (document.getElementById('filtro-preco-max') as HTMLInputElement).value.trim(),
      status: (document.getElementById('filtro-status') as HTMLInputElement).value.trim(),
    };

    onFilter(filtros);  
  };

  return (
    <form id="filtro-form" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Filtrar Imóveis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <input id="filtro-endereco" placeholder="Endereço" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-cidade" placeholder="Cidade" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-estado" placeholder="Estado" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-quartos" placeholder="Quartos" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-banheiros" placeholder="Banheiros" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-preco-min" placeholder="Preço Mínimo" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-preco-max" placeholder="Preço Máximo" className="p-2 border border-gray-300 rounded-md" />
        <input id="filtro-status" placeholder="Status" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="w-full bg-yellow-500 text-white py-2 mt-6 rounded-md hover:bg-yellow-400 transition-colors">
        Aplicar Filtros
      </button>
    </form>
  );
};

export default Filter;
