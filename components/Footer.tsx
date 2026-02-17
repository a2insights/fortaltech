
import React from 'react';
import { Cpu, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, view: string, hash?: string) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(view);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a2b4b] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#aa1a20] rounded flex items-center justify-center transform rotate-45">
                <Cpu className="text-white w-5 h-5 transform -rotate-45" />
              </div>
              <span className="text-xl font-black">FORTALTECH</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Líderes em soluções de Automação Inteligente e Infraestrutura Técnica na Região Metropolitana de Fortaleza. Unidade Lab de Software de alto nível.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Serviços</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#" onClick={(e) => handleLink(e, 'service-automacao-residencial-smart-home')} className="hover:text-[#aa1a20] transition-colors">Automação Smart Home</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'service-automacao-comercial-e-predial')} className="hover:text-[#aa1a20] transition-colors">Automação Predial</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'service-seguranca-eletronica-cftv')} className="hover:text-[#aa1a20] transition-colors">Segurança & CFTV</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'service-suporte-ti-empresarial')} className="hover:text-[#aa1a20] transition-colors">Suporte de TI Regional</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'service-telemetria-e-rastreamento')} className="hover:text-[#aa1a20] transition-colors">Telemetria de Frotas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Insights</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium">
              <li><a href="#" onClick={(e) => handleLink(e, 'blog')} className="hover:text-[#aa1a20] transition-colors">Blog FortalTech</a></li>
              <li>
                <a 
                  href="https://a2insights.com.br/#contact" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#aa1a20] font-bold flex items-center transition-colors"
                >
                  A2insights Lab <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li><a href="#" onClick={(e) => handleLink(e, 'systems')} className="hover:text-[#aa1a20] transition-colors">Sistemas Customizados</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'consultancy')} className="hover:text-[#aa1a20] transition-colors">Consultoria em TI</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'service-sistemas-pdv-varejo')} className="hover:text-[#aa1a20] transition-colors">Sistemas Comerciais (PDV)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-white/10 pb-2">Empresa</h4>
            <ul className="space-y-4 text-blue-100 text-sm font-medium mb-6">
              <li><a href="#" onClick={(e) => handleLink(e, 'about')} className="hover:text-[#aa1a20] transition-colors">Quem Somos</a></li>
              <li><a href="#contact" onClick={(e) => handleLink(e, 'home', '#contact')} className="hover:text-[#aa1a20] transition-colors">Onde Atendemos</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'careers')} className="hover:text-[#aa1a20] transition-colors">Trabalhe Conosco</a></li>
            </ul>
            <p className="text-blue-200 text-[10px] leading-relaxed mb-4 uppercase tracking-widest font-bold opacity-60">
              FORTALTECH SOLUCOES TECNOLOGICAS LTDA<br />
              CNPJ: 65.084.539/0001-11
            </p>
            <p className="text-blue-200 text-[10px] font-bold opacity-60">
              AV. YOLANDA PONTES VIDAL QUEIROZ, 57<br />
              SALA 220, MARACANAU - CE
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-blue-200/50">
          <p>© {new Date().getFullYear()} FortalTech Soluções Tecnológicas LTDA. Maracanaú, Ceará.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" onClick={(e) => handleLink(e, 'privacy')} className="hover:text-white">Privacidade</a>
            <a href="#" onClick={(e) => handleLink(e, 'terms')} className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
