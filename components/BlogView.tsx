import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Newspaper,
  TrendingUp,
  Loader2,
  ChevronDown,
  X,
} from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../constants';

interface BlogViewProps {
  onNavigate: (view: string) => void;
}

const POSTS_PER_PAGE = 6;

const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);

  // Filtra todos os posts baseado na busca e categoria
  const allFilteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pega apenas a fatia visível para o Infinite Scroll
  const visiblePosts = useMemo(() => {
    return allFilteredPosts.slice(0, visibleCount);
  }, [allFilteredPosts, visibleCount]);

  const hasMore = visibleCount < allFilteredPosts.length;

  // Reseta a paginação ao mudar filtros
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [searchQuery, selectedCategory]);

  // Lógica do Infinite Scroll via Intersection Observer
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoadingMore) {
        setIsLoadingMore(true);

        // Simula um pequeno delay para suavidade visual
        setTimeout(() => {
          setVisibleCount((prev) => prev + POSTS_PER_PAGE);
          setIsLoadingMore(false);
        }, 600);
      }
    },
    [hasMore, isLoadingMore],
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '200px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 md:px-6">
        {/* Blog Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            <Newspaper className="w-4 h-4" />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">
              FortalTech Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#395fa3] mb-8 leading-[0.9] tracking-tighter uppercase">
            Conhecimento que <br />
            <span className="text-[#aa1a20]">Move sua Empresa.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Explorando mais de 500 tópicos técnicos para transformar a
            infraestrutura tecnológica do seu negócio na RMF.
          </p>
        </div>

        {/* Search Bar - Full Width Optimized */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-[#395fa3] transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar por assunto ou tecnologia..."
              className="w-full bg-gray-50 border border-gray-100 rounded-[2.5rem] pl-20 pr-16 py-6 focus:outline-none focus:ring-4 focus:ring-[#395fa3]/5 transition-all font-medium text-lg text-gray-700 shadow-sm hover:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#aa1a20] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {selectedCategory && (
            <div className="mt-6 flex items-center justify-center space-x-3 animate-in fade-in slide-in-from-top-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Filtrando por:
              </span>
              <div className="bg-[#aa1a20] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center shadow-lg shadow-red-900/10">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-2 hover:scale-110 transition-transform"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Posts Grid with Dynamic Loading */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatePresence mode="popLayout">
                {visiblePosts.length > 0 ? (
                  visiblePosts.map((post) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={post.id}
                      onClick={() => onNavigate(`post-${post.slug}`)}
                      className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-[#395fa3] text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-10 flex-grow flex flex-col">
                        <div className="flex items-center space-x-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">
                          <span className="flex items-center">
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />{' '}
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1.5" />{' '}
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-[#395fa3] mb-4 group-hover:text-[#aa1a20] transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#395fa3]">
                              <User className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                              {post.author}
                            </span>
                          </div>
                          <div className="text-[#aa1a20] group-hover:translate-x-2 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-gray-200" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-300 uppercase tracking-tighter">
                      Nenhum artigo encontrado
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Tente pesquisar por outros termos ou categorias.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Sentinel for Infinite Scroll */}
            {hasMore && (
              <div
                ref={loaderRef}
                className="py-20 flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Loader2 className="w-6 h-6 text-[#aa1a20] animate-spin" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 animate-pulse">
                  Carregando mais conteúdos...
                </span>
              </div>
            )}

            {!hasMore && allFilteredPosts.length > 0 && (
              <div className="py-20 text-center">
                <div className="inline-flex items-center space-x-3 text-gray-300">
                  <div className="h-[1px] w-12 bg-gray-100"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Fim dos resultados para esta categoria
                  </span>
                  <div className="h-[1px] w-12 bg-gray-100"></div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Blog Widgets */}
          <aside className="lg:w-1/4 space-y-12">
            {/* Quick Stats Widget */}
            <div className="bg-[#395fa3] p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-4xl font-black mb-2 leading-none">
                  +{BLOG_POSTS.length}
                </h4>
                <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-widest mb-6">
                  Conteúdos Publicados
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-white/40 w-full animate-pulse"></div>
                </div>
                <p className="text-xs font-bold leading-relaxed opacity-80">
                  A maior biblioteca técnica de infraestrutura e automação da
                  RMF.
                </p>
              </div>
              <TrendingUp className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
            </div>

            {/* Categorias - Único ponto de filtro de categoria agora */}
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
              <h4 className="text-sm font-black text-[#395fa3] uppercase tracking-[0.3em] mb-8 flex items-center">
                <Tag className="w-4 h-4 mr-3 text-[#aa1a20]" /> Categorias
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${!selectedCategory ? 'bg-[#395fa3] border-[#395fa3] text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-[#395fa3] hover:text-[#395fa3]'}`}
                >
                  Todos
                </button>
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${selectedCategory === cat ? 'bg-[#aa1a20] border-[#aa1a20] text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-[#395fa3] hover:text-[#395fa3]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-[#0a1628] p-10 rounded-[3rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-4 leading-tight">
                  Inovação no seu E-mail
                </h4>
                <p className="text-blue-100/50 text-xs leading-relaxed mb-8">
                  Receba os melhores insights técnicos do Ceará mensalmente.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white/10 transition-all"
                  />
                  <button className="w-full bg-[#aa1a20] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0a1628] transition-all">
                    Assinar
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
