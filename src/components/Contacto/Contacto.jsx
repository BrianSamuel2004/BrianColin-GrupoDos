import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0d0f] text-[#e6e8eb] p-4">
      {isLoading ? (
        <ClipLoader color="#aebbc9" size={50} />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4 text-[#aebbc9]">Contacto</h1>
          <p className="text-lg max-w-[800px] text-center leading-relaxed text-[#aebbc9]">
            Bienvenidos a The House. Somos una tienda dedicada a ofrecer productos de alta calidad para satisfacer tus necesidades. 
            Nos enorgullece proporcionar una excelente experiencia de usuario, así como un soporte excepcional para nuestros clientes. 
            Nuestro objetivo es construir relaciones duraderas y brindar soluciones que hagan la diferencia.
          </p>
          <p className="text-lg max-w-[800px] text-center mt-4 text-[#aebbc9]">
            Explora nuestra tienda y descubre la variedad de productos que tenemos para ofrecer. 
            ¡Gracias por confiar en nosotros!
          </p>

          
          <div className="flex flex-col items-center mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#5f81a9] text-2xl" />
              <p className="text-lg text-[#aebbc9]">+56 9 48812013</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#5f81a9] text-2xl" />
              <p className="text-lg text-[#aebbc9]">contacto@thehouse.com</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#5f81a9] text-2xl" />
              <p className="text-lg text-[#aebbc9]">21 AV Pacifico, Ancud, Chile</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contacto;
