
import React from 'react';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Globe, 
  ShieldAlert, 
  HardHat, 
  Database,
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface ConsultancyViewProps {
  onNavigate: (view: string) => void;
}

const ConsultancyView: React.FC<ConsultancyViewProps> = ({ onNavigate }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-gradient-to-br from-[#aa1a20] via-[#8e151a] to-[#6d1115] pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/20">
              <ShieldCheck className="w-3 h-3 text-[#395fa3]" />
              <span>Estratégia & Segurança Cibernética</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">CONSULTORIA <br />ESTRATÉGICA EM TI.</h1>
            <p className="text-xl text-red-50/70 leading-relaxed max-w-2xl font-light">
              Auditamos, planejamos e protegemos sua infraestrutura. Nossa consultoria vai além do suporte básico: entregamos um roadmap tecnológico para escala global e segurança normativa total.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[150px]"></div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#395fa3] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#395fa3]/30">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#395fa3] mb-4 uppercase tracking-tight">Auditoria de Infra</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">Análise profunda de redes, servidores e ativos de campo para identificar vulnerabilidades físicas e lógicas.</p>
              <div className="pt-6 border-t border-gray-200">
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#aa1a20]">Foco em Performance</span>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-[#aa1a20] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#aa1a20]/30">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#395fa3] mb-4 uppercase tracking-tight">LGPD & Cibersegurança</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">Adequação normativa e implementação de firewalls, políticas de acesso e criptografia de ponta-a-ponta.</p>
              <div className="pt-6 border-t border-gray-200">
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#aa1a20]">Proteção de Dados</span>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-[#0a1628] border border-white/5 hover:shadow-2xl transition-all duration-500 group text-white">
              <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Cloud Strategy</h3>
              <p className="text-blue-100/50 text-sm leading-relaxed mb-8">Planejamento de migração híbrida ou total para AWS/Azure com foco em redução de TCO e alta disponibilidade.</p>
              <div className="pt-6 border-t border-white/5">
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#aa1a20]">Escalabilidade Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight">Resolvendo os Gargalos <br /><span className="text-[#aa1a20]">do seu Crescimento.</span></h2>
               <div className="space-y-6">
                 {[
                   { t: "Downtime Inaceitável", d: "Sua operação para por falhas técnicas? Implementamos redundância crítica." },
                   { t: "Segurança Frágil", d: "Protegemos seus segredos industriais contra ataques externos e internos." },
                   { t: "Custos de TI Fora de Controle", d: "Otimizamos gastos com infraestrutura física e licenciamento cloud." },
                   { t: "Desconexão Campo-Escritório", d: "Integramos dados de produção diretamente ao seu cérebro gerencial." }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-10 h-10 bg-[#aa1a20]/10 text-[#aa1a20] rounded-xl flex items-center justify-center shrink-0"><CheckCircle2 className="w-6 h-6"/></div>
                      <div>
                        <h4 className="font-black text-[#395fa3] text-sm uppercase tracking-wider mb-1">{item.t}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="bg-[#0a1628] p-12 rounded-[3.5rem] shadow-2xl border border-white/10 text-white relative z-10">
                  <h3 className="text-3xl font-black mb-8">Disaster Recovery</h3>
                  <p className="text-blue-100/60 mb-10 leading-relaxed">
                    Quanto custa para sua empresa 1 dia de operação parada? Criamos planos de continuidade de negócios que garantem o retorno em minutos, não dias.
                  </p>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-4 border-b border-white/5">
                        <span className="font-bold text-sm">Backup Imutável</span>
                        <span className="text-[#aa1a20] font-black text-xs uppercase">Check</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-white/5">
                        <span className="font-bold text-sm">Alta Disponibilidade (HA)</span>
                        <span className="text-[#aa1a20] font-black text-xs uppercase">Check</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-white/5">
                        <span className="font-bold text-sm">Monitoramento 24/7/365</span>
                        <span className="text-[#aa1a20] font-black text-xs uppercase">Check</span>
                     </div>
                  </div>
               </div>
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#395fa3] rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-4xl font-black text-[#395fa3] mb-6 tracking-tight uppercase">Nosso Método</h2>
             <p className="text-gray-500 font-medium">Ciência aplicada à estratégia. Transformação orientada a resultados mensuráveis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { t: "Assessment", d: "Raio-X completo da situação atual.", color: "bg-[#395fa3]" },
               { t: "Roadmap", d: "Planejamento tático de melhorias.", color: "bg-[#aa1a20]" },
               { t: "Execution", d: "Mão na massa e implantação técnica.", color: "bg-[#395fa3]" },
               { t: "Governance", d: "Monitoramento e melhoria contínua.", color: "bg-[#aa1a20]" }
             ].map((step, i) => (
               <div key={i} className="group p-8 text-center rounded-3xl border border-gray-100 bg-white hover:border-[#aa1a20] transition-all">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 text-xl font-black group-hover:scale-110 transition-transform shadow-xl`}>{i+1}</div>
                  <h4 className="font-black text-[#395fa3] mb-3 uppercase text-xs tracking-[0.2em]">{step.t}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-4 md:px-6">
         <div className="bg-[#395fa3] rounded-[4rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl text-center lg:text-left relative z-10">
               <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Pronto para elevar o nível da sua TI?</h3>
               <p className="text-white/80 text-xl leading-relaxed">Deixe o operacional crítico conosco e foque no que realmente importa: seu negócio.</p>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-[#aa1a20] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-[#395fa3] transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(170,26,32,0.3)] shrink-0 flex items-center group relative z-10"
            >
               Solicitar Diagnóstico <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
         </div>
      </section>
    </div>
  );
};

export default ConsultancyView;
