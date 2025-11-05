import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AIAssistantPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: 'سلام! من دستیار هوشمند کافه زون هستم. دنبال چه نوع سرگرمی‌ای می‌گردی؟ مثلا بگو: "یه کافه دنج برای بردگیم دونفره میخوام"' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = `شما دستیار هوشمند پلتفرم "کافه زون" هستید. به درخواست کاربر برای پیدا کردن کافه یا رویداد سرگرمی در تهران پاسخ دهید. پاسخ شما باید دوستانه، خلاقانه و شامل پیشنهادهای مشخص باشد. درخواست کاربر: "${input}"`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            const aiMessage: Message = { sender: 'ai', text: response.text };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("AI Error:", error);
            const errorMessage: Message = { sender: 'ai', text: 'متاسفانه مشکلی پیش اومد. میشه لطفا دوباره تلاش کنی؟' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black pt-12 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl font-extrabold text-white mb-4 neon-text-fuchsia">
                        دستیار هوشمند کافه زون
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        با من صحبت کن تا بهترین پیشنهادها رو برات پیدا کنم!
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-gray-900/50 border border-white/10 rounded-2xl h-[60vh] flex flex-col">
                    <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <motion.div 
                                key={index} 
                                className={`flex items-end gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'ai' ? 'bg-fuchsia-500' : 'bg-cyan-500'}`}>
                                    {msg.sender === 'ai' ? '✨' : '👤'}
                                </div>
                                <div className={`p-3 rounded-lg max-w-md ${msg.sender === 'ai' ? 'bg-gray-800 text-gray-300' : 'bg-cyan-800 text-white'}`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                         {loading && (
                             <div className="flex items-end gap-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-fuchsia-500 animate-pulse">✨</div>
                                 <div className="p-3 rounded-lg bg-gray-800 text-gray-400">
                                     <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                                     </div>
                                 </div>
                             </div>
                         )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-4 border-t border-white/10">
                        <form className="flex items-center gap-3" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="پیام خود را بنویسید..."
                                className="w-full bg-gray-800 border border-white/10 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                            />
                            <button type="submit" className="px-5 py-2 bg-fuchsia-500 text-white font-bold rounded-full transition-colors hover:bg-fuchsia-600 disabled:bg-gray-600" disabled={loading}>
                                ارسال
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAssistantPage;
