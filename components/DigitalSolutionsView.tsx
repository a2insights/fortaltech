
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  FlaskConical, 
  Zap,
  LayoutGrid
} from 'lucide-react';

interface DigitalSolutionsViewProps {
  onNavigate: (view: string) => void;
}

const DigitalSolutionsView: React.FC<DigitalSolutionsViewProps> = ({ onNavigate }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="animate-in fade-in duration-700 bg-gray-50">
      {/* Dynamic Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] via-[#1a2b4b] to-[#395fa3] pt-40 pb-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-10 border border-white/20 animate-pulse">
              <FlaskConical className="w-4 h-4 text-[#aa1a20]" />
              <span>Inovação Digital</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter">CONECTANDO O <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa1a20] to-white/90">CAMPO AO DIGITAL.</span></h1>
            <p className="text-xl md:text-2xl text-blue-100/60 leading-relaxed max-w-3xl mx-auto font-light">
              Do sensor na máquina ao dashboard no celular. Criamos a ponte que transforma infraestrutura física em dados inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-[#395fa3]/10 text-[#395fa3] rounded-3xl flex items-center justify-center mb-10 shadow-inner">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-[#395fa3] mb-6 uppercase tracking-tighter">Web Apps de Controle</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">Portais administrativos robustos para gestão de frotas e infraestrutura de rede.</p>
              <ul className="space-y-4 mb-10">
                {['Dashboards Customizados', 'Painéis de Telemetria', 'Gestão de Ordem de Serviço'].map((item, i) => (
                  <li key={i} className="flex items-center text-xs font-bold text-gray-700"><CheckCircle2 className="text-[#aa1a20] w-5 h-5 mr-3" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0a1628] p-12 rounded-[3.5rem] shadow-2xl border border-white/5 lg:-translate-y-12 text-white">
              <div className="w-20 h-20 bg-[#aa1a20] text-white rounded-3xl flex items-center justify-center mb-10 shadow-[0_15px_40px_rgba(170,26,32,0.3)]">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Mobilidade Campo</h3>
              <p className="text-blue-100/50 mb-10 leading-relaxed">Aplicativos para equipes de campo com sincronização offline e geolocalização.</p>
              <ul className="space-y-4 mb-10">
                {['Checklists Inteligentes', 'Fotos & Assinaturas Digitais', 'Tracking de Equipes'].map((item, i) => (
                  <li key={i} className="flex items-center text-xs font-bold text-blue-100/80"><CheckCircle2 className="text-[#aa1a20] w-5 h-5 mr-3" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-[#395fa3]/10 text-[#395fa3] rounded-3xl flex items-center justify-center mb-10 shadow-inner">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-[#395fa3] mb-6 uppercase tracking-tighter">Big Data Analytics</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">Tratamento de dados gerados pelos sensores e equipamentos instalados.</p>
              <ul className="space-y-4 mb-10">
                {['Predição de Falhas', 'BI Industrial', 'Otimização Energética'].map((item, i) => (
                  <li key={i} className="flex items-center text-xs font-bold text-gray-700"><CheckCircle2 className="text-[#aa1a20] w-5 h-5 mr-3" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Section */}
      <section className="py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-xl">
                 <div className="flex items-center space-x-4 mb-10">
                    <FlaskConical className="w-12 h-12 text-[#aa1a20]" />
                    <div>
                       <h2 className="text-4xl font-black text-white">Nosso Laboratório</h2>
                    </div>
                 </div>
                 <p className="text-blue-100/70 text-lg leading-relaxed mb-10">
                   Nossa unidade de inovação é onde a mágica acontece. Desenvolvemos a camada de inteligência que faz sua infraestrutura pulsar.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                       <LayoutGrid className="w-6 h-6 text-[#395fa3] mb-4" />
                       <h4 className="text-white font-bold mb-2">UI/UX Industrial</h4>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                       <Zap className="w-6 h-6 text-[#aa1a20] mb-4" />
                       <h4 className="text-white font-bold mb-2">High Perf Apps</h4>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-12">
               <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Codificamos a sua <br /><span className="text-[#aa1a20]">Vantagem Competitiva.</span></h3>
               <a 
                 href="#contact" 
                 onClick={scrollToContact}
                 className="inline-flex items-center space-x-4 bg-[#aa1a20] text-white px-10 py-6 rounded-3xl font-black text-lg hover:bg-white hover:text-[#aa1a20] transition-all transform hover:scale-105 shadow-2xl group"
               >
                 <span>Solicitar Consultoria Técnica</span>
                 <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Highlight */}
      <section className="py-24 container mx-auto px-4 md:px-6">
         <div className="bg-gradient-to-r from-[#395fa3] to-[#1a2b4b] rounded-[4rem] p-12 md:p-24 text-white text-center shadow-2xl relative overflow-hidden">
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Quer transformar seus dados <br />em inteligência real?</h3>
            <button 
              onClick={scrollToContact}
              className="bg-[#aa1a20] text-white px-12 py-7 rounded-[2rem] font-black text-xl hover:bg-white hover:text-[#395fa3] transition-all transform hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
               Falar com um Consultor Digital
            </button>
         </div>
      </section>
    </div>
  );
};

export default DigitalSolutionsView;
