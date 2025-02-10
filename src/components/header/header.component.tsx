import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../../element/logo.element";
import ButtonCliente from "../../element/button.cliente.element";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-gradient-to-r from-blue-900 to-blue-600 p-4 shadow-lg transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex items-center">
          <Logo
            className={`transition-all duration-300 ${
              isScrolled ? "h-8" : "h-12"
            }`}
          />
        </div>

        {/* Links de navegação */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/#home">Início</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/#plans">Planos</Link>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/about#about">A Empresa</Link>
          </li>
          {/*
          <li className="hover:text-yellow-400 cursor-pointer">
            <a href="">Cobertura</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer">
            <a href="">Dúvidas</a>
          </li>*/}
          <li className="hover:text-yellow-400 cursor-pointer">
            <Link to="/contact#contacts">Contatos</Link>
          </li>
          {/*<li className="hover:text-yellow-400 cursor-pointer">
            Trabalhe Conosco
          </li>*/}
        </ul>

        {/* Ícones e botões */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/paraisointernet">
            <FaFacebook className="text-white text-lg cursor-pointer hover:text-yellow-400" />
          </a>
          <a href="https://www.instagram.com/paraisointernet">
            <FaInstagram className="text-white text-lg cursor-pointer hover:text-yellow-400" />
          </a>
          <FaYoutube className="text-white text-lg cursor-pointer hover:text-yellow-400" />
          <a
            href="https://wa.me/999984220590"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 flex items-center">
              <FaWhatsapp className="mr-2" /> Assine agora!
            </button>
          </a>
          <ButtonCliente />
        </div>
      </div>
    </nav>
  );
};

export default Header;
