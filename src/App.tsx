import React, { useState } from 'react';
import { Menu, X, Wifi, MapPin, Phone, MessageCircle, Instagram, Facebook, Linkedin, ChevronDown, Apple as WhatsApp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const plans = [
    { name: 'Básico', speed: '100 Mbps', price: 'R$ 89,90', features: ['Wi-Fi Grátis', 'Instalação Gratuita', 'Suporte 24/7'] },
    { name: 'Família', speed: '300 Mbps', price: 'R$ 129,90', features: ['Wi-Fi Mesh', 'Instalação Gratuita', 'Suporte 24/7', 'IP Fixo'] },
    { name: 'Premium', speed: '500 Mbps', price: 'R$ 199,90', features: ['Wi-Fi Mesh Premium', 'Instalação Prioritária', 'Suporte VIP', 'IP Fixo', 'TV Box 4K'] },
  ];

  const testimonials = [
    { name: 'Maria Silva', text: 'Melhor internet que já tive! Atendimento excepcional e conexão estável.' },
    { name: 'João Santos', text: 'Instalação rápida e profissional. Recomendo a todos!' },
    { name: 'Ana Oliveira', text: 'Desde que mudei para essa operadora, nunca mais tive problemas com internet.' },
  ];

  const faqs = [
    { question: 'Qual o prazo de instalação?', answer: 'A instalação é realizada em até 48 horas úteis após a aprovação do cadastro.' },
    { question: 'Preciso de fidelidade?', answer: 'Não exigimos fidelidade em nossos planos. Você é livre para cancelar quando quiser.' },
    { question: 'Como funciona o suporte técnico?', answer: 'Oferecemos suporte técnico 24/7 através do WhatsApp, telefone e chat online.' },
  ];

  const coverage = ['Centro', 'Jardim América', 'Vila Nova', 'Bela Vista', 'Santa Cruz', 'Parque das Flores'];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <WhatsApp size={24} />
      </a>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Wifi className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">VelocNet</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-200">Início</a>
              <a href="#plans" className="hover:text-blue-200">Planos</a>
              <a href="#coverage" className="hover:text-blue-200">Cobertura</a>
              <a href="#about" className="hover:text-blue-200">Sobre</a>
              <a href="#contact" className="hover:text-blue-200">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-blue-700 rounded">Início</a>
              <a href="#plans" className="block px-3 py-2 hover:bg-blue-700 rounded">Planos</a>
              <a href="#coverage" className="block px-3 py-2 hover:bg-blue-700 rounded">Cobertura</a>
              <a href="#about" className="block px-3 py-2 hover:bg-blue-700 rounded">Sobre</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-blue-700 rounded">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Internet de Alta Velocidade</h1>
            <p className="text-xl mb-8">Conexão estável e suporte 24/7 para sua casa ou empresa</p>
            <a
              href="#plans"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Plans Section */}
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
                <p className="text-4xl font-bold text-blue-600 mb-4">{plan.speed}</p>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
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

      {/* Coverage Section */}
      <section id="coverage" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Área de Cobertura</h2>
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
              <h3 className="text-2xl font-semibold mb-4">Consulte Disponibilidade</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                >
                  Consultar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Nossa equipe"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Conectando Pessoas desde 2010</h3>
              <p className="text-gray-600 mb-6">
                Somos uma empresa comprometida em fornecer a melhor experiência em internet para
                nossos clientes. Com mais de 10 anos de mercado, nossa missão é levar conexão
                de qualidade para todas as residências e empresas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                    <Wifi className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tecnologia de Ponta</h4>
                    <p className="text-gray-600">100% Fibra Óptica</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Suporte 24/7</h4>
                    <p className="text-gray-600">Atendimento Especializado</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
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
                      activeFaq === index ? 'rotate-180' : ''
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Fale Conosco</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span>(11) 9999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span>contato@velocnet.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Av. Principal, 1000 - Centro</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">VelocNet</span>
              </div>
              <p className="text-gray-400">
                Sua melhor escolha em internet de alta velocidade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Início</a></li>
                <li><a href="#plans" className="text-gray-400 hover:text-white">Planos</a></li>
                <li><a href="#coverage" className="text-gray-400 hover:text-white">Cobertura</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Área do Cliente</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 9999-9999</li>
                <li>contato@velocnet.com.br</li>
                <li>Av. Principal, 1000 - Centro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VelocNet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;