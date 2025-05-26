
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Depoimentos = () => {
  const testimonials = [
    {
      name: 'Carlos Eduardo',
      company: 'Empresário',
      rating: 5,
      text: 'Excelente atendimento! O Dr. João e sua equipe resolveram meu caso empresarial com muita competência e agilidade. Recomendo fortemente!',
      case: 'Direito Empresarial',
    },
    {
      name: 'Maria Fernanda',
      company: 'Professora',
      rating: 5,
      text: 'A Dra. Maria foi fundamental no meu processo de divórcio. Muito profissional, empática e sempre disponível para esclarecer dúvidas.',
      case: 'Direito de Família',
    },
    {
      name: 'Roberto Silva',
      company: 'Aposentado',
      rating: 5,
      text: 'Consegui minha aposentadoria com a ajuda do escritório. Processo rápido e sem complicações. Muito satisfeito com o resultado!',
      case: 'Direito Previdenciário',
    },
    {
      name: 'Ana Paula',
      company: 'Comerciante',
      rating: 5,
      text: 'Tive um problema trabalhista complexo e o Dr. Pedro resolveu tudo de forma brilhante. Profissionalismo exemplar!',
      case: 'Direito Trabalhista',
    },
    {
      name: 'Lucas Martins',
      company: 'Engenheiro',
      rating: 5,
      text: 'Atendimento de primeira qualidade. Resolveram meu caso criminal com muita dedicação e conhecimento técnico.',
      case: 'Direito Criminal',
    },
    {
      name: 'Fernanda Costa',
      company: 'Arquiteta',
      rating: 5,
      text: 'Equipe muito competente e atenciosa. Meu processo de compra de imóvel foi conduzido perfeitamente.',
      case: 'Direito Imobiliário',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Casos Resolvidos' },
    { number: '98%', label: 'Taxa de Sucesso' },
    { number: '24 anos', label: 'de Experiência' },
    { number: '500+', label: 'Clientes Satisfeitos' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Depoimentos</h1>
            <p className="text-xl text-gray-300">
              Veja o que nossos clientes falam sobre nossos serviços e resultados alcançados.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confiança conquistada através de resultados. Veja alguns depoimentos de clientes satisfeitos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-amber-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900 mb-1">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm mb-2">{testimonial.company}</div>
                  <div className="text-amber-600 text-sm font-medium">{testimonial.case}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Seja Nosso Próximo Cliente Satisfeito</h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra como podemos ajudá-lo a resolver seu caso jurídico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Fale Conosco
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Depoimentos em Vídeo</h2>
            <p className="text-gray-600">Assista aos depoimentos completos de nossos clientes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                  </div>
                  <p>Depoimento {video}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Depoimentos;
