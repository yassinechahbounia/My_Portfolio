import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/portfolio';
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending (replace with real API call or EmailJS)
    setTimeout(() => setStatus('sent'), 1800);
  };

  const socialLinks = [
    {
      label: 'GitHub',
      value: 'github.com/yassinechahbounia',
      href: personal.github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yassine-chahbounia',
      href: personal.linkedin,
      icon: Linkedin,
    },
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: Mail,
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: Phone,
    },
    {
      label: 'Location',
      value: personal.location,
      href: null,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #d4a853, transparent)' }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-10 right-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.2), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="section-label mb-6 justify-center">Contact</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className="font-body text-base max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Open to full-time positions, freelance projects and interesting collaborations.
              Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-semibold text-white/90 mb-8">
                Get in touch
              </h3>

              <div className="space-y-4">
                {socialLinks.map(({ label, value, href, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{
                        background: 'rgba(212,168,83,0.08)',
                        border: '1px solid rgba(212,168,83,0.15)',
                      }}
                    >
                      <Icon size={15} style={{ color: '#d4a853' }} />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="font-body text-sm text-white/60 hover:text-white/90 transition-colors underline-slide"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-white/60">{value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 glass-card rounded-lg p-4 flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-50" />
                </div>
                <div>
                  <div className="font-body text-sm text-white/80">Available for opportunities</div>
                  <div className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Open to full-time & freelance
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <CheckCircle size={48} style={{ color: '#d4a853' }} className="mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white/90 mb-2">Message sent!</h3>
                  <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 font-body text-sm text-[#d4a853] underline-slide"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="col-span-2 md:col-span-1">
                      <label className="block font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg font-body text-sm text-white/80 placeholder-white/20 outline-none transition-all focus:border-[#d4a853]/40"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-span-2 md:col-span-1">
                      <label className="block font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg font-body text-sm text-white/80 placeholder-white/20 outline-none transition-all focus:border-[#d4a853]/40"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Job opportunity, collaboration..."
                      className="w-full px-4 py-3 rounded-lg font-body text-sm text-white/80 placeholder-white/20 outline-none transition-all focus:border-[#d4a853]/40"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg font-body text-sm text-white/80 placeholder-white/20 outline-none transition-all focus:border-[#d4a853]/40 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-body font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                    style={{ background: '#d4a853', color: '#050505' }}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-[#050505]/30 border-t-[#050505] rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
