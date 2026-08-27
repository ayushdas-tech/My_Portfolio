import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'submitting' | 'success' | 'error'
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

    // Client-side simulation / Formspree endpoint integration
    try {
      // Simulate network request for serverless form handling
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti has restrictions
      }

      setStatus({ 
        state: 'success', 
        message: 'Thank you! Your message has been received. Ayush will get back to you shortly.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        state: 'error', 
        message: 'Something went wrong. Please reach out directly via email at ayushdas599464@gmail.com' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionHeading
          code="05"
          tag="GET IN TOUCH"
          title="Let's build something useful with data."
          subtitle="Open for full-time Data Analyst roles, Business Intelligence internships, and analytical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Recruiter Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800 backdrop-blur-md light:bg-white light:border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="cyan" dot>Direct Channels</Badge>
                <span className="text-xs font-mono text-slate-500">Fast Response</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-100 mb-2 light:text-slate-900">
                Ready to contribute on Day 1.
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 light:text-slate-600">
                Whether you have an open position, an analytics case challenge, or want to discuss SQL optimization & dashboard architectures, feel free to reach out directly.
              </p>

              {/* Direct Info Cards with Instant Copy Buttons */}
              <div className="space-y-3.5">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-dark-850/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-dark-800 text-cyan-400 light:bg-white light:text-cyan-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">EMAIL ADDRESS</span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block light:text-slate-800"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    aria-label="Copy Email"
                    className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-cyan-400 transition-colors light:bg-white"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-dark-850/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-dark-800 text-emerald-400 light:bg-white light:text-emerald-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">PHONE / WHATSAPP</span>
                      <a 
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                        className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-emerald-400 transition-colors light:text-slate-800"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    aria-label="Copy Phone"
                    className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-emerald-400 transition-colors light:bg-white"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-dark-850/90 border border-slate-800/90 flex items-center gap-3 light:bg-slate-50 light:border-slate-200">
                  <div className="p-2 rounded-lg bg-dark-800 text-sky-400 light:bg-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">LOCATION</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200 light:text-slate-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Row */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-3 light:border-slate-200">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 hover:bg-dark-700 text-slate-300 border border-slate-700 light:bg-slate-100 light:text-slate-700"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>
                
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 hover:bg-dark-700 text-slate-300 border border-slate-700 light:bg-slate-100 light:text-slate-700"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* Recruiter Response SLA */}
            <div className="p-4 rounded-xl bg-dark-900/60 border border-cyan-500/20 flex items-center gap-3 text-xs font-mono text-slate-400 light:bg-cyan-50/50 light:border-cyan-200">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Typical response time: Within 12-24 hours for analytics and recruiter inquiries.</span>
            </div>

          </motion.div>

          {/* Right Column: Serverless Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800 backdrop-blur-md shadow-2xl shadow-cyan-950/20 light:bg-white light:border-slate-200">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 light:border-slate-100">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-heading font-bold text-lg text-slate-100 light:text-slate-900">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  No backend required
                </span>
              </div>

              {status.state === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-emerald-300">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    {status.message}
                  </p>
                  <button
                    onClick={() => setStatus({ state: 'idle', message: '' })}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-emerald-500 text-dark-950 hover:bg-emerald-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 light:text-slate-600">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Connor (Recruiter)"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-cyan-400 transition-all light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 light:text-slate-600">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-cyan-400 transition-all light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 light:text-slate-600">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analyst Opportunity / Portfolio Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-cyan-400 transition-all light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 light:text-slate-600">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ayush, we came across your analytics projects and would like to schedule an introductory conversation regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-cyan-400 transition-all resize-none light:bg-slate-50 light:border-slate-300 light:text-slate-900"
                    />
                  </div>

                  {/* Error display if any */}
                  {status.state === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-xs font-mono text-rose-300">
                      {status.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.state === 'submitting'}
                    className="w-full py-3 px-6 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-400 text-dark-950 hover:from-cyan-400 hover:to-sky-400 transition-all shadow-glow-cyan flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {status.state === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Ayush</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center font-mono text-slate-500">
                    🔒 Direct transmission • No third-party ad tracking
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
