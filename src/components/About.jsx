import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal, certifications } from '../data/portfolio';

export default function About() {
  const [ref, inView] = useInView();

  const stats = [
    { value: '12', label: 'CVs Generated', suffix: '+' },
    { value: '6', label: 'Project Stacks', suffix: '' },
    { value: '4', label: 'AWS Certifications', suffix: '+' },
    { value: '2025', label: 'Engineer Degree', suffix: '' },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(212,168,83,0.2)' }}>
          About
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-label mb-6"
            >
              About Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Engineer who ships from{' '}
              <span className="gradient-text">code to cloud</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 font-body text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <p>
                I'm a State Engineer in Computer Science graduated from SUPMTI Rabat in 2025,
                with a journey that started in networking (DTS, CCNA 1–4, OCP internship)
                and evolved into full stack development and cloud-native DevOps.
              </p>
              <p>
                My main stack revolves around <span style={{ color: '#d4a853' }}>Angular + Laravel</span> for
                web applications, and <span style={{ color: '#d4a853' }}>Docker + Kubernetes + Terraform</span> for
                cloud deployments on AWS. I'm fluent in the full delivery cycle — from
                requirements analysis to production monitoring.
              </p>
              <p>
                I completed the DevOps & Cloud AWS program at Simplon Maghreb (Mar 2026),
                where my capstone project was deploying MagicFit on AWS EKS with a full
                CI/CD pipeline and infrastructure as code.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { lang: 'Arabic', level: 'Native' },
                { lang: 'French', level: 'Fluent' },
                { lang: 'English', level: 'Upper' },
              ].map(({ lang, level }) => (
                <div
                  key={lang}
                  className="glass-card px-4 py-2 rounded flex items-center gap-2 transition-all"
                >
                  <span className="font-body text-sm text-white/70">{lang}</span>
                  <span className="font-mono text-xs" style={{ color: '#d4a853' }}>{level}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — stats + avatar placeholder */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, label, suffix }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-lg p-5 transition-all"
                >
                  <div className="font-display text-3xl font-bold gradient-text mb-1">
                    {value}{suffix}
                  </div>
                  <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Avatar / Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card rounded-xl p-6 flex items-center gap-5"
            >
              {/* Avatar initials */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center font-display text-xl font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #d4a853, #c49a3a)' }}
              >
                <span style={{ color: '#050505' }}>YC</span>
              </div>
              <div>
                <div className="font-display font-semibold text-white/90 mb-0.5">
                  {personal.name}
                </div>
                <div className="font-body text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {personal.location}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="tech-tag">Full Stack</span>
                  <span className="tech-tag">DevOps</span>
                  <span className="tech-tag">Cloud AWS</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications mini list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-2"
            >
              <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(212,168,83,0.5)' }}>
                Certifications
              </div>
              {certifications.slice(0, 4).map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 border-b border-white/[0.04]"
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center font-mono text-[9px] font-bold flex-shrink-0"
                    style={{ background: 'rgba(212,168,83,0.1)', color: '#d4a853', border: '1px solid rgba(212,168,83,0.2)' }}
                  >
                    {cert.badge}
                  </div>
                  <div>
                    <div className="font-body text-sm text-white/70">{cert.title}</div>
                    <div className="font-mono text-[10px]" style={{ color: 'rgba(212,168,83,0.5)' }}>
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
