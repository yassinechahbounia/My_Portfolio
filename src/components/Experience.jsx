import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience, education } from '../data/portfolio';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

function TimelineItem({ item, index, inView, type }) {
  const isWork = type === 'work';

  return (
    <motion.div
      initial={{ opacity: 0, x: isWork ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative flex gap-5 group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
          style={{
            background: isWork ? 'rgba(212,168,83,0.12)' : 'rgba(96,165,250,0.1)',
            border: `1px solid ${isWork ? 'rgba(212,168,83,0.25)' : 'rgba(96,165,250,0.2)'}`,
          }}
        >
          {isWork
            ? <Briefcase size={14} style={{ color: '#d4a853' }} />
            : <GraduationCap size={14} style={{ color: '#60a5fa' }} />
          }
        </div>
        {index < (isWork ? experience.length - 1 : education.length - 1) && (
          <div className="w-px flex-1 mt-2" style={{ background: 'rgba(255,255,255,0.04)' }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="glass-card rounded-lg p-5 transition-all group-hover:border-white/15">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="font-display font-semibold text-white/90">
              {item.title || item.degree}
            </h3>
            {item.highlight && (
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: isWork ? 'rgba(212,168,83,0.1)' : 'rgba(96,165,250,0.1)',
                  color: isWork ? '#d4a853' : '#60a5fa',
                  border: `1px solid ${isWork ? 'rgba(212,168,83,0.2)' : 'rgba(96,165,250,0.2)'}`,
                }}
              >
                {item.highlight}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            <span className="font-body text-sm font-medium" style={{ color: isWork ? '#d4a853' : '#60a5fa' }}>
              {item.company || item.school}
            </span>
            <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <Calendar size={10} />
              {item.period}
            </span>
            {item.location && (
              <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                <MapPin size={10} />
                {item.location}
              </span>
            )}
          </div>

          {/* Bullet points for experience */}
          {item.description && (
            <ul className="space-y-1.5 mb-4">
              {item.description.map((d, i) => (
                <li key={i} className="flex gap-2 font-body text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <span style={{ color: 'rgba(212,168,83,0.5)' }} className="flex-shrink-0 mt-0.5">→</span>
                  {d}
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          {item.stack && (
            <div className="flex flex-wrap gap-1.5">
              {item.stack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #d4a853, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-label mb-6">Background</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Experience &{' '}
              <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <Briefcase size={14} style={{ color: '#d4a853' }} />
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#d4a853' }}>
                  Work Experience
                </span>
              </motion.div>
              <div>
                {experience.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} inView={inView} type="work" />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-center gap-3 mb-8"
              >
                <GraduationCap size={14} style={{ color: '#60a5fa' }} />
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#60a5fa' }}>
                  Education
                </span>
              </motion.div>
              <div>
                {education.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} inView={inView} type="edu" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
