import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
  useInView,
} from "framer-motion";
import {
  AlertTriangle,
  Skull,
  WifiOff,
  Server,
  Activity,
  Zap,
  Cpu,
  TrendingUp,
  Lock,
  Search,
  ChevronRight,
  Database,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const StorytellingScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const isInView = useInView(containerRef, { amount: 0.05 });

  const storyAtos = [
    {
      id: "chaos",
      icon: <AlertTriangle className="w-16 h-16 text-yellow-500" />,
      title: "O Caos Digital",
      subtitle: "Infraestruturas que nasceram sem planejamento.",
      description:
        "Cabos emaranhados e redes instáveis. Na RMF, o amadorismo tecnológico é o maior gargalo das empresas que tentam escalar, gerando custos invisíveis e frustração diária.",
      bg: "bg-[#0a0f1d]",
      accent: "border-yellow-500/20",
      type: "problem",
    },
    {
      id: "security",
      icon: <Skull className="w-16 h-16 text-red-600" />,
      title: "A Brecha Exposta",
      subtitle: "Dados que valem fortunas, protegidos por nada.",
      description:
        "Sem governança, seus dados estão a um clique de distância de criminosos cibernéticos. O ransomware não escolhe tamanho de empresa, escolhe as mais despreparadas.",
      bg: "bg-[#0f0505]",
      accent: "border-red-600/20",
      type: "problem",
    },
    {
      id: "down",
      icon: <WifiOff className="w-16 h-16 text-gray-500" />,
      title: "O Custo do Silêncio",
      subtitle: "Downtime é o lucro escorrendo pelo ralo.",
      description:
        "Um software mal gerido ou uma rede que cai interrompe o fluxo de vendas e destrói a produtividade. Cada minuto de tela travada é uma fatia de mercado perdida.",
      bg: "bg-[#000000]",
      accent: "border-gray-500/20",
      type: "problem",
    },
    {
      id: "pivot",
      icon: <Zap className="w-16 h-16 text-[#aa1a20]" />,
      title: "O Despertar",
      subtitle: "Basta de remendos tecnológicos.",
      description:
        "É aqui que a história muda. Você decide que a tecnologia será o motor do seu crescimento, não o freio. A FortalTech assume o comando para reescrever seu futuro digital.",
      bg: "bg-gradient-to-b from-[#000] to-[#0a1628]",
      accent: "border-[#aa1a20]/30",
      type: "pivot",
    },
    {
      id: "governance",
      icon: <Database className="w-16 h-16 text-[#395fa3]" />,
      title: "Governança Total",
      subtitle: "Dados organizados, empresa blindada.",
      description:
        "Limpamos o caos. Implementamos níveis de acesso, políticas LGPD e firewalls de próxima geração. Seus dados deixam de ser um risco para se tornarem inteligência pura.",
      bg: "bg-[#0a1628]",
      accent: "border-[#395fa3]/20",
      type: "solution",
    },
    {
      id: "iron-infra",
      icon: <Server className="w-16 h-16 text-[#aa1a20]" />,
      title: "Base de Ferro",
      subtitle: "Infraestrutura certificada para o amanhã.",
      description:
        "Nossa engenharia de campo entrega racks impecáveis, Wi-Fi 6 industrial e redes redundantes. Uma fundação sólida para que seus sistemas nunca parem de rodar.",
      bg: "bg-white",
      darkText: true,
      accent: "border-[#aa1a20]/10",
      type: "solution",
    },
    {
      id: "lab-brain",
      icon: <Cpu className="w-16 h-16 text-[#395fa3]" />,
      title: "Cérebro Digital",
      subtitle: "A2insights Lab criando o impossível.",
      description:
        "Software sob medida que resolve seus problemas específicos. Nosso laboratório codifica sua vantagem competitiva, integrando hardware e processos em uma interface fluida.",
      bg: "bg-gray-50",
      darkText: true,
      accent: "border-[#395fa3]/10",
      type: "solution",
    },
    {
      id: "insight",
      icon: <Search className="w-16 h-16 text-[#aa1a20]" />,
      title: "Clareza Operacional",
      subtitle: "Decisões baseadas em fatos, não em sorte.",
      description:
        "Dashboards de telemetria e BI que mostram onde está o lucro. Monitore sua frota e seu consumo de energia em tempo real. A luz definitiva sobre sua gestão.",
      bg: "bg-[#0a1628]",
      accent: "border-[#aa1a20]/30",
      type: "solution",
    },
    {
      id: "resilience",
      icon: <Activity className="w-16 h-16 text-green-500" />,
      title: "Resiliência Máxima",
      subtitle: "99.9% de disponibilidade. Paz absoluta.",
      description:
        "Você foca no seu negócio, nós cuidamos do resto. Monitoramento proativo 24/7. Problemas são mitigados antes mesmo de serem percebidos pela sua equipe.",
      bg: "bg-[#f8fafc]",
      darkText: true,
      accent: "border-green-500/10",
      type: "result",
    },
    {
      id: "future",
      icon: <TrendingUp className="w-16 h-16 text-[#395fa3]" />,
      title: "O Novo Amanhã",
      subtitle: "FortalTech: Sua parceira estratégica na RMF.",
      description:
        "Não entregamos apenas cabos e código; entregamos liberdade para crescer. Estamos comprometidos em ser a força tecnológica que move o Ceará para o futuro.",
      bg: "bg-white",
      darkText: true,
      isLast: true,
      accent: "border-[#395fa3]/20",
      type: "result",
    },
  ];

  // Lógica de Scroll Spy usando IntersectionObserver para precisão absoluta (Bidirecional)
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Aumentamos a margem para detectar a seção que ocupa o centro da tela (50%)
      // Isso garante que ao subir, a seção anterior seja ativada assim que "descer" para o centro.
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = storyAtos.findIndex(
            (ato) => `story-${ato.id}` === entry.target.id,
          );
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    storyAtos.forEach((ato) => {
      const el = document.getElementById(`story-${ato.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (id: string) => {
    const el = document.getElementById(`story-${id}`);
    if (el) {
      const top = el.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Indicador Lateral de Navegação (Menu Scroll Spy) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 20,
          pointerEvents: isInView ? "auto" : "none",
        }}
        transition={{ duration: 0.4 }}
        className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[110] hidden lg:flex flex-col gap-5"
      >
        {storyAtos.map((ato, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={ato.id}
              className="group relative flex items-center justify-end"
            >
              <span
                className={`absolute right-10 text-[10px] font-black uppercase tracking-widest text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none whitespace-nowrap ${isActive ? "bg-[#aa1a20]" : "bg-[#395fa3]"}`}
              >
                {ato.title}
              </span>
              <button
                onClick={() => scrollToStep(ato.id)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 transform ${
                  isActive
                    ? "bg-[#aa1a20] border-[#aa1a20] scale-150 shadow-[0_0_15px_rgba(170,26,32,0.6)]"
                    : "bg-white/20 border-[#395fa3] hover:border-[#aa1a20] group-hover:scale-125"
                }`}
                aria-label={`Ir para ${ato.title}`}
              />
            </div>
          );
        })}
      </motion.div>

      <div className="flex flex-col">
        {storyAtos.map((ato, idx) => (
          <SectionWrapper key={ato.id} ato={ato} index={idx} />
        ))}
      </div>
    </div>
  );
};

