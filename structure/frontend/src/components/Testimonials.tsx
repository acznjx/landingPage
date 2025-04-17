import { useEffect, useRef } from 'react';
import { initCarousel } from '../assets/scripts/scripts';

const testimonials = [
  {
    name: 'ana_souza',
    text: 'A experiência com a WRA Imobiliária foi incrível! Encontrei o imóvel dos meus sonhos com total suporte e transparência.',
  },
  {
    name: 'carlos_mendes',
    text: 'Profissionais altamente qualificados e atenciosos. Recomendo para quem busca segurança na compra do imóvel!',
  },
  {
    name: 'fernanda_lima',
    text: 'Serviço excepcional! Desde o primeiro contato até a assinatura do contrato, tudo foi impecável.',
  },
  {
    name: 'joao_pereira',
    text: 'A equipe da WRA foi muito atenciosa e me ajudou a encontrar um imóvel perfeito para minha família!',
  },
  {
    name: 'mariana_santos',
    text: 'Fiquei impressionada com a agilidade e profissionalismo. Excelente atendimento!',
  },
  {
    name: 'ricardo_alves',
    text: 'Super recomendo! O processo foi simples e sem complicações, graças à equipe altamente qualificada.',
  },
  {
    name: 'juliana_oliveira',
    text: 'Excelente atendimento e muita atenção às minhas necessidades. Estou muito feliz com a compra!',
  },
  {
    name: 'ricardo_souza',
    text: 'Atendimento de primeira, todos muito atenciosos e profissionais. Aconselho a WRA para quem busca seriedade!',
  },
  {
    name: 'paula_costa',
    text: 'A experiência foi excelente! A equipe é muito prestativa e o processo foi transparente e rápido.',
  },
];

export default function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      initCarousel(carouselRef.current);
    }
  }, []);

  return (
    <section className="carousel-container">
      <h2 className="carousel-title">O que nossos clientes dizem</h2>
      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel">
          {testimonials.map((item, index) => (
            <div key={index} className="depoimento">
              <div className="perfil-cliente">
                <img
                  src={`https://ui-avatars.com/api/?name=${item.name}&background=403D39&color=fff`}
                  alt={item.name}
                  className="foto-cliente"
                />
                <span className="cliente">{item.name}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
