import { Link } from "react-router-dom";
import Logo from "../../element/logo.element";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo className="h-16" />
            <p className="text-gray-400">A conexão mas proxima de você.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white" to="/#home">
                  Início
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" to="/#plans">
                  Planos
                </Link>
              </li>
              {/* <li>
                <a href="#coverage" className="text-gray-400 hover:text-white">
                  Cobertura
                </a>
              </li>*/}
              <li>
                <Link
                  className="text-gray-400 hover:text-white"
                  to="/about#about"
                >
                  A Empresa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-gray-400 hover:text-white"
                  to="/contact#contacts"
                >
                  Contatos
                </Link>
              </li>
              {/*<li>
                <a href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>*/}
              <li>
                <a
                  href="https://paraisointernet.sgp.tsmx.com.br/accounts/central/login"
                  className="text-gray-400 hover:text-white"
                >
                  Área do Cliente
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(99) 98422-0590</li>
              <li>0800 099 0590</li>
              <li>administrativo@paraisointernet.com.br</li>
              <li>Rua dos Cedros 03, Q A08, Vila Paraíso</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Paraíso Internet. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
