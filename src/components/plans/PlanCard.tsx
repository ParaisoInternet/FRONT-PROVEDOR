import React from "react";
import LinkPlans from "../../element/link.plans.element";

interface PlanCardProps {
  speed: number;
  price: string;

  benefits: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({ speed, price, benefits }) => {
  return (
    <div className="w-80 h-130 rounded-2xl overflow-hidden shadow-lg bg-white relative">
      {/* Fundo degradê + efeito de onda */}
      <div className="p-10 bg-gradient-to-r from-orange-500 to-purple-600 p-5 text-white text-center relative wave">
        <p className="text-5xl font-bold">
          {speed}
          <span className="text-sm bg-purple-700 rounded-full px-2 py-1 ml-1">
            MB
          </span>
        </p>

        {/* Maior espaçamento entre o plano e o preço */}
        <p className="text-lg font-semibold mt-6">
          <span className="bg-purple-700 px-6 py-2 rounded-lg text-3xl font-bold">
            {price}
          </span>
        </p>
      </div>

      {/* Benefícios */}
      <div className="p-6 space-y-2 text-gray-800">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-purple-600 text-xl">✔️</span>
            <p className="text-base font-semibold">{benefit}</p>
          </div>
        ))}

        {/* Botão de compra */}
        <LinkPlans>Contratar </LinkPlans>
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
