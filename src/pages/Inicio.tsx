
import React from 'react';
import { Scale, Users, Award, Clock } from 'lucide-react';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Excelência Jurídica ao Seu Alcance
            </h1>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in">
              Há mais de 20 anos defendendo seus direitos com dedicação, competência e resultados comprovados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Agende uma Consulta
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que Escolher Nosso Escritório?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções jurídicas personalizadas com foco em resultados e atendimento de excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Experiência</h3>
              <p className="text-gray-600">Mais de 20 anos de atuação em diversas áreas do direito.</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Equipe Especializada</h3>
              <p className="text-gray-600">Advogados altamente qualificados e especializados.</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Resultados</h3>
              <p className="text-gray-600">Histórico comprovado de casos bem-sucedidos.</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Agilidade</h3>
              <p className="text-gray-600">Atendimento rápido e eficiente para suas necessidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Nosso Escritório</h2>
              <p className="text-gray-600 mb-6">
                Fundado em 2000, nosso escritório de advocacia tem se dedicado a oferecer serviços jurídicos 
                de excelência, sempre priorizando a ética, transparência e os melhores resultados para nossos clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe é formada por advogados experientes e especializados em diversas áreas do direito, 
                garantindo atendimento personalizado e soluções eficazes para cada caso.
              </p>
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Conheça Nossa Equipe
              </button>
            </div>
            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 h-96 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">Imagem do Escritório</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
