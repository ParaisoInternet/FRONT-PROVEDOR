import { MapPin } from "lucide-react";
import Button from "../../element/button.element";

const coverage = [
  "Centro",
  "Jardim América",
  "Vila Nova",
  "Bela Vista",
  "Santa Cruz",
  "Parque das Flores",
];
const Coverage = () => {
  return (
    <section id="coverage" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Área de Cobertura
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Bairros Atendidos</h3>
            <ul className="grid grid-cols-2 gap-4">
              {coverage.map((area, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Consulte Disponibilidade
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Digite seu CEP"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button>Consultar</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
