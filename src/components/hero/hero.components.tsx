import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">
            Internet de Alta Velocidade
          </h1>
          <p className="text-xl mb-8">
            Conexão estável e suporte 24/7 para sua casa ou empresa
          </p>
          <a
            href="#plans"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
