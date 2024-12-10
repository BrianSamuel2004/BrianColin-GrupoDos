import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0d0f] text-[#e6e8eb] p-4 pt-20">
      {isLoading ? (
        <ClipLoader color="#aebbc9" size={50} />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4 text-[#aebbc9] text-center">Contáctanos</h1>
          <p className="text-lg max-w-[800px] text-center leading-relaxed text-[#aebbc9] mb-6">
            Estamos aquí para ayudarte. Si tienes alguna consulta o necesitas más información, no dudes en comunicarte con nosotros a través de los siguientes medios.
          </p>

          <div className="w-full max-w-[600px] mb-8">
            <div className="text-lg mb-4">
              <strong className="block mb-2 text-[#aebbc9]">Dirección:</strong>
              <p className="text-[#e6e8eb]">123 Avenida Pacifico, Ancud, Chile</p>
            </div>
            <div className="text-lg mb-4">
              <strong className="block mb-2 text-[#aebbc9]">Teléfono:</strong>
              <p className="text-[#e6e8eb]">+123 456 789</p>
            </div>
            <div className="text-lg mb-4">
              <strong className="block mb-2 text-[#aebbc9]">Correo Electrónico:</strong>
              <p className="text-[#e6e8eb]">contacto@thehouse.com</p>
            </div>
          </div>

          <form className="w-full max-w-[600px] bg-[#1a1d20] p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#aebbc9] mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-[#2b2f33] text-[#e6e8eb] border border-[#aebbc9]"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#aebbc9] mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-[#2b2f33] text-[#e6e8eb] border border-[#aebbc9]"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-[#aebbc9] mb-2">Mensaje</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded bg-[#2b2f33] text-[#e6e8eb] border border-[#aebbc9]"
                placeholder="Tu mensaje"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#aebbc9] text-[#0b0d0f] py-3 rounded-lg font-bold hover:bg-[#98aab8]"
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
