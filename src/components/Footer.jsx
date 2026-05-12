import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t py-10 px-6 md:px-10" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="font-display text-lg font-bold gradient-text">YC</span>
          <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Yassine Chahbounia. All rights reserved.
          </span>
        </div>

        {/* Center — social */}
        <div className="flex items-center gap-5">
          {[
            { href: personal.github, icon: Github },
            { href: personal.linkedin, icon: Linkedin },
            { href: `mailto:${personal.email}`, icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/60 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Right — back to top */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollTop}
          className="flex items-center gap-2 font-mono text-xs text-white/25 hover:text-white/60 transition-colors"
        >
          Back to top
          <ArrowUp size={12} />
        </motion.button>
      </div>
    </footer>
  );
}