interface SectionWrapperProps {
  ato: any;
  index: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ ato, index }) => {
  const sectionRef = useRef(null);

  // Offset simplificado para cada seção individual
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Opacidade e escala sem fade-out na última seção
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ato.isLast ? [0, 1, 1, 1] : [0, 1, 1, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ato.isLast ? [0.95, 1, 1, 1] : [0.95, 1, 1, 0.95],
  );

  const yTranslate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ato.isLast ? [20, 0, 0, 0] : [20, 0, 0, -20],
  );

  return (
    <section
      ref={sectionRef}
      id={`story-${ato.id}`}
      data-header-theme={ato.darkText ? "light" : "dark"}
      className={`min-h-screen flex items-center justify-center sticky top-0 overflow-hidden ${ato.bg} ${ato.darkText ? "text-slate-950" : "text-white"}`}
    >
      {/* Elementos Parallax de Fundo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [0.01, ato.darkText ? 0.03 : 0.06, 0.01],
          ),
          filter: "blur(100px)",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-current rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-current rounded-full"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          style={{ opacity, scale, y: yTranslate }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-28"
        >
          {/* Lado Visual */}
          <div className="w-full md:w-1/3 flex justify-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className={`w-40 h-40 md:w-64 md:h-64 rounded-[3.5rem] bg-current/5 border-2 ${ato.accent} backdrop-blur-md flex items-center justify-center shadow-2xl relative group`}
            >
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                {ato.icon}
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-current/20 rounded-[3.5rem]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Lado do Conteúdo */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10% 0px" }}
            >
              <motion.span
                variants={itemVariants}
                className={`text-[10px] font-black uppercase tracking-[0.5em] ${ato.darkText ? "text-slate-500" : "text-white/30"} mb-6 block`}
              >
                ATO 0{index + 1} &mdash; {ato.type.toUpperCase()}
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-7xl font-black mb-5 leading-none tracking-tighter uppercase"
              >
                {ato.title}
              </motion.h2>

              <motion.h3
                variants={itemVariants}
                className={`text-xl md:text-2xl font-bold ${ato.darkText ? "text-[#aa1a20]" : "text-blue-200/40"} mb-8 italic max-w-xl`}
              >
                "{ato.subtitle}"
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg leading-relaxed ${ato.darkText ? "text-slate-900" : "text-white/80"} max-w-xl mb-10 font-bold`}
              >
                {ato.description}
              </motion.p>

              {ato.isLast && (
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-center gap-5"
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto bg-[#aa1a20] text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-[#395fa3] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
                  >
                    Mudar minha história{" "}
                    <Zap className="ml-3 w-5 h-5 group-hover:animate-pulse" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {ato.type === "problem" && (
        <div className="absolute inset-0 glitch-bg opacity-5 mix-blend-overlay pointer-events-none" />
      )}

      <div
        className={`absolute -bottom-12 -right-12 text-[22vw] font-black opacity-[0.02] select-none leading-none ${ato.darkText ? "text-slate-600" : "text-white"}`}
      >
        0{index + 1}
      </div>
    </section>
  );
};

export default StorytellingScroll;
