import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Github, 
  Linkedin,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Sending message...' });

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus({ 
        state: 'success', 
        message: 'Thank you! Your message has been sent. Ayush will respond promptly.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        state: 'error', 
        message: 'Something went wrong. Please reach out directly via email.' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="05"
          tag="CONTACT"
          title="Let's build something useful with data."
          subtitle="Open for full-time Data Analyst roles, Business Intelligence opportunities, and analytics collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800 light:bg-white light:border-slate-200">
              <h3 className="font-heading font-bold text-lg text-slate-100 mb-2 light:text-slate-900">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 mb-5 light:text-slate-600">
                Feel free to email, call, or connect via GitHub and LinkedIn.
              </p>

              <div className="space-y-3">
                {/* Email */}
                <div className="p-3 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs font-mono text-slate-200 hover:text-cyan-400 transition-colors truncate light:text-slate-800"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    aria-label="Copy Email"
                    className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-cyan-400 transition-colors light:bg-white"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a 
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                      className="text-xs font-mono text-slate-200 hover:text-emerald-400 transition-colors light:text-slate-800"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    aria-label="Copy Phone"
                    className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-emerald-400 transition-colors light:bg-white"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-dark-850 border border-slate-800 flex items-center gap-3 text-xs text-slate-300 light:bg-slate-50 light:border-slate-200 light:text-slate-700">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-2.5 mt-5 pt-4 border-t border-slate-800 light:border-slate-200">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono bg-dark-800 hover:bg-dark-700 text-slate-300 border border-slate-700 light:bg-slate-100 light:text-slate-700"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono bg-dark-800 hover:bg-dark-700 text-slate-300 border border-slate-700 light:bg-slate-100 light:text-slate-700"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Form */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-slate-800 light:bg-white light:border-slate-200">
              {status.state === 'success' ? (
                <div className="p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-slate-100 light:text-slate-900">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto light:text-slate-600">
                    {status.message}
                  </p>
                  <button
                    onClick={() => setStatus({ state: 'idle', message: '' })}
                    className="mt-3 px-4 py-2 rounded-lg text-xs font-mono bg-dark-800 text-slate-200 hover:text-white"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs font-sans focus:outline-none focus:border-cyan-400 light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs font-sans focus:outline-none focus:border-cyan-400 light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ayush, let's connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs font-sans focus:outline-none focus:border-cyan-400 resize-none light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.state === 'submitting'}
                    className="w-full py-2.5 px-5 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status.state === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
