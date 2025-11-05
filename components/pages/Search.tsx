import React from 'react';
import { motion } from 'framer-motion';

const mockEvents = [
  { id: 1, type: 'event', title: 'تورنومنت مافیا', cafe: 'کافه راشا', city: 'تهران', img: 'https://picsum.photos/seed/event1/400' },
  { id: 4, type: 'event', title: 'مافیای کلاسیک', cafe: 'کافه شب‌های تهران', city: 'تهران', img: 'https://picsum.photos/seed/event4/400' },
];

const mockCafes = [
  { id: 1, type: 'cafe', name: 'کافه راشا', city: 'تهران', specialty: 'تخصصی مافیا', img: 'https://picsum.photos/seed/cafe1/400' },
];

const SearchResultCard: React.FC<{ item: any; onNavigate: (page: string, params: any) => void }> = ({ item, onNavigate }) => {
    const isEvent = item.type === 'event';
    const detailPage = isEvent ? 'eventDetail' : 'cafeDetail';

    return (
        <motion.div
            className="bg-gray-900 border border-white/10 rounded-2xl flex items-center gap-4 p-4 cursor-pointer"
            whileHover={{ y: -5, scale: 1.02, backgroundColor: '#1F2937' }}
            onClick={() => onNavigate(detailPage, { id: item.id })}
        >
            <img src={item.img} alt={isEvent ? item.title : item.name} className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-grow">
                <span className={`text-xs px-2 py-1 rounded-full ${isEvent ? 'bg-cyan-500/20 text-cyan-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}>
                    {isEvent ? 'رویداد' : 'کافه'}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">{isEvent ? item.title : item.name}</h3>
                <p className="text-sm text-gray-400">{isEvent ? `${item.cafe} - ${item.city}` : `${item.specialty} - ${item.city}`}</p>
            </div>
            <span className="text-cyan-400 text-2xl">&larr;</span>
        </motion.div>
    );
};

const SearchPage: React.FC<{ query?: string; onNavigate: (page: string, params: any) => void }> = ({ query, onNavigate }) => {
    // In a real app, you would fetch search results based on the query.
    // Here we just filter our mock data if the query includes 'مافیا'.
    const results = query?.includes('مافیا') ? [...mockEvents, ...mockCafes] : [];
    
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-4xl font-extrabold text-white mb-4">
                نتایج جستجو برای: "<span className="neon-text-cyan">{query}</span>"
            </h1>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
            {results.length > 0 ? (
                <div className="space-y-4">
                    {results.map((item, index) => (
                         <motion.div
                            key={`${item.type}-${item.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SearchResultCard item={item} onNavigate={onNavigate} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center bg-gray-900/50 border border-white/10 rounded-2xl p-8">
                    <p className="text-2xl mb-4">😕</p>
                    <p className="text-gray-300">متاسفانه نتیجه‌ای برای جستجوی شما پیدا نشد.</p>
                    <p className="text-gray-400 text-sm mt-2">لطفا عبارت دیگری را امتحان کنید.</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
