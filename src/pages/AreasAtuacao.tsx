
import React from 'react';
import { Building2, Users, Heart, Briefcase, Home, Car, Shield, FileText } from 'lucide-react';

const AreasAtuacao = () => {
  const areas = [
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Assessoria completa para empresas, contratos comerciais, fusões e aquisições.',
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Defesa de direitos trabalhistas, demissões, rescisões e relações empregatícias.',
    },
    {
      icon: Heart,
      title: 'Direito de Família',
      description: 'Divórcio, guarda de filhos, pensão alimentícia e união estável.',
    },
    {
      icon: Briefcase,
      title: 'Direito Civil',
      description: 'Contratos, responsabilidade civil, danos morais e materiais.',
    },
    {
      icon: Home,
      title: 'Direito Imobiliário',
      description: 'Compra e venda de imóveis, financiamentos e regularização fundiária.',
    },
    {
      icon: Car,
      title: 'Direito do Trânsito',
      description: 'Multas de trânsito, suspensão de CNH e acidentes automobilísticos.',
    },
    {
      icon: Shield,
      title: 'Direito Criminal',
      description: 'Defesa criminal, inquéritos policiais e processos penais.',
    },
    {
      icon: FileText,
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, auxílios, pensões e benefícios do INSS.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Áreas de Atuação</h1>
            <p className="text-xl text-gray-300">
              Oferecemos serviços especializados em diversas áreas do direito, 
              sempre com foco na excelência e nos melhores resultados para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <button className="mt-4 text-amber-600 font-medium hover:text-amber-700 transition-colors">
                  Saiba mais →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Precisa de Assessoria Jurídica?</h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e agende uma consulta. Nossa equipe está pronta para ajudá-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Agendar Consulta
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasAtuacao;
