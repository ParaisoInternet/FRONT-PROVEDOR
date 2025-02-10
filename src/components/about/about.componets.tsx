import { Phone, Wifi } from "lucide-react";
import Title from "../../element/title.element";
import Text from "../../element/text.element";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <Title>A Empresa</Title>

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
              Sobre a Paraíso Internet
            </h3>
            <Text>
              A Paraíso Internet nasceu com o propósito de levar conexão de
              qualidade e acessível para a sua casa e empresa. Com tecnologia de
              ponta e um atendimento diferenciado, oferecemos planos que
              garantem estabilidade, velocidade e segurança para que você possa
              navegar, trabalhar, estudar e se divertir sem preocupações. Nosso
              compromisso vai além de fornecer internet: buscamos proporcionar
              uma experiência completa, com suporte técnico especializado e uma
              equipe sempre pronta para atender você com agilidade e eficiência.
              Conecte-se ao futuro com a Paraíso Internet e descubra a diferença
              de contar com um provedor que realmente se importa com a sua
              conexão!
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
                  <h4 className="font-semibold">Suporte</h4>
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
