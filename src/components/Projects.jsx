import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const filters = ['All', 'Full Stack + DevOps', 'DevOps & Cloud', 'Full Stack', 'Frontend', 'DevOps'];

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-[#d4a853]/30"
      style={{ borderColor: hovered ? 'rgba(212,168,83,0.25)' : undefined }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 z-10 font-mono text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(212,168,83,0.15)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.25)' }}
        >
          Featured
        </div>
      )}

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #d4a853, transparent)' }}
        initial={{ scaleX: 0 }}
        animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-6 md:p-7">
        {/* Category + Year */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(212,168,83,0.6)' }}>
            {project.category}
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-white/90 mb-2 group-hover:text-white transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Highlight pill */}
        <div className="mb-3">
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{ background: 'rgba(212,168,83,0.08)', color: 'rgba(212,168,83,0.7)' }}
          >
            ✦ {project.highlight}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-tag">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.githubDevops && (
            <a
              href={project.githubDevops}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/80 transition-colors"
            >
              <ExternalLink size={13} />
              DevOps Repo
            </a>
          )}
          <div className="ml-auto">
            <motion.div
              animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} style={{ color: hovered ? '#d4a853' : 'rgba(255,255,255,0.2)' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <div className="section-label mb-6">Work</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Selected <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <a
              href="https://github.com/yassinechahbounia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-white/40 hover:text-white/70 transition-colors self-start md:self-auto"
            >
              <Github size={15} />
              View all on GitHub
              <ArrowUpRight size={13} />
            </a>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded font-mono text-xs transition-all ${
                  activeFilter === f
                    ? 'text-[#0d0d0d]'
                    : 'text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20'
                }`}
                style={activeFilter === f ? { background: '#d4a853' } : {}}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} inView={inView} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
