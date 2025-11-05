
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const userFeatures = [
    { icon: '📅', title: 'رزرو آنی', desc: 'صندلی خود را در محبوب‌ترین رویدادها فورا رزرو کنید.'},
    { icon: '💸', title: 'تخفیف‌های اختصاصی', desc: 'از تخفیف‌های ویژه کاربران اپلیکیشن بهره‌مند شوید.'},
    { icon: '🏆', title: 'جامعه کاربری فعال', desc: 'به جامعه‌ای از گیمرها بپیوندید و دوستان جدید پیدا کنید.'},
];

const businessFeatures = [
    { icon: '📝', title: 'مدیریت رویدادها', desc: 'رویدادهای خود را به سادگی ایجاد و مدیریت کنید.'},
    { icon: '📈', title: 'افزایش مشتریان', desc: 'هزاران کاربر جدید را به سمت کافه خود جذب کنید.'},
    { icon: '📊', title: 'ابزارهای تحلیلی', desc: 'آمار دقیق رزروها و درآمد خود را مشاهده کنید.'},
];

const testimonials = [
    { name: 'سارا', text: 'با کافه زون همیشه بهترین ایونت‌های مافیا رو پیدا می‌کنم. عالیه!', role: 'کاربر' },
    { name: 'کافه برد', text: 'از وقتی پنل کافه‌داری رو فعال کردیم، تعداد مشتری‌هامون دو برابر شده.', role: 'کافه‌دار' },
    { name: 'علی', text: 'اپلیکیشن خیلی روون و کاربردیه. رزرو کردن کمتر از یک دقیقه طول می‌کشه.', role: 'کاربر' },
]

const AppPromo: React.FC = () => {
    const [activeTab, setActiveTab] = useState('user');
    const features = activeTab === 'user' ? userFeatures : businessFeatures;

  return (
    <section className="py-24 bg-gray-900 bg-grid">
       <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-white"
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
        >
          دنیای سرگرمی در دستان شما
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">اپلیکیشن کافه زون، چه کاربر باشید و چه کافه‌دار، بهترین ابزارها را برای شما فراهم می‌کند.</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left/Right Content */}
            <div className="w-full lg:w-1/4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className={`text-3xl font-bold mb-6 text-center lg:text-right ${activeTab === 'user' ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                            {activeTab === 'user' ? 'برای کاربران' : 'برای کافه‌داران'}
                        </h3>
                        <ul className="space-y-4">
                            {features.map(feature => (
                                <li key={feature.title} className="flex items-start gap-4">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-bold text-white">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 3D Phone Mockup */}
            <motion.div 
                className="w-64 h-[32rem] bg-gray-800 rounded-[2.5rem] border-4 border-gray-700 p-2 shadow-2xl"
                style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            >
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                    <AnimatePresence>
                        <motion.img 
                            key={activeTab}
                            src={activeTab === 'user' ? 'https://picsum.photos/seed/appuser/300/600' : 'https://picsum.photos/seed/appbusiness/300/600'}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Controls and Downloads */}
            <div className="w-full lg:w-1/4 flex flex-col items-center">
                 <div className="flex space-x-2 space-x-reverse bg-gray-800 p-1 rounded-full mb-8">
                    <button onClick={() => setActiveTab('user')} className={`px-6 py-2 rounded-full transition ${activeTab === 'user' ? 'bg-cyan-500 text-black' : 'text-gray-300'}`}>کاربران</button>
                    <button onClick={() => setActiveTab('business')} className={`px-6 py-2 rounded-full transition ${activeTab === 'business' ? 'bg-fuchsia-500 text-white' : 'text-gray-300'}`}>کافه‌داران</button>
                </div>
                <p className="text-gray-300 mb-4">اپلیکیشن را دانلود کنید</p>
                 <div className="flex items-center gap-4">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=cafebazaar&bgcolor=111827&color=${activeTab === 'user' ? '00ffff' : 'ff00ff'}`} alt="QR Code" className="rounded-lg border-2 border-white/20"/>
                    <div className="flex flex-col gap-2">
                        <button className="px-4 py-1.5 bg-gray-700 text-white rounded-md text-sm">کافه بازار</button>
                        <button className="px-4 py-1.5 bg-gray-700 text-white rounded-md text-sm">مایکت</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
            <h3 className="text-2xl font-bold text-center text-white mb-8">صدای مشتریان ما</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div 
                        key={i}
                        className="bg-gray-800/50 border border-white/10 p-6 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <p className="text-gray-300 mb-4">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-cyan-400 mr-3">{t.name.charAt(0)}</div>
                            <div>
                                <p className="font-semibold text-white">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AppPromo;
