import React, { useState } from 'react';
import { motion } from 'framer-motion';

const leaderboard = [
    { name: 'علی', score: 2450, avatar: 'https://i.pravatar.cc/40?u=a' },
    { name: 'سارا', score: 2100, avatar: 'https://i.pravatar.cc/40?u=b' },
    { name: 'رضا', score: 1980, avatar: 'https://i.pravatar.cc/40?u=c' },
    { name: 'مریم', score: 1850, avatar: 'https://i.pravatar.cc/40?u=d' },
];

const achievements = [
    { icon: '👑', title: 'سلطان مافیا' },
    { icon: '🎲', title: 'استاد بردگیم' },
    { icon: '🤝', title: 'یار همیشگی' },
    { icon: '🚀', title: 'رویداد اولی' },
]

const galleryImages = [
    'https://picsum.photos/seed/gallery1/300/200',
    'https://picsum.photos/seed/gallery2/300/200',
    'https://picsum.photos/seed/gallery3/300/200',
    'https://picsum.photos/seed/gallery4/300/200',
    'https://picsum.photos/seed/gallery5/300/200',
];

const FunZone: React.FC = () => {
    const [voted, setVoted] = useState(false);
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 neon-text-magenta">
                فان زون کافه زون!
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
                اینجا فقط برای رزرو نیست! ما یک کامیونیتی از گیمرها و آدمای باحالیم. در رویدادهای اختصاصی ما شرکت کنید, جایزه ببرید و دوستان جدید پیدا کنید. فان زون جاییه که سرگرمی هیچوقت تموم نمیشه.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column: Chat & Poll */}
            <div className="space-y-8">
                 <motion.div 
                    className="bg-black/30 border border-white/10 rounded-2xl p-6 h-80 flex flex-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h3 className="text-lg font-bold mb-4 text-white">چت زنده فان زون</h3>
                    <div className="flex-grow space-y-3 overflow-y-auto text-sm pr-2">
                        <p><span className="text-cyan-400 font-semibold">علی:</span> بچه‌ها کسی پایه مافیا آخر هفته هست؟</p>
                        <p><span className="text-fuchsia-400 font-semibold">سارا:</span> من هستم! کافه برد بریم؟</p>
                        <p><span className="text-lime-400 font-semibold">رضا:</span> منم میام اگه Catan بازی کنیم.</p>
                        <p><span className="text-cyan-400 font-semibold">علی:</span> عالیه! پس رزرو می‌کنم.</p>
                    </div>
                    <input type="text" placeholder="پیام خود را بنویسید..." className="mt-4 w-full bg-gray-800/60 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none"/>
                 </motion.div>
                <motion.div 
                    className="bg-black/30 border border-white/10 rounded-2xl p-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                 >
                    <h3 className="text-lg font-bold mb-4 text-white">نظرسنجی بازی هفته</h3>
                    <div className="space-y-2">
                        <button onClick={() => setVoted(true)} disabled={voted} className="w-full text-right p-2 bg-gray-800/50 rounded-md hover:bg-cyan-500/20 disabled:opacity-70">مافیا</button>
                        <button onClick={() => setVoted(true)} disabled={voted} className="w-full text-right p-2 bg-gray-800/50 rounded-md hover:bg-cyan-500/20 disabled:opacity-70">Catan</button>
                        <button onClick={() => setVoted(true)} disabled={voted} className="w-full text-right p-2 bg-gray-800/50 rounded-md hover:bg-cyan-500/20 disabled:opacity-70">Azul</button>
                    </div>
                    {voted && <p className="text-xs text-cyan-400 mt-2 text-center">از رای شما متشکریم!</p>}
                 </motion.div>
            </div>

            {/* Middle Column: Main CTA & Leaderboard */}
            <motion.div 
                className="bg-fuchsia-900/20 border border-fuchsia-500/30 rounded-2xl p-8 text-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-lg p-4">
                    <p className="font-bold text-white">رویداد بعدی فان زون:</p>
                    <p className="text-fuchsia-300 text-lg">تورنومنت آنلاین مافیا - جمعه ساعت ۹ شب</p>
                </div>
                 <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                    <p className="font-bold text-white">چالش هفتگی:</p>
                    <p className="text-cyan-300 text-lg">۳ برد در بازی Codenames و دریافت ۱۰۰ امتیاز!</p>
                </div>
                <button className="w-full px-8 py-3 bg-fuchsia-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_#f0f] hover:shadow-[0_0_25px_#f0f] hover:scale-105">
                    ورود به فان زون
                </button>
                 <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                    <h3 className="text-lg font-bold mb-4 text-white">جدول امتیازات هفتگی</h3>
                    <ul className="space-y-3">
                        {leaderboard.map((player, index) => (
                             <li key={index} className="flex items-center justify-between bg-gray-800/50 p-2 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <span className={`font-bold w-6 text-center text-lg ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-300' : 'text-yellow-700'}`}>{index + 1}</span>
                                    <img src={player.avatar} alt={player.name} className="w-8 h-8 rounded-full" />
                                    <span className="font-semibold text-white text-sm">{player.name}</span>
                                </div>
                                <span className="font-mono text-cyan-400 text-sm">{player.score}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Right Column: Gallery & Achievements */}
            <div className="space-y-8">
                <motion.div 
                    className="lg:h-[26rem] h-80"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                     <h3 className="text-lg font-bold mb-4 text-white text-center lg:text-right">گالری تصاویر فان زون</h3>
                     <div className="space-y-4">
                        {galleryImages.slice(0, 3).map((img, i) => (
                            <motion.img 
                                key={i} 
                                src={img} 
                                className="w-full h-24 object-cover rounded-lg border-2 border-transparent hover:border-cyan-400 transition-all"
                                whileHover={{ scale: 1.05, z: 10 }}
                             />
                        ))}
                     </div>
                </motion.div>
                <motion.div 
                    className="bg-black/30 border border-white/10 rounded-2xl p-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                 >
                    <h3 className="text-lg font-bold mb-4 text-white">آخرین دستاوردها</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        {achievements.map(a => (
                            <div key={a.title} className="bg-gray-800/50 p-3 rounded-lg">
                                <span className="text-3xl">{a.icon}</span>
                                <p className="text-xs mt-1 text-gray-300">{a.title}</p>
                            </div>
                        ))}
                    </div>
                 </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FunZone;