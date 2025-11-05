import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const featuredEvents = [
    { title: 'قهرمانی مافیا', location: 'کافه راشا', img: 'https://picsum.photos/seed/mafiahero/400' },
    { title: 'شب بردگیم', location: 'کافه برد', img: 'https://picsum.photos/seed/boardgamehero/400' },
    { title: 'اجرای موسیقی زنده', location: 'کافه هنر', img: 'https://picsum.photos/seed/musichero/400' },
];

const trendingSearches = ['مافیا پیشرفته', 'Catan', 'کافه نزدیک پارک ملت', 'اتاق فرار'];

const Hero: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-500, 500], [10, -10]);
    const rotateY = useTransform(mouseX, [-500, 500], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

  return (
    <>
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-grid" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black"></div>
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ rotateX, rotateY, transformPerspective: '1000px' }}
      >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </motion.div>
      <motion.div
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white">
          به <span className="neon-text-cyan">کافه زون</span> خوش آمدید
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          پاتوق سرگرمی و رویدادهای هیجان‌انگیز. مافیا، بازی‌های رومیزی و بهترین کافه‌ها، همه در یکجا.
        </p>
        <motion.div 
            className="mt-10 max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-4 rounded-full border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <form className="flex flex-col sm:flex-row items-center gap-3">
                <input type="text" placeholder="دنبال چه رویدادی می‌گردی؟ (مثلا مافیا)" className="w-full sm:w-1/2 bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 py-2" />
                <select className="w-full sm:w-1/4 bg-transparent text-white focus:outline-none px-4 py-2 appearance-none border-r border-l border-white/10">
                    <option className="bg-black">تهران</option>
                    <option className="bg-black">کرج</option>
                    <option className="bg-black">اصفهان</option>
                </select>
                <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-black font-bold text-md rounded-full transition-all duration-300 shadow-[0_0_15px_#0ff] hover:shadow-[0_0_25px_#0ff] hover:scale-105 flex-shrink-0">
                    پیدا کن
                </button>
            </form>
        </motion.div>
        <div className="mt-6 flex justify-center items-center flex-wrap gap-4 text-sm text-gray-400">
            <button onClick={() => onNavigate('aiAssistant')} className="border border-fuchsia-500 text-fuchsia-400 rounded-full px-3 py-1 hover:bg-fuchsia-800 hover:text-white transition-colors flex items-center gap-1">
                ✨ دستیار هوشمند
            </button>
            <button className="border border-gray-600 rounded-full px-3 py-1 hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-1">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 نزدیک من
            </button>
            <button onClick={() => onNavigate('eventDetail', { id: 1 })} className="bg-lime-500/20 text-lime-300 border border-lime-500 rounded-full px-3 py-1 hover:bg-lime-800 hover:text-white transition-colors flex items-center gap-1 animate-pulse">
                🔥 رویداد ویژه: رزرو سریع تورنومنت مافیا
            </button>
        </div>
         <div className="mt-4 flex justify-center items-center gap-2 text-xs text-gray-500">
            <span>جستجوهای پرطرفدار:</span>
            {trendingSearches.map(t => <button key={t} className="hover:text-cyan-400 transition-colors">{t}</button>)}
        </div>
        <motion.div 
            className="mt-12 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <h3 className="text-white mb-4">رویدادهای ویژه</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredEvents.map((event, index) => (
                    <motion.div 
                        key={index}
                        className="relative rounded-lg overflow-hidden group border border-white/10"
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <img src={event.img} className="w-full h-32 object-cover" alt={event.title} />
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="absolute bottom-0 p-2 text-right">
                            <h4 className="font-bold text-white text-sm">{event.title}</h4>
                            <p className="text-xs text-gray-300">{event.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;