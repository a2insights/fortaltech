import React from 'react';
import {
  Shield,
  FileText,
  ChevronRight,
  Clock,
  Lock,
  UserCheck,
  Database,
  Globe,
  AlertCircle,
  Copyright,
} from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  const sections =
    type === 'privacy'
      ? [
          {
            id: 'intro',
            title: '1. Introdução',
            icon: <Globe className="w-5 h-5" />,
          },
          {
            id: 'collection',
            title: '2. Coleta de Dados',
            icon: <Database className="w-5 h-5" />,
          },
          {
            id: 'usage',
            title: '3. Finalidade do Uso',
            icon: <FileText className="w-5 h-5" />,
          },
          {
            id: 'security',
            title: '4. Segurança e Proteção',
            icon: <Lock className="w-5 h-5" />,
          },
          {
            id: 'rights',
            title: '5. Seus Direitos (LGPD)',
            icon: <UserCheck className="w-5 h-5" />,
          },
          {
            id: 'cookies',
            title: '6. Cookies e Rastreamento',
            icon: <Shield className="w-5 h-5" />,
          },
          {
            id: 'contact',
            title: '7. Canais de Contato',
            icon: <AlertCircle className="w-5 h-5" />,
          },
        ]
      : [
          {
            id: 'acceptance',
            title: '1. Aceitação dos Termos',
            icon: <CheckCircleIcon className="w-5 h-5" />,
          },
          {
            id: 'services',
            title: '2. Descrição de Serviços',
            icon: <Globe className="w-5 h-5" />,
          },
          {
            id: 'intellectual',
            title: '3. Propriedade Intelectual',
            icon: <Copyright className="w-5 h-5" />,
          },
          {
            id: 'obligations',
            title: '4. Obrigações do Usuário',
            icon: <UserCheck className="w-5 h-5" />,
          },
          {
            id: 'limitation',
            title: '5. Limitação de Responsabilidade',
            icon: <AlertCircle className="w-5 h-5" />,
          },
          {
            id: 'modifications',
            title: '6. Modificações nos Termos',
            icon: <Clock className="w-5 h-5" />,
          },
          {
            id: 'jurisdiction',
            title: '7. Foro e Legislação',
            icon: <Shield className="w-5 h-5" />,
          },
        ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-700">
      {/* Dynamic Header */}
      <section
        className={`pt-32 pb-20 ${type === 'privacy' ? 'bg-[#395fa3]' : 'bg-[#aa1a20]'} text-white relative overflow-hidden`}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                {type === 'privacy' ? (
                  <Shield className="w-10 h-10" />
                ) : (
                  <FileText className="w-10 h-10" />
                )}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                  {type === 'privacy'
                    ? 'Política de Privacidade'
                    : 'Termos de Uso'}
                </h1>
                <div className="flex items-center text-white/70 text-sm mt-2 font-bold tracking-widest">
                  <Clock className="w-4 h-4 mr-2" /> ÚLTIMA ATUALIZAÇÃO: MARÇO
                  DE 2024
                </div>
              </div>
            </div>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Este documento estabelece as diretrizes e regras que regem a
              relação entre a FortalTech e seus usuários, garantindo
              transparência e segurança jurídica.
            </p>
          </div>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10">
          <Shield className="w-[400px] h-[400px]" />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 pl-4">
                Navegação
              </h4>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full flex items-center group px-4 py-3 rounded-xl transition-all hover:bg-gray-50 text-left"
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors ${type === 'privacy' ? 'bg-blue-50 text-[#395fa3]' : 'bg-red-50 text-[#aa1a20]'} group-hover:bg-white group-hover:shadow-sm`}
                  >
                    {section.icon}
                  </span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-black">
                    {section.title}
                  </span>
                  <ChevronRight className="ml-auto w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}

              <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Dúvidas Jurídicas?
                </p>
                <a
                  href="mailto:juridico@fortaltech.com"
                  className="text-sm font-black text-[#395fa3] hover:underline"
                >
                  juridico@fortaltech.com
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <div className="lg:w-3/4">
            <div className="prose prose-lg prose-blue max-w-none space-y-16">
              {type === 'privacy' ? (
                <>
                  <section id="intro">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      1. Introdução
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      A <strong>FORTALTECH SOLUÇÕES TECNOLÓGICAS LTDA</strong>,
                      inscrita no CNPJ sob o nº 65.084.539/0001-11, sediada em
                      Maracanaú, Ceará, reconhece a importância da privacidade e
                      da proteção de dados pessoais de seus clientes, parceiros
                      e usuários. Esta política descreve como tratamos
                      informações de acordo com a Lei Geral de Proteção de Dados
                      (Lei nº 13.709/2018 - LGPD).
                    </p>
                  </section>

                  <section id="collection">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      2. Coleta de Dados
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Coletamos informações necessárias para a prestação de
                      nossos serviços de infraestrutura e suporte técnico:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-600">
                      <li>
                        <strong>Dados de Identificação:</strong> Nome completo,
                        CPF/CNPJ, e-mail e telefone corporativo.
                      </li>
                      <li>
                        <strong>Dados de Localização:</strong> Endereço da
                        unidade para instalações técnicas e vistorias de campo.
                      </li>
                      <li>
                        <strong>Dados Técnicos:</strong> Endereços IP, logs de
                        acesso e configurações de rede (exclusivamente para
                        serviços de segurança eletrônica e suporte de TI).
                      </li>
                      <li>
                        <strong>Telemetria:</strong> Dados de geoposicionamento
                        de frotas (apenas para clientes do serviço de Telemetria
                        Veicular).
                      </li>
                    </ul>
                  </section>

                  <section id="usage">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      3. Finalidade do Uso
                    </h2>
                    <p className="text-gray-600">
                      As informações coletadas pela FortalTech possuem
                      finalidades específicas, fundamentadas no artigo 7º da
                      LGPD:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="font-black text-[#395fa3] mb-2">
                          Execução de Contrato
                        </h4>
                        <p className="text-sm text-gray-500">
                          Para garantir o cumprimento de obrigações técnicas e
                          manutenções agendadas.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="font-black text-[#395fa3] mb-2">
                          Suporte Técnico
                        </h4>
                        <p className="text-sm text-gray-500">
                          Atendimento a chamados e reparação de ativos
                          tecnológicos do cliente.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="security">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      4. Segurança e Proteção
                    </h2>
                    <p className="text-gray-600">
                      Adotamos medidas técnicas e administrativas avançadas para
                      proteger seus dados contra acessos não autorizados e
                      situações acidentais de destruição ou perda. Utilizamos
                      criptografia SSL em nossos portais e controle rigoroso de
                      acesso físico aos nossos servidores.
                    </p>
                  </section>

                  <section id="rights">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      5. Seus Direitos (LGPD)
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Como titular dos dados, você possui direitos garantidos
                      por lei:
                    </p>
                    <div className="space-y-4">
                      {[
                        'Confirmação da existência de tratamento',
                        'Acesso aos dados',
                        'Correção de dados incompletos ou inexatos',
                        'Anonimização ou bloqueio',
                        'Portabilidade de dados',
                        'Eliminação de dados pessoais',
                      ].map((right, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 bg-blue-50/50 p-3 rounded-xl border border-blue-100/50"
                        >
                          <ChevronRight className="w-4 h-4 text-[#395fa3]" />
                          <span className="text-sm font-bold text-gray-700">
                            {right}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="cookies">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      6. Cookies e Rastreamento
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Utilizamos cookies essenciais para o funcionamento básico
                      do site e cookies analíticos (Google Analytics) para
                      entender o tráfego e melhorar a experiência do usuário.
                      Você pode desativar cookies nas configurações do seu
                      navegador a qualquer momento.
                    </p>
                  </section>

                  <section id="contact">
                    <h2 className="text-3xl font-black text-[#395fa3] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#aa1a20] mr-4 rounded-full"></span>
                      7. Canais de Contato
                    </h2>
                    <p className="text-gray-600">
                      Para exercer seus direitos ou tirar dúvidas sobre esta
                      política, entre em contato com nosso Encarregado de Dados
                      (DPO):
                    </p>
                    <div className="mt-6 p-8 bg-[#0a1628] rounded-[2rem] text-white">
                      <h4 className="font-black text-xl mb-4">
                        DPO FortalTech
                      </h4>
                      <p className="text-blue-100/70 mb-2">
                        E-mail: dpo@fortaltech.com
                      </p>
                      <p className="text-blue-100/70">
                        Telefone: (85) 2028-0942
                      </p>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section id="acceptance">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      1. Aceitação dos Termos
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Ao acessar o site da <strong>FortalTech</strong>, você
                      concorda em cumprir estes termos de serviço, todas as leis
                      e regulamentos aplicáveis e concorda que é responsável
                      pelo cumprimento de todas as leis locais aplicáveis. Se
                      você não concordar com algum destes termos, está proibido
                      de usar ou acessar este site.
                    </p>
                  </section>

                  <section id="services">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      2. Descrição de Serviços
                    </h2>
                    <p className="text-gray-600">
                      A FortalTech atua na prestação de serviços de
                      infraestrutura técnica, incluindo instalações elétricas
                      industriais, segurança eletrônica, telemetria veicular e
                      consultoria tecnológica. O conteúdo deste site é meramente
                      informativo sobre nossa expertise técnica e portfólio.
                    </p>
                  </section>

                  <section id="intellectual">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      3. Propriedade Intelectual
                    </h2>
                    <p className="text-gray-600">
                      O design, os logotipos, os textos e as imagens exibidos
                      neste site são de propriedade exclusiva da{' '}
                      <strong>FORTALTECH SOLUÇÕES TECNOLÓGICAS LTDA</strong>. É
                      concedida permissão para baixar temporariamente uma cópia
                      dos materiais apenas para visualização pessoal e não
                      comercial. Esta é a concessão de uma licença, não uma
                      transferência de título e, sob esta licença, você não
                      pode:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600 text-sm">
                      <li>Modificar ou copiar os materiais;</li>
                      <li>
                        Usar os materiais para qualquer finalidade comercial ou
                        para exibição pública;
                      </li>
                      <li>
                        Tentar descompilar ou fazer engenharia reversa de
                        qualquer software contido no site;
                      </li>
                      <li>
                        Remover quaisquer direitos autorais ou outras notações
                        de propriedade dos materiais.
                      </li>
                    </ul>
                  </section>

                  <section id="obligations">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      4. Obrigações do Usuário
                    </h2>
                    <p className="text-gray-600">
                      O usuário compromete-se a utilizar o site e os canais de
                      contato de forma ética, não realizando spam, tentativas de
                      invasão ou envio de arquivos maliciosos através dos
                      formulários de orçamento.
                    </p>
                  </section>

                  <section id="limitation">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      5. Limitação de Responsabilidade
                    </h2>
                    <p className="text-gray-600">
                      Em nenhum caso a FortalTech ou seus fornecedores serão
                      responsáveis por quaisquer danos (incluindo, sem
                      limitação, danos por perda de dados ou lucro ou devido a
                      interrupção dos negócios) decorrentes do uso ou da
                      incapacidade de usar os materiais em nosso site.
                    </p>
                  </section>

                  <section id="modifications">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      6. Modificações nos Termos
                    </h2>
                    <p className="text-gray-600">
                      A FortalTech pode revisar estes termos de serviço do site
                      a qualquer momento, sem aviso prévio. Ao usar este site,
                      você concorda em ficar vinculado à versão atual desses
                      termos de serviço.
                    </p>
                  </section>

                  <section id="jurisdiction">
                    <h2 className="text-3xl font-black text-[#aa1a20] mb-6 flex items-center">
                      <span className="w-1.5 h-10 bg-[#395fa3] mr-4 rounded-full"></span>
                      7. Foro e Legislação
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Estes termos e condições são regidos e interpretados de
                      acordo com as leis brasileiras. Fica eleito o foro da
                      Comarca de <strong>Maracanaú - CE</strong> para dirimir
                      quaisquer controvérsias decorrentes destes Termos de Uso,
                      com renúncia expressa a qualquer outro, por mais
                      privilegiado que seja.
                    </p>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA to home */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h4 className="text-2xl font-black text-[#395fa3] mb-6">
            Ficou com alguma dúvida técnica?
          </h4>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center px-8 py-4 rounded-2xl font-black text-white transition-all transform hover:scale-105 shadow-xl ${type === 'privacy' ? 'bg-[#395fa3] hover:bg-[#2a4678]' : 'bg-[#aa1a20] hover:bg-[#8e151a]'}`}
          >
            Voltar ao Início
          </a>
        </div>
      </section>
    </div>
  );
};

// Simple helper component for icons missing from generic imports
const CheckCircleIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default LegalView;
