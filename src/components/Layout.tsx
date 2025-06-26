
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, MessageCircle } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Layout = () => {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 2 seconds zoom + 2 seconds display

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Áreas de Atuação', path: '/areas-atuacao' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Contato', path: '/contato' },
    { name: 'Área do Cliente', path: '/area-cliente' }
  ];

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
        <div className="animate-zoom-in">
          <img 
            src={logoImage}
            alt="BOCH Advogados" 
            className="w-screen h-screen object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo and Navigation */}
      <header className="bg-slate-900 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Logo Section */}
          <div className="flex justify-center py-4 border-b border-slate-700">
            <img 
              src={logoImage}
              alt="BOCH Advogados" 
              className="h-24 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="py-4">
            <ul className="flex justify-center space-x-8 flex-wrap">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:bg-slate-800 ${
                      location.pathname === item.path
                        ? 'text-amber-400 bg-slate-800 border-b-2 border-amber-400'
                        : 'text-gray-300 hover:text-amber-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>Rua das Advogadas, 123</p>
                <p>Centro - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
                <p className="mt-4">
                  <span className="font-medium">Telefone:</span> (11) 1234-5678
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Administration */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Administração</h3>
              <Link
                to="/data-config"
                className="inline-block px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Data/Config
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BOCH Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
