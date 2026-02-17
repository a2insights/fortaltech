import React from 'react';
import {
  FlaskConical,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Database,
  ExternalLink,
  Zap,
} from 'lucide-react';

const A2insightsSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a1628] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#aa1a20]/10 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#395fa3]/10 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-8 md:p-20 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#aa1a20] text-white px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-lg shadow-[#aa1a20]/20">
                <FlaskConical className="w-4 h-4" />
                <span>Unidade de Elite Digital</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                A2INSIGHTS:
                <br />
                <span className="text-[#aa1a20]">O CÉREBRO</span> DA
                <br />
                FORTALTECH.
              </h2>

              <p className="text-blue-100/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-light">
                Não apenas instalamos equipamentos; criamos a alma do seu
                negócio. O A2insights Lab desenvolve o software sob medida que
                transforma sua infraestrutura física em uma máquina de dados
                inteligente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://a2insights.com.br/#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0a1628] px-10 py-6 rounded-[2rem] font-black text-lg hover:bg-[#aa1a20] hover:text-white transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
                >
                  Visitar o Lab{' '}
                  <ExternalLink className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <div className="flex items-center space-x-4 px-6 text-white/40 text-[10px] font-black uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Projetos em Execução</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Code2 className="w-8 h-8" />,
                    label: 'Full Stack Development',
                    desc: 'Sistemas Web e Apps Mobile nativos.',
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    label: 'Big Data & BI',
                    desc: 'Transformando logs em decisões.',
                  },
                  {
                    icon: <Layers className="w-8 h-8" />,
                    label: 'Cloud & AWS',
                    desc: 'Infraestrutura escalável e segura.',
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    label: 'High Performance',
                    desc: 'Código otimizado para escala global.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2 group"
                  >
                    <div className="w-14 h-14 bg-[#aa1a20]/20 text-[#aa1a20] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#aa1a20] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tighter mb-2">
                      {item.label}
                    </h4>
                    <p className="text-white/30 text-[10px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#395fa3] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default A2insightsSection;
