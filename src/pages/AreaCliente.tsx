
import React, { useState } from 'react';
import { Lock, User, FileText, Calendar, Download, Bell, Settings } from 'lucide-react';

const AreaCliente = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Área do Cliente</h1>
            <p className="text-xl text-gray-300">
              Acesse sua área exclusiva para acompanhar seus processos e documentos.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-10 h-10 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Acesso Restrito</h2>
                <p className="text-gray-600">Entre com suas credenciais para acessar sua área exclusiva.</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF/CNPJ
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="000.000.000-00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Sua senha"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
                  </label>
                  <a href="#" className="text-sm text-amber-600 hover:text-amber-700">
                    Esqueci minha senha
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Entrar
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Ainda não tem acesso?</p>
                <button className="text-amber-600 font-medium hover:text-amber-700">
                  Solicitar Credenciais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ClientDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Bem-vindo, João Silva</h1>
              <p className="text-gray-300">Último acesso: 15/12/2024 às 14:30</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Processos Ativos</p>
                  <p className="text-2xl font-bold text-slate-900">3</p>
                </div>
                <FileText className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Próximas Audiências</p>
                  <p className="text-2xl font-bold text-slate-900">1</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Documentos</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
                <Download className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Notificações</p>
                  <p className="text-2xl font-bold text-slate-900">2</p>
                </div>
                <Bell className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Processes */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-slate-900">Processos em Andamento</h2>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    {
                      number: '1234567-89.2024.8.26.0100',
                      type: 'Ação Trabalhista',
                      status: 'Aguardando Audiência',
                      date: '20/01/2025',
                    },
                    {
                      number: '9876543-21.2024.8.26.0200',
                      type: 'Divórcio Consensual',
                      status: 'Em Análise',
                      date: '15/01/2025',
                    },
                    {
                      number: '5555555-55.2024.8.26.0300',
                      type: 'Cobrança',
                      status: 'Documentação Pendente',
                      date: '10/01/2025',
                    },
                  ].map((process, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{process.type}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          process.status === 'Aguardando Audiência' ? 'bg-blue-100 text-blue-800' :
                          process.status === 'Em Análise' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {process.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Processo: {process.number}</p>
                      <p className="text-sm text-gray-600">Próxima movimentação: {process.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Documents */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-slate-900">Documentos Recentes</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {[
                      { name: 'Petição Inicial - Ação Trabalhista.pdf', date: '15/12/2024', size: '2.3 MB' },
                      { name: 'Comprovante de Pagamento.pdf', date: '12/12/2024', size: '856 KB' },
                      { name: 'Documentos Pessoais.zip', date: '10/12/2024', size: '4.7 MB' },
                      { name: 'Procuração.pdf', date: '08/12/2024', size: '1.2 MB' },
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-gray-400" />
                          <div>
                            <p className="font-medium text-slate-900">{doc.name}</p>
                            <p className="text-sm text-gray-600">{doc.date} • {doc.size}</p>
                          </div>
                        </div>
                        <button className="text-amber-600 hover:text-amber-700">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-slate-900">Ações Rápidas</h2>
                </div>
                <div className="p-6 space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                    Enviar Documento
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                    Agendar Reunião
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                    Fazer Pergunta
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                    Atualizar Dados
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-slate-900">Notificações</h2>
                </div>
                <div className="p-6 space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Audiência Agendada</p>
                    <p className="text-sm text-blue-700">20/01/2025 às 14:00</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-yellow-900">Documento Solicitado</p>
                    <p className="text-sm text-yellow-700">Envie até 18/01/2025</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg text-white p-6">
                <h3 className="text-lg font-semibold mb-2">Precisa de Ajuda?</h3>
                <p className="text-sm mb-4 opacity-90">
                  Nossa equipe está disponível para esclarecer suas dúvidas.
                </p>
                <button className="w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Falar com Advogado
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return isLoggedIn ? <ClientDashboard /> : <LoginForm />;
};

export default AreaCliente;
