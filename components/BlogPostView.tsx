import React, { useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ArrowRight,
  Home,
  ShieldAlert,
  Cpu,
  Wifi,
  Gauge,
  Database,
  Code2,
  ChevronRight,
  ThumbsUp,
  MessageSquare,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';

interface BlogPostViewProps {
  postSlug: string;
  onNavigate: (view: string) => void;
}

const getCategoryTheme = (category: string) => {
  const categoryLower = category.toLowerCase();

  if (categoryLower.includes('automação') || categoryLower.includes('casas')) {
    return {
      color: 'bg-[#395fa3]',
      accent: 'text-[#395fa3]',
      icon: <Home className="w-12 h-12" />,
      gradient: 'from-[#395fa3] to-[#2a4678]',
      pattern:
        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
    };
  }
  if (
    categoryLower.includes('segurança') ||
    categoryLower.includes('ciber') ||
    categoryLower.includes('lgpd')
  ) {
    return {
      color: 'bg-[#aa1a20]',
      accent: 'text-[#aa1a20]',
      icon: <ShieldAlert className="w-12 h-12" />,
      gradient: 'from-[#0a1628] to-[#aa1a20]',
      pattern:
        'linear-gradient(45deg, rgba(170,26,32,0.05) 25%, transparent 25%, transparent 75%, rgba(170,26,32,0.05) 75%, rgba(170,26,32,0.05))',
    };
  }
  if (
    categoryLower.includes('a2insights') ||
    categoryLower.includes('software') ||
    categoryLower.includes('lab')
  ) {
    return {
      color: 'bg-indigo-600',
      accent: 'text-indigo-600',
      icon: <Code2 className="w-12 h-12" />,
      gradient: 'from-[#395fa3] via-indigo-600 to-[#aa1a20]',
      pattern: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 0)',
    };
  }
  if (
    categoryLower.includes('telemetria') ||
    categoryLower.includes('frotas')
  ) {
    return {
      color: 'bg-emerald-600',
      accent: 'text-emerald-600',
      icon: <Gauge className="w-12 h-12" />,
      gradient: 'from-[#0a1628] to-emerald-700',
      pattern:
        'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 40px)',
    };
  }
  return {
    color: 'bg-[#395fa3]',
    accent: 'text-[#395fa3]',
    icon: <Cpu className="w-12 h-12" />,
    gradient: 'from-[#1a2b4b] to-[#395fa3]',
    pattern:
      'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
  };
};

