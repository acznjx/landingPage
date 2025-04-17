import React, { useState, useEffect } from "react";

const Cookies: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    essentials: true,
    analytics: false,
    marketing: false,
  });
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Função para salvar as preferências no localStorage
  const savePreferences = (prefs: { essentials: boolean; analytics: boolean; marketing: boolean }) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
  };

  // Efeito para verificar as preferências salvas no localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      setIsBannerVisible(false); // Esconder o banner caso as preferências já tenham sido salvas
    }
  }, []);

  // Manipuladores de eventos
  const handleAcceptCookies = () => {
    const newPreferences = { essentials: true, analytics: true, marketing: true };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setIsBannerVisible(false); // Esconder o banner após aceitação
  };

  const handleDeclineCookies = () => {
    const newPreferences = { essentials: true, analytics: false, marketing: false };
    setPreferences(newPreferences);
    savePreferences(newPreferences);
    setIsBannerVisible(false); // Esconder o banner após recusa
  };

  const handleCustomizeCookies = () => {
    setIsModalVisible(true); // Mostrar o modal de personalização
  };

  const handleCancelModal = () => {
    setIsModalVisible(false); // Fechar o modal sem salvar alterações
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    savePreferences(preferences); // Salvar preferências
    setIsModalVisible(false); // Fechar o modal
    setIsBannerVisible(false); // Esconder o banner
  };

  return (
    <div>
      {/* Banner de Cookies */}
      {isBannerVisible && (
        <div id="cookie-banner" className="cookie-banner">
          <div className="cookie-container">
            <p className="cookie-message">
              Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
              <a href="../pages/politica-de-cookies" target="_blank" className="cookie-link">
                Política de Cookies
              </a>.
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptCookies} className="btn accept">Aceitar todos</button>
              <button onClick={handleDeclineCookies} className="btn decline">Recusar</button>
              <button onClick={handleCustomizeCookies} className="btn customize">Personalizar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de personalização */}
      {isModalVisible && (
        <div id="cookie-modal" className="cookie-modal">
          <div className="cookie-modal-content">
            <h2 className="modal-title">Gerenciar Preferências de Cookies</h2>
            <form id="cookie-form" className="cookie-form" onSubmit={handleSavePreferences}>
              <div className="cookie-option">
                <label>
                  <input type="checkbox" name="essentials" checked disabled />
                  <strong>Essenciais</strong> – Necessários para o funcionamento do site.
                </label>
              </div>
              <div className="cookie-option">
                <label>
                  <input
                    type="checkbox"
                    name="analytics"
                    checked={preferences.analytics}
                    onChange={handleFormChange}
                  />
                  <strong>Análise</strong> – Ajuda a entender como o site é utilizado.
                </label>
              </div>
              <div className="cookie-option">
                <label>
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={preferences.marketing}
                    onChange={handleFormChange}
                  />
                  <strong>Marketing</strong> – Permite exibir anúncios personalizados.
                </label>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={handleCancelModal} className="btn decline">Cancelar</button>
                <button type="submit" className="btn accept">Salvar Preferências</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
