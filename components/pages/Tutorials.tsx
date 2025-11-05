import React from 'react';
import { motion } from 'framer-motion';

const mockTutorials = [
  { id: 'mafia', title: 'آموزش کامل مافیا', category: 'کلاسیک', difficulty: 'متوسط', img: 'https://picsum.photos/seed/tut1/400/500', icon: '🎭' },
  { id: 'catan', title: 'استراتژی‌های برد در Catan', category: 'استراتژی', difficulty: 'سخت', img: 'https://picsum.photos/seed/tut2/400/500', icon: '🎲' },
  { id: 'azul', title: 'چگونه Azul بازی کنیم؟', category: 'خانوادگی', difficulty: 'آسان', img: 'https://picsum.photos/seed/tut3/400/500', icon: '💠' },
  { id: 'secret-hitler', title: 'معرفی بازی Secret Hitler', category: 'نقش مخفی', difficulty: 'متوسط', img: 'https://picsum.photos/seed/tut4/400/500', icon: '🕵️' },
  { id: 'wingspan', title: 'آموزش بازی Wingspan', category: 'استراتژی', difficulty: 'سخت', img: 'https://picsum.photos/seed/tut5/400/500', icon: '🕊️' },
  { id: 'the-mind', title: 'بازی کارتی The Mind', category: 'همکاری', difficulty: 'آسان', img: 'https://picsum.photos/seed/tut6/400/500', icon: '🧠' },
];

const difficultyColors: { [key: string]: string } = {
    'آسان': 'bg-green-500/20 text-green-400',
    'متوسط': 'bg-yellow-500/20 text-yellow-400',
    'سخت': 'bg-red-500/20 text-red-400',
};

const TutorialCard: React.FC<{ tut: typeof mockTutorials[0]; onNavigate: (page: string, params: any) => void }> = ({ tut, onNavigate }) => (
    <motion.div 
        className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 20px rgba(0, 255, 255, 0.1)' }}
        onClick={() => onNavigate('tutorials', { id: tut.id })}
    >
        <div className="relative h-56">
            <img src={tut.img} alt={tut.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${difficultyColors[tut.difficulty]}`}>{tut.difficulty}</div>
            <div className="absolute bottom-4 right-4">
                 <h4 className="text-2xl font-bold text-white mt-1">{tut.title}</h4>
                 <p className="text-sm text-cyan-400">{tut.category}</p>
            </div>
            <div className="absolute top-2 left-2 bg-black/30 p-2 rounded-full text-3xl">{tut.icon}</div>
        </div>
        <div className="p-4 bg-gray-900">
            <p className="text-sm text-gray-400">برای مشاهده جزئیات کامل، استراتژی‌ها و ویدیوهای آموزشی کلیک کنید.</p>
        </div>
    </motion.div>
);

const TutorialsPage: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-cyan">
            مرکز آموزش کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            با آموزش‌های جامع و تعاملی ما، هر بازی را مثل یک حرفه‌ای یاد بگیرید.
            </p>
        </motion.div>
        
        <div className="mb-8 p-4 bg-gray-900/50 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center gap-4">
            <input type="text" placeholder="جستجوی نام بازی..." className="w-full md:w-1/2 bg-gray-800 border border-white/10 rounded-full p-2 px-4 text-white" />
            <div className="flex items-center gap-2">
                <span className="text-gray-300">سطح سختی:</span>
                <button className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-cyan-500 hover:text-black transition">همه</button>
                <button className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-cyan-500 hover:text-black transition">آسان</button>
                <button className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-cyan-500 hover:text-black transition">متوسط</button>
                <button className="px-3 py-1 bg-gray-700 text-sm rounded-full hover:bg-cyan-500 hover:text-black transition">سخت</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTutorials.map(tut => <TutorialCard key={tut.id} tut={tut} onNavigate={onNavigate} />)}
        </div>

      </div>
    </div>
  );
};

export default TutorialsPage;