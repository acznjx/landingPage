import { useState, useEffect } from 'react';
import logo from '../assets/image/logo-TopBar.png';

const TopBar = () => {
  const [selectedLang, setSelectedLang] = useState<string>('pt');
  const [scrolled, setScrolled] = useState<boolean>(false);

  const languages = [
    { code: 'pt', label: 'Português', icon: '🇧🇷' },
    { code: 'en', label: 'English', icon: '🇺🇸' },
    { code: 'es', label: 'Español', icon: '🇪🇸' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Navegação */}
        <nav className="nav-links">
          {['Início', 'Corretor', 'Imóveis', 'Contato'].map((label, idx) => {
            const hrefs = ['#hero', '#Corretor', '#properties', '#contato'];
            return (
              <a key={label} href={hrefs[idx]}>
                {label}
              </a>
            );
          })}
        </nav>

        {/* Idiomas */}
        <div className="language-selection">
          {languages.map(({ code, icon }) => (
            <button
              key={code}
              onClick={() => setSelectedLang(code)}
              className={`lang-icon ${selectedLang === code ? 'selected' : ''}`}
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
