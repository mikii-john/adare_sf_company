
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { getProjectConsultation } from '../geminiService';
import { Icon } from '../constants';

const CopyableInfo = ({ label, value, icon }: { label: string; value: string; icon: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="flex items-center space-x-4 group py-2 md:p-4 md:-ml-4 rounded-3xl transition-all"
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all border ${
        copied ? 'bg-green-500 border-green-500 text-white' : 'bg-primary/10 border-primary/20 text-primary group-hover:bg-primary group-hover:text-white'
      }`}>
        <Icon name={copied ? 'check-circle' : icon} className="w-6 h-6 md:w-7 md:h-7" />
      </div>
      <div className="flex-1">
        <h4 className="font-black text-xs uppercase tracking-widest text-primary mb-1">{label}</h4>
        <div className="flex items-center justify-between">
          <p className="text-black dark:text-white font-bold text-base md:text-lg">{value}</p>
          <button 
            onClick={handleCopy}
            className={`ml-2 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border shrink-0 ${
              copied 
                ? 'bg-green-500 text-white border-green-500' 
                : 'bg-white dark:bg-white/5 text-primary border-primary/30 hover:bg-primary hover:text-white hover:border-primary'
            }`}
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        project_type: formData.project,
        message: formData.message,
        to_name: 'Milkesa',
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus('error');
    }
  };

  const handleAIConsultation = async () => {
    if (!formData.project) {
       alert('Please tell us about your project first!');
       return;
    }
    setIsConsulting(true);
    const response = await getProjectConsultation(formData.project);
    setAiResponse(response || "I am sorry, I could not think of an answer. Please send us a message instead.");
    setIsConsulting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black text-black dark:text-white mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase">Let's build <br className="hidden sm:block" /> your <span className="text-primary">Website.</span></h1>
          <p className="text-lg md:text-xl text-black dark:text-gray-400 mb-8 md:mb-12 leading-relaxed font-bold">
            Are you ready to grow? Tell us your idea, or use our AI Assistant to get some help right away.
          </p>

          <div className="space-y-6 mb-16">
            <CopyableInfo label="Phone Number" value="0939553283" icon="smile" />
          
            <CopyableInfo label="Send an Email" value="milkesayohanes@gmail.com" icon="users" />
          </div>

          <div className="p-6 md:p-10 bg-black/5 dark:bg-white/5 rounded-[32px] md:rounded-[40px] border border-black/10 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="flex items-center space-x-3 mb-4 md:mb-6 relative z-10">
               <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
               <span className="text-[9px] md:text-[10px] font-black text-black dark:text-gray-500 uppercase tracking-[0.3em]">AI Assistant Online</span>
            </div>
            <h4 className="text-xl md:text-2xl font-black text-black dark:text-white mb-4 md:mb-6 tracking-tight">Quick AI Help</h4>
            <p className="text-xs md:text-sm text-black/70 dark:text-gray-400 mb-6 md:mb-8 font-bold leading-relaxed">
              Write your idea in the form and click the button below. Our AI will give you some advice instantly!
            </p>
            {aiResponse && (
              <div className="mt-4 p-8 bg-white dark:bg-black/40 rounded-3xl border border-primary/30 shadow-2xl animate-in slide-in-from-top-4 duration-500">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 text-primary"><Icon name="cpu" className="w-full h-full" /></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">AI Advice</span>
                </div>
                <p className="text-sm text-black dark:text-white whitespace-pre-line leading-relaxed italic font-bold">
                  "{aiResponse}"
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-10 md:p-16 rounded-[32px] md:rounded-[48px] shadow-2xl border border-black/5 dark:border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
          {status === 'success' ? (
            <div className="text-center animate-in fade-in zoom-in duration-700">
              <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                <Icon name="check-circle" className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-black dark:text-white mb-4 tracking-tighter uppercase">Message Sent!</h2>
              <p className="text-gray-500 dark:text-gray-400 font-bold mb-10 max-w-xs mx-auto">
                Thank you, Milkesa has received your request. We will message you back within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="px-10 py-4 bg-primary text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-3">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-black/5 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-black dark:text-white font-bold"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-3">Your Email</label>
                  <input
                    required
                    name="_replyto"
                    type="email"
                    className="w-full bg-black/5 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-black dark:text-white font-bold"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-3">Your Idea</label>
                <input
                  required
                  name="idea"
                  type="text"
                  className="w-full bg-black/5 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-black dark:text-white font-bold"
                  placeholder="What do you want to build?"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-3">More Details</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full bg-black/5 dark:bg-white/5 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-black dark:text-white font-bold"
                  placeholder="Tell us more about what you need..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex flex-col space-y-4 pt-6">
                 <button
                  type="button"
                  onClick={handleAIConsultation}
                  disabled={isConsulting || status === 'sending'}
                  className="flex items-center justify-center space-x-3 w-full py-5 bg-primary/10 text-primary border border-primary/30 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary hover:text-white transition-all disabled:opacity-50 active:scale-95 shadow-sm"
                >
                  {isConsulting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span>Thinking...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="cpu" className="w-5 h-5" />
                      <span>Get AI Advice</span>
                    </>
                  )}
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-5 bg-black dark:bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-[1.02] transition-all shadow-2xl active:scale-95 disabled:opacity-70 flex items-center justify-center space-x-3"
                >
                  {status === 'sending' && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-center text-xs font-bold animate-pulse mt-2">
                    Something went wrong. Please check your connection or email milkesayohanes@gmail.com directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
