import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="p-6 bg-[#333] text-[#fffcf2] font-sans text-[16px] sm:text-[17px] flex flex-col sm:flex-row justify-between items-start text-left">
      {/* Left */}
      <div className="flex-1 p-5 min-w-[250px] flex flex-col items-start text-left mb-8 sm:mb-0">
        <img
          src="src/logo/logo2.png"
          alt="WRA Imobiliária"
          className="w-[280px] max-w-full h-auto mb-6 sm:mb-10"
        />
        <h3 className="text-xl font-semibold mb-2">Nossa História</h3>
        <p className="text-sm sm:text-base">
          A WRA é referência no mercado imobiliário de Orlando, conectando clientes a oportunidades únicas na Flórida. Com uma equipe experiente, oferecemos assessoria completa para quem deseja comprar imóveis residenciais ou comerciais.
        </p>
        <p className="text-sm sm:text-base mt-4">
          Além da consultoria na aquisição de propriedades, também gerenciamos locações e manutenção, garantindo segurança e tranquilidade para nossos clientes.
        </p>
        <p className="mt-10 sm:mt-40 text-sm">&copy; 2025 by WRA Imobiliária</p>
      </div>

      {/* Center */}
      <div className="flex-1 p-5 min-w-[250px] flex flex-col items-center justify-center text-left gap-4 mb-8 sm:mb-0">
        <p className="flex items-start gap-2 text-sm sm:text-base">
          <MapPin className="w-6 h-6 flex-shrink-0" />
          7065 Westpointe Blvd, Suite 102, <br />Orlando, FL 32835, USA
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <Phone className="w-6 h-6" />
          <a href="tel:+14079658276" className="text-[#ecc509] hover:underline">
            (407) 965-8276
          </a>
        </p>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <Mail className="w-6 h-6" />
          <a href="mailto:contactus@wra-usa.com" className="text-[#ecc509] hover:underline">
            contactus@wra-usa.com
          </a>
        </p>
      </div>

      {/* Right */}
      <div className="flex-1 p-5 min-w-[250px] flex flex-col gap-4 w-full sm:w-auto">
        <p className="text-sm sm:text-base">
          <a
            href="privacidades/carreira.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ecc509] hover:underline"
          >
            Carreiras
          </a>{' '}
          |{' '}
          <a
            href="privacidades/privacidades.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ecc509] hover:underline"
          >
            Política de Privacidade
          </a>
        </p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7660032809445!2d-81.48492292378181!3d28.516687075728175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e778db5619df69%3A0xb664b864ee4a344c!2sWRA%20BUSINESS%20%26%20REAL%20ESTATE!5e0!3m2!1spt-PT!2sbr!4v1742916320265!5m2!1spt-PT!2sbr"
            width="100%"
            height="300"
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
