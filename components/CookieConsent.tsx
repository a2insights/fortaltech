import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent({
  onNavigate,
}: {
  onNavigate?: (view: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    setIsVisible(false);

    // Here you would typically trigger your analytics init or consent update
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setIsVisible(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900">
                  Sua privacidade importa
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, analisar o
                  tráfego e personalizar conteúdo. Ao navegar, você concorda com
                  nossa{' '}
                  <button
                    onClick={() => onNavigate?.('privacy')}
                    className="text-blue-600 hover:underline font-medium bg-transparent border-none p-0 cursor-pointer"
                  >
                    Política de Privacidade
                  </button>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Aceitar Cookies
              </button>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 md:hidden"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
