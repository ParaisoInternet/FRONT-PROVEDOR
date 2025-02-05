import Title from "../../element/title.element";
import PlanCard from "./PlanCard";

const Planos = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Title>Nossos Planos</Title>

        <div className="grid md:grid-cols-3 gap-5">
          <PlanCard
            speed="Combo Start"
            price="R$ 79,90"
            display="none"
            benefits={[
              "INTERNET DE ALTA VELOCIDADE",
              "INSTALAÇÃO GRÁTIS",
              "EQUIPAMENTOS EM COMODATO",
              "ROTEADOR c/ WI-FI 5GHz*",
            ]}
          />

          <PlanCard
            speed="Combo Start+"
            price="R$ 99,90"
            display=""
            max="none"
            benefits={[
              "INTERNET DE ALTA VELOCIDADE",
              "INSTALAÇÃO GRÁTIS",
              "EQUIPAMENTOS EM COMODATO",
              "ROTEADOR c/ WI-FI 5GHz*",
              "DESCONTO DE 5% PARA O PAGAMENTO ATÉ A DATA DE VENCIMENTO",
            ]}
          />
          <PlanCard
            speed="Combo Start Premium"
            price="R$ 129,90"
            display=""
            benefits={[
              "INTERNET DE ALTA VELOCIDADE",
              "INSTALAÇÃO GRÁTIS",
              "EQUIPAMENTOS EM COMODATO",
              "ROTEADOR c/ WI-FI 6GHz*",
              "DESCONTO DE 10% PARA O PAGAMENTO ATÉ A DATA DE VENCIMENTO",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Planos;
