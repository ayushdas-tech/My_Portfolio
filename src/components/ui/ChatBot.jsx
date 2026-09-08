import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo, educationList, projects, certifications, skillCategories } from '../../data/portfolioData';

const quickPrompts = [
  "💼 What are your projects?",
  "🛠️ What are your skills?",
  "🎓 Tell me about your education",
  "🏆 What certifications do you have?",
  "📬 How can I contact Ayush?",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi there! 👋 I'm Ayush's assistant. Ask me anything about his data analytics projects, skills, education, or how to get in touch!",
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Fixed Rule-Based Response Engine
  const getRuleBasedAnswer = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Projects rule
    if (q.includes('project') || q.includes('case study') || q.includes('sales') || q.includes('retail') || q.includes('dashboard') || q.includes('work')) {
      return {
        text: `Here are Ayush's featured projects:\n\n1. 📊 **Sales & Revenue Analytics Dashboard**: An interactive BI dashboard analyzing revenue, profit, customer cohorts, and regional sales.\n🔗 Demo: https://sales-revenue-analytics-dashboard.netlify.app/\n\n2. 🔍 **Retail Sales Health Check**: SQL-driven analysis diagnosing profitability and discount erosion (>20% discount bleed).`,
        hasLinks: true,
        demoUrl: "https://sales-revenue-analytics-dashboard.netlify.app/",
        githubUrl: "https://github.com/ayushdas-tech/sales-revenue-analytics-dashboard"
      };
    }

    // 2. Skills rule
    if (q.includes('skill') || q.includes('tool') || q.includes('python') || q.includes('sql') || q.includes('excel') || q.includes('power bi') || q.includes('tableau') || q.includes('stack')) {
      return {
        text: `Ayush's core technical toolkit includes:\n\n• **Analytics & BI**: Excel (Power Query, Pivot, VLOOKUP), Power BI (DAX, Modeling), Tableau\n• **Languages**: Python, SQL, C++\n• **Libraries**: Pandas, NumPy, Matplotlib, Seaborn\n• **Databases**: MySQL\n• **CS Core**: DSA, OOP, Operating Systems, Git, GitHub.`
      };
    }

    // 3. Education rule
    if (q.includes('education') || q.includes('college') || q.includes('school') || q.includes('btech') || q.includes('cgpa') || q.includes('degree') || q.includes('study')) {
      return {
        text: `Ayush's academic background:\n\n🎓 **Techno Main Salt Lake** (2023–2027)\n• B.Tech in Computer Science & Business Systems (CSBS)\n• Current CGPA: **6.85**\n\n🏫 **Alipurduar Mc William High School**\n• Higher Secondary (Class XII)\n• Score: **94%**`
      };
    }

    // 4. Certifications rule
    if (q.includes('certificat') || q.includes('coder army') || q.includes('codewithharry') || q.includes('course') || q.includes('dsa')) {
      return {
        text: `Ayush holds two verified credentials:\n\n1. 🏆 **Data Structures & Algorithms** — Coder Army (C++, Complexity Analysis & Logic Building)\n2. 🏆 **Data Analytics** — CodeWithHarry (Python for Analytics, Pandas, NumPy, SQL EDA)`
      };
    }

    // 5. Contact / Hire rule
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('message') || q.includes('job') || q.includes('opportunity') || q.includes('intern')) {
      return {
        text: `You can reach Ayush directly:\n\n📧 **Email**: ayushdas599464@gmail.com\n📍 **Location**: Kolkata, West Bengal, India\n\nHe is actively open for full-time Data Analyst and BI roles!`
      };
    }

    // 6. About Ayush / Bio rule
    if (q.includes('who are you') || q.includes('about') || q.includes('ayush') || q.includes('intro')) {
      return {
        text: `Ayush Das is a final-year B.Tech CSBS student with a strong passion for data analytics and business intelligence. He turns raw data into clean insights and actionable recommendations using Python, SQL, Excel, and BI tools.`
      };
    }

    // 7. Small talk greetings
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('greetings')) {
      return {
        text: `Hello! 👋 How can I help you learn more about Ayush? Feel free to ask about his projects, skills, education, or contact details.`
      };
    }

    // 8. Default fallback
    return {
      text: `I'm a rule-based assistant. You can ask me about:\n\n• **Projects** (e.g. Sales Dashboard, Retail Health Check)\n• **Skills** (e.g. Python, SQL, Power BI, Excel)\n• **Education** (e.g. Techno Main Salt Lake, CGPA)\n• **Contact** (e.g. Email)\n\nOr select one of the suggested buttons below!`
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Realistic typing pause (350ms)
    setTimeout(() => {
      const responseData = getRuleBasedAnswer(query);
      const botResponse = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: responseData.text,
        demoUrl: responseData.demoUrl,
        githubUrl: responseData.githubUrl,
        time: 'Just now'
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat Assistant"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#292524] text-[#fafaf9] hover:bg-[#44403c] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-medium">Chat with Ayush</span>
        </button>
      )}

      {/* Expanded Chat Drawer / Window */}
      {isOpen && (
        <div className="w-[330px] sm:w-[380px] h-[520px] max-h-[85vh] bg-[#ffffff] border border-[#e7e5df] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-[#f7f6f2] border-b border-[#e7e5df] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#292524] text-[#fafaf9] flex items-center justify-center text-xs font-semibold">
                AD
              </div>
              <div>
                <h3 className="font-semibold text-xs text-[#1c1917]">
                  Ayush's Assistant
                </h3>
                <span className="text-[10px] text-emerald-700 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Rule-based Bot · Online
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1 rounded-md text-[#78716c] hover:text-[#1c1917] hover:bg-[#edeae3] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#faf9f6] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#292524] text-[#fafaf9] rounded-br-xs'
                      : 'bg-[#ffffff] text-[#292524] border border-[#e7e5df] rounded-bl-xs shadow-xs'
                  }`}
                >
                  {msg.text}

                  {/* Project links if present */}
                  {msg.demoUrl && (
                    <div className="flex items-center gap-2 pt-2.5 mt-2.5 border-t border-[#f0eee8]">
                      <a
                        href={msg.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 hover:underline"
                      >
                        <span>Open Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1 p-2.5 bg-[#ffffff] border border-[#e7e5df] rounded-xl w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#78716c] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#78716c] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#78716c] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="p-2 bg-[#ffffff] border-t border-[#e7e5df] overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#f0eee8] text-[#44403c] hover:bg-[#e7e5df] transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            className="p-2.5 bg-[#ffffff] border-t border-[#e7e5df] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, education..."
              className="flex-1 px-3 py-1.5 rounded-lg bg-[#faf8f5] border border-[#dedad1] text-xs text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:bg-white focus:border-[#292524] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send Message"
              className="p-2 rounded-lg bg-[#292524] hover:bg-[#44403c] text-[#fafaf9] disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
