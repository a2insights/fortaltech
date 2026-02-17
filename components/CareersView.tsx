
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { 
  Wrench, 
  Code2, 
  Cpu, 
  Wifi, 
  Rocket,
  ShieldCheck,
  Gauge,
  ArrowRight,
  Monitor,
  FileText,
  Upload,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  Search,
  Sparkles,
  Zap,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Target,
  Heart
} from 'lucide-react';

// Configuração técnica das vagas para a IA e para a listagem visual
const CAREER_POSITIONS = [
  {
    id: "auto",
    icon: <Zap />,
    title: "Especialista em Automação",
    department: "Engenharia de Campo",
    description: "Responsável pelo setup e programação de sistemas de Smart Home (Luz, Ar, Som) e Automação Predial.",
    skills: ["Zigbee", "KNX", "DALI", "Elétrica"],
    level: "Especialista"
  },
  {
    id: "dev",
    icon: <Code2 />,
    title: "Dev Full Stack (A2insights)",
    department: "Software Lab",
    description: "Desenvolvimento de dashboards de BI e sistemas PDV customizados no nosso laboratório de inovação.",
    skills: ["React", "Node.js", "SQL", "AWS"],
    level: "Engenharia"
  },
  {
    id: "net",
    icon: <Wifi />,
    title: "Técnico de Redes & Wi-Fi",
    department: "Infraestrutura",
    description: "Implantação de cabeamento estruturado Cat6 e redes Mesh de alta densidade para varejo e PMEs.",
    skills: ["Certificação Fluke", "Mikrotik", "Ubiquiti"],
    level: "Técnico"
  },
  {
    id: "tele",
    icon: <Gauge />,
    title: "Analista de Telemetria",
    department: "Logística Digital",
    description: "Monitoramento de frotas e análise de dados para otimização de combustível e segurança veicular.",
    skills: ["Análise de Dados", "Sistemas GPS", "Excel Avançado"],
    level: "Especialista"
  },
  {
    id: "sec",
    icon: <ShieldCheck />,
    title: "Instalador de CFTV IA",
    department: "Segurança",
    description: "Montagem de sistemas de segurança eletrônica com análise de vídeo e inteligência artificial.",
    skills: ["Câmeras IP", "NVR", "Inteligência Artificial"],
    level: "Técnico"
  },
  {
    id: "sales",
    icon: <Monitor />,
    title: "Consultor Técnico Comercial",
    department: "Estratégia",
    description: "Diagnóstico técnico inicial para novos clientes e desenho de orçamentos estratégicos.",
    skills: ["Vendas Consultivas", "Projetos TI", "Negociação"],
    level: "Especialista"
  }
];

