import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const campaignsData = [
  { id: 1, name: 'شب مافیا', img: 'https://picsum.photos/seed/mafia/200', desc: 'تخفیف ویژه گروه‌های بالای ۴ نفر برای تمام شب‌های مافیا در کافه‌های منتخب.', countdown: true, category: 'بازی', progress: 75, details: { gallery: ['https://picsum.photos/seed/mafia/400/200', 'https://picsum.photos/seed/mafiadetail/400/200'], location: 'کافه‌های منتخب تهران', terms: 'این تخفیف فقط برای رزروهای آنلاین اعمال می‌شود.' } },
  { id: 2, name: 'تخفیف قهوه', img: 'https://picsum.photos/seed/coffee/200', desc: 'با سفارش هر قهوه، قهوه دوم را با ۵۰٪ تخفیف دریافت کنید. این پیشنهاد فقط برای امروز است!', category: 'غذا', details: { gallery: ['https://picsum.photos/seed/coffee/400/200'], location: 'کافه هنر', terms: 'فقط برای قهوه‌های دمی معتبر است.' } },
  { id: 3, name: 'تورنومنت بردگیم', img: 'https://picsum.photos/seed/boardgame/200', desc: 'در تورنومنت بزرگ Catan شرکت کنید و جایزه ۵ میلیون تومانی را برنده شوید.', countdown: true, category: 'تورنومنت', progress: 40, details: { gallery: ['https://picsum.photos/seed/boardgame/400/200'], location: 'کافه برد', terms: 'ورودی مسابقه ۱۰۰ هزار تومان است.' } },
  { id: 4, name: 'ایونت ویژه', img: 'https://picsum.photos/seed/event/200', desc: 'موسیقی زنده به همراه منوی ویژه شب‌های پنجشنبه در کافه هنر.', category: 'ویژه' },
  { id: 5, name: 'پنجشنبه‌ها', img: 'https://picsum.photos/seed/thursday/200', desc: 'شب‌های بازی تا پاسی از شب در تمام کافه‌های همکار کافه زون.', category: 'بازی' },
  { id: 6, name: 'جایزه بزرگ', img: 'https://picsum.photos/seed/prize/200', desc: 'با هر رزرو، یک شانس در قرعه‌کشی هفتگی ما برای بردن یک کنسول بازی دریافت کنید.', category: 'ویژه' },
  { id: 7, name: 'موسیقی زنده', img: 'https://picsum.photos/seed/music/200', desc: 'هر آخر هفته با هنرمندان جدید در کافه‌های منتخب. لیست کافه‌ها را در وبسایت ببینید.', category: 'ویژه' },
];

const categories = ['همه', 'بازی', 'غذا', 'تورنومنت', 'ویژه'];

const Countdown: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft: { days?: number; hours?: number; minutes?: number } = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000 * 60);
        return () => clearTimeout(timer);
    });

    return (
        <div className="text-xs text-cyan-400 font-mono mt-1">
            {timeLeft.days != null && timeLeft.hours != null
                ? `${timeLeft.days} روز ${timeLeft.hours} ساعت مانده`
                : 'پایان یافته'}
        </div>
    );
};

const CampaignModal: React.FC<{ campaign: any; onClose: () => void }> = ({ campaign, onClose }) => {
    return (
        <motion.div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            style={{ perspective: '1000px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div 
                className="bg-gray-900 border border-fuchsia-500/50 rounded-2xl p-6 max-w-lg w-full relative"
                initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl z-10">&times;</button>
                <img src={campaign.img} alt={campaign.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-center mb-2 neon-text-magenta">{campaign.name}</h3>
                <p className="text-gray-400 text-center mb-6">{campaign.desc}</p>
                {campaign.countdown && <div className="text-center"><Countdown /></div>}
                {campaign.progress && (
                    <div className="my-4">
                        <p className="text-sm text-white mb-1 text-center">ظرفیت باقی‌مانده</p>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-fuchsia-500 h-2.5 rounded-full mx-auto" style={{ width: `${campaign.progress}%` }}></div>
                        </div>
                    </div>
                )}
                 {campaign.details && (
                    <div className="mt-6 border-t border-white/10 pt-4 text-sm">
                        <p><strong className="text-white">مکان:</strong> <span className="text-gray-300">{campaign.details.location}</span></p>
                        <p className="mt-2"><strong className="text-white">شرایط:</strong> <span className="text-gray-300">{campaign.details.terms}</span></p>
                    </div>
                )}
                <button className="w-full mt-6 py-2 bg-fuchsia-500 text-white font-bold rounded-full hover:bg-fuchsia-400 transition-colors">
                    شرکت در کمپین
                </button>
            </motion.div>
        </motion.div>
    );
};

const Campaigns: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('همه');
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const filteredCampaigns = activeCategory === 'همه'
    ? campaignsData
    : campaignsData.filter(c => c.category === activeCategory);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 neon-text-magenta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          کمپین‌های فعال
        </motion.h2>
        <div className="flex justify-center mb-12">
            <div className="flex space-x-4 space-x-reverse bg-gray-900 p-2 rounded-full border border-white/10">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1 rounded-full text-sm transition-colors ${activeCategory === cat ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
        <div className="flex items-start space-x-8 space-x-reverse pb-4 overflow-x-auto custom-scrollbar">
          {filteredCampaigns.map((campaign, index) => (
            <motion.div 
                key={index} 
                className="flex flex-col items-center flex-shrink-0 text-center group cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => setSelectedCampaign(campaign)}
            >
              <motion.div 
                className="w-28 h-28 p-1 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                    className="bg-black w-full h-full p-1 rounded-full"
                    transition={{ duration: 0.5 }}
                    whileHover={{ rotateY: 180 }}
                >
                  <img src={campaign.img} alt={campaign.name} className="w-full h-full rounded-full object-cover" style={{ backfaceVisibility: 'hidden' }}/>
                </motion.div>
              </motion.div>
              <span className="mt-3 text-sm font-medium text-gray-300">{campaign.name}</span>
              {campaign.countdown && <Countdown />}
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCampaign && <CampaignModal campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Campaigns;