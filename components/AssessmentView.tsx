import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Building2,
  ClipboardCheck,
  Cpu,
  Zap,
  ShieldCheck,
  Send,
  Home,
  Gauge,
  Code2,
  Wifi,
  AlertCircle,
  Check,
} from 'lucide-react';

// Esquemas de Validação com Zod
const step1Schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido (mínimo 10 dígitos)'),
  company: z.string().optional(),
});

const step2Schema = z.object({
  interests: z.array(z.string()).min(1, 'Selecione pelo menos um interesse'),
});

const step3Schema = z.object({
  description: z
    .string()
    .min(20, 'Descreva seu projeto com pelo menos 20 caracteres'),
  budget: z.string().min(1, 'Selecione uma faixa de orçamento'),
  urgency: z.enum(['low', 'medium', 'high']),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

type AssessmentFormData = z.infer<typeof fullSchema>;

interface AssessmentViewProps {
  onNavigate: (view: string) => void;
}

const AssessmentView: React.FC<AssessmentViewProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(
      step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema,
    ),
    mode: 'onChange',
    defaultValues: {
      interests: [],
      urgency: 'medium',
    },
  });

  const formData = watch();

  const interestOptions = [
    { id: 'automation', label: 'Automação Smart Home', icon: <Home /> },
    { id: 'infra', label: 'Infraestrutura de Redes', icon: <Wifi /> },
    { id: 'security', label: 'Segurança & CFTV', icon: <ShieldCheck /> },
    { id: 'software', label: 'Sistemas Customizados', icon: <Code2 /> },
    { id: 'telemetry', label: 'Telemetria de Frotas', icon: <Gauge /> },
    { id: 'support', label: 'Suporte de TI PME', icon: <Cpu /> },
  ];

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onFinalSubmit = (data: AssessmentFormData) => {
    console.log('Dados do Levantamento:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      onNavigate('home');
    }, 6000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4">
        <div className="max-w-md w-full bg-white rounded-[3.5rem] p-12 text-center shadow-2xl border border-green-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter">
            Projeto Recebido!
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Obrigado, <strong>{formData.name?.split(' ')[0]}</strong>! Nossa
            equipe do{' '}
            <span className="text-[#aa1a20] font-bold">A2insights Lab</span> já
            iniciou a triagem técnica dos seus dados.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-8 flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-widest border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            Status: Processando Diagnóstico
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-[#395fa3] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#aa1a20] transition-all shadow-xl"
          >
            Voltar ao Ecossistema
          </button>
        </div>
      </div>
    );
  }

  const steps = [
    { id: 1, title: 'Perfil', icon: <User className="w-5 h-5" /> },
    { id: 2, title: 'Escopo', icon: <Zap className="w-5 h-5" /> },
    { id: 3, title: 'Detalhes', icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: 4, title: 'Revisão', icon: <Send className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 overflow-hidden relative selection:bg-[#aa1a20] selection:text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#395fa3]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#aa1a20]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Progress */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-10">
              {steps.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col items-center gap-3 relative"
                >
                  <div
                    className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center transition-all duration-700 ${
                      step >= s.id
                        ? 'bg-[#395fa3] text-white shadow-2xl shadow-[#395fa3]/30 scale-110'
                        : 'bg-white text-gray-300 border border-gray-100'
                    }`}
                  >
                    {step > s.id ? <Check className="w-6 h-6" /> : s.icon}
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] ${step >= s.id ? 'text-[#395fa3]' : 'text-gray-300'}`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-3 w-full bg-white rounded-full overflow-hidden border border-gray-100 p-1 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#395fa3] to-[#aa1a20] transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Card Container */}
          <div className="bg-white rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500">
            <form onSubmit={handleSubmit(onFinalSubmit)}>
              {/* STEP 1: PERFIL */}
              {step === 1 && (
                <div className="p-10 md:p-20 animate-in slide-in-from-right-10 duration-700">
                  <div className="mb-12">
                    <div className="inline-block bg-blue-50 text-[#395fa3] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
                      Passo Inicial
                    </div>
                    <h3 className="text-4xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter leading-none">
                      Dados de <span className="text-[#aa1a20]">Contato.</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      Inicie seu diagnóstico técnico exclusivo para a RMF.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                        Nome Completo
                      </label>
                      <input
                        {...register('name')}
                        className={`w-full bg-gray-50 border ${errors.name ? 'border-red-400 ring-4 ring-red-50' : 'border-gray-100 focus:ring-4 focus:ring-[#395fa3]/5'} rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-medium text-gray-700`}
                        placeholder="Ex: João Silva"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-4 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />{' '}
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                        E-mail Profissional
                      </label>
                      <input
                        {...register('email')}
                        className={`w-full bg-gray-50 border ${errors.email ? 'border-red-400 ring-4 ring-red-50' : 'border-gray-100 focus:ring-4 focus:ring-[#395fa3]/5'} rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-medium text-gray-700`}
                        placeholder="email@empresa.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-4 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />{' '}
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                        Telefone / WhatsApp
                      </label>
                      <input
                        {...register('phone')}
                        className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-400 ring-4 ring-red-50' : 'border-gray-100 focus:ring-4 focus:ring-[#395fa3]/5'} rounded-[2rem] px-8 py-5 focus:outline-none transition-all font-medium text-gray-700`}
                        placeholder="(85) 99999-9999"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-4 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />{' '}
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">
                        Empresa (Opcional)
                      </label>
                      <input
                        {...register('company')}
                        className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/5 transition-all font-medium text-gray-700"
                        placeholder="Nome da organização"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: ESCOPO */}
              {step === 2 && (
                <div className="p-10 md:p-20 animate-in slide-in-from-right-10 duration-700">
                  <div className="mb-12">
                    <div className="inline-block bg-red-50 text-[#aa1a20] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
                      Escolha os Pilares
                    </div>
                    <h3 className="text-4xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter leading-none">
                      Áreas de{' '}
                      <span className="text-[#aa1a20]">Interesse.</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      Selecione uma ou mais soluções para o seu diagnóstico.
                    </p>
                  </div>

                  <Controller
                    name="interests"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {interestOptions.map((opt) => {
                          const isSelected = field.value.includes(opt.id);
                          return (
                            <div
                              key={opt.id}
                              onClick={() => {
                                const newValue = isSelected
                                  ? field.value.filter((v) => v !== opt.id)
                                  : [...field.value, opt.id];
                                field.onChange(newValue);
                              }}
                              className={`p-10 rounded-[2.5rem] border-2 cursor-pointer transition-all flex flex-col items-center text-center relative group ${
                                isSelected
                                  ? 'bg-[#395fa3] border-[#395fa3] text-white shadow-2xl shadow-[#395fa3]/30 scale-105'
                                  : 'bg-white border-gray-100 hover:border-[#aa1a20] hover:shadow-xl'
                              }`}
                            >
                              {isSelected && (
                                <div className="absolute top-4 right-4 bg-white text-[#395fa3] rounded-full p-1 shadow-lg">
                                  <Check className="w-4 h-4" />
                                </div>
                              )}
                              <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                                  isSelected
                                    ? 'bg-white/20'
                                    : 'bg-gray-50 text-gray-400 group-hover:text-[#aa1a20] group-hover:bg-red-50'
                                }`}
                              >
                                {React.cloneElement(
                                  opt.icon as React.ReactElement<any>,
                                  { className: 'w-8 h-8' },
                                )}
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-widest leading-tight">
                                {opt.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.interests && (
                    <p className="text-red-500 text-center mt-10 text-[10px] font-black uppercase tracking-widest flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 mr-2" />{' '}
                      {errors.interests.message}
                    </p>
                  )}
                </div>
              )}

              {/* STEP 3: PROJETO */}
              {step === 3 && (
                <div className="p-10 md:p-20 animate-in slide-in-from-right-10 duration-700">
                  <div className="mb-12">
                    <div className="inline-block bg-blue-50 text-[#395fa3] px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
                      Contexto Técnico
                    </div>
                    <h3 className="text-4xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter leading-none">
                      Sobre o seu{' '}
                      <span className="text-[#aa1a20]">Projeto.</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      Conte-nos sobre o desafio que sua empresa ou residência
                      enfrenta.
                    </p>
                  </div>
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                        Breve Descrição do Desafio
                      </label>
                      <textarea
                        {...register('description')}
                        rows={5}
                        className={`w-full bg-gray-50 border ${errors.description ? 'border-red-400' : 'border-gray-100'} rounded-[2.5rem] px-10 py-8 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/5 transition-all font-medium text-gray-700 leading-relaxed`}
                        placeholder="Ex: Necessito de automação completa para um novo showroom em Fortaleza, incluindo controle de iluminação via DALI e infra de rede Wi-Fi 6..."
                      ></textarea>
                      {errors.description && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-6 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />{' '}
                          {errors.description.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                          Expectativa de Investimento
                        </label>
                        <select
                          {...register('budget')}
                          className={`w-full bg-gray-50 border ${errors.budget ? 'border-red-400' : 'border-gray-100'} rounded-[2rem] px-8 py-5 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/5 transition-all font-bold text-[#395fa3] appearance-none`}
                        >
                          <option value="">Selecione uma faixa...</option>
                          <option value="basic">Até R$ 10.000</option>
                          <option value="standard">
                            R$ 10.000 - R$ 50.000
                          </option>
                          <option value="enterprise">
                            R$ 50.000 - R$ 250.000
                          </option>
                          <option value="custom">
                            Projetos acima de R$ 250k
                          </option>
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-[10px] font-bold uppercase ml-6 flex items-center">
                            <AlertCircle className="w-3 h-3 mr-1" />{' '}
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">
                          Urgência do Cronograma
                        </label>
                        <Controller
                          name="urgency"
                          control={control}
                          render={({ field }) => (
                            <div className="flex bg-gray-100 p-1.5 rounded-[2rem] border border-gray-100 shadow-inner">
                              {['low', 'medium', 'high'].map((lvl) => (
                                <button
                                  key={lvl}
                                  type="button"
                                  onClick={() => field.onChange(lvl)}
                                  className={`flex-1 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${
                                    field.value === lvl
                                      ? 'bg-white shadow-xl text-[#aa1a20]'
                                      : 'text-gray-400 hover:text-gray-600'
                                  }`}
                                >
                                  {lvl === 'low'
                                    ? 'Plano'
                                    : lvl === 'medium'
                                      ? 'Médio'
                                      : 'Crítico'}
                                </button>
                              ))}
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: REVISÃO FINAL */}
              {step === 4 && (
                <div className="p-10 md:p-20 animate-in slide-in-from-right-10 duration-700">
                  <div className="mb-12 text-center">
                    <div className="inline-block bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
                      Revisão Técnica
                    </div>
                    <h3 className="text-4xl font-black text-[#395fa3] mb-4 uppercase tracking-tighter leading-none">
                      Confirmar{' '}
                      <span className="text-[#aa1a20]">Diagnóstico.</span>
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      Valide as informações antes do envio para nossa
                      engenharia.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gray-50 rounded-[3rem] p-10 md:p-14 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                          Solicitante Responsável
                        </span>
                        <p className="text-xl font-black text-[#395fa3]">
                          {formData.name}
                        </p>
                        <p className="text-xs text-gray-500 font-medium">
                          {formData.email} • {formData.phone}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                          Pilares de Atuação
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {formData.interests.map((id) => (
                            <span
                              key={id}
                              className="bg-white border border-blue-100 text-[#395fa3] px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm"
                            >
                              {interestOptions.find((o) => o.id === id)?.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-dashed border-gray-100 rounded-[2.5rem] p-10">
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-4">
                        Escopo Preliminar
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed italic font-medium">
                        "{formData.description}"
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 p-10 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                      <div className="w-16 h-16 bg-[#395fa3] text-white rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#395fa3] font-black uppercase tracking-widest leading-relaxed">
                          Ao confirmar, seus dados serão encaminhados ao núcleo
                          de engenharia em <strong>Maracanaú</strong> para
                          elaboração do levantamento tático.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Toolbar */}
              <div className="bg-gray-50 p-10 md:p-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <button
                  type="button"
                  onClick={step === 1 ? () => onNavigate('home') : handleBack}
                  className="flex items-center space-x-3 text-gray-400 hover:text-[#aa1a20] font-black text-xs uppercase tracking-[0.2em] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#aa1a20] group-hover:bg-red-50">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <span>{step === 1 ? 'Cancelar' : 'Voltar'}</span>
                </button>

                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="hidden md:flex flex-col items-end mr-4">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Etapa Atual
                    </span>
                    <span className="text-sm font-black text-[#395fa3]">
                      {step} de {steps.length}
                    </span>
                  </div>

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full md:w-auto bg-[#395fa3] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#aa1a20] transition-all flex items-center justify-center group shadow-[0_20px_40px_rgba(57,95,163,0.25)]"
                    >
                      Continuar{' '}
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-[#aa1a20] text-white px-16 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:bg-[#395fa3] transition-all flex items-center justify-center group shadow-[0_20px_50px_rgba(170,26,32,0.3)] animate-bounce-subtle"
                    >
                      Confirmar Envio{' '}
                      <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            FortalTech • Infraestrutura & Tecnologia Inteligente • RMF
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AssessmentView;
