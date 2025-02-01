import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Qual o prazo de instalação?",
    answer:
      "A instalação é realizada em até 48 horas úteis após a aprovação do cadastro.",
  },
  {
    question: "Preciso de fidelidade?",
    answer:
      "Não exigimos fidelidade em nossos planos. Você é livre para cancelar quando quiser.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte técnico 24/7 através do WhatsApp, telefone e chat online.",
  },
];

const FQA = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeFaq === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FQA;
