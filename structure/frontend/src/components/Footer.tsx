import { MapPin, Phone, Mail } from 'lucide-react';
import LogoFooter from '../assets/image/logo-Footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src={LogoFooter}
          alt="WRA Imobiliária"
          className="footer-logo"
        />
        <h3 className="footer-title">Nossa História</h3>
        <p>
          A WRA é referência no mercado imobiliário de Orlando, conectando clientes a oportunidades únicas na Flórida.
        </p>
        <p>
          Oferecemos consultoria completa na compra de imóveis, além de gerenciar locações e manutenção.
        </p>
        <p className="footer-copy">&copy; 2025 by WRA Imobiliária</p>
      </div>

      <div className="footer-center">
        <p>
          <MapPin className="footer-icon" />
          <span>
            7065 Westpointe Blvd, Suite 102,<br />
            Orlando, FL 32835, USA
          </span>
        </p>
        <p>
          <Phone className="footer-icon" />
          <a href="tel:+14079658276" className="footer-link">
            (407) 965-8276
          </a>
        </p>
        <p>
          <Mail className="footer-icon" />
          <a href="mailto:contactus@wra-usa.com" className="footer-link">
            contactus@wra-usa.com
          </a>
        </p>
      </div>

      <div className="footer-right">
        <p>
          <a href="/carreiras.html" className="footer-link">Carreiras</a> |{' '}
          <a href="./pages/politica-de-privacidades.html" className="footer-link">Política de Privacidade</a> {' '}
        </p>
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7660032809445!2d-81.48492292378181!3d28.516687075728175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e778db5619df69%3A0xb664b864ee4a344c!2sWRA%20BUSINESS%20%26%20REAL%20ESTATE!5e0!3m2!1spt-PT!2sbr!4v1742916320265!5m2!1spt-PT!2sbr"
            width="100%"
            height="180"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
