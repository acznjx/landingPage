import { Instagram, Mail, Phone } from 'lucide-react';
import videoSrc from '../assets/image/orlando.mp4';

const Hero = () => {
  return (
    <>
      {/* Ícones sociais */}
      <div className="social-icons">
        <a href="https://www.instagram.com/wra.br" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-10 h-10" />
        </a>
        <a href="https://wa.me/51992025166" target="_blank" rel="noopener noreferrer">
          <Phone className="w-10 h-10" />
        </a>
        <a href="mailto:anacarolinacznj@gmail.com">
          <Mail className="w-10 h-10" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video">
          <video autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="hero-overlay">
            <p className="hero-phrase">
              Seu novo lar está a um clique de distância
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
