import { Wifi, X, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Wifi className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Paraíso Internet</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200">
              Início
            </a>
            <a href="#plans" className="hover:text-blue-200">
              Planos
            </a>
            <a href="#coverage" className="hover:text-blue-200">
              Cobertura
            </a>
            <a href="#about" className="hover:text-blue-200">
              Sobre
            </a>
            <a href="#contact" className="hover:text-blue-200">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 hover:bg-blue-700 rounded"
            >
              Início
            </a>
            <a
              href="#plans"
              className="block px-3 py-2 hover:bg-blue-700 rounded"
            >
              Planos
            </a>
            <a
              href="#coverage"
              className="block px-3 py-2 hover:bg-blue-700 rounded"
            >
              Cobertura
            </a>
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-blue-700 rounded"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 hover:bg-blue-700 rounded"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
