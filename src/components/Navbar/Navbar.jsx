import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"; // Importamos el ícono del carrito

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#0b0d0f] text-[#e6e8eb] w-full fixed top-0 z-50">
      <div className="max-w-[1240px] flex justify-between items-center h-24 mx-auto px-4">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-16 w-16 rounded-full object-cover bg-[#0b0d0f] p-2"
          />
          <h1 className="text-3xl font-bold text-[#aebbc9] ml-4">The House</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="p-4 hover:text-[#5f81a9]">
            <Link to="/">Inicio</Link>
          </li>
          <li className="p-4 hover:text-[#5f81a9]">
            <Link to="/shop">Tienda</Link>
          </li>
          <li className="p-4 hover:text-[#5f81a9]">
            <Link to="/about">Acerca</Link>
          </li>
          <li className="p-4 hover:text-[#5f81a9]">
            <Link to="/contacto">Contacto</Link>
          </li>
          {/* Botón del carrito */}
          <li className="p-4 hover:text-[#5f81a9]">
            <Link to="/cart" className="flex items-center space-x-2">
              <AiOutlineShoppingCart size={20} />
              <span>Carrito</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-[#aebbc9]" />
          ) : (
            <AiOutlineMenu size={20} className="text-[#aebbc9]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-[#3a4c61] bg-[#0b0d0f] ease-in-out duration-500 z-50"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#aebbc9] px-4 py-[30px]">
            The House
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-[#3a4c61] hover:text-[#5f81a9]">
              <Link to="/" onClick={handleNav}>
                Inicio
              </Link>
            </li>
            <li className="p-4 border-b border-[#3a4c61] hover:text-[#5f81a9]">
              <Link to="/shop" onClick={handleNav}>
                Tienda
              </Link>
            </li>
            <li className="p-4 border-b border-[#3a4c61] hover:text-[#5f81a9]">
              <Link to="/about" onClick={handleNav}>
                Acerca
              </Link>
            </li>
            <li className="p-4 border-b border-[#3a4c61] hover:text-[#5f81a9]">
              <Link to="/contacto" onClick={handleNav}>
                Contacto
              </Link>
            </li>
            {/* Botón del carrito en el menú móvil */}
            <li className="p-4 border-b border-[#3a4c61] hover:text-[#5f81a9]">
              <Link to="/cart" onClick={handleNav}>
                <div className="flex items-center space-x-2">
                  <AiOutlineShoppingCart size={20} />
                  <span>Carrito</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
