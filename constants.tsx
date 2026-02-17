
import React from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Car, 
  Settings, 
  Globe,
  Home,
  Building2,
  Truck,
  Wifi,
  Construction,
  ShieldAlert,
  ShoppingCart,
  LayoutDashboard,
  CreditCard,
  FileSpreadsheet,
  Boxes,
  ClipboardList,
  Smartphone,
  Router,
  Monitor,
  Briefcase,
  Activity,
  Gauge,
  MapPin,
  Store,
  Server,
  Layers,
  Database,
  PhoneCall,
  HardDrive,
  UserCheck,
  Code2,
  Users,
  FlaskConical,
  Lightbulb,
  Music,
  Tv,
  Thermometer,
  Fingerprint,
  Cpu,
  Lock,
  BookOpen,
  Newspaper,
  Terminal,
  Search
} from 'lucide-react';
import { ServiceCategory, MegaMenuItem } from './types';

export const COLORS = {
  primary: '#395fa3',
  secondary: '#aa1a20',
  white: '#ffffff'
};

export interface SoftwareSystem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export const SOFTWARE_SYSTEMS: SoftwareSystem[] = [
  {
    title: "PDV & Frente de Caixa",
    description: "Sistema de vendas ultrarápido com emissão de nota fiscal e integração com balanças para o varejo cearense.",
    icon: <Monitor className="w-8 h-8" />,
    tags: ["Varejo", "Fiscal", "RMF"]
  },
  {
    title: "Gestão de Estoque",
    description: "Controle automatizado de inventário inteligente para depósitos e centros de distribuição.",
    icon: <Boxes className="w-8 h-8" />,
    tags: ["Logística", "Estratégia", "PME"]
  },
  {
    title: "Smart Business Dashboard",
    description: "Plataforma centralizada para controle de ambientes automatizados e consumo energético.",
    icon: <Zap className="w-8 h-8" />,
    tags: ["Automação", "IoT", "Gestão"]
  },
  {
    title: "BI & Analytics",
    description: "Visualize dados de performance em tempo real. O cérebro digital da sua empresa.",
    icon: <LayoutDashboard className="w-8 h-8" />,
    tags: ["A2insights", "Dados", "BI"]
  }
];

