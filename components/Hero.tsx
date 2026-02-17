
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Wifi, 
  Smartphone, 
  Home, 
  Briefcase, 
  ShoppingCart, 
  Gauge, 
  MapPin,
  Building2,
  Code2
} from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "AUTOMAÇÃO SMART HOME",
    "INFRAESTRUTURA PARA PMEs",
    "A2INSIGHTS SOFTWARE LAB",
    "SISTEMAS PDV PARA LOJAS",
    "TELEMETRIA E FROTAS RMF",
    "SUPORTE TÉCNICO REGIONAL"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentPhrase) {
          setIsDeleting(true);
          setTypingSpeed(2000); 
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-[75vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-[#0a1628]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a1628]"></div>
        <div 
          className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-[#395fa3]/10 lg:bg-[#395fa3]" 
          style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        ></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#aa1a20 1px, transparent 1px)', backgroundSize: '40px_40px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-2xl mb-8 group mx-auto lg:mx-0 shadow-2xl">
              <div className="relative">
                <Gauge className="w-5 h-5 text-[#aa1a20]" />
                <div className="absolute inset-0 bg-[#aa1a20] blur-md opacity-50"></div>
              </div>
              <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">Tecnologia Inteligente na RMF</span>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
                EXCELÊNCIA EM:
              </h1>
              {/* Contêiner de altura fixa para evitar quebras de layout */}
              <div className="min-h-[90px] md:min-h-[120px] lg:min-h-[80px] flex items-center justify-center lg:justify-start">
                <span className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#aa1a20] leading-tight">
                  {displayText}
                  <span className="inline-block w-1 md:w-2 h-[0.8em] bg-[#aa1a20] ml-3 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>

            <p className="text-base md:text-xl text-blue-100/60 leading-relaxed mb-10 max-w-2xl font-light mx-auto lg:mx-0">
              Integrando <span className="text-white font-bold">Automação Inteligente</span> e o poder do <span className="text-white font-bold">A2insights Lab</span> para transformar residências e empresas na Grande Fortaleza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative px-10 py-5 rounded-2xl font-black text-base overflow-hidden transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(170,26,32,0.3)] text-center bg-[#aa1a20] text-white"
              >
                Explorar Soluções <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-10 py-5 rounded-2xl font-black text-base border-2 border-white/20 text-white overflow-hidden transition-all hover:border-[#395fa3] transform hover:scale-105 text-center"
              >
                Falar com um Técnico
              </button>
            </div>
          </div>

          <div className="hidden lg:grid w-2/5 grid-cols-2 gap-4 animate-in fade-in slide-in-from-right duration-1000">
             <div className="bg-[#395fa3] p-6 rounded-[2rem] shadow-2xl border border-white/10 group hover:bg-[#aa1a20] transition-colors cursor-pointer" onClick={() => scrollToSection('services')}>
                <Home className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tighter">Automação Residencial</h4>
                <p className="text-blue-100/50 text-[8px] font-bold uppercase tracking-widest">Smart Homes RMF</p>
             </div>
             
             <div className="bg-[#0a1628] p-6 rounded-[2rem] shadow-2xl border-2 border-[#aa1a20]/50 group hover:border-white transition-all cursor-pointer" onClick={() => scrollToSection('automation-section')}>
                <Building2 className="w-8 h-8 text-[#aa1a20] mb-3" />
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tighter">Automação Comercial</h4>
                <p className="text-blue-100/50 text-[8px] font-bold uppercase tracking-widest">Gestão de Ambientes</p>
             </div>

             <div className="bg-[#aa1a20] p-6 rounded-[2rem] shadow-2xl border border-white/10 group hover:bg-[#395fa3] transition-colors cursor-pointer" onClick={() => scrollToSection('software-section')}>
                <Code2 className="w-8 h-8 text-white mb-3" />
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tighter">A2insights Lab</h4>
                <p className="text-red-100/50 text-[8px] font-bold uppercase tracking-widest">Software sob medida</p>
             </div>

             <div className="bg-white p-6 rounded-[2rem] shadow-2xl group hover:shadow-[#aa1a20]/20 transition-all cursor-pointer" onClick={() => scrollToSection('contact')}>
                <Gauge className="w-8 h-8 text-[#aa1a20] mb-3" />
                <h4 className="text-sm font-black text-[#395fa3] mb-1 uppercase tracking-tighter">Telemetria & Suporte</h4>
                <p className="text-gray-400 text-[8px] font-bold uppercase tracking-widest">Eficiência Regional</p>
             </div>
          </div>
        </div>
      </div>

      {/* Hero "Mini-Menu" Section */}
      <div className="container mx-auto px-4 md:px-6 mt-16 relative z-10 hidden md:block">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-[2.5rem] flex items-center justify-between">
           {[
             { label: 'Smart Home', id: 'services', icon: <Home className="w-4 h-4" /> },
             { label: 'Comercial', id: 'automation-section', icon: <Building2 className="w-4 h-4" /> },
             { label: 'Software Lab', id: 'software-section', icon: <Code2 className="w-4 h-4" /> },
             { label: 'Infra & Redes', id: 'infra-section', icon: <Wifi className="w-4 h-4" /> },
             { label: 'Suporte TI', id: 'services', icon: <Settings className="w-4 h-4" /> }
           ].map((item, idx) => (
             <button 
               key={idx}
               onClick={() => scrollToSection(item.id)}
               className="flex-1 flex items-center justify-center space-x-2 py-4 px-2 text-white/50 hover:text-white hover:bg-white/5 rounded-2xl transition-all text-[10px] font-black uppercase tracking-widest"
             >
               {item.icon}
               <span>{item.label}</span>
             </button>
           ))}
        </div>
      </div>
    </section>
  );
};

// Generic icon for links above if not in standard imports
const Settings = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

export default Hero;
