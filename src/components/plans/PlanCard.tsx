import React from "react";
import LinkPlans from "../../element/link.plans.element";
import { Gauge, HandCoins, Router, Wallet, Wifi } from "lucide-react";

interface PlanCardProps {
  speed: string;
  price: string;

  benefits: React.ReactNode[];
  display: string;
  max?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  speed,
  price,
  benefits,

  display,
  max,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white relative flex flex-col relative shadow-lg ">
      {/* Fundo degradê + efeito de onda */}
      <div className="p-20 bg-gradient-to-r from-orange-500 to-purple-600 text-white text-center mb-12 relative wave">
        <p className="text-4xl font-bold">Combo </p>
        <p className="text-4xl font-bold">{speed}</p>

        <p className="text-lg font-semibold mt-7 ">
          <span className="bg-purple-700 px-6 py-2 rounded-lg text-3xl font-bold shadow-lg">
            {price}
          </span>
        </p>
      </div>
      {/* Seção "Incluso" */}
      {display !== "none" && (
        <div className="bg-gray-200 text-gray-800 p-2 rounded-lg flex flex-col items-center shadow-lg mx-11 gap-2 w-80 h-25 absolute bottom-80 transform translate-y-1/4">
          <p className="text-sm font-bold">INCLUSO:</p>
          <div className="flex flex-col items-center ">
            {max !== "none" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg"
                alt="Max"
                className="w-20 mt-2"
              />
            )}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Paramount%2B_logo.png"
              alt="Paramount+"
              className="w-36 mt-2"
            />
          </div>
        </div>
      )}

      {/* Benefícios */}
      <div className="p-6 space-y-2 text-gray-800 flex flex-col flex-grow justify-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3 ">
            {index === 0 && <Gauge className="text-purple-600 text-xl" />}
            {index === 1 && <Wallet className="text-purple-600 text-xl" />}
            {index === 2 && <Router className="text-purple-600 text-xl" />}
            {index === 3 && <Wifi className="text-purple-600 text-xl" />}
            {index === 4 && <HandCoins className="text-purple-600 text-xl" />}
            <p className="text-base font-semibold">{benefit}</p>
          </div>
        ))}
      </div>

      {/* Botão de compra */}
      <div className="p-4">
        <LinkPlans>Contratar</LinkPlans>
      </div>

      {/* Efeito de onda */}
      <style>{`
      .wave {
        position: relative;
      }
  
      .wave::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 20px;
        background: white;
        border-radius: 50% 50% 0 0;
      }
    `}</style>
    </div>
  );
};

export default PlanCard;
