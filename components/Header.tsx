
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Cpu, FlaskConical, LayoutGrid, BarChart4, FileDown, Loader2, Newspaper } from 'lucide-react';
import { COLORS, MEGA_MENU_PROJECTS } from '../constants';
import { exportCatalogToPDF } from './CatalogExporter';

interface HeaderProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, view: string, isExternal?: boolean, hash?: string) => {
    if (isExternal) {
      setIsMenuOpen(false);
      setIsMegaMenuOpen(false);
      return;
    }

    e.preventDefault();
    
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);

    const targetView = (view.includes('a2insights') || hash === '#contact') ? 'home' : view;
    const targetHash = (view.includes('a2insights') || hash === '#contact') ? '#contact' : hash;

    if (currentView !== targetView) {
      onNavigate(targetView);
      if (targetHash) {
        setTimeout(() => {
          const element = document.getElementById(targetHash.replace('#', ''));
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (targetHash) {
        const element = document.getElementById(targetHash.replace('#', ''));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePdfDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExporting(true);
    await exportCatalogToPDF();
    setIsExporting(false);
    setIsMegaMenuOpen(false);
  };

  const isHome = currentView === 'home';
  const useDarkHeader = scrolled || !isHome || isMegaMenuOpen;

  const getIcon = (title: string) => {
    if (title.includes('A2insights')) return <FlaskConical className="w-5 h-5" />;
    if (title.includes('Sistemas')) return <LayoutGrid className="w-5 h-5" />;
    if (title.includes('Consultoria')) return <BarChart4 className="w-5 h-5" />;
    return <BarChart4 className="w-5 h-5" />;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 py-0 ${useDarkHeader ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer h-full" 
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <div className="w-10 h-10 bg-[#aa1a20] rounded-lg flex items-center justify-center transform rotate-45 shadow-sm">
            <Cpu className="text-white w-6 h-6 transform -rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-extrabold leading-none transition-colors ${useDarkHeader ? 'text-[#395fa3]' : 'text-white'}`}>FORTALTECH</span>
            <span className={`text-[10px] tracking-widest font-medium transition-colors ${useDarkHeader ? 'text-gray-500' : 'text-gray-200'}`}>SOLUÇÕES TECNOLÓGICAS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`font-bold hover:text-[#aa1a20] transition-colors py-2 ${useDarkHeader ? 'text-gray-800' : 'text-white'}`}
          >
            Início
          </a>
          
          <div 
            className="static group h-full flex items-center"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className={`flex items-center font-bold hover:text-[#aa1a20] transition-colors ${useDarkHeader ? 'text-gray-800' : 'text-white'}`}>
              Software & Labs <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu Container */}
            <div className={`absolute left-0 right-0 top-full pt-0 transition-all duration-300 ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="container mx-auto px-4">
                <div className="bg-white shadow-[0_60px_120px_rgba(0,0,0,0.18)] rounded-b-[4rem] overflow-hidden border border-gray-100 flex max-w-screen-2xl mx-auto min-h-[500px]">
                  
                  {/* Sidebar Left */}
                  <div className="w-1/4 bg-gray-50 p-16 flex flex-col justify-center border-r border-gray-100">
                    <div className="inline-flex items-center bg-blue-100 text-[#395fa3] px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 w-fit">
                      Ecossistema
                    </div>
                    <h3 className="text-[#395fa3] font-black text-4xl mb-6 leading-[1.1] tracking-tighter">Engenharia Digital</h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-12 italic opacity-80">
                      "A infraestrutura que move o Ceará, conectada à inteligência do futuro."
                    </p>
                    <div className="flex items-center space-x-4 text-[#aa1a20] text-[11px] font-black uppercase tracking-widest">
                       <span className="w-3 h-3 bg-[#aa1a20] rounded-full animate-pulse shadow-[0_0_10px_rgba(170,26,32,0.4)]"></span>
                       <span>+30 serviços especializados</span>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="w-3/4 p-20 grid grid-cols-2 gap-24">
                    {/* Software Solutions Column */}
                    <div className="flex flex-col">
                       <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em] mb-12 border-b border-gray-100 pb-5">Unidade de Desenvolvimento</h4>
                       <div className="grid grid-cols-1 gap-8">
                        {MEGA_MENU_PROJECTS.map((item, idx) => (
                          <a 
                            key={idx} 
                            href={item.link.startsWith('http') ? item.link : '#'}
                            target={item.isExternal ? "_blank" : "_self"}
                            onClick={(e) => handleLinkClick(e, item.link, item.isExternal)}
                            className="group flex items-center space-x-8 hover:bg-gray-50 p-5 rounded-3xl transition-all border border-transparent hover:border-gray-100"
                          >
                            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${item.title.includes('A2insights') ? 'bg-red-50 text-[#aa1a20] group-hover:bg-[#aa1a20] group-hover:text-white' : 'bg-blue-50 text-[#395fa3] group-hover:bg-[#395fa3] group-hover:text-white'}`}>
                              {getIcon(item.title)}
                            </div>
                            <div>
                              <h4 className={`font-black text-xl transition-colors ${item.title.includes('A2insights') ? 'text-[#aa1a20]' : 'text-[#395fa3]'}`}>
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight mt-1 group-hover:text-gray-600">
                                {item.description.substring(0, 50)}...
                              </p>
                            </div>
                          </a>
                        ))}
                       </div>
                    </div>

                    {/* PDF Download Section - Color Fixed & Optimized */}
                    <div className="flex flex-col">
                      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em] mb-12 border-b border-gray-100 pb-5">
                        Documentação Técnica
                      </h4>

                      <button
                        onClick={handlePdfDownload}
                        disabled={isExporting}
                        className="group relative flex flex-col p-12 rounded-[3.5rem] border border-slate-200 
                                  bg-slate-50/80 hover:bg-[#395fa3] 
                                  text-slate-900 hover:text-white
                                  transition-all duration-500 text-left shadow-sm 
                                  hover:shadow-[0_30px_60px_-15px_rgba(57,95,163,0.3)] hover:-translate-y-2"
                      >
                        {/* Header Controls */}
                        <div className="flex items-center justify-between mb-10">
                          <div
                            className={`w-18 h-18 rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 
                                      ${isExporting ? 'bg-white text-[#aa1a20]' : 'bg-white text-[#395fa3] group-hover:bg-white/20 group-hover:text-white'}`}
                          >
                            {isExporting ? (
                              <Loader2 className="w-10 h-10 animate-spin" />
                            ) : (
                              <FileDown className="w-10 h-10" />
                            )}
                          </div>

                          <span
                            className="bg-[#aa1a20] text-white text-[11px] font-black 
                                      px-5 py-2 rounded-full uppercase tracking-widest 
                                      border border-white/10 shadow-sm
                                      transition-all duration-300
                                      group-hover:bg-white group-hover:text-[#aa1a20]"
                          >
                            PDF 2026
                          </span>
                        </div>

                        {/* Título - Fixed Contrast */}
                        <h4 className="font-black text-3xl mb-4 transition-colors text-[#395fa3] group-hover:text-white">
                          Catálogo de Serviços
                        </h4>

                        {/* Descrição - Fixed Color */}
                        <p className="text-sm font-medium leading-relaxed transition-colors text-slate-500 group-hover:text-white/80">
                          Acesse o detalhamento completo de nossas soluções em infraestrutura,
                          automação e software para o biênio 2025-2026.
                        </p>

                        {/* Footer - Dynamic Interaction */}
                        <div
                          className={`mt-14 flex items-center space-x-4 
                                    text-[11px] font-black uppercase tracking-[0.2em]
                                    transition-colors
                                    ${isExporting ? 'text-[#aa1a20] group-hover:text-white' : 'text-[#aa1a20] group-hover:text-white'}`}
                        >
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                                      ${isExporting ? 'bg-[#aa1a20] animate-ping group-hover:bg-white' : 'bg-[#aa1a20] group-hover:bg-white'}`}
                          ></div>

                          <span>
                            {isExporting
                              ? "Gerando Catálogo..."
                              : "Baixar Portfólio Completo"}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'home', false, '#services')}
            className={`font-bold hover:text-[#aa1a20] transition-colors ${useDarkHeader ? 'text-gray-800' : 'text-white'}`}
          >
            Serviços
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
            className={`flex items-center font-bold hover:text-[#aa1a20] transition-colors ${currentView === 'blog' ? 'text-[#aa1a20]' : useDarkHeader ? 'text-gray-800' : 'text-white'}`}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'home', false, '#contact')}
            className={`font-bold hover:text-[#aa1a20] transition-colors ${useDarkHeader ? 'text-gray-800' : 'text-white'}`}
          >
            Contato
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'home', false, '#contact')}
            className="bg-[#aa1a20] text-white px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-[#395fa3] transition-all transform hover:scale-105 shadow-xl shadow-red-900/10"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={useDarkHeader ? 'text-gray-800' : 'text-white'} /> : <Menu className={useDarkHeader ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
            <span className="text-[#395fa3] text-2xl font-black tracking-tighter uppercase">FORTALTECH</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-gray-100 rounded-2xl"><X className="text-gray-800 w-6 h-6" /></button>
          </div>
          <nav className="space-y-10 text-xl pb-16">
            <a href="#home" className="block text-gray-800 font-black text-2xl" onClick={(e) => handleLinkClick(e, 'home')}>Início</a>
            
            <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100">
              <span className="block text-gray-400 text-[11px] mb-8 uppercase tracking-[0.4em] font-black">Soluções Digitais</span>
              <div className="grid grid-cols-1 gap-8">
                {MEGA_MENU_PROJECTS.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link.startsWith('http') ? item.link : '#'} 
                    target={item.isExternal ? "_blank" : "_self"}
                    className={`block font-black text-xl flex items-center ${item.title.includes('A2insights') ? 'text-[#aa1a20]' : 'text-[#395fa3]'}`} 
                    onClick={(e) => handleLinkClick(e, item.link, item.isExternal)}
                  >
                    {item.title}
                  </a>
                ))}
                
                {/* Mobile PDF Action */}
                <button 
                  onClick={handlePdfDownload}
                  disabled={isExporting}
                  className="w-full bg-[#395fa3] p-6 rounded-2xl flex items-center justify-between group mt-6 shadow-2xl shadow-blue-900/20"
                >
                  <div className="flex items-center gap-5 text-white">
                    {isExporting ? <Loader2 className="w-6 h-6 animate-spin" /> : <FileDown className="w-6 h-6" />}
                    <span className="text-xs font-black uppercase tracking-[0.2em]">{isExporting ? 'Processando...' : 'Baixar Catálogo PDF'}</span>
                  </div>
                </button>
              </div>
            </div>

            <a href="#" className="block text-gray-800 font-black text-2xl pl-4" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onNavigate('blog'); }}>Blog</a>
            <a href="#services" className="block text-gray-800 font-black text-2xl pl-4" onClick={(e) => handleLinkClick(e, 'home', false, '#services')}>Serviços</a>
            <a href="#contact" className="block text-gray-800 font-black text-2xl pl-4" onClick={(e) => handleLinkClick(e, 'home', false, '#contact')}>Contato</a>
            
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'home', false, '#contact')}
              className="block bg-[#aa1a20] text-white text-center py-6 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-base shadow-2xl shadow-red-900/30"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
