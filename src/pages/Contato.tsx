
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 1234-5678', '(11) 98765-4321'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contato@escritorio.com.br', 'atendimento@escritorio.com.br'],
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua das Advogadas, 123', 'Centro - São Paulo/SP', 'CEP: 01234-567'],
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h', 'Domingo: Fechado'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-300">
              Estamos prontos para atendê-lo. Entre em contato e agende sua consulta jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Envie sua Mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Área de Interesse
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>Selecione uma área</option>
                      <option>Direito Empresarial</option>
                      <option>Direito Trabalhista</option>
                      <option>Direito de Família</option>
                      <option>Direito Criminal</option>
                      <option>Direito Previdenciário</option>
                      <option>Direito Imobiliário</option>
                      <option>Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Assunto da sua consulta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
                
                <p className="text-sm text-gray-500">
                  * Campos obrigatórios. Seus dados estão protegidos pela nossa política de privacidade.
                </p>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Localização</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center mb-8">
                <span className="text-white text-lg">Mapa do Escritório</span>
              </div>
              
              {/* Additional Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Informações Adicionais</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Atendimento de Emergência</h4>
                    <p className="text-gray-600">Para casos urgentes, entre em contato pelo WhatsApp: (11) 99999-9999</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Consultas Online</h4>
                    <p className="text-gray-600">Oferecemos consultas por videoconferência mediante agendamento prévio.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Estacionamento</h4>
                    <p className="text-gray-600">Estacionamento gratuito disponível para clientes no subsolo do edifício.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Como agendar uma consulta?',
                answer: 'Você pode agendar uma consulta através do nosso formulário, telefone ou WhatsApp. Nossa equipe entrará em contato para confirmar o horário.',
              },
              {
                question: 'Qual o valor da consulta?',
                answer: 'O valor da consulta varia de acordo com a área de atuação. Entre em contato conosco para obter informações detalhadas sobre valores.',
              },
              {
                question: 'Vocês atendem casos em outras cidades?',
                answer: 'Sim, atendemos casos em todo o estado de São Paulo e, dependendo da complexidade, em outros estados também.',
              },
              {
                question: 'Oferecem parcelamento?',
                answer: 'Sim, oferecemos opções de parcelamento flexíveis para adequar aos diferentes perfis de clientes.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
