import React from 'react';
import { motion } from 'framer-motion';

const mockNotifications = [
    { id: 1, type: 'confirm', text: 'رزرو شما برای تورنومنت مافیا در کافه راشا تایید شد.', time: '۲ دقیقه پیش', read: false, icon: '✅' },
    { id: 2, type: 'reminder', text: 'یادآوری: رویداد شب بازی Catan فردا ساعت ۱۹:۰۰ شروع می‌شود.', time: '۱ ساعت پیش', read: false, icon: '🔔' },
    { id: 3, type: 'promo', text: 'کمپین جدید! ۵۰٪ تخفیف برای قهوه در کافه هنر فقط برای امروز.', time: '۳ ساعت پیش', read: true, icon: '🔥' },
    { id: 4, type: 'social', text: 'علی پاسخی به پیام شما در چت فان زون ارسال کرد.', time: '۱ روز پیش', read: true, icon: '💬' },
    { id: 5, type: 'update', text: 'ظرفیت رویداد مافیای کلاسیک در کافه شب‌های تهران تکمیل شد.', time: '۲ روز پیش', read: true, icon: 'ℹ️' },
];


const NotificationsPage: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl font-extrabold text-white mb-4 neon-text-cyan">
                اعلانات
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                آخرین اخبار و به‌روزرسانی‌های مربوط به فعالیت‌های خود را اینجا ببینید.
            </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-white font-bold">امروز</h2>
                <button className="text-sm text-cyan-400">علامت‌گذاری همه به عنوان خوانده شده</button>
            </div>
            <div className="space-y-4">
                {mockNotifications.map((notif, index) => (
                    <motion.div
                        key={notif.id}
                        className={`p-4 rounded-xl flex items-start gap-4 border ${!notif.read ? 'bg-cyan-900/30 border-cyan-500/30' : 'bg-gray-900/50 border-white/10'}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-xl flex-shrink-0">{notif.icon}</div>
                        <div className="flex-grow">
                            <p className="text-white">{notif.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                        {!notif.read && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full self-center flex-shrink-0"></div>}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
