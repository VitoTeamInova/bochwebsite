
import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Noticias = () => {
  const featuredNews = {
    title: 'Nova Lei de Proteção de Dados: O que sua empresa precisa saber',
    excerpt: 'Entenda as principais mudanças na legislação e como adequar sua empresa às novas exigências legais.',
    date: '15 de Dezembro, 2024',
    author: 'Dr. João Silva',
    category: 'Direito Empresarial',
    image: 'featured-article',
  };

  const news = [
    {
      title: 'Direitos do Trabalhador em Home Office: Guia Completo',
      excerpt: 'Conheça os direitos e deveres dos trabalhadores no regime de trabalho remoto.',
      date: '12 de Dezembro, 2024',
      author: 'Dr. Pedro Oliveira',
      category: 'Direito Trabalhista',
    },
    {
      title: 'Mudanças no Código de Trânsito: Novas Penalidades',
      excerpt: 'Veja as principais alterações no código de trânsito e como elas afetam os condutores.',
      date: '10 de Dezembro, 2024',
      author: 'Dra. Ana Costa',
      category: 'Direito do Trânsito',
    },
    {
      title: 'Divórcio Consensual: Processo Simplificado',
      excerpt: 'Entenda como funciona o processo de divórcio consensual e suas vantagens.',
      date: '08 de Dezembro, 2024',
      author: 'Dra. Maria Santos',
      category: 'Direito de Família',
    },
    {
      title: 'Aposentadoria Especial: Quem Tem Direito?',
      excerpt: 'Saiba quais profissões têm direito à aposentadoria especial e como solicitá-la.',
      date: '05 de Dezembro, 2024',
      author: 'Dr. João Silva',
      category: 'Direito Previdenciário',
    },
    {
      title: 'Compra de Imóvel: Cuidados Essenciais',
      excerpt: 'Dicas importantes para evitar problemas na compra do seu imóvel.',
      date: '03 de Dezembro, 2024',
      author: 'Dra. Ana Costa',
      category: 'Direito Imobiliário',
    },
    {
      title: 'Direitos do Consumidor: Como se Proteger',
      excerpt: 'Conheça seus direitos como consumidor e saiba como exercê-los.',
      date: '01 de Dezembro, 2024',
      author: 'Dr. Pedro Oliveira',
      category: 'Direito do Consumidor',
    },
  ];

  const categories = [
    'Todas',
    'Direito Empresarial',
    'Direito Trabalhista',
    'Direito de Família',
    'Direito Criminal',
    'Direito Previdenciário',
    'Direito Imobiliário',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Notícias Jurídicas</h1>
            <p className="text-xl text-gray-300">
              Mantenha-se informado sobre as últimas novidades do mundo jurídico e mudanças na legislação.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                  <span className="text-amber-700 text-sm">{featuredNews.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{featuredNews.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredNews.author}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-64 lg:h-96 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">Imagem do Artigo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center">
                  <span className="text-white">Imagem</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-amber-600" />
                    <span className="text-amber-600 text-sm font-medium">{article.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Receba Nossas Notícias</h2>
          <p className="text-xl mb-8 opacity-90">
            Cadastre-se para receber as últimas notícias jurídicas diretamente em seu email.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-amber-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noticias;
