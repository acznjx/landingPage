// src/components/Hero.tsx
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import videoSrc from '../assets/image/orlando.mp4';

const Hero = () => {
  return (
    <>
      {/* Ícones sociais */}
      <div className="fixed top-40 right-4 flex flex-col gap-4 z-10">
        <a href="https://www.instagram.com/wra.br" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-8 h-8 text-white hover:text-yellow-400 transition" />
        </a>
        <a href="https://wa.me/51992025166" target="_blank" rel="noopener noreferrer">
          <Phone className="w-8 h-8 text-white hover:text-green-400 transition" />
        </a>
        <a href="mailto:anacarolinacznj@gmail.com">
          <Mail className="w-8 h-8 text-white hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Seção Hero */}
      <section id="hero" className="relative text-center text-[#fffcf2] overflow-hidden mt-0">
        <div className="relative w-full h-[80vh] flex items-center justify-center border-b-4 border-[#252422] bg-[#252422] z-1 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="relative flex items-center justify-center w-full h-full bg-black/30">
            <p className="font-['Playfair_Display_SC'] text-4xl md:text-5xl font-bold uppercase text-[#fffcf2] z-10">
              Seu novo lar está a um clique de distância
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