export const MEGA_MENU_PROJECTS: MegaMenuItem[] = [
  {
    title: 'A2insights Lab',
    description: 'Nossa unidade de desenvolvimento focada em software sob medida e inovação digital.',
    link: 'https://a2insights.com.br/#contact',
    isExternal: true
  },
  {
    title: 'Sistemas Customizados',
    description: 'Soluções inteligentes para automação de processos, integração de dados e dashboards.',
    link: 'systems',
    isExternal: false
  },
  {
    title: 'Consultoria em TI',
    description: 'Estratégia digital e adequação LGPD para profissionalizar sua infraestrutura.',
    link: 'consultancy',
    isExternal: false
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  slug: string;
}

export const BLOG_CATEGORIES = [
  "Automação Residencial", "Segurança Eletrônica", "Redes PME", "Infraestrutura TI", 
  "Telemetria", "A2insights Lab", "Cibersegurança", "Gestão de Varejo", "LGPD", 
  "Wi-Fi 6", "Internet das Coisas", "Cidades Inteligentes", "Manutenção de Hardware",
  "Cloud Computing", "BI & Analytics", "E-commerce", "Sistemas PDV", "Eficiência Energética",
  "Tecnologia Regional", "Casas de Luxo", "Segurança de Dados", "Inovação no Ceará"
];

const TECH_IMAGES = [
  "1518770660439-4636190af475", "1550751827-4bd374c3f58b", "1451187580459-43490279c0fa",
  "1558002038-1055907df827", "1563986768609-322da13575f3", "1519389950473-47ba0277781c",
  "1581091226825-a6a2a5aee158", "1531297484001-80022131f5a1", "1460925895917-afdab827c52f",
  "1504384308090-c894fdcc538d", "1573163231162-83523a6692b8", "1517077304055-6e89abbf09b0",
  "1526374965328-7f61d4dc18c5", "1555066931-4365d14bab8c", "1523961131990-5ea7c61b2107"
];

const authors = ["Eng. Lucas Costa", "Rodrigo Fortal", "Equipe A2insights", "Técnico André", "Arq. Bia Mendes", "Eng. Roberto Dias"];
const cities = ["Fortaleza", "Maracanaú", "Eusébio", "Caucaia", "Aquiraz", "Itaitinga", "Horizonte", "Pacajus"];
const districts = ["Aldeota", "Meireles", "Cocó", "Porto das Dunas", "Dunas", "Alphaville", "Cumbuco", "Centro"];

const generateBulkPosts = () => {
  const posts: BlogPost[] = [];
  let idCounter = 1;

  const titleTemplates = [
    "{category}: Guia Definitivo para Empresas em {location}",
    "Novas Tendências de {category} em {location}",
    "O impacto direto de {category} na produtividade em {location}",
    "Por que investir em {category} é vital em {location}",
    "Segredos de {category}: Como economizar em {location}",
    "Inovação em {location}: O papel de {category}",
    "Transformação digital em {location} através de {category}",
    "O futuro de {category} na região de {location}",
    "Case de Sucesso: Implementação de {category} em {location}",
    "Segurança e Eficiência: {category} para o varejo de {location}",
    "Dicas exclusivas de {category} para condomínios em {location}",
    "Entenda como {category} funciona no cenário de {location}",
    "Melhores práticas de {category} para PMEs em {location}",
    "Comparativo técnico: {category} em foco para {location}",
    "A revolução da {category} nas residências de {location}"
  ];

  BLOG_CATEGORIES.forEach(category => {
    for (let i = 0; i < 15; i++) {
      const city = cities[idCounter % cities.length];
      const district = districts[idCounter % districts.length];
      const location = i % 2 === 0 ? city : district;
      const author = authors[idCounter % authors.length];
      const imageId = TECH_IMAGES[idCounter % TECH_IMAGES.length];
      const template = titleTemplates[i % titleTemplates.length];
      
      const title = template
        .replace("{category}", category)
        .replace("{location}", location);

      posts.push({
        id: `bulk-${idCounter}`,
        title: title,
        excerpt: `Neste artigo técnico, exploramos como as soluções de ${category.toLowerCase()} estão transformando o panorama tecnológico de ${location}, garantindo mais eficiência e segurança para nossos parceiros locais.`,
        category: category,
        date: `${Math.floor(Math.random() * 28) + 1} Out, 2024`,
        readTime: `${Math.floor(Math.random() * 8) + 5} min`,
        author: author,
        image: `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800`,
        slug: `${category.toLowerCase().replace(/ /g, '-')}-${idCounter}-${location.toLowerCase().replace(/ /g, '-')}`
      });
      idCounter++;
    }
  });

  return posts;
};

const generateFuturePosts = () => {
  const posts: BlogPost[] = [];
  const futureTemplates = [
    "O Roadmap da {category} em {location}: O que esperar de 2025",
    "Expectativas de {category} para o Mercado Cearense em 2026",
    "Como {location} está se preparando para a {category} de 2025",
    "Tendências Disruptivas: {category} em foco para 2026 em {location}",
    "O salto tecnológico de 2025: {category} na região de {location}",
    "Previsões 2026: Como a {category} vai mudar seu negócio em {location}",
    "Tecnologias Emergentes de {category} para 2025 em {location}",
    "Visão 2026: {category} e a Revolução Digital de {location}",
    "Checklist de Preparação: {category} 2025 para Empresas de {location}",
    "O impacto econômico da {category} em {location} até 2026"
  ];

  for (let i = 1; i <= 100; i++) {
    const category = BLOG_CATEGORIES[i % BLOG_CATEGORIES.length];
    const city = cities[i % cities.length];
    const district = districts[i % districts.length];
    const location = i % 2 === 0 ? city : district;
    const author = authors[i % authors.length];
    const imageId = TECH_IMAGES[i % TECH_IMAGES.length];
    const template = futureTemplates[i % futureTemplates.length];
    const year = i % 2 === 0 ? "2025" : "2026";
    
    const title = template
      .replace("{category}", category)
      .replace("{location}", location);

    posts.push({
      id: `future-${i}`,
      title: title,
      excerpt: `Antecipamos as tendências de ${category.toLowerCase()} para o biênio 2025-2026 em ${location}. Descubra como o A2insights Lab está moldando o futuro da infraestrutura regional.`,
      category: category,
      date: `${Math.floor(Math.random() * 28) + 1} Jan, ${year}`,
      readTime: `${Math.floor(Math.random() * 5) + 6} min`,
      author: author,
      image: `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&q=80&w=800`,
      slug: `tendencia-${year}-${category.toLowerCase().replace(/ /g, '-')}-${i}`
    });
  }
  return posts;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "main-1",
    title: "O Futuro das Smart Homes em Fortaleza: O que esperar em 2026",
    excerpt: "Descubra como a integração de IA e novos protocolos como Matter estão mudando as residências de alto padrão na capital cearense.",
    category: "Automação Residencial",
    date: "15 Mai, 2024",
    readTime: "5 min",
    author: "Eng. Lucas Costa",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    slug: "futuro-smart-homes-fortaleza"
  },
  ...generateFuturePosts(),
  ...generateBulkPosts()
];

