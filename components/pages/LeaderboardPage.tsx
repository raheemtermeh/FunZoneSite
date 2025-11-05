import React, { useState } from 'react';
import { motion } from 'framer-motion';

const weeklyLeaders = [
    { rank: 1, name: 'علی', score: 2450, avatar: 'https://i.pravatar.cc/40?u=a', trend: 'up' },
    { rank: 2, name: 'سارا', score: 2100, avatar: 'https://i.pravatar.cc/40?u=b', trend: 'down' },
    { rank: 3, name: 'رضا', score: 1980, avatar: 'https://i.pravatar.cc/40?u=c', trend: 'up' },
    { rank: 4, name: 'مریم', score: 1850, avatar: 'https://i.pravatar.cc/40?u=d', trend: 'stable' },
    { rank: 5, name: 'نیما', score: 1700, avatar: 'https://i.pravatar.cc/40?u=e', trend: 'up' },
];

const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === 'up') return <span className="text-green-400">▲</span>;
    if (trend === 'down') return <span className="text-red-400">▼</span>;
    return <span className="text-gray-500">-</span>;
};


const LeaderboardPage: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('weekly');
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-magenta">
                قهرمانان کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                برترین بازیکنان و فعال‌ترین کاربران را در جدول امتیازات دنبال کنید.
            </p>
        </motion.div>

        <div className="flex justify-center mb-8">
            <div className="flex space-x-2 space-x-reverse bg-gray-900 p-2 rounded-full border border-white/10">
                <button onClick={() => setActiveTab('weekly')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'weekly' ? 'bg-magenta-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>امتیاز هفتگی</button>
                <button onClick={() => setActiveTab('mafia')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'mafia' ? 'bg-magenta-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>سلطان مافیا</button>
                <button onClick={() => setActiveTab('cafe')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'cafe' ? 'bg-magenta-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>کافه گرد</button>
            </div>
        </div>

        <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <ul className="space-y-3">
                    {weeklyLeaders.map((player) => (
                         <motion.li 
                            key={player.rank} 
                            className={`flex items-center justify-between p-3 rounded-lg border-2 ${player.rank === 1 ? 'border-yellow-400 bg-yellow-400/10' : 'border-transparent'}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: player.rank * 0.1 }}
                         >
                            <div className="flex items-center gap-4">
                                <span className={`font-bold w-6 text-center text-xl ${player.rank === 1 ? 'text-yellow-400' : player.rank === 2 ? 'text-gray-300' : player.rank === 3 ? 'text-yellow-700' : 'text-white'}`}>{player.rank}</span>
                                <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full" />
                                <span className="font-semibold text-white">{player.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-cyan-400 text-lg">{player.score.toLocaleString('fa-IR')}</span>
                                <TrendIcon trend={player.trend} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
