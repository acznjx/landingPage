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
    <form id="filtro-form" onSubmit={handleSubmit}>
      {/* Aqui você insere seus inputs com os IDs correspondentes */}
      <input id="filtro-endereco" placeholder="Endereço" />
      <input id="filtro-cidade" placeholder="Cidade" />
      <input id="filtro-estado" placeholder="Estado" />
      <input id="filtro-quartos" placeholder="Quartos" />
      <input id="filtro-banheiros" placeholder="Banheiros" />
      <input id="filtro-preco-min" placeholder="Preço Mínimo" />
      <input id="filtro-preco-max" placeholder="Preço Máximo" />
      <input id="filtro-status" placeholder="Status" />
      <button type="submit">Filtrar</button>
    </form>
  );
};

export default Filter;