const BlogPostView: React.FC<BlogPostViewProps> = ({
  postSlug,
  onNavigate,
}) => {
  const post = useMemo(
    () => BLOG_POSTS.find((p) => p.slug === postSlug),
    [postSlug],
  );
  const theme = useMemo(
    () => (post ? getCategoryTheme(post.category) : getCategoryTheme('')),
    [post],
  );

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter(
      (p) => p.category === post.category && p.id !== post.id,
    ).slice(0, 3);
  }, [post]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postSlug]);

  if (!post)
    return (
      <div className="pt-48 pb-32 text-center flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8">
          <AlertTriangle className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-3xl font-black text-gray-400 uppercase tracking-tighter">
          Artigo não encontrado
        </h2>
        <p className="text-gray-500 mt-4 mb-8">
          O conteúdo que você procura pode ter sido movido ou removido.
        </p>
        <button
          onClick={() => onNavigate('blog')}
          className="bg-[#395fa3] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#aa1a20] transition-all"
        >
          Retornar à Listagem
        </button>
      </div>
    );

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Dynamic Header Banner */}
      <header
        className={`relative pt-48 pb-32 text-white overflow-hidden ${theme.color}`}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: theme.pattern,
            backgroundSize: '30px 30px',
          }}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-90`}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Retornar ao Blog
            </span>
          </motion.button>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                {theme.icon}
              </div>
              <div className="h-10 w-[2px] bg-white/20"></div>
              <div>
                <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                  {post.category}
                </span>
                <div className="flex items-center space-x-4 text-[10px] text-white/50 font-bold uppercase tracking-widest mt-2">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5" /> {post.readTime} de
                    leitura
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/40">
                  Autor
                </span>
                <span className="text-lg font-bold">{post.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Post Content Area */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Article */}
          <article className="lg:w-2/3">
            <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  // Fallback para imagem caso o Unsplash falhe
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-2xl font-light text-gray-500 leading-relaxed mb-12 italic border-l-4 border-[#aa1a20] pl-8">
                {post.excerpt}
              </p>

              <h2 className="text-3xl font-black text-[#395fa3] mb-8 uppercase tracking-tighter">
                Transformação na Região Metropolitana de Fortaleza
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                A tecnologia em {post.category} não é mais um luxo, mas uma
                necessidade estratégica. Para empresas e residências em
                Fortaleza, Maracanaú e Eusébio, a integração de sistemas
                inteligentes representa o próximo passo em eficiência
                operacional e conforto térmico e acústico.
              </p>

              <div className="bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100 mb-12">
                <h4 className="font-black text-[#aa1a20] uppercase text-xs tracking-widest mb-6">
                  Pontos Chave:
                </h4>
                <ul className="space-y-4">
                  {[
                    'Redução de custos fixos através da automação inteligente.',
                    'Aumento na segurança de dados e ativos físicos.',
                    'Monitoramento em tempo real via A2insights Lab.',
                    'Suporte técnico regionalizado com resposta ultra-rápida.',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm font-bold text-gray-600"
                    >
                      <ChevronRight className="w-5 h-5 text-[#395fa3] mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                O impacto de {post.title} ressoa em todos os setores da economia
                cearense. Desde o pequeno lojista na Aldeota até as grandes
                indústrias em Maracanaú, a adoção de protocolos como Wi-Fi 6 e
                sensores de IoT permite uma visibilidade de dados nunca antes
                vista. No A2insights Lab, trabalhamos diariamente para que esses
                dados se tornem decisões de lucro.
              </p>

              <div className="relative p-12 rounded-[3rem] bg-[#0a1628] text-white my-16 overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">
                    O Papel da FortalTech
                  </h3>
                  <p className="text-blue-100/60 leading-relaxed mb-8">
                    Como especialistas regionais, entendemos os desafios
                    específicos da rede elétrica e de conectividade no Ceará.
                    Por isso, nossas soluções são customizadas para suportar as
                    variações de tensão e garantir uptime total mesmo em
                    cenários adversos.
                  </p>
                  <button
                    onClick={() => onNavigate('assessment')}
                    className="bg-[#aa1a20] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0a1628] transition-all flex items-center group"
                  >
                    Falar com um Especialista{' '}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <Database className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
              </div>
            </div>

            {/* Post Interaction */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-[#aa1a20] transition-colors group">
                  <ThumbsUp className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Útil
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-[#395fa3] transition-colors group">
                  <MessageSquare className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Comentar
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-[#aa1a20] transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-[#395fa3] transition-all">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-12">
            {/* Author Card */}
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 text-center">
              <div className="w-24 h-24 bg-[#395fa3]/10 text-[#395fa3] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12" />
              </div>
              <h4 className="text-xl font-black text-[#395fa3] mb-2 uppercase tracking-tight">
                {post.author}
              </h4>
              <p className="text-[10px] font-black text-[#aa1a20] uppercase tracking-widest mb-6">
                Corpo Técnico FortalTech
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Especialista em integração de sistemas e inovação tecnológica
                focado em soluções para a RMF.
              </p>
            </div>

            {/* Related Content */}
            {relatedPosts.length > 0 && (
              <div className="space-y-8">
                <h4 className="text-sm font-black text-[#395fa3] uppercase tracking-[0.3em] pl-4 border-l-4 border-[#aa1a20]">
                  Relacionados
                </h4>
                <div className="space-y-6">
                  {relatedPosts.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onNavigate(`post-${rel.slug}`)}
                      className="group flex gap-4 cursor-pointer"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                        <img
                          src={rel.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) =>
                            ((e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400')
                          }
                        />
                      </div>
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-[#aa1a20]">
                          {rel.category}
                        </span>
                        <h5 className="text-sm font-black text-[#395fa3] leading-tight group-hover:text-[#aa1a20] transition-colors mt-1">
                          {rel.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Widget */}
            <div className="bg-[#aa1a20] p-10 rounded-[3rem] text-white shadow-xl shadow-red-900/20 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none">
                  Precisa de um diagnóstico?
                </h4>
                <p className="text-red-100/60 text-xs leading-relaxed mb-8">
                  Nossa engenharia em Maracanaú está pronta para analisar seu
                  projeto.
                </p>
                <button
                  onClick={() => onNavigate('assessment')}
                  className="w-full bg-white text-[#aa1a20] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0a1628] hover:text-white transition-all"
                >
                  Solicitar Orçamento
                </button>
              </div>
              <Zap className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
