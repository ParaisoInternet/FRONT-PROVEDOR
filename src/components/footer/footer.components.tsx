import { Wifi } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Wifi className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">VelocNet</span>
            </div>
            <p className="text-gray-400">
              Sua melhor escolha em internet de alta velocidade.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-white">
                  Planos
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-gray-400 hover:text-white">
                  Cobertura
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(11) 9999-9999</li>
              <li>contato@velocnet.com.br</li>
              <li>Av. Principal, 1000 - Centro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VelocNet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
