import PlanCard from "./PlanCard";

const Planos = () => {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Planos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PlanCard
            speed={400}
            price="R$ 80,00"
            benefits={["INSTALAÇÃO GRÁTIS", "EQUIPAMENTOS EM COMODATO"]}
          />

          <PlanCard
            speed={600}
            price="R$ 99,90"
            benefits={[
              "INSTALAÇÃO GRÁTIS",
              "EQUIPAMENTOS EM COMODATO",
              "DESCONTO DE 5% PARA O PAGAMENTO ATÉ A DATA DE VENCIMENTO",
            ]}
          />

          <PlanCard
            speed={700}
            price="R$ 129,90"
            benefits={[
              "INSTALAÇÃO GRÁTIS",
              "EQUIPAMENTOS EM COMODATO",
              "DESCONTO DE 5% PARA O PAGAMENTO ATÉ A DATA DE VENCIMENTO",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Planos;
