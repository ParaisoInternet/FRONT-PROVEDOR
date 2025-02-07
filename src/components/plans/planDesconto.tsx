import { HandCoins } from "lucide-react";

const PlanDesconto = () => {
  return (
    <section className="p-8">
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 mt-10">
        {/* Ícone */}
        <div className="flex justify-center md:justify-start">
          <HandCoins className="w-24 h-24 text-yellow-500" />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left text-blue-900 max-w-lg">
          <h3 className="text-2xl md:text-3xl leading-tight text-center">
            Na Paraíso Internet,
            <span className="font-bold"> pontualidade vale desconto! </span>
            Pague em dia e economize na sua mensalidade.
          </h3>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/logo.png"
            alt="Vantagens Paraíso Internet"
            className="w-32 md:w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default PlanDesconto;
