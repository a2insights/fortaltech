
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  FlaskConical, 
  ArrowRight, 
  Play, 
  Pause 
} from 'lucide-react';
import { SOFTWARE_SYSTEMS } from '../constants';

interface SoftwareCarouselProps {
  onNavigate: (view: string) => void;
}

const SoftwareCarousel: React.FC<SoftwareCarouselProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollTo = 0;
      } else if (direction === 'left' && scrollLeft <= 10) {
        scrollTo = scrollWidth;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      scroll('right');
    }, 3500);
  }, [scroll]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleManualScroll = (direction: 'left' | 'right') => {
    scroll(direction);
    if (isPlaying) {
      startAutoPlay();
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }, 150);
  };

  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(57,95,163,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#aa1a20]/10 text-[#aa1a20] px-4 py-2 rounded-full mb-6 border border-[#aa1a20]/20">
              <FlaskConical className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Inteligência Digital & Labs</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Soluções de Software <br />
              <span className="text-[#395fa3]">& Infraestrutura.</span>
            </h2>
            <p className="text-blue-100/60 text-lg mt-6 max-w-2xl leading-relaxed font-light">
              Codificamos a inteligência que escala sua operação. Do PDV ágil à automação de faturamento, entregamos o cérebro que sua infraestrutura física exige.
            </p>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-sm">
            <button 
              onClick={togglePlay}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                isPlaying 
                ? 'bg-[#aa1a20] text-white shadow-[0_0_20px_rgba(170,26,32,0.4)]' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>
            <button 
              onClick={() => handleManualScroll('left')}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#395fa3] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleManualScroll('right')}
              className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#395fa3] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SOFTWARE_SYSTEMS.map((system, idx) => (
            <div 
              key={idx} 
              className="min-w-[320px] md:min-w-[420px] snap-center group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] h-full flex flex-col hover:border-[#395fa3]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(57,95,163,0.1)] relative overflow-hidden">
                <div className="w-16 h-16 bg-gradient-to-br from-[#395fa3] to-[#1a2b4b] rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {system.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#aa1a20] transition-colors">{system.title}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {system.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {system.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-white/5 text-white/40 px-3 py-1.5 rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#contact" 
                  onClick={scrollToContact}
                  className="w-fit flex items-center space-x-2 text-[#aa1a20] font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors group/btn"
                >
                  <span>Solicitar Projeto</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareCarousel;
