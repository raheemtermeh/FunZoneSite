import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tutorialData: { [key: string]: any } = {
    mafia: {
        title: 'آموزش کامل مافیا',
        icon: '🎭',
        description: 'در این آموزش جامع، با تمام نقش‌ها، قوانین و استراتژی‌های بازی کلاسیک مافیا آشنا شوید و شهر را از دست مافیاها نجات دهید (یا برعکس!).',
        roles: [
            { name: 'مافیا', desc: 'شهروندان را در شب حذف می‌کنند.' },
            { name: 'پدرخوانده', desc: 'رهبر مافیا که استعلامش منفی است.' },
            { name: 'دکتر لکتر', desc: 'یکی از اعضای مافیا را در شب نجات می‌دهد.' },
            { name: 'شهروند ساده', desc: 'قدرت خاصی ندارد و باید با رای دادن مافیا را پیدا کند.' },
            { name: 'دکتر', desc: 'یک نفر را در شب از گزند مافیا نجات می‌دهد.' },
            { name: 'کارآگاه', desc: 'هر شب استعلام یک نفر را می‌گیرد.' },
            { name: 'حرفه‌ای', desc: 'می‌تواند یک نفر را در شب به انتخاب خود حذف کند.' },
            { name: 'شهردار', desc: 'رای او در روز دو بار حساب می‌شود.' },
        ]
    }
};

const RoleCard: React.FC<{ role: { name: string, desc: string }, index: number }> = ({ role, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <motion.div
            className="w-40 h-56 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front of card */}
                <div className="absolute w-full h-full bg-gray-800 border-2 border-fuchsia-500 rounded-lg flex flex-col items-center justify-center p-4" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="text-5xl">🎭</div>
                    <h3 className="text-xl font-bold text-white mt-4">{role.name}</h3>
                </div>
                {/* Back of card */}
                <div className="absolute w-full h-full bg-gray-900 border-2 border-cyan-500 rounded-lg p-4" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                     <h3 className="text-lg font-bold text-cyan-400 mb-2">{role.name}</h3>
                     <p className="text-sm text-gray-300">{role.desc}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const TutorialDetail: React.FC<{ tutorialId: string, onNavigate: (page: string) => void }> = ({ tutorialId, onNavigate }) => {
    const data = tutorialData[tutorialId];
    const [activeTab, setActiveTab] = useState('roles');

    if (!data) {
        return <div className="text-center py-20">آموزش مورد نظر یافت نشد.</div>
    }

    const renderContent = () => {
        switch(activeTab) {
            case 'roles':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                        {data.roles.map((role: any, index: number) => <RoleCard key={role.name} role={role} index={index}/>)}
                    </div>
                );
            case 'rules':
                 return <div className="text-gray-300 bg-gray-900/50 p-6 rounded-lg">محتوای قوانین بازی در اینجا قرار می‌گیرد...</div>
            case 'quiz':
                 return <div className="text-gray-300 bg-gray-900/50 p-6 rounded-lg">آزمون دانش شما از بازی در اینجا قرار می‌گیرد...</div>
            default:
                return null;
        }
    }

    return (
        <div className="min-h-screen bg-black pt-12 pb-24">
            <div className="container mx-auto px-4">
                <button onClick={() => onNavigate('tutorials')} className="mb-8 text-cyan-400">&larr; بازگشت به لیست آموزش‌ها</button>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-7xl mb-4">{data.icon}</div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-fuchsia">
                        {data.title}
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="flex justify-center mb-12">
                    <div className="flex space-x-4 space-x-reverse bg-gray-900 p-2 rounded-full border border-white/10">
                        <button onClick={() => setActiveTab('roles')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'roles' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>نقش‌ها</button>
                        <button onClick={() => setActiveTab('rules')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'rules' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>قوانین</button>
                        <button onClick={() => setActiveTab('strategy')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'strategy' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>استراتژی‌ها</button>
                        <button onClick={() => setActiveTab('quiz')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'quiz' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>آزمون</button>
                        <button onClick={() => setActiveTab('players')} className={`px-4 py-1 rounded-full text-sm transition-colors ${activeTab === 'players' ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>هم‌بازی</button>
                    </div>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                       {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TutorialDetail;