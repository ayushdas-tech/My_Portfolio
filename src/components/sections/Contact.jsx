import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus({ state: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ state: 'error', message: 'Failed to send. Please email directly.' });
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionHeading
          tag="CONTACT"
          title="Let's build something useful with data."
          subtitle="Open for full-time Data Analyst roles and business intelligence opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Direct Info */}
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed light:text-slate-600">
              Have an open role, an analytics challenge, or want to discuss a project? Feel free to reach out directly:
            </p>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 truncate light:text-slate-800"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  aria-label="Copy Email"
                  className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-cyan-400 light:bg-white"
                >
                  {copied === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center justify-between light:bg-slate-50 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 light:text-slate-800"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  aria-label="Copy Phone"
                  className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-emerald-400 light:bg-white"
                >
                  {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-300 light:bg-slate-50 light:border-slate-200 light:text-slate-700">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="p-5 sm:p-6 rounded-2xl bg-dark-900/60 border border-slate-800 light:bg-slate-50 light:border-slate-200">
            {status.state === 'success' ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-heading font-bold text-base text-slate-100 light:text-slate-900">
                  Message Sent!
                </h4>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  {status.message}
                </p>
                <button
                  onClick={() => setStatus({ state: 'idle', message: '' })}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 light:bg-white light:border-slate-300 light:text-slate-900"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 light:bg-white light:border-slate-300 light:text-slate-900"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-850 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 resize-none light:bg-white light:border-slate-300 light:text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="w-full py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status.state === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