const CareersView: React.FC<{ onNavigate: (v: string) => void }> = ({ onNavigate }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{ suggestedRole: string; fitReason: string } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsAnalyzing(true);
    setError(null);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async () => {
        const base64Data = (reader.result as string).split(',')[1];
        const mimeType = selectedFile.type;

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `Você é um Recrutador Técnico Sênior da FortalTech (Fortaleza/Ceará).
        Analise o currículo anexo e determine qual destas vagas melhor se encaixa no perfil do candidato:
        ${CAREER_POSITIONS.map(p => p.title).join(', ')}.
        
        Sua resposta deve ser estritamente em JSON no seguinte formato:
        {
          "suggestedRole": "Nome Exato da Vaga",
          "fitReason": "Um resumo amigável de até 2 frases explicando o motivo do match técnico ou comportamental."
        }`;

        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [
            {
              parts: [
                { inlineData: { data: base64Data, mimeType: mimeType } },
                { text: prompt }
              ]
            }
          ]
        });

        const text = response.text || '{}';
        const cleanedText = text.replace(/```json|```/g, '').trim();
        const json = JSON.parse(cleanedText);
        
        setAnalysisResult(json);
        setIsAnalyzing(false);
        // Pequeno delay para o usuário ver o match antes de rolar
        setTimeout(scrollToForm, 1000);
      };
    } catch (err) {
      console.error("Erro na leitura da IA:", err);
      setError("Não conseguimos processar o arquivo automaticamente. Por favor, preencha o formulário abaixo manualmente.");
      setIsAnalyzing(false);
      scrollToForm();
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20 px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md w-full p-10 md:p-14 text-center bg-gray-50 rounded-[4rem] border border-green-100 shadow-2xl">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"><CheckCircle2 className="w-12 h-12" /></div>
          <h2 className="text-3xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter">Candidatura Concluída!</h2>
          <p className="text-gray-500 mb-10 font-medium">Nosso time técnico do A2insights Lab e da Engenharia de Campo analisará seu perfil com prioridade. Entraremos em contato via e-mail ou WhatsApp.</p>
          <button onClick={() => onNavigate('home')} className="w-full bg-[#395fa3] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#aa1a20] transition-all">Voltar para Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden selection:bg-[#aa1a20] selection:text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#395fa3]/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADER & MANIFESTO */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            <Rocket className="w-4 h-4 animate-bounce" />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">Trabalhe Conosco na RMF</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#395fa3] mb-8 leading-[0.85] tracking-tighter uppercase">
            CODIFIQUE O SEU <br />
            <span className="text-[#aa1a20]">FUTURO AQUI.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Na FortalTech, a engenharia de campo e o software lab andam juntos. Buscamos profissionais que queiram liderar a revolução tecnológica no Ceará.
          </p>
        </div>

        {/* CULTURE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <GraduationCap />, t: "Educação Técnica", d: "Financiamos certificações Mikrotik, Cisco, Zigbee e treinamentos em stacks modernas." },
            { icon: <Zap />, t: "Laboratório de Inovação", d: "Espaço aberto no A2insights Lab para prototipagem e desenvolvimento de sistemas reais." },
            { icon: <Heart />, t: "Ecossistema Regional", d: "Trabalhe no polo que mais cresce na RMF, com flexibilidade e impacto real." }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-[#395fa3]/30 transition-all group">
              <div className="w-12 h-12 text-[#aa1a20] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-black text-[#395fa3] uppercase text-sm mb-4 tracking-widest">{item.t}</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        {/* PROFESSIONAL ROLES GRID */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
               <h2 className="text-3xl md:text-4xl font-black text-[#395fa3] uppercase tracking-tighter">Vagas em Destaque</h2>
               <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Conheça onde você pode atuar na FortalTech</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#aa1a20] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#395fa3] transition-all flex items-center shadow-lg"
              >
                <Upload className="w-4 h-4 mr-2" /> Ler meu Currículo com IA
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREER_POSITIONS.map((career, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full relative overflow-hidden ${
                  analysisResult?.suggestedRole === career.title ? 'ring-4 ring-[#aa1a20]/40 border-[#aa1a20] shadow-[#aa1a20]/10' : ''
                }`}
              >
                {analysisResult?.suggestedRole === career.title && (
                  <div className="absolute top-6 right-6 bg-[#aa1a20] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center animate-pulse z-20">
                    <Sparkles className="w-3 h-3 mr-1.5" /> IA MATCH!
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${analysisResult?.suggestedRole === career.title ? 'bg-[#aa1a20] text-white' : 'bg-blue-50 text-[#395fa3]'} group-hover:scale-110 transition-all`}>
                  {React.cloneElement(career.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${analysisResult?.suggestedRole === career.title ? 'border-[#aa1a20] text-[#aa1a20]' : 'border-[#395fa3] text-[#395fa3]'}`}>{career.level}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{career.department}</span>
                </div>
                <h3 className="text-2xl font-black text-[#395fa3] mb-4 group-hover:text-[#aa1a20] transition-colors uppercase tracking-tighter leading-none">{career.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">{career.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {career.skills.map(skill => (
                      <span key={skill} className="text-[9px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{skill}</span>
                    ))}
                  </div>
                  <button onClick={scrollToForm} className={`w-full py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    analysisResult?.suggestedRole === career.title ? 'bg-[#aa1a20] border-[#aa1a20] text-white' : 'border-gray-100 text-gray-400 group-hover:bg-[#395fa3] group-hover:text-white group-hover:border-transparent'
                  }`}>
                    Preencher Dados
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE APPLICATION FORM */}
        <div ref={formRef} className="pt-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Step 1: AI Resume Reading Visual Card */}
            <div className="w-full lg:w-1/2">
              <div className="bg-[#0a1628] rounded-[3.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-[#aa1a20] rounded-xl flex items-center justify-center shadow-lg"><FileText className="w-7 h-7" /></div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">Análise <br /><span className="text-[#aa1a20]">Inteligente</span></h3>
                  </div>
                  <p className="text-blue-100/60 text-sm mb-10 font-medium">Faça o upload do seu currículo e deixe o Gemini AI sugerir onde você mais brilhará na FortalTech.</p>
                  
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="group cursor-pointer border-2 border-dashed border-white/10 hover:border-[#aa1a20] transition-all rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center bg-white/5"
                  >
                    <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileUpload} />
                    {isAnalyzing ? (
                      <div className="flex flex-col items-center">
                        <Loader2 className="w-14 h-14 text-[#aa1a20] animate-spin mb-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Lendo Experiências Técnicas...</span>
                      </div>
                    ) : file ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-14 h-14 text-green-500 mb-4" />
                        <span className="text-xs font-black uppercase tracking-widest text-green-500">Perfil Analisado</span>
                        <span className="text-[10px] text-white/40 mt-1">{file.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-white/20 mb-6 group-hover:text-[#aa1a20] transition-all" />
                        <h4 className="font-bold text-xl mb-2">Subir Currículo</h4>
                        <p className="text-[10px] text-blue-100/40 uppercase tracking-widest">PDF ou Foto do CV (Máx 10MB)</p>
                      </>
                    )}
                  </div>

                  <AnimatePresence>
                    {analysisResult && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 p-8 bg-white/5 border border-[#aa1a20]/30 rounded-3xl shadow-inner shadow-[#aa1a20]/10">
                        <div className="flex items-center text-[#aa1a20] mb-4">
                          <Sparkles className="w-6 h-6 mr-3" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Feedback do Recrutador Gemini</span>
                        </div>
                        <h4 className="text-xl font-black text-white mb-2 uppercase italic leading-none">{analysisResult.suggestedRole}</h4>
                        <p className="text-sm text-blue-100/70 leading-relaxed font-medium italic">"{analysisResult.fitReason}"</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && <div className="mt-6 flex items-center text-red-400 text-xs font-bold uppercase tracking-widest bg-red-400/10 p-5 rounded-2xl"><AlertCircle className="w-5 h-5 mr-3" /> {error}</div>}
                </div>
              </div>
            </div>

            {/* Step 2: Form Interaction */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-gray-100">
                 <h3 className="text-3xl font-black text-[#395fa3] mb-10 uppercase tracking-tighter flex items-center leading-none">
                   <Target className="mr-4 text-[#aa1a20] w-10 h-10" /> Registrar <br /> Candidatura
                 </h3>

                 <form onSubmit={handleFinalSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Nome Completo</label>
                        <input required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-medium text-gray-700" placeholder="Nome do Candidato" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">E-mail de Contato</label>
                        <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-medium text-gray-700" placeholder="email@fortaltech.com" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Vaga de Interesse (Detectada via IA)</label>
                      <div className="relative">
                        <select 
                          required 
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-black text-[#395fa3] appearance-none"
                          value={analysisResult?.suggestedRole || ""}
                          onChange={(e) => setAnalysisResult(prev => prev ? {...prev, suggestedRole: e.target.value} : {suggestedRole: e.target.value, fitReason: 'Vaga selecionada manualmente.'})}
                        >
                          <option value="">Selecione uma vaga...</option>
                          {CAREER_POSITIONS.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                        </select>
                        <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 rotate-90" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 flex items-center"><Linkedin className="w-3.5 h-3.5 mr-2" /> LinkedIn URL</label>
                        <input className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-medium text-gray-700" placeholder="linkedin.com/in/perfil" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2 flex items-center"><Github className="w-3.5 h-3.5 mr-2" /> Portfólio / GitHub</label>
                        <input className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-medium text-gray-700" placeholder="github.com/usuario" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Sua Motivação (Por que FortalTech?)</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-8 py-6 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/10 transition-all font-medium text-gray-700 leading-relaxed" placeholder="Descreva brevemente como você quer contribuir com a tecnologia na RMF."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#395fa3] text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-[#aa1a20] transition-all transform hover:scale-[1.02] shadow-2xl flex items-center justify-center group">
                      Confirmar Inscrição <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-3 transition-transform" />
                    </button>
                 </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareersView;
