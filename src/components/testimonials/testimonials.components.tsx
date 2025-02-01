const testimonials = [
  {
    name: "Maria Silva",
    text: "Melhor internet que já tive! Atendimento excepcional e conexão estável.",
  },
  {
    name: "João Santos",
    text: "Instalação rápida e profissional. Recomendo a todos!",
  },
  {
    name: "Ana Oliveira",
    text: "Desde que mudei para essa operadora, nunca mais tive problemas com internet.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
