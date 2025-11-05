import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const games = [
  {
    id: 'mafia',
    title: 'مافیا',
    description: 'نقش خود را مخفی نگه دارید و شهر را نجات دهید یا به عنوان مافیا، شهر را به آشوب بکشید.',
    img: 'https://picsum.photos/seed/mafiagame/400/500',
    color: 'fuchsia',
    difficulty: 'متوسط',
    players: '6-12',
    time: '45-90 دقیقه',
    videoUrl: 'https://www.aparat.com/v/example'
  },
  {
    id: 'catan',
    title: 'بازی‌های رومیزی',
    description: 'مجموعه‌ای از بهترین و جدیدترین بازی‌های فکری و استراتژیک برای رقابت با دوستانتان.',
    img: 'https://picsum.photos/seed/boardgames/400/500',
    color: 'cyan',
    difficulty: 'متنوع',
    players: '2-8',
    time: '30-120 دقیقه',
    videoUrl: 'https://www.aparat.com/v/example'
  },
  {
    id: 'escape-room',
    title: 'اتاق فرار',
    description: 'معماها را حل کنید، سرنخ‌ها را پیدا کنید و قبل از تمام شدن زمان، از اتاق فرار کنید.',
    img: 'https://picsum.photos/seed/escape/400/500',
    color: 'lime',
    difficulty: 'سخت',
    players: '4-10',
    time: '60 دقیقه',
    videoUrl: 'https://www.aparat.com/v/example'
  },
];

const PlayIcon = () => (
    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"></path>
    </svg>
);

const UsersIcon = () => <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const ClockIcon = () => <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const GameCard: React.FC<{ game: typeof games[0]; onNavigate: (page: string, params?: any) => void }> = ({ game, onNavigate }) => {
    const { id, title, description, img, color, difficulty, players, time } = game;
    const neonTextClass = `text-${color}-400`;
    const neonBorderClass = `group-hover:shadow-[0_0_20px_var(--tw-shadow-color)]`;
    const bgColor = `bg-${color}-500`;
    const borderColor = `border-${color}-400`;
    const textColor = `text-${color}-400`;

    return (
        <motion.div
            onClick={() => onNavigate('tutorials', { id })}
            className="relative group w-full h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            whileHover={{ scale: 1.03, z: 20 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm rounded-full border border-white/20">{difficulty}</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            <motion.div 
                className="relative h-full flex flex-col justify-end p-6"
                style={{ transformStyle: 'preserve-3d' }}
            >
                 <motion.div style={{transform: 'translateZ(20px)'}} className="flex items-center gap-4 text-xs text-white mb-2">
                    <span className="flex items-center bg-black/30 px-2 py-1 rounded-full"><UsersIcon /> {players}</span>
                    <span className="flex items-center bg-black/30 px-2 py-1 rounded-full"><ClockIcon /> {time}</span>
                </motion.div>
                <motion.h3 
                    className={`text-3xl font-bold mb-2 ${neonTextClass}`} 
                    style={{ textShadow: `0 0 10px var(--tw-shadow-color)`, transform: 'translateZ(40px)'}}
                >
                    {title}
                </motion.h3>
                <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden"
                    style={{ transform: 'translateZ(30px)' }}
                >
                    <p className="text-gray-300 mb-4">{description}</p>
                     <button className={`w-fit px-4 py-2 border ${borderColor} rounded-full ${textColor} transition-all duration-300 hover:bg-${color}-400 hover:text-black`}>
                        مشاهده آموزش
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};


const GameTutorials: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white neon-text-cyan"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, amount: 0.5 }}
        >
          بازی‌ها رو حرفه‌ای شو
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} game={game} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameTutorials;
