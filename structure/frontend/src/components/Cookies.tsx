import React from 'react';
import { useState } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  const handleAcceptAll = () => {
    // Lógica para aceitar todos os cookies
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true, marketing: true }));
    setShowBanner(false);
  };

  const handleDecline = () => {
    // Lógica para recusar cookies
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false, marketing: false }));
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowModal(true);
  };

  const handleSavePreferences = () => {
    // Salva preferências
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowModal(false);
    setShowBanner(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[60%] bg-white/5 backdrop-blur border border-[#e8c964] text-white rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.4)] z-[9999] p-5 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-base leading-relaxed max-w-[90%]">
              Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
              <a href="/privacidades/cookie.html" target="_blank" className="text-[#e8c964] underline hover:text-[#e1bb68] transition-colors ml-1">
                Política de Cookies
              </a>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={handleAcceptAll} className="font-semibold px-4 py-2 rounded-md bg-[#e8c964] text-[#072143] hover:bg-[#e1bb68] transition">Aceitar todos</button>
              <button onClick={handleDecline} className="font-semibold px-4 py-2 rounded-md bg-white text-[#072143] hover:bg-gray-100 transition">Recusar</button>
              <button onClick={handleCustomize} className="font-semibold px-4 py-2 rounded-md bg-transparent text-[#e8c964] underline hover:text-[#e1bb68] transition">Personalizar</button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-[#072143cc] flex items-center justify-center z-[10000]">
          <div className="bg-[#072143] text-white rounded-2xl p-8 w-[90%] max-w-[500px] shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-left">
            <h2 className="text-2xl text-[#e8c964] mb-6 font-bold">Gerenciar Preferências de Cookies</h2>
            <form className="space-y-4 text-sm">
              <div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" checked disabled className="mt-1 scale-110" />
                  <span><strong>Essenciais</strong> – Necessários para o funcionamento do site.</span>
                </label>
              </div>
              <div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" name="analytics" checked={preferences.analytics} onChange={handleChange} className="mt-1 scale-110" />
                  <span><strong>Análise</strong> – Ajuda a entender como o site é utilizado.</span>
                </label>
              </div>
              <div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" name="marketing" checked={preferences.marketing} onChange={handleChange} className="mt-1 scale-110" />
                  <span><strong>Marketing</strong> – Permite exibir anúncios personalizados.</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-6">
                <button type="button" onClick={() => setShowModal(false)} className="font-semibold px-4 py-2 rounded-md bg-white text-[#072143] hover:bg-gray-100 transition">Cancelar</button>
                <button type="button" onClick={handleSavePreferences} className="font-semibold px-4 py-2 rounded-md bg-[#e8c964] text-[#072143] hover:bg-[#e1bb68] transition">Salvar Preferências</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
