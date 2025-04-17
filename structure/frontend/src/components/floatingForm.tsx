import { useState, useEffect } from "react";

export default function FloatingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  const submitForm = () => {
    alert("Formulário enviado!");
    setIsOpen(false);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowForm(true); // Mostra o formulário após 30 segundos
    }, 30000); // 30 segundos

    const timer2 = setTimeout(() => {
      setShowForm(true); // Reabre o formulário após 2 minutos
    }, 120000); // 2 minutos

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {showForm && (
        <>
          <div
            className={`form-overlay ${isOpen ? "show" : ""}`}
            onClick={toggleForm}
          />
          
          <div className={`form-popup ${isOpen ? "show" : ""}`}>
            <button
              className="form-close-btn"
              onClick={toggleForm}
            >
              ×
            </button>
            <h3>Entre em contato conosco</h3>
            <p>Apenas preencha o formulário que entraremos em contato.</p>

            <input
              type="text"
              placeholder="Nome"
              className="form-input"
            />
            <input
              type="tel"
              placeholder="Número"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
            />

            <button
              onClick={submitForm}
              className="form-submit-btn"
            >
              Enviar
            </button>
          </div>
        </>
      )}

      <div className="contact-form-section" id="contato">
        <button
          onClick={toggleForm}
          className="contact-btn"
        >
          Fale Conosco
        </button>
      </div>
    </>
  );
}
