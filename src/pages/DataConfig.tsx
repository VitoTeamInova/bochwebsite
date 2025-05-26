
import React, { useState } from 'react';
import { Save, Upload, Edit, Trash2, Plus, Image, FileText, Video } from 'lucide-react';

const DataConfig = () => {
  const [activeTab, setActiveTab] = useState('content');

  const tabs = [
    { id: 'content', name: 'Conteúdo', icon: FileText },
    { id: 'media', name: 'Mídia', icon: Image },
    { id: 'settings', name: 'Configurações', icon: Edit },
  ];

  const ContentSection = () => (
    <div className="space-y-8">
      {/* Page Content */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-slate-900">Conteúdo das Páginas</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[
              'Início',
              'Áreas de Atuação',
              'Quem Somos',
              'Depoimentos',
              'Notícias',
              'Contato',
            ].map((page, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-slate-900">{page}</h4>
                  <div className="flex gap-2">
                    <button className="text-amber-600 hover:text-amber-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder={`Conteúdo da página ${page}...`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Depoimentos</h3>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
            <Plus className="w-4 h-4" />
            Adicionar
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { name: 'Carlos Eduardo', company: 'Empresário', text: 'Excelente atendimento...' },
              { name: 'Maria Fernanda', company: 'Professora', text: 'Muito profissional...' },
              { name: 'Roberto Silva', company: 'Aposentado', text: 'Consegui minha aposentadoria...' },
            ].map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={testimonial.name}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Nome"
                  />
                  <input
                    type="text"
                    value={testimonial.company}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Empresa/Profissão"
                  />
                  <div className="flex gap-2">
                    <button className="text-amber-600 hover:text-amber-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <textarea
                  rows={2}
                  value={testimonial.text}
                  className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Depoimento"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Notícias</h3>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
            <Plus className="w-4 h-4" />
            Adicionar Notícia
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { title: 'Nova Lei de Proteção de Dados', category: 'Direito Empresarial', date: '15/12/2024' },
              { title: 'Direitos do Trabalhador em Home Office', category: 'Direito Trabalhista', date: '12/12/2024' },
              { title: 'Mudanças no Código de Trânsito', category: 'Direito do Trânsito', date: '10/12/2024' },
            ].map((news, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <input
                    type="text"
                    value={news.title}
                    className="md:col-span-2 px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Título da notícia"
                  />
                  <input
                    type="text"
                    value={news.category}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Categoria"
                  />
                  <div className="flex gap-2">
                    <button className="text-amber-600 hover:text-amber-700">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const MediaSection = () => (
    <div className="space-y-8">
      {/* Images */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Imagens</h3>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
            <Upload className="w-4 h-4" />
            Upload Imagem
          </button>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center mb-3">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-2">imagem_{index + 1}.jpg</p>
                <div className="flex gap-2">
                  <button className="text-amber-600 hover:text-amber-700 text-sm">Editar</button>
                  <button className="text-red-600 hover:text-red-700 text-sm">Excluir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-slate-900">Vídeos</h3>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700">
            <Upload className="w-4 h-4" />
            Upload Vídeo
          </button>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center mb-3">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 mb-2">depoimento_{index + 1}.mp4</p>
                <div className="flex gap-2">
                  <button className="text-amber-600 hover:text-amber-700 text-sm">Editar</button>
                  <button className="text-red-600 hover:text-red-700 text-sm">Excluir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SettingsSection = () => (
    <div className="space-y-8">
      {/* Site Settings */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-slate-900">Configurações do Site</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Escritório
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Nome do escritório"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone Principal
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="(11) 1234-5678"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Endereço Completo
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Endereço completo do escritório"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Principal
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="contato@escritorio.com.br"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horário de Funcionamento
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Seg-Sex: 8h-18h"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-slate-900">Redes Sociais</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook
              </label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://facebook.com/escritorio"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://linkedin.com/company/escritorio"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://instagram.com/escritorio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Painel de Administração</h1>
            <p className="text-gray-300">
              Gerencie todo o conteúdo, mídia e configurações do seu site.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-600 hover:text-amber-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {activeTab === 'content' && <ContentSection />}
          {activeTab === 'media' && <MediaSection />}
          {activeTab === 'settings' && <SettingsSection />}
        </div>
      </section>

      {/* Save Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-700 transition-colors">
          <Save className="w-5 h-5" />
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default DataConfig;
