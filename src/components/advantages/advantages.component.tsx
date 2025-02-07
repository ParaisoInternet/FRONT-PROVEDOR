import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Title from "../../element/title.element";
import {
  FaHeadset,
  FaMoneyBillWave,
  FaRocket,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";

const advantagesList = [
  {
    icon: <FaWifi className="text-blue-600 text-8xl" />,
    title: "Wi-Fi Potente",
    description: "Conecte toda a sua casa sem quedas de sinal.",
  },
  {
    icon: <FaRocket className="text-red-600 text-8xl" />,
    title: "Velocidade Máxima",
    description: "Navegue e faça downloads com ultra velocidade.",
  },
  {
    icon: <FaHeadset className="text-green-600 text-8xl" />,
    title: "Suporte Especializado",
    description: "Atendimento técnico rápido e eficiente.",
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 text-8xl" />,
    title: "Conexão Segura",
    description: "Mais segurança e estabilidade na sua navegação.",
  },
  {
    icon: <FaMoneyBillWave className="text-purple-600 text-8xl" />,
    title: "Planos Econômicos",
    description: "Planos acessíveis para todas as necessidades.",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="bg-gray-100 justify-items-center ">
      <div className="max-w-7xl  p-6 ">
        <Title>Vantagem da Paraíso Internet</Title>

        <div className="grid md:grid-cols-2 gap-5 ">
          {/* Imagem ilustrativa 
          "flex flex-col md:flex-row items-center justify-center "
          */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../../public/img3.png"
              alt="Vantagens Paraíso Internet"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Slide com as vantagens */}
          <div className=" justify-items-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 justify-center md:text-left">
              Por que escolher a Paraíso Internet? 💙
            </h2>
            <div className="flex justify-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30} // Reduz espaço entre slides
                slidesPerView={1}
                autoplay={{ delay: 4000 }} // Aumenta o tempo para leitura
                pagination={{ clickable: true }}
                effect="fade" // Efeito de transição suave
                className="w-full max-w-sm mx-auto md:max-w-md"
              >
                {advantagesList.map((advantage, index) => (
                  <SwiperSlide key={index}>
                    <div className=" p-6 rounded-lg shadow-md text-center">
                      <div className="flex justify-center mb-5">
                        {advantage.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-blue-900">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {advantage.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
