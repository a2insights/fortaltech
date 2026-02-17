
import React from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  MapPin,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
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
      {/* Hero Section */}
      <section className="bg-[#395fa3] pt-40 pb-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/20">
            <Users className="w-4 h-4" />
            <span>Nossa História & Propósito</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">QUEM SOMOS.</h1>
          <p className="text-xl text-blue-50/70 leading-relaxed max-w-3xl mx-auto font-light">
            A FORTALTECH SOLUÇÕES TECNOLÓGICAS LTDA nasceu da paixão por inovação e do compromisso com a excelência técnica na Região Metropolitana de Fortaleza.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[150px]"></div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipe FortalTech" 
                  className="rounded-[3rem] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#aa1a20] rounded-[2rem] -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-[#395fa3] mb-6">Expertise que gera confiança.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fundada em Maracanaú, a FortalTech consolidou-se como referência em infraestrutura de TI e automação inteligente. Nossa jornada é marcada pela busca incessante por soluções que realmente simplificam a vida de nossos clientes, seja em ambientes residenciais de alto padrão ou em operações comerciais críticas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Acreditamos que a tecnologia deve ser invisível, porém onipresente, garantindo segurança, conforto e eficiência sem complicação.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#395fa3] rounded-2xl flex items-center justify-center font-black">100%</div>
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Foco no Cliente</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-50 text-[#aa1a20] rounded-2xl flex items-center justify-center font-black">RMF</div>
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Atendimento Regional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVV Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#395fa3] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#aa1a20] transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#395fa3] mb-4 uppercase tracking-tight">Missão</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Prover soluções tecnológicas inovadoras e de alta confiabilidade, integrando infraestrutura física e inteligência digital para impulsionar o sucesso de nossos parceiros e o bem-estar de nossos clientes.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#395fa3] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#aa1a20] transition-colors">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#395fa3] mb-4 uppercase tracking-tight">Visão</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ser a maior e mais respeitada empresa de integração tecnológica do Ceará, reconhecida pela excelência de campo, agilidade no suporte e capacidade de inovação via nosso laboratório de software.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#395fa3] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#aa1a20] transition-colors">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#395fa3] mb-4 uppercase tracking-tight">Valores</h3>
              <ul className="space-y-2 text-gray-500 text-sm leading-relaxed">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#aa1a20] mr-2" /> Ética e Transparência</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#aa1a20] mr-2" /> Inovação Constante</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#aa1a20] mr-2" /> Rigor Técnico</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#aa1a20] mr-2" /> Foco em Resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0a1628] rounded-[4rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="lg:w-1/2 relative z-10">
              <h3 className="text-3xl font-black mb-8">Dados Corporativos</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-[#aa1a20]" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-1">Razão Social</h4>
                    <p className="text-lg font-bold">FORTALTECH SOLUCOES TECNOLOGICAS LTDA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#395fa3]" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-1">CNPJ</h4>
                    <p className="text-lg font-bold">65.084.539/0001-11</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#aa1a20]" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-1">Sede Social</h4>
                    <p className="text-lg font-bold">Maracanaú - Ceará - Região Metropolitana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <h4 className="text-4xl font-black mb-6 leading-tight">Quer fazer parte da nossa história?</h4>
              <p className="text-blue-100/60 mb-10 text-lg">Estamos sempre em busca de talentos técnicos e mentes inovadoras.</p>
              <button 
                onClick={scrollToContact}
                className="bg-[#aa1a20] text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-white hover:text-[#0a1628] transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto lg:mx-0 group"
              >
                Trabalhe Conosco <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#395fa3]/10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
