import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Recursos",
      items: ["Blog", "Documentación", "Términos y condiciones"],
    },
    {
      title: "Compañía",
      items: ["Sobre nosotros", "Inversores"],
    },
    {
      title: "Soporte",
      items: ["Centro de ayuda", "Contacto", "Guías", "Estado del sistema"],
    },
    {
      title: "Comunidad",
      items: ["Foros", "Eventos"],
    },
  ];

  return (
    <div className="mx-auto py-10 text-[#e6e8eb] bg-[#131518] w-full">
      <div className="max-w-[1240px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Logo y Title */}
        <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0 lg:col-span-1">
          <img src="/logo.svg" alt="Logo" className="h-12 w-12 rounded-full object-cover bg-[#0b0d0f] p-2 mr-3" />
          <h1 className="text-3xl font-bold text-[#aebbc9]">The House</h1>
        </div>

        {/* Section Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-2">
          {sections.map((section, i) => (
            <div key={i} className="text-center sm:text-left">
              <h6 className="font-medium text-lg mb-2 text-[#aebbc9]">{section.title}</h6>
              <ul>
                {section.items.map((item, j) => (
                  <li key={j} className="py-0.5 text-sm hover:text-[#5f81a9]">
                    {item}
                  </li>
                ))}
              </ul> 
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Link */}
      <div className="text-center mt-8">
        <a href="/contact" className="text-sm hover:text-[#5f81a9]">Contáctanos</a>
      </div>
    </div>
  );
};

export default Footer;
