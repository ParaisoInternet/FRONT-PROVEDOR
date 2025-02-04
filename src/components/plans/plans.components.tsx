import { Wifi } from "lucide-react";

const plans = [
  {
    name: "Básico",
    speed: "400",
    price: "R$ 80,00",
    features: ["Wi-Fi Grátis", "Instalação Gratuita", "Suporte especializado"],
  },
  {
    name: "Família",
    speed: "600",
    price: "R$ 99,90",
    features: ["Wi-Fi Mesh", "Instalação Gratuita", "Suporte especializado"],
  },
  {
    name: "Premium",
    speed: "700",
    price: "R$ 129,90",
    features: ["Wi-Fi Mesh Premium", "Instalação Prioritária", "Suporte VIP"],
  },
];

const Planos = () => {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Planos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                {plan.speed}{" "}
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-lg ml-1">
                  MB
                </span>
              </p>
              <div className="mt-2 text-2xl font-bold bg-purple-700 inline-block px-4 py-1 rounded-lg">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contratar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
