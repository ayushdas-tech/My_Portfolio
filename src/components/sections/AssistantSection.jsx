import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowUpRight, Sparkles, Bot, User } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { generateAIResponse } from '../../services/aiService';

const quickPrompts = [
  "💼 What are your projects?",
  "🛠️ What are your skills?",
  "🎓 Tell me about your education",
  "🏆 What certifications do you have?",
  "📬 How can I contact Ayush?",
  "📊 Explain your SQL analysis approach",
];

export function AssistantSection() {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi there! 👋 I'm Ayush's AI Assistant. Ask me anything about his data analytics projects, skills, education, or ask me technical questions about SQL, Python, and data modeling!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isTyping) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim()
    };

    const currentHistory = [...messages, userMessage];
    setMessages(currentHistory);
    setInput('');
    setIsTyping(true);

    try {
      const aiReply = await generateAIResponse(messages, query.trim());
      const botResponse = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: aiReply
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I'm available to answer any questions about Ayush's projects, skills, and background. Feel free to ask or reach out via email at ayushdas599464@gmail.com!"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="assistant" className="py-14 border-t border-[#e7e5df]">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading 
          title="💬 Ask Ayush's AI Assistant" 
          subtitle="Powered by LLM to answer questions about projects, technical skills, background, and data analytics."
        />

        {/* Embedded Interactive LLM Chat Box */}
        <div className="rounded-2xl bg-[#ffffff] border border-[#e7e5df] shadow-xs overflow-hidden flex flex-col h-[500px]">
          
          {/* Header */}
          <div className="p-3.5 bg-[#f7f6f2] border-b border-[#e7e5df] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-[#292524] text-[#fafaf9] flex items-center justify-center text-xs font-semibold">
                AD
              </div>
              <div>
                <span className="font-semibold text-xs text-[#1c1917] block">
                  Ayush AI Assistant
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              LLM Powered · Live
            </span>
          </div>

          {/* Messages Area */}
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
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-[#ffffff] border border-[#e7e5df] rounded-xl w-fit text-[#78716c]">
                <Bot className="w-3.5 h-3.5 animate-spin text-[#292524]" />
                <span className="text-[11px]">AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2 bg-[#ffffff] border-t border-[#e7e5df] overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                disabled={isTyping}
                className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#f0eee8] text-[#44403c] hover:bg-[#e7e5df] disabled:opacity-50 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
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
              disabled={isTyping}
              placeholder="Ask anything about Ayush's projects, skills, or data analysis..."
              className="flex-1 px-3 py-1.5 rounded-lg bg-[#faf8f5] border border-[#dedad1] text-xs text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:bg-white focus:border-[#292524] disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send Message"
              className="p-2 rounded-lg bg-[#292524] hover:bg-[#44403c] text-[#fafaf9] disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
