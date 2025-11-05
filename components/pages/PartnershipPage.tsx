import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    { icon: '📈', title: 'افزایش مشتری', text: 'با نمایش کافه و رویدادهایتان به هزاران کاربر فعال، مشتریان جدید جذب کنید.'},
    { icon: '💻', title: 'پنل مدیریت آسان', text: 'رویدادها، رزروها و امور مالی خود را به سادگی از طریق پنل اختصاصی مدیریت کنید.'},
    { icon: '📢', title: 'تبلیغات هدفمند', text: 'از کمپین‌های تبلیغاتی و پوشش خبری ما در شبکه‌های اجتماعی بهره‌مند شوید.'},
    { icon: '📊', title: 'داده‌های تحلیلی', text: 'به گزارش‌های دقیق از عملکرد رویدادها و بازخورد کاربران دسترسی داشته باشید.'},
];

const PartnershipPage: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-24 bg-grid">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                به خانواده <span className="neon-text-cyan">کافه زون</span> بپیوندید
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                اگر صاحب کافه، برگزارکننده رویداد یا به دنبال یک همکاری استراتژیک هستید، ما آماده‌ایم تا با هم رشد کنیم.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={benefit.title}
                    className="bg-gray-900/50 border border-white/10 p-6 rounded-2xl text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.text}</p>
                </motion.div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center bg-gray-900 border border-cyan-500/20 rounded-3xl p-8 lg:p-12">
            <motion.div
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-4">آماده همکاری هستید؟</h2>
                <p className="text-gray-300 mb-6">فرم زیر را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند و تمام اطلاعات لازم برای شروع همکاری را در اختیارتان قرار دهند.</p>
                <form className="space-y-4">
                    <input type="text" placeholder="نام کافه / مجموعه" className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <input type="text" placeholder="نام شما" className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <input type="tel" placeholder="شماره تماس" className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <button type="submit" className="w-full px-8 py-3 bg-cyan-500 text-black font-bold text-lg rounded-full transition-all duration-300 hover:bg-cyan-400 neon-border-cyan hover:shadow-none">
                        درخواست همکاری
                    </button>
                </form>
            </motion.div>
            <motion.div
                className="lg:w-1/2 w-full"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, amount: 0.5 }}
            >
                <motion.div
                    className="w-full h-80 bg-gray-800 rounded-2xl p-4 shadow-2xl"
                    style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
                    whileHover={{ rotateY: 5, rotateX: -3, scale: 1.05 }}
                >
                    <div className="w-full h-full bg-black/50 rounded-lg border border-white/10 flex items-center justify-center">
                       <p className="text-3xl font-bold neon-text-cyan">پنل مدیریت کافه زون</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default PartnershipPage;
