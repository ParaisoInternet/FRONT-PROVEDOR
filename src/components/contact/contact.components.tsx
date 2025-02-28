import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Button from "../../element/button.element";
import Title from "../../element/title.element";

import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 mt-20 bg-gradient-to-r from-blue-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Title>Fale Conosco</Title>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form
              className="space-y-6"
              action="https://formsubmit.co/administrativo@paraisointernet.com.br"
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <Button>Enviar mensagem </Button>
            </form>
          </div>
          <div>
            <div className="bg-gray-50 p-8 rounded-lg bg-gradient-to-r from-blue-100 to-gray-200">
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaWhatsapp className="h-5 w-5 text-blue-600 mr-3" />
                  <span>(99) 98422-0590</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>(99) 2221-0590</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>0800 099 0590</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <span>admin@paraisointernet</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Rua dos Cedros 03, Q A08, Vila Paraíso</span>
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
  );
};

export default Contact;
