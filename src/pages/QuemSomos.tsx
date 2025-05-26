
import React from 'react';
import { Award, Target, Users, BookOpen } from 'lucide-react';

const QuemSomos = () => {
  const team = [
    {
      name: 'Dr. João Silva',
      position: 'Sócio Fundador',
      specialty: 'Direito Empresarial',
      experience: '25 anos de experiência',
    },
    {
      name: 'Dra. Maria Santos',
      position: 'Sócia',
      specialty: 'Direito de Família',
      experience: '20 anos de experiência',
    },
    {
      name: 'Dr. Pedro Oliveira',
      position: 'Advogado Senior',
      specialty: 'Direito Trabalhista',
      experience: '15 anos de experiência',
    },
    {
      name: 'Dra. Ana Costa',
      position: 'Advogada',
      specialty: 'Direito Criminal',
      experience: '10 anos de experiência',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência em nossos serviços, com foco na qualidade e nos resultados.',
    },
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Nossos clientes são nossa prioridade. Trabalhamos incansavelmente para defender seus interesses.',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Acreditamos na força do trabalho colaborativo para encontrar as melhores soluções jurídicas.',
    },
    {
      icon: BookOpen,
      title: 'Conhecimento',
      description: 'Investimos constantemente em capacitação e atualização para oferecer o melhor atendimento.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Quem Somos</h1>
            <p className="text-xl text-gray-300">
              Conheça nossa história, nossa equipe e os valores que nos guiam na busca pela excelência jurídica.
            </p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fundado em 2000 pelo Dr. João Silva, nosso escritório nasceu com o propósito de oferecer 
                serviços jurídicos de alta qualidade, sempre priorizando a ética, transparência e os 
                melhores resultados para nossos clientes.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ao longo dos anos, expandimos nossa equipe e áreas de atuação, mantendo sempre o 
                compromisso com a excelência e inovação. Hoje, somos reconhecidos como um dos principais 
                escritórios de advocacia da região.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa trajetória é marcada por casos de sucesso e pela confiança depositada por centenas 
                de clientes que confiam em nosso trabalho.
              </p>
            </div>
            <div className="lg:order-first">
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 h-96 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">Foto Histórica do Escritório</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os valores que orientam nossa conduta profissional e nosso relacionamento com clientes e parceiros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais que formam nossa equipe especializada e comprometida com a excelência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-sm">Foto</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600 mb-2">{member.specialty}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Quer Conhecer Melhor Nossa Equipe?</h2>
          <p className="text-xl mb-8 opacity-90">
            Agende uma reunião e conheça pessoalmente os profissionais que cuidarão do seu caso.
          </p>
          <button className="px-8 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Agendar Reunião
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
