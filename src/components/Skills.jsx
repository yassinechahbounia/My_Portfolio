import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';

const categories = ['Frontend', 'Backend', 'DevOps', 'Database'];

const categoryColors = {
  Frontend: '#60a5fa',
  Backend: '#34d399',
  DevOps: '#d4a853',
  Database: '#a78bfa',
};

function SkillBar({ name, level, category, index, inView }) {
  const color = categoryColors[category] || '#d4a853';
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-white/70 group-hover:text-white/90 transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="h-[2px] w-full rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.06, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-28 relative">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #d4a853, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-6">Technical Skills</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What I <span className="gradient-text">build with</span>
            </h2>
            <p className="font-body text-base mb-16 max-w-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
              A diverse stack built over years of real projects — from Angular SPAs to cloud-native Kubernetes deployments.
            </p>
          </motion.div>

          {/* Skills grid by category */}
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat) => {
              const catSkills = skills.filter(s => s.category === cat);
              const color = categoryColors[cat];
              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: color }}
                    />
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>
                      {cat}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {catSkills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        {...skill}
                        index={i}
                        inView={inView}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-white/[0.05]"
          >
            <div className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Tools & Ecosystem
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Postman', 'VS Code', 'Linux', 'Nginx', 'Redis',
                'Wireshark', 'VMware', 'Hyper-V', 'Git', 'Figma',
                'ArgoCD', 'Helm', 'FluentBit', 'CloudWatch', 'Swagger',
              ].map((tool) => (
                <span key={tool} className="tech-tag">{tool}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
