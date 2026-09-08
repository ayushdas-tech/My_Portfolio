import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { generateAIResponse } from '../../services/aiService';

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
      text: "Hi there! 👋 I'm Ayush's AI Assistant. Ask me anything about his projects, skills, education, or data analytics!"
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
  }, [messages, isOpen, isTyping]);

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
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#292524] text-[#fafaf9] hover:bg-[#44403c] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium">Ask AI Assistant</span>
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
                  Ayush AI Assistant
                </h3>
                <span className="text-[10px] text-emerald-700 flex items-center gap-1 font-medium">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                  LLM Powered · Live
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

          {/* Quick Prompts Suggestions */}
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
              disabled={isTyping}
              placeholder="Ask anything about Ayush..."
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
      )}

    </div>
  );
}
