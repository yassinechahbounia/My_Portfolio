import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal, techMarquee } from '../data/portfolio';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

// Typing effect hook
function useTyping(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(word.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typedText = useTyping(personal.taglines);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,168,83,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,168,83,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3) 0%, transparent 70%)' }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full"
        style={{ background: '#d4a853', opacity: 0.6 }}
      />
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[12%] w-2 h-2 rounded-full"
        style={{ background: '#d4a853', opacity: 0.3 }}
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2/3 right-[25%] w-1.5 h-1.5 rounded-full"
        style={{ background: '#e8d5a3', opacity: 0.4 }}
      />

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="section-label mb-8">
            Portfolio · 2025
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            <span className="block text-white/90">Yassine</span>
            <span className="block gradient-text">Chahbounia</span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-lg md:text-xl mb-8 flex items-center gap-2"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <span style={{ color: '#d4a853' }}>// </span>
            <span>{typedText}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl font-body text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {personal.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 font-body font-medium text-sm rounded text-[#0d0d0d] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: '#d4a853' }}
            >
              View Projects
              <ArrowDown size={14} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 font-body font-medium text-sm rounded border border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/80 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/80 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-white/30 hover:text-white/80 transition-colors"
            >
              <Mail size={20} />
            </a>
            <div className="w-px h-4 bg-white/15" />
            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {personal.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 overflow-hidden">
        <div className="marquee-track flex gap-12 w-max">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs whitespace-nowrap"
              style={{ color: 'rgba(212,168,83,0.35)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute right-8 bottom-16 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#d4a853]/40 to-transparent" />
        <ArrowDown size={12} style={{ color: 'rgba(212,168,83,0.5)' }} />
      </motion.div>
    </section>
  );
}
