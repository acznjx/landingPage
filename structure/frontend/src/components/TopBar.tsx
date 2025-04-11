import React from 'react';
import { useState } from 'react';
import { cn } from '../assets/scripts/utils';


const TopBar = () => {
  const [selectedLang, setSelectedLang] = useState<string>('pt');

  const languages = [
    { code: 'pt', label: 'Português', icon: '🇧🇷' },
    { code: 'en', label: 'English', icon: '🇺🇸' },
    { code: 'es', label: 'Español', icon: '🇪🇸' },
  ];

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
      };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#252422cc] h-[100px] text-[#fffcf2]">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-full relative">
        <div className="flex items-center ml-[-120px]">
          <img src="/logo/logo1.png" alt="Logo WRA" className="h-[220px]" />
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-[22px]">
          <a href="#hero" className="hover:text-[#CCC5B9] transition-colors">Início</a>
          <a href="#Corretor" className="hover:text-[#CCC5B9] transition-colors">Corretor</a>
          <a href="#properties" className="hover:text-[#CCC5B9] transition-colors">Imóveis</a>
          <a href="#contato" className="hover:text-[#CCC5B9] transition-colors">Contato</a>
        </nav>

        <div className="absolute right-[-270px] flex gap-3">
          {languages.map(({ code, icon }) => (
            <button
              key={code}
              className={cn(
                'text-xl opacity-50 hover:opacity-100 transition-all',
                selectedLang === code && 'opacity-100 scale-110'
              )}
              onClick={() => handleLangChange(code)}
              aria-label={`Selecionar ${code}`}
            >
              <span>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
