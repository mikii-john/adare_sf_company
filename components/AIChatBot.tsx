
import React, { useState, useRef, useEffect } from 'react';
import { startAdareChat } from '../geminiService';
import { Icon, AdareLogo } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I\'m Adare AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = startAdareChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) chatRef.current = startAdareChat();
      const result = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "I'm not sure what to say. Please try again." }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I have an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black/10 dark:bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
                <AdareLogo className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest">Adare AI</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] opacity-80 font-bold uppercase tracking-tighter">I am Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-md shadow-primary/10' 
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-white/5 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary dark:text-white font-medium"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-3 bg-primary text-white rounded-xl hover:scale-105 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-primary/20"
            >
              <Icon name="arrow" className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all transform active:scale-90 hover:scale-110 border ${
          isOpen 
            ? 'bg-white text-primary border-primary/20 rotate-90' 
            : 'bg-[#0a0a0a] text-primary border-white/5 shadow-primary/20'
        }`}
      >
        {isOpen ? (
          <Icon name="close" className="w-8 h-8" />
        ) : (
          <div className="relative p-2">
            <AdareLogo className="w-10 h-10" />
            {!isOpen && (
              <div className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full border-2 border-[#0a0a0a] animate-pulse"></div>
            )}
          </div>
        )}
      </button>
    </div>
  );
};
