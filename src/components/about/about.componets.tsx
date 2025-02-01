import { Phone, Wifi } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Nós</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Nossa equipe"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Conectando Pessoas desde 2010
            </h3>
            <p className="text-gray-600 mb-6">
              Somos uma empresa comprometida em fornecer a melhor experiência em
              internet para nossos clientes. Com mais de 10 anos de mercado,
              nossa missão é levar conexão de qualidade para todas as
              residências e empresas.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                  <Wifi className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Tecnologia de Ponta</h4>
                  <p className="text-gray-600">100% Fibra Óptica</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Suporte 24/7</h4>
                  <p className="text-gray-600">Atendimento Especializado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
