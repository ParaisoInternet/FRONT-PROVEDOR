import { Phone, Wifi } from "lucide-react";
import Title from "../../element/title.element";
import Text from "../../element/text.element";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <Title>Sobre Nós</Title>

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
            <Text>
              Somos uma empresa comprometida em fornecer a melhor experiência em
              internet para nossos clientes. Com mais de 10 anos de mercado,
              nossa missão é levar conexão de qualidade para todas as
              residências e empresas.
            </Text>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                  <Wifi className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Tecnologia de Ponta</h4>
                  <Text>100% Fibra Óptica</Text>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Suporte 24/7</h4>
                  <Text>Atendimento Especializado</Text>
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
