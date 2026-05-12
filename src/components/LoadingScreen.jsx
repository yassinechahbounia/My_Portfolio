import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#050505' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Logo / Initials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="font-display text-5xl font-bold gradient-text mb-2">YC</div>
            <div
              className="font-mono text-xs tracking-[0.3em] uppercase"
              style={{ color: 'rgba(212,168,83,0.5)' }}
            >
              Yassine Chahbounia
            </div>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: '#d4a853' }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <motion.div
            className="mt-4 font-mono text-xs"
            style={{ color: 'rgba(212,168,83,0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading portfolio...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
