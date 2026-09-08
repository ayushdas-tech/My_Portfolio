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
      await new Promise(resolve => setTimeout(resolve, 600));
      setStatus({ state: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ state: 'error', message: 'Something went wrong. Please email directly.' });
    }
  };

  return (
    <section id="contact" className="py-14 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Open for full-time Data Analyst roles, internships, and analytics projects."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          
          {/* Direct Channels */}
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Feel free to reach out directly:
            </p>

            {/* Email */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-xs sm:text-sm font-medium text-gray-800 hover:text-blue-600 truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                aria-label="Copy Email"
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                {copied === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a 
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                  className="text-xs sm:text-sm font-medium text-gray-800 hover:text-emerald-600"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                aria-label="Copy Phone"
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center gap-2.5 text-xs text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Clean Message Form */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs">
            {status.state === 'success' ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h4 className="font-semibold text-sm text-gray-900">
                  Message Sent!
                </h4>
                <p className="text-xs text-gray-500">
                  {status.message}
                </p>
                <button
                  onClick={() => setStatus({ state: 'idle', message: '' })}
                  className="mt-2 text-xs font-medium text-blue-600 hover:underline"
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
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'submitting'}
                  className="w-full py-2 px-4 rounded-lg text-xs font-medium bg-gray-900 hover:bg-gray-800 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs"
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
