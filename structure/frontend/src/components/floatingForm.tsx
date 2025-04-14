import { useState } from "react";

export default function FloatingForm() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  const submitForm = () => {
    alert("Formulário enviado!");
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleForm}
      />

      <div
        className={`fixed top-1/2 left-1/2 z-50 max-w-md w-full p-6 bg-white rounded-xl shadow-xl text-center transform transition-all duration-500 ${
          isOpen
            ? "opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2"
            : "opacity-0 scale-95 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-3 right-3 bg-yellow-500 text-white font-bold w-8 h-8 rounded-full hover:bg-yellow-600"
          onClick={toggleForm}
        >
          ×
        </button>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Entre em contato conosco</h3>
        <p className="text-gray-600 mb-4">Apenas preencha o formulário que entraremos em contato.</p>

        <input
          type="text"
          placeholder="Nome"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Número"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />

        <button
          onClick={submitForm}
          className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Enviar
        </button>
      </div>

      <div className="text-center mt-10" id="contato">
        <button
          onClick={toggleForm}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Fale Conosco
        </button>
      </div>
    </>
  );
}
