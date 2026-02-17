import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SystemsView from './components/SystemsView';
import ConsultancyView from './components/ConsultancyView';
import DigitalSolutionsView from './components/DigitalSolutionsView';
import AboutView from './components/AboutView';
import AssessmentView from './components/AssessmentView';
import LegalView from './components/LegalView';
import ServiceDetailView from './components/ServiceDetailView';
import SoftwareCarousel from './components/SoftwareCarousel';
import A2insightsSection from './components/A2insightsSection';
import FAQ from './components/FAQ';
import ProcessSection from './components/ProcessSection';
import StorytellingScroll from './components/StorytellingScroll';
import BlogView from './components/BlogView';
import BlogPostView from './components/BlogPostView';
import CareersView from './components/CareersView';
import CookieConsent from './components/CookieConsent';
import {
  ArrowRight,
  CheckCircle2,
  Store,
  Layers,
  Wifi,
  Gauge,
  Lightbulb,
  Music,
  Thermometer,
  Rocket,
  Users,
} from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  const renderView = () => {
    if (currentView.startsWith('service-')) {
      const slug = currentView.replace('service-', '');
      return (
        <ServiceDetailView serviceSlug={slug} onNavigate={setCurrentView} />
      );
    }

    if (currentView.startsWith('post-')) {
      const slug = currentView.replace('post-', '');
      return <BlogPostView postSlug={slug} onNavigate={setCurrentView} />;
    }

    if (currentView === 'blog') {
      return <BlogView onNavigate={setCurrentView} />;
    }

    if (currentView === 'careers') {
      return <CareersView onNavigate={setCurrentView} />;
    }

    switch (currentView) {
      case 'systems':
        return <SystemsView onNavigate={setCurrentView} />;
      case 'consultancy':
        return <ConsultancyView onNavigate={setCurrentView} />;
      case 'digital-solutions':
        return <DigitalSolutionsView onNavigate={setCurrentView} />;
      case 'about':
        return <AboutView onNavigate={setCurrentView} />;
      case 'assessment':
        return <AssessmentView onNavigate={setCurrentView} />;
      case 'privacy':
        return <LegalView type="privacy" />;
      case 'terms':
        return <LegalView type="terms" />;
      case 'home':
      default:
        return (
          <>
            {/* SEÇÃO 1: HERO */}
            <div data-header-theme="transparent">
              <Hero />
            </div>

            {/* SEÇÃO 2: STORY SECTION (SOBRE) */}
            <section
              className="py-24 bg-white overflow-hidden"
              data-header-theme="light"
            >
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
                        alt="Smart Home Automation"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#aa1a20] -z-0 rounded-[3rem] transform rotate-6"></div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-[#aa1a20] font-bold tracking-widest uppercase mb-4">
                      FortalTech CE
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight">
                      Tecnologia Inteligente que transforma a Grande Fortaleza.
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Surgimos para integrar o world físico ao digital. Seja
                      automatizando sua residência para o máximo conforto ou
                      blindando a infraestrutura da sua empresa com as melhores
                      soluções de TI e telemetria da RMF.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <span className="block text-4xl font-black text-[#aa1a20] mb-1">
                          RMF
                        </span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          Líder Regional
                        </span>
                      </div>
                      <div>
                        <span className="block text-4xl font-black text-[#395fa3] mb-1">
                          Smart
                        </span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                          Ambientes Conectados
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SEÇÃO 3: STORYTELLING IMERSIVO (TERCEIRA POSIÇÃO) */}
            <StorytellingScroll />

            {/* SEÇÃO 4: PROCESSO / METODOLOGIA */}
            <div data-header-theme="light">
              <ProcessSection onNavigate={setCurrentView} />
            </div>

            {/* SECTION: SMART LIVING & BUSINESS (AUTOMATION) */}
            <section
              id="automation-section"
              className="py-24 bg-[#0a1628] text-white relative overflow-hidden"
              data-header-theme="dark"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#395fa3] rounded-full blur-[150px]"></div>
              </div>
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-950/30 px-4 py-2 rounded-full border border-red-900/50">
                      <Lightbulb className="w-5 h-5" />
                      <span className="font-black uppercase tracking-widest text-[10px]">
                        Automação de Ambientes
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      O Futuro agora: <br />
                      <span className="text-[#aa1a20]">
                        Casas e Empresas Inteligentes.
                      </span>
                    </h3>
                    <p className="text-blue-100/60 text-lg leading-relaxed mb-10">
                      Integramos iluminação, áudio, vídeo e climatização em um
                      único ecossistema. Controle tudo por voz ou app e crie
                      cenários perfeitos para relaxar ou trabalhar com
                      eficiência energética.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-12">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#aa1a20]">
                          <Music className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">
                          Áudio Multiroom
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#395fa3]">
                          <Thermometer className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">
                          Climatização
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setCurrentView(
                          'service-automacao-residencial-smart-home',
                        )
                      }
                      className="inline-flex items-center bg-[#aa1a20] text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-white hover:text-[#0a1628] transition-all group shadow-2xl"
                    >
                      Explorar Automação{' '}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
                        alt="Smart Dashboard Home"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: INFRA PARA VAREJO (SUPERMERCADOS / LOJAS) */}
            <section
              id="infra-section"
              className="py-24 bg-gray-50 relative overflow-hidden"
              data-header-theme="light"
            >
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-50 px-4 py-2 rounded-full border border-red-100">
                      <Store className="w-5 h-5" />
                      <span className="font-black uppercase tracking-widest text-[10px]">
                        Especialidade em Varejo
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight">
                      Infraestrutura Completa para seu Comércio.
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Do projeto de rede certificada ao Wi-Fi para coletores.
                      Garantimos que sua loja ou supermercado opere com máxima
                      estabilidade e segurança.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                      <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <Layers className="w-10 h-10 text-[#aa1a20] shrink-0" />
                        <div>
                          <h4 className="font-black text-[#395fa3] text-sm uppercase">
                            Redes Cabeadas
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            Padrão industrial Cat6.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <Wifi className="w-10 h-10 text-[#395fa3] shrink-0" />
                        <div>
                          <h4 className="font-black text-[#395fa3] text-sm uppercase">
                            Wi-Fi Mesh
                          </h4>
                          <p className="text-[10px] text-gray-500">
                            Sinal forte para staff e clientes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center bg-[#395fa3] text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-[#2a4678] transition-all group shadow-xl"
                    >
                      Orçamento de Infra{' '}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                      <img
                        src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
                        alt="Tecnologia no Varejo"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: 12 SERVIÇOS GRID */}
            <div data-header-theme="light">
              <Services onNavigate={setCurrentView} />
            </div>

            {/* SOFTWARE CAROUSEL - Representando o software-section */}
            <div id="software-section" data-header-theme="dark">
              <SoftwareCarousel onNavigate={setCurrentView} />
              {/* NOVA SEÇÃO DE DESTAQUE A2INSIGHTS LAB */}
              <A2insightsSection />
            </div>

            {/* FAQ */}
            <div data-header-theme="light">
              <FAQ />
            </div>

            {/* SECTION: TELEMETRIA (LOGÍSTICA INTELIGENTE) */}
            <section
              className="py-24 bg-gray-50 relative overflow-hidden"
              data-header-theme="light"
            >
              <div className="container mx-auto px-4 md:px-6">
                <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 relative z-10">
                    <div className="inline-flex items-center space-x-2 text-[#395fa3] mb-6 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                      <Gauge className="w-5 h-5" />
                      <span className="font-black uppercase tracking-widest text-[10px]">
                        Logística e Segurança
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight">
                      Telemetria Veicular: Controle Regional.
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Para empresas de delivery e frotas comerciais na Grande
                      Fortaleza. Monitore rotas, economize combustível e
                      bloqueie remotamente via App.
                    </p>
                    <div className="space-y-4 mb-10">
                      <div className="flex items-center font-bold text-gray-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#aa1a20] mr-3" />{' '}
                        Monitoramento 24h
                      </div>
                      <div className="flex items-center font-bold text-gray-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#aa1a20] mr-3" />{' '}
                        Histórico de Rotas Cloud
                      </div>
                    </div>
                    <a
                      href="#contact"
                      onClick={scrollToContact}
                      className="text-[#aa1a20] font-black uppercase tracking-widest text-xs flex items-center hover:translate-x-2 transition-transform group"
                    >
                      Planos de Telemetria{' '}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                    </a>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <img
                        src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=800"
                        alt="Logística Inteligente"
                        className="rounded-[3rem] shadow-2xl w-full relative z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div data-header-theme="light">
              <Contact />
            </div>

            {/* NOVA SEÇÃO: TRABALHE CONOSCO (DEPOIS DO CONTATO) */}
            <section
              className="py-24 bg-[#0a1628] text-white relative overflow-hidden"
              data-header-theme="dark"
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#aa1a20] rounded-full blur-[180px]"></div>
              </div>
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-10 md:p-20 shadow-2xl backdrop-blur-md">
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-2/3 text-center lg:text-left">
                      <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-950/40 px-4 py-2 rounded-full border border-red-900/50">
                        <Users className="w-5 h-5" />
                        <span className="font-black uppercase tracking-widest text-[10px]">
                          Carreiras na RMF
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                        Quer fazer parte da <br />
                        <span className="text-[#aa1a20]">nossa evolução?</span>
                      </h3>
                      <p className="text-blue-100/60 text-xl leading-relaxed mb-10 max-w-2xl">
                        Buscamos mentes técnicas para o campo e visionários de
                        software para o A2insights Lab. Use nossa IA para
                        descobrir sua vaga ideal agora mesmo.
                      </p>
                      <button
                        onClick={() => setCurrentView('careers')}
                        className="bg-[#aa1a20] text-white px-12 py-6 rounded-3xl font-black text-lg hover:bg-white hover:text-[#0a1628] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
                      >
                        Ver Vagas e Enviar Currículo{' '}
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 bg-[#395fa3]/20 rounded-full flex items-center justify-center animate-pulse">
                          <Rocket className="w-24 h-24 text-[#aa1a20]" />
                        </div>
                        <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#aa1a20] selection:text-white">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      <main>{renderView()}</main>
      <Footer onNavigate={setCurrentView} />
      <CookieConsent onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
