import React from 'react';
import {
  Monitor,
  Cpu,
  Database,
  ArrowRight,
  Terminal,
  Server,
  Smartphone,
  Globe,
  FlaskConical,
  Settings2,
  Lock,
  Activity,
  Zap,
  ShoppingCart,
  Building2,
  Code2,
  Layers,
  ChevronRight,
  MousePointer2,
  Rocket,
  ExternalLink,
} from 'lucide-react';

interface SystemsViewProps {
  onNavigate: (view: string) => void;
}

const SystemsView: React.FC<SystemsViewProps> = ({ onNavigate }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element)
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* Hero Section - Focado em A2insights Lab */}
      <section className="bg-[#0a1628] pt-40 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#395fa3]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#aa1a20]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#aa1a20] px-4 py-2 rounded-full mb-8 shadow-lg shadow-[#aa1a20]/20">
                <FlaskConical className="w-4 h-4 text-white animate-pulse" />
                <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">
                  Powered by A2insights Lab
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
                SISTEMAS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa1a20] to-[#395fa3]">
                  INTELIGENTES.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/60 leading-relaxed mb-10 max-w-2xl font-light mx-auto lg:mx-0">
                O <strong>A2insights Lab</strong> é o núcleo de inteligência da
                FortalTech. Desenvolvemos software exclusivo que transforma
                processos complexos em interfaces simples, escaláveis e de alta
                performance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="bg-[#aa1a20] hover:bg-white hover:text-[#0a1628] text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl flex items-center group"
                >
                  Falar com um Arquiteto de Software{' '}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <a
                  href="https://a2insights.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-black transition-all flex items-center group"
                >
                  Ver Lab Externo <MousePointer2 className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Code2 className="text-[#aa1a20] w-6 h-6" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      A2.Insight_Console
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-[10px] text-blue-200/60">
                  <p className="text-green-400">
                    # Initializing A2insights Lab Core...
                  </p>
                  <p> Building custom ERP for RMF Logistics...</p>
                  <p className="text-white/40">
                    {' '}
                    Compiling React components...
                  </p>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#aa1a20] w-[65%] animate-pulse"></div>
                  </div>
                  <p className="text-[#395fa3]">
                    {' '}
                    AWS Cloud Infrastructure: DEPLOYED
                  </p>
                  <p className="text-white"> Status: READY TO INNOVATE</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#395fa3]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* A2insights Lab Section - Detalhamento da Unidade */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: 'Web Apps',
                    desc: 'Plataformas SaaS e Dashboards de BI de alta densidade.',
                  },
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: 'Mobile',
                    desc: 'Aplicativos nativos iOS e Android para equipes de campo.',
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: 'IoT Hub',
                    desc: 'Conectividade de hardware FortalTech com a nuvem.',
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    title: 'E-commerce',
                    desc: 'Sistemas B2B e B2C integrados a ERPs locais.',
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 bg-[#0a1628] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#aa1a20] transition-colors">
                      {card.icon}
                    </div>
                    <h4 className="font-black text-[#395fa3] uppercase text-sm mb-2">
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-[#aa1a20] font-black uppercase tracking-[0.3em] text-xs mb-4">
                Metodologia A2insights
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight">
                Software de Elite. <br />
                Engenharia de Resultados.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Diferente de agências comuns, o <strong>A2insights Lab</strong>{' '}
                nasceu dentro da FortalTech para resolver desafios reais de
                infraestrutura. Nosso código é limpo, escalável e focado em
                resolver o "gap" entre o mundo físico e o digital.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Desenvolvimento Ágil (Scrum/Kanban)',
                  'Arquitetura de Microserviços Cloud Native',
                  "Segurança 'By Design' integrada",
                  'Interfaces focadas em UX/UI de Alta Conversão',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 text-sm font-bold text-[#395fa3]"
                  >
                    <ChevronRight className="w-5 h-5 text-[#aa1a20]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: REFERÊNCIA DIRETA AO LAB A2INSIGHTS */}
      <section className="py-24 bg-[#aa1a20] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-white text-[#aa1a20] px-4 py-2 rounded-full mb-8 shadow-xl">
                <FlaskConical className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Unidade de P&D de Software
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
                A CIÊNCIA POR TRÁS <br />
                <span className="text-white/70">DA FORTALTECH.</span>
              </h2>
              <p className="text-red-100/70 text-lg leading-relaxed mb-10">
                O <strong>A2insights</strong> é o nosso braço independente
                focado em inovação disruptiva. Enquanto a FortalTech resolve o
                seu hardware, o Lab cria o software que o torna inteligente.
                Visite o portal do laboratório para explorar projetos de IA, BI
                e desenvolvimento sob medida.
              </p>
              <a
                href="https://a2insights.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#aa1a20] px-10 py-5 rounded-2xl font-black text-sm hover:bg-[#0a1628] hover:text-white transition-all transform hover:scale-105 shadow-2xl group"
              >
                Explorar Portal do Lab{' '}
                <ExternalLink className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#395fa3] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-20"></div>
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                    alt="A2insights Digital Lab"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#aa1a20]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-white text-xs font-black uppercase tracking-widest mb-2">
                      Localização: Maracanaú, CE
                    </div>
                    <div className="text-white/60 text-[10px] font-bold uppercase">
                      Scientific Innovation for RMF
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - O que usamos no Lab */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-black text-[#395fa3] uppercase tracking-tighter mb-4">
              A STACK DO FUTURO
            </h2>
            <p className="text-gray-500">
              Utilizamos as tecnologias mais modernas do mercado global para
              garantir que seu sistema nunca se torne obsoleto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React / Next.js', icon: <Code2 /> },
              { name: 'Node.js / Go', icon: <Terminal /> },
              { name: 'AWS / Cloud', icon: <Server /> },
              { name: 'PostgreSQL / NoSQL', icon: <Database /> },
              { name: 'Docker / K8s', icon: <Layers /> },
              { name: 'AI & ML', icon: <Rocket /> },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-8 rounded-3xl border border-gray-100 hover:border-[#aa1a20] hover:bg-gray-50 transition-all group"
              >
                <div className="text-gray-300 group-hover:text-[#aa1a20] transition-colors mb-4 transform group-hover:scale-110">
                  {React.cloneElement(tech.icon as React.ReactElement<any>, {
                    className: 'w-10 h-10',
                  })}
                </div>
                <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#395fa3] tracking-widest">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Section - Soluções Aplicadas */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-black mb-8 leading-tight">
                Soluções que <br />
                <span className="text-[#aa1a20]">já transformam</span> a RMF.
              </h3>
              <p className="text-blue-100/40 text-sm leading-relaxed mb-10">
                Veja como o A2insights Lab aplica tecnologia em cenários reais
                de varejo, logística e serviços na Grande Fortaleza.
              </p>
              <button
                onClick={scrollToContact}
                className="text-[#aa1a20] font-black uppercase tracking-widest text-xs flex items-center hover:text-white transition-colors group"
              >
                Solicitar Demo{' '}
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <ShoppingCart className="w-10 h-10 text-[#aa1a20] mb-6" />
                <h4 className="text-xl font-black mb-4">Varejo Intelligente</h4>
                <p className="text-xs text-blue-100/50 leading-relaxed">
                  Sistemas de frente de caixa integrados a controle de estoque
                  em tempo real para redes de supermercados.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Activity className="w-10 h-10 text-[#395fa3] mb-6" />
                <h4 className="text-xl font-black mb-4">Telemetria Hub</h4>
                <p className="text-xs text-blue-100/50 leading-relaxed">
                  Dashboards de análise de dados veiculares que traduzem
                  telemetria em economia de combustível e segurança.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Building2 className="w-10 h-10 text-[#aa1a20] mb-6" />
                <h4 className="text-xl font-black mb-4">Gestão de Ativos</h4>
                <p className="text-xs text-blue-100/50 leading-relaxed">
                  Software customizado para controle de manutenção preventiva de
                  equipamentos industriais e de TI.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Lock className="w-10 h-10 text-[#395fa3] mb-6" />
                <h4 className="text-xl font-black mb-4">Identity & Access</h4>
                <p className="text-xs text-blue-100/50 leading-relaxed">
                  Integração de hardware de biometria facial com sistemas de RH
                  para controle de jornada em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-6 leading-tight">
              O mercado não tem o software que você precisa?
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed">
              O <strong>A2insights Lab</strong> constrói do zero, exatamente
              como sua regra de negócio exige. Vamos digitalizar sua visão?
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-[#aa1a20] text-white px-12 py-7 rounded-[2rem] font-black text-xl hover:bg-[#395fa3] transition-all transform hover:scale-105 shadow-[0_20px_60px_rgba(170,26,32,0.3)] shrink-0"
          >
            Iniciar Projeto no Lab
          </button>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#395fa3]/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default SystemsView;