export interface DetailedService extends ServiceCategory {
  id: string;
  slug: string;
  fullDescription: string;
  benefits: string[];
  technicalSpecs: string[];
  workflow: string[];
  sectors: { title: string; icon: React.ReactNode; description: string }[];
  applications: { title: string; description: string }[];
}

export const SERVICES: DetailedService[] = [
  {
    id: "smart-home",
    slug: "automacao-residencial-smart-home",
    title: "Automação Residencial",
    icon: <Home className="w-8 h-8" />,
    description: "Conforto e sofisticação: controle luzes, ar, cortinas e áudio por voz ou app.",
    items: ["Cenas de Iluminação", "Controle de Climatização", "Cortinas Motorizadas", "Comandos de Voz"],
    fullDescription: "Solução de elite para residências de alto padrão na Grande Fortaleza. Integramos sistemas complexos de iluminação RGB/Dimerizável, climatização de precisão e áudio multiroom high-fidelity em uma interface única e intuitiva. Nossa engenharia foca na criação de 'Cenários de Vida' que se adaptam à rotina do usuário, garantindo uma economia energética de até 25% através do gerenciamento inteligente de presença e luminosidade natural.",
    benefits: ["Conforto absoluto e personalização", "Valorização imobiliária imediata (15%+)", "Segurança perimetral inteligente", "Gestão energética avançada"],
    technicalSpecs: ["Protocolos Zigbee/Z-Wave/KNX", "Interfaces Touch em Vidro Temperado", "Integração Nativa Alexa/Google/Siri", "Sistemas de Som Wireless Hi-Res"],
    workflow: ["Consultoria de Estilo e Necessidades", "Projeto Executivo de Automação", "Instalação Técnica e Lançamento de Rede", "Calibração e Programação de Cenas"],
    sectors: [
      { title: "Residencial Premium", icon: <Home />, description: "Mansões e Coberturas de alto luxo." },
      { title: "Home Cinema", icon: <Music />, description: "Salas de entretenimento imersivo." }
    ],
    applications: [
      { title: "Gestão Remota", description: "Controle total da casa via App de qualquer lugar." },
      { title: "Rotinas", description: "Cenas automáticas: 'Bom dia', 'Festa' ou 'Viagem'." }
    ]
  },
  {
    id: "commercial-automation",
    slug: "automacao-comercial-e-predial",
    title: "Automação Comercial",
    icon: <Building2 className="w-8 h-8" />,
    description: "Gestão inteligente de energia e ambientes para escritórios, clínicas e varejo.",
    items: ["Controle de Iluminação", "Ar-Condicionado Central", "Sensores de Presença", "Monitoramento de Carga"],
    fullDescription: "Focada em eficiência operacional e redução drástica de custos fixos. Nossa automação comercial utiliza sensores de presença de alta sensibilidade e algoritmos de controle de carga para evitar o desperdício de energia em horários de pico ou em salas ociosas. Ideal para clínicas, lojas de varejo e prédios comerciais que buscam certificações de sustentabilidade e uma gestão centralizada de todos os ativos do edifício.",
    benefits: ["Redução auditada de custos fixos (até 40%)", "Monitoramento centralizado via Cloud Dashboard", "Aumento da vida útil de equipamentos de AC", "Conformidade com padrões ESG"],
    technicalSpecs: ["Controladores CLP Industriais", "Atuadores de Carga de Alta Potência", "Protocolos de Comunicação RS485/IP", "Plataforma SaaS de Monitoramento"],
    workflow: ["Auditoria Energética Preliminar", "Design de Malha de Controle", "Retrofit ou Instalação Nova", "Comissionamento de Sistemas"],
    sectors: [
      { title: "Varejo", icon: <Store />, description: "Supermercados e Shopping Centers." },
      { title: "Saúde", icon: <Activity />, description: "Clínicas e Hospitais inteligentes." }
    ],
    applications: [
      { title: "Energy Dashboard", description: "Visualização em tempo real do consumo." },
      { title: "Smart Scheduling", description: "Agendamento inteligente de climatização." }
    ]
  },
  {
    id: "audio-video",
    slug: "audio-e-video-profissional",
    title: "Áudio & Vídeo",
    icon: <Music className="w-8 h-8" />,
    description: "Som ambiente multiroom e salas de videoconferência de alta performance.",
    items: ["Som Ambiente", "Video Wall", "Salas de Reunião", "Home Theater"],
    fullDescription: "Sistemas audiovisuais projetados para impacto e clareza. Desde o som ambiente discreto para restaurantes sofisticados até salas de guerra (War Rooms) para diretoria corporativa. Utilizamos processadores de áudio DSP para garantir fidelidade vocal em videoconferências e impacto sonoro em auditórios, sempre focando na facilidade de uso via painéis de controle simplificados.",
    benefits: ["Comunicação corporativa impecável", "Atmosfera de marca envolvente para varejo", "Eliminação de cabos visuais e bagunça técnica", "Operação simplificada 'One-Touch'"],
    technicalSpecs: ["Matrizes de Vídeo 4K/60Hz", "Processadores de Áudio Digital (DSP)", "Microfonia de Teto com Beamforming", "Displays Profissionais de Alto Brilho"],
    workflow: ["Cálculo de Cobertura Acústica", "Projeto de Roteamento de Sinal", "Instalação de Displays e Caixas", "Equalização Ambiental Profissional"],
    sectors: [
      { title: "Hospitalidade", icon: <Music />, description: "Hotéis, Bares e Restaurantes." },
      { title: "Educação", icon: <Tv />, description: "Auditórios e Salas de Treinamento." }
    ],
    applications: [
      { title: "Video Wall", description: "Exibição de dados e publicidade em larga escala." },
      { title: "Videoconferência", description: "Sistemas integrados Zoom/Teams/Meet." }
    ]
  },
  {
    id: "access-control",
    slug: "controle-de-acesso-biometrico",
    title: "Controle de Acesso",
    icon: <Fingerprint className="w-8 h-8" />,
    description: "Segurança avançada com biometria, reconhecimento facial e portaria inteligente.",
    items: ["Facial & Biometria", "Fechaduras Digitais", "Tags & QR Codes", "Relatórios de Acesso"],
    fullDescription: "O estado da arte em segurança perimetral e interna. Implementamos reconhecimento facial com detecção de 'liveness' (vida), garantindo que fotos ou vídeos não burlem o sistema. Integramos fechaduras eletromecânicas de alta segurança a softwares de RH para controle automático de jornada e restrição de áreas críticas, tudo com redundância de energia para operação ininterrupta.",
    benefits: ["Rastreabilidade total de fluxos", "Redução de custos com vigilância física", "Eliminação total de chaves e perdas", "Integração direta com ERP/RH"],
    technicalSpecs: ["Câmeras de Reconhecimento Facial 3D", "Leitores Biométricos Ópticos/Capacitivos", "Eletroímãs de 600kgf", "Bancos de Dados SQL Encriptados"],
    workflow: ["Análise de Vulnerabilidade de Acessos", "Instalação de Hardwares de Bloqueio", "Setup de Servidores e Banco de Dados", "Treinamento de Operadores"],
    sectors: [
      { title: "Corporativo", icon: <Building2 />, description: "Prédios e escritórios compartilhados." },
      { title: "Logística", icon: <Lock />, description: "Controle de acesso a galpões." }
    ],
    applications: [
      { title: "Portaria Virtual", description: "Atendimento remoto via IP." },
      { title: "Ponto Digital", description: "Registro biométrico integrado." }
    ]
  },
  {
    id: "business-infra",
    slug: "infraestrutura-para-varejo",
    title: "Redes PME & Varejo",
    icon: <Store className="w-8 h-8" />,
    description: "Projeto 360°: Redes, Wi-Fi para coletores e racks estruturados para checkout.",
    items: ["Redes Cabeadas", "Wi-Fi Industrial", "Checkout Seguro", "Montagem de Rack"],
    fullDescription: "Projetamos a fundação tecnológica de empresas em crescimento. Nossas Redes PME garantem que a internet nunca seja um gargalo para as vendas. Focamos em cabeamento estruturado certificado e Wi-Fi de alta densidade capaz de suportar centenas de dispositivos simultâneos, desde terminais de caixa até smartphones de clientes, mantendo segurança lógica via segregação de redes (VLANs).",
    benefits: ["Estabilidade total de vendas (Uptime 99.9%)", "Escalabilidade para novos terminais", "Ambiente técnico organizado e limpo", "Segurança contra ataques cibernéticos"],
    technicalSpecs: ["Cabeamento Cat6/Cat6a GigaBit", "Switches Gerenciáveis L3", "Firewalls de Próxima Geração (NGFW)", "Wi-Fi 6 Enterprise-Grade"],
    workflow: ["Survey de Campo e Site Survey", "Lançamento e Identificação de Pontos", "Certificação de Rede com Fluke", "Ativação de Gateways e Segurança"],
    sectors: [
      { title: "Comércio", icon: <ShoppingCart />, description: "Lojas, Farmácias e Mercados." },
      { title: "Serviços", icon: <Briefcase />, description: "Agências e Escritórios Contábeis." }
    ],
    applications: [
      { title: "Backup Link", description: "Internet redundante automática." },
      { title: "VLAN Guest", description: "Wi-Fi isolado para clientes." }
    ]
  },
  {
    id: "telemetry",
    slug: "telemetria-e-rastreamento",
    title: "Telemetria & Frotas",
    icon: <Gauge className="w-8 h-8" />,
    description: "Gestão de frotas com bloqueio remoto e análise de combustível na RMF.",
    items: ["Rastreamento GPS", "Bloqueio via App", "Controle de Consumo", "Gestão de Rotas"],
    fullDescription: "Transformamos veículos em unidades de dados inteligentes. Nossa telemetria avançada permite o monitoramento de comportamento do motorista (freadas bruscas, excesso de velocidade), controle de jornada de motoristas e integração com o computador de bordo para leitura de consumo real de combustível. Essencial para operações logísticas que buscam reduzir custos operacionais e aumentar a segurança de ativos na RMF.",
    benefits: ["Recuperação imediata em caso de roubo", "Economia de combustível via otimização de rotas", "Redução de acidentes e multas", "Relatórios gerenciais automáticos"],
    technicalSpecs: ["Módulos GPS de Alta Sensibilidade", "Integração CAN-BUS / OBDII", "Conectividade Multicarrier (4G/5G)", "Alertas via Webhook / Push"],
    workflow: ["Dimensionamento de Hardware por Veículo", "Instalação Oculta com Antifurto", "Configuração de Plataforma e Alertas", "Treinamento do Gestor de Frota"],
    sectors: [
      { title: "Logística", icon: <Truck />, description: "Distribuidoras e Transportadoras." },
      { title: "Serviços Urbanos", icon: <Car />, description: "Empresas com equipes de rua." }
    ],
    applications: [
      { title: "Cerca Eletrônica", description: "Alerta ao sair de áreas permitidas." },
      { title: "Ranking de Motoristas", description: "Incentivo à condução segura." }
    ]
  },
  {
    id: "tech-support",
    slug: "suporte-ti-empresarial",
    title: "Suporte TI PME",
    icon: <Wrench className="w-8 h-8" />,
    description: "Contratos de manutenção para manter os computadores da sua empresa sempre rápidos.",
    items: ["Assistência Remota", "Manutenção Física", "Backup Automático", "Limpeza & Upgrades"],
    fullDescription: "Atuamos como o seu departamento de tecnologia terceirizado. Oferecemos suporte proativo, antecipando falhas de hardware e software antes que elas interrompam sua operação. Nossos planos incluem gerenciamento de servidores, suporte help-desk para usuários e políticas rigorosas de backup em nuvem, garantindo a continuidade do negócio em qualquer incidente técnico.",
    benefits: ["Fim dos custos inesperados com TI", "Atendimento prioritário (SLA de até 4h)", "Expertise multidisciplinar disponível", "Segurança de dados corporativos"],
    technicalSpecs: ["Gestão de Inventário de TI", "Monitoramento de Saúde de Servidores", "Suporte a Windows/Linux/Mac", "Antivírus Gerenciado (EDR)"],
    workflow: ["Auditoria Inicial e Diagnóstico", "Limpeza Técnica e Padronização", "Implantação de Agentes de Suporte", "Rotina de Visitas Preventivas"],
    sectors: [
      { title: "Contabilidade", icon: <FileSpreadsheet />, description: "Sistemas fiscais sempre online." },
      { title: "Jurídico", icon: <ShieldAlert />, description: "Proteção de arquivos sensíveis." }
    ],
    applications: [
      { title: "Help Desk", description: "Suporte rápido via chat/telefone." },
      { title: "TI Strategy", description: "Reuniões mensais de melhoria." }
    ]
  },
  {
    id: "cctv-security",
    slug: "seguranca-eletronica-cftv",
    title: "Segurança & CFTV",
    icon: <ShieldCheck className="w-8 h-8" />,
    description: "Câmeras IP Full HD com acesso remoto e inteligência artificial de movimento.",
    items: ["Câmeras 4K", "Acesso Celular", "Alertas IA", "Gravação Cloud"],
    fullDescription: "Vigilância inteligente baseada em Inteligência Artificial. Nossos sistemas detectam automaticamente intrusões, abandono de objetos e placas veiculares. Utilizamos tecnologia IP PoE para garantir estabilidade de sinal e gravação redundante em local físico e nuvem. O monitoramento pelo smartphone é fluido e permite notificações em tempo real apenas para eventos reais de segurança.",
    benefits: ["Visão noturna colorida (Full Color)", "Redução de falsos alarmes via IA", "Acesso remoto de alta performance", "Documentação legal em alta definição"],
    technicalSpecs: ["Câmeras com IA AcuSense/DeepinMind", "Compressão H.265+ (Economia de HD)", "Alimentação PoE Industrial", "Storage em Nuvem AWS S3"],
    workflow: ["Estudo de Pontos Cegos e Iluminação", "Instalação de Infra e Cabeamento", "Setup de NVR e Inteligência", "Configuração de App nos Smartphones"],
    sectors: [
      { title: "Condomínios", icon: <Building2 />, description: "Segurança total de áreas comuns." },
      { title: "Logística", icon: <Lock />, description: "Controle de docas e estoque." }
    ],
    applications: [
      { title: "Reconhecimento de Placas", description: "Controle automático de portões." },
      { title: "Análise de Perímetro", description: "Linhas virtuais de invasão." }
    ]
  },
  {
    id: "structured-cabling",
    slug: "cabeamento-estruturado",
    title: "Cabeamento Estruturado",
    icon: <Layers className="w-8 h-8" />,
    description: "Organização de racks e cabeamento certificado para evitar quedas de rede.",
    items: ["Cat6 / Cat6a", "Organização de Rack", "Certificação Fluke", "Fibra Óptica"],
    fullDescription: "A engenharia civil da tecnologia. Eliminamos o caos de fios e garantimos uma infraestrutura de rede que suporta o crescimento da empresa por décadas. Projetamos salas de TI (Data Centers) com organization impecável, ventilação adequada e identificação total de pontos, reduzindo o tempo de diagnóstico de problemas de horas para minutos.",
    benefits: ["Identificação fácil de falhas", "Ambiente estético e profissional", "Máxima velocidade de transferência", "Documentação técnica de rede completa"],
    technicalSpecs: ["Padrões TIA/EIA 568.C", "Materiais de Alta Performance", "Racks de 19 Polegadas", "Certificação com Relatório Técnico"],
    workflow: ["Projeto de Lançamento e Topologia", "Instalação de Calhas e Dutos", "Identificação e Terminação", "Testes de Certificação Final"],
    sectors: [
      { title: "Indústria", icon: <Construction />, description: "Redes fabris de alta resistência." },
      { title: "Educação", icon: <Globe />, description: "Campus universitário cabeado." }
    ],
    applications: [
      { title: "Organização de Rack", description: "Revitalização de CPDs antigos." },
      { title: "Backbone de Fibra", description: "Conexão entre prédios e andares." }
    ]
  },
  {
    id: "mesh-wifi",
    slug: "wifi-mesh-residencial",
    title: "Wi-Fi Mesh",
    icon: <Wifi className="w-8 h-8" />,
    description: "Internet rápida em todos os cômodos da casa, sem fios aparentes ou quedas.",
    items: ["Cobertura Total", "Rede Unificada", "Roaming Inteligente", "Alta Estabilidade"],
    fullDescription: "Eliminamos as 'zonas mortas' de internet. Nossa solução Mesh cria uma malha de cobertura unificada onde seu dispositivo se conecta automaticamente ao ponto mais forte sem quedas de conexão ao caminhar pelo ambiente. Perfeito para casas grandes ou escritórios abertos onde a mobilidade é essencial para o trabalho e lazer.",
    benefits: ["Sinal forte em 100% da área", "Roaming sem interrupção (Fast Roaming)", "Suporte a múltiplos usuários 4K simultâneos", "Visual limpo sem antenas externas"],
    technicalSpecs: ["Padrão Wi-Fi 6 (802.11ax)", "Criptografia WPA3", "Nós com Backhaul Cabeado", "Gerenciamento Cloud"],
    workflow: ["Mapa de Calor de Sinal (Heatmap)", "Seleção de Pontos de Acesso", "Instalação e Otimização de Canal", "Teste de Estresse de Rede"],
    sectors: [
      { title: "Residencial", icon: <Home />, description: "Casas e Apartamentos grandes." },
      { title: "Hotelaria", icon: <Wifi />, description: "Cobertura total de hóspedes." }
    ],
    applications: [
      { title: "Gaming & Streaming", description: "Zero lag em jogos e vídeos 8K." },
      { title: "Trabalho Mobile", description: "Liberdade para reuniões em qualquer lugar." }
    ]
  },
  {
    id: "commercial-pos",
    slug: "sistemas-pdv-varejo",
    title: "Software & PDV",
    icon: <ShoppingCart className="w-8 h-8" />,
    description: "Software de frente de caixa e gestão completa para pequenos e médios lojistas.",
    items: ["Nota Fiscal Eletrônica", "Controle de Estoque", "Vendas Rápida", "Relatórios Financeiros"],
    fullDescription: "Organização e agilidade para o varejo regional. Nosso sistema PDV é homologado para as exigências fiscais do Ceará (SEFAZ-CE) e oferece uma interface simplificada que treina o operador em minutos. Com controle de estoque em tempo real e relatórios financeiros automáticos, o empresário tem o controle total do lucro na palma da mão.",
    benefits: ["Conformidade fiscal total (NFe/NFCe)", "Agilidade extrema no atendimento ao cliente", "Controle real de estoque e perdas", "Suporte técnico local imediato"],
    technicalSpecs: ["Banco de Dados Local com Sincronia Cloud", "Compatível com Balanças e Scanners", "Módulo de Vendas Offline", "Relatórios de Performance de Vendas"],
    workflow: ["Levantamento de Necessidades Fiscais", "Importação de Base de Produtos", "Instalação e Treinamento de Equipe", "Acompanhamento no Dia Um"],
    sectors: [
      { title: "Varejo Alimentar", icon: <Store />, description: "Mercadinhos e Padarias." },
      { title: "Moda", icon: <ShoppingCart />, description: "Lojas de roupas e calçados." }
    ],
    applications: [
      { title: "Venda Rápida", description: "Interface otimizada para alto fluxo." },
      { title: "Gestão Cloud", description: "Acesse dados de venda pelo celular." }
    ]
  },
  {
    id: "dev-lab",
    slug: "a2insights-lab-software",
    title: "A2insights Lab",
    icon: <Code2 className="w-8 h-8" />,
    description: "Criação de sites, apps e sistemas customizados. O braço de inovação da FortalTech.",
    items: ["Sites & Landing Pages", "Apps iOS/Android", "Sistemas Web", "Dashboards de BI"],
    fullDescription: "Onde o hardware encontra o cérebro digital. O A2insights Lab é especializado em transformar regras de negócio complexas em software de alto desempenho. Se as soluções de prateleira não resolvem seu problema, nós construímos do zero: desde plataformas de BI para diretoria até aplicativos nativos que conectam sua equipe de campo ao escritório em tempo real.",
    benefits: ["Soberania tecnológica (Código Exclusivo)", "Processos 100% automatizados no digital", "Interfaces focadas em conversão e UX", "Manutenção e suporte nível engenharia"],
    technicalSpecs: ["Stack: React, Next.js, Node.js, Go", "Infraestrutura AWS Serverless", "Arquitetura de Microserviços", "Segurança Cibernética por Design"],
    workflow: ["Discovery e Mapeamento de Processos", "Design de Experiência (UX/UI)", "Desenvolvimento Ágil e Sprints", "Deploy e Monitoramento Contínuo"],
    sectors: [
      { title: "Tecnologia", icon: <FlaskConical />, description: "SaaS e Startups cearenses." },
      { title: "Governança", icon: <Zap />, description: "Dashboards para tomada de decisão." }
    ],
    applications: [
      { title: "Custom ERP", description: "Sistemas internos sob medida." },
      { title: "App Mobile", description: "Sua empresa no bolso do cliente." }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "A FortalTech faz automação em apartamentos em Fortaleza?",
    answer: "Com certeza! Projetamos automação Smart Home para apartamentos novos ou já habitados, controlando luz, ar e som de forma discreta."
  },
  {
    question: "O A2insights Lab desenvolve qualquer tipo de software?",
    answer: "Focamos em sistemas web, apps mobile e dashboards de dados. Analisamos sua necessidade e criamos uma solução técnica viável e escalável."
  },
  {
    question: "Vocês atendem apenas Maracanaú?",
    answer: "Atendemos toda a RMF: Fortaleza, Maracanaú, Eusébio, Caucaia e demais cidades da Grande Fortaleza com equipe técnica presencial."
  },
  {
    question: "Como funciona o suporte técnico para empresas?",
    answer: "Oferecemos planos mensais que garantem visitas periódicas e atendimento prioritário para emergências, garantindo que sua empresa nunca pare por falha técnica."
  }
];
