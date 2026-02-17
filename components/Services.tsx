import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SERVICES } from '../constants';
import {
  ShieldCheck,
  ChevronRight,
  Settings,
  ArrowRight,
  X,
  Zap,
  Cpu,
  CheckCircle2,
  ChevronLeft,
  Play,
  Pause,
  FileDown,
  Loader2,
} from 'lucide-react';
import { exportCatalogToPDF } from './CatalogExporter';

interface ServicesProps {
  onNavigate: (view: string) => void;
}

const AUTO_PLAY_DURATION = 8000; // 8 segundos por item

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const selectedService = activeIndex !== null ? SERVICES[activeIndex] : null;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % SERVICES.length : null,
    );
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev !== null ? (prev - 1 + SERVICES.length) % SERVICES.length : null,
    );
    setProgress(0);
  }, []);

  // Timer para o Auto-play
  useEffect(() => {
    if (activeIndex !== null && isPlaying) {
      const step = 100; // atualizar a cada 100ms
      const increment = (step / AUTO_PLAY_DURATION) * 100;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + increment;
        });
      }, step);
    } else {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [activeIndex, isPlaying, handleNext]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex(null);
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleFullDetail = (slug: string) => {
    setActiveIndex(null);
    onNavigate(`service-${slug}`);
  };

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    await exportCatalogToPDF();
    setIsExporting(false);
  };

  return (
    <section
      id="services"
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#395fa3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#aa1a20]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              <Settings className="w-4 h-4 animate-spin-slow" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">
                Expertise de Campo
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#395fa3] mb-8 leading-tight">
              Soluções Completas <br />
              <span className="text-[#aa1a20]">Para seu Negócio.</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              Enquanto nossa divisão de software cuida da inteligência digital,
              nossa equipe de campo garante a excelência na infraestrutura
              física e suporte vital.
            </p>

            {/* Botão de Exportação para PDF */}
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="inline-flex items-center space-x-3 bg-white border border-gray-200 text-[#395fa3] px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#395fa3] hover:text-white hover:border-[#395fa3] transition-all shadow-sm hover:shadow-xl disabled:opacity-50 group"
            >
              {isExporting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <FileDown className="w-5 h-5 group-hover:bounce transition-transform" />
              )}
              <span>
                {isExporting
                  ? 'Gerando Documento...'
                  : 'Baixar Catálogo Completo (PDF)'}
              </span>
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center space-x-4 max-w-xs">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-gray-900 leading-tight">
                  99.8% Uptime
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Disponibilidade Média
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              onClick={() => openModal(idx)}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative flex flex-col h-full overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[5rem] -z-0 group-hover:bg-[#395fa3]/5 transition-colors"></div>

              <div className="w-20 h-20 bg-blue-50 text-[#395fa3] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#395fa3] group-hover:text-white transition-all duration-500 shadow-inner relative z-10">
                {service.icon}
              </div>

              <h4 className="text-2xl font-black text-[#395fa3] mb-4 group-hover:text-[#aa1a20] transition-colors relative z-10">
                {service.title}
              </h4>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm flex-grow relative z-10">
                {service.description}
              </p>

              <div className="space-y-3 mb-10 relative z-10">
                {service.items.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-[11px] font-bold text-gray-700 uppercase tracking-tight"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-[#aa1a20]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="w-full bg-gray-50 group-hover:bg-[#aa1a20] group-hover:text-white text-[#395fa3] font-black py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 text-sm relative z-10 border border-gray-100 group-hover:border-transparent group-hover:shadow-lg">
                <span>Ver Resumo Interativo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Lab Highlight CTA */}
        <div className="mt-32 bg-[#0a1628] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[#aa1a20] px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>Unidade de Inovação Digital</span>
              </div>
              <h4 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Precisa de software de alta complexidade?
              </h4>
              <p className="text-blue-100/60 text-xl leading-relaxed mb-10">
                Desenvolvemos o ecossistema digital que codifica a sua vantagem
                competitiva. Especialistas em soluções customizadas.
              </p>
            </div>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="bg-[#aa1a20] hover:bg-white hover:text-[#0a1628] text-white px-12 py-7 rounded-[2rem] font-black text-xl transition-all shadow-[0_20px_60px_rgba(170,26,32,0.3)] shrink-0 flex items-center group"
            >
              Falar com o Laboratório{' '}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#395fa3]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>

      {/* INTERACTIVE SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#0a1628]/90 backdrop-blur-xl animate-in fade-in duration-300">
          {/* Main Modal Container - Updated with max-w-7xl for more width */}
          <div className="bg-white w-full max-w-7xl rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col h-[85vh]">
            {/* Progress Bar Header */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 z-50">
              <div
                className="h-full bg-[#aa1a20] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Modal Header Controls */}
            <div
              className={`p-6 md:p-8 flex justify-between items-center border-b border-gray-100 ${selectedService.slug.includes('infra') ? 'bg-blue-50/30' : 'bg-red-50/30'}`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlaying ? 'bg-[#aa1a20] text-white' : 'bg-white text-[#395fa3] border border-gray-200 shadow-sm'}`}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>
                <div className="h-6 w-[1px] bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-[#aa1a20]">
                    {React.cloneElement(
                      selectedService.icon as React.ReactElement<any>,
                      { className: 'w-6 h-6' },
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#395fa3] tracking-tighter">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 mr-4">
                  {SERVICES.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-[#aa1a20]' : 'w-2 bg-gray-200'}`}
                    ></div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="p-3 bg-white rounded-full text-gray-400 hover:text-[#aa1a20] hover:shadow-lg transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content Area with Navigation Arrows */}
            <div className="flex-grow overflow-hidden relative flex items-center">
              {/* Navigation Arrows (Desktop) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-20 p-4 bg-white/80 hover:bg-white text-[#395fa3] rounded-full shadow-xl hover:scale-110 transition-all hidden md:flex"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 z-20 p-4 bg-white/80 hover:bg-white text-[#395fa3] rounded-full shadow-xl hover:scale-110 transition-all hidden md:flex"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Dynamic Content */}
              <div className="w-full h-full overflow-y-auto p-8 md:p-16 custom-scrollbar animate-in slide-in-from-right-10 duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-10">
                    <div>
                      <h5 className="font-black text-[#395fa3] uppercase text-xs tracking-[0.3em] mb-4 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-[#aa1a20]" /> Missão
                        Técnica
                      </h5>
                      <p className="text-gray-600 leading-relaxed text-xl md:text-2xl lg:text-3xl font-light">
                        {selectedService.fullDescription.split('.')[0]}. Atuamos
                        com foco em disponibilidade e segurança máxima.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h5 className="font-black text-[#395fa3] uppercase text-[10px] tracking-widest mb-2 border-l-2 border-[#aa1a20] pl-2">
                          Benefícios
                        </h5>
                        <ul className="space-y-3">
                          {selectedService.benefits
                            .slice(0, 3)
                            .map((benefit, i) => (
                              <li
                                key={i}
                                className="flex items-start text-xs text-gray-600 font-bold uppercase tracking-tight"
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                {benefit}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h5 className="font-black text-[#395fa3] uppercase text-[10px] tracking-widest mb-2 border-l-2 border-[#aa1a20] pl-2">
                          Aplicações
                        </h5>
                        <ul className="space-y-3">
                          {selectedService.items.slice(0, 3).map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start text-xs text-gray-500 font-medium"
                            >
                              <ChevronRight className="w-3 h-3 text-[#aa1a20] mr-2 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#395fa3]/5 to-[#aa1a20]/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform"></div>
                    <div className="relative bg-gray-50 p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 h-full">
                      <h5 className="font-black text-[#395fa3] uppercase text-[10px] tracking-[0.3em] mb-8 flex items-center">
                        <Cpu className="w-4 h-4 mr-2 text-[#aa1a20]" />{' '}
                        Especificações Certificadas
                      </h5>
                      <div className="space-y-6">
                        {selectedService.technicalSpecs
                          .slice(0, 4)
                          .map((spec, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between py-4 border-b border-gray-200"
                            >
                              <span className="text-gray-500 font-bold text-xs uppercase tracking-tight">
                                {spec.split(':')[0]}
                              </span>
                              <span className="text-[#395fa3] font-black text-xs">
                                {spec.split(':')[1] || 'ISO COMPLIANT'}
                              </span>
                            </div>
                          ))}
                      </div>
                      <div className="mt-12 p-6 bg-white rounded-3xl border border-blue-100 flex items-center justify-center text-[10px] font-black text-[#395fa3] uppercase tracking-widest shadow-sm">
                        <ShieldCheck className="w-5 h-5 mr-3 text-green-500" />{' '}
                        Ativo em Maracanaú & Grande Fortaleza
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer (CTAs) */}
            <div className="p-8 md:p-12 bg-gray-50 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={scrollToContact}
                  className="flex-1 md:flex-none bg-[#aa1a20] text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-[#395fa3] transition-all shadow-xl flex items-center justify-center group"
                >
                  Solicitar Diagnóstico{' '}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Mobile Navigation Controls */}
                <div className="flex md:hidden items-center gap-6">
                  <button
                    onClick={handlePrev}
                    className="p-3 bg-white border border-gray-200 rounded-xl"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#395fa3]" />
                  </button>
                  <span className="text-xs font-black text-gray-400">
                    {activeIndex! + 1} / {SERVICES.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-3 bg-white border border-gray-200 rounded-xl"
                  >
                    <ChevronRight className="w-6 h-6 text-[#395fa3]" />
                  </button>
                </div>

                <button
                  onClick={() => handleFullDetail(selectedService.slug)}
                  className="text-[#395fa3] font-black uppercase tracking-[0.2em] text-[10px] hover:text-[#aa1a20] transition-colors flex items-center group py-2"
                >
                  Documentação Técnica Completa{' '}
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
