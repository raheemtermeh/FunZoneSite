import React from 'react';
import { motion } from 'framer-motion';

const mockCafes: { [key: string]: any } = {
  1: { id: 1, name: 'کافه راشا', city: 'تهران', specialty: 'تخصصی مافیا', rating: 4.8, img: 'https://picsum.photos/seed/cafe1/800/400', gallery: ['https://picsum.photos/seed/cafe1_1/200', 'https://picsum.photos/seed/cafe1_2/200', 'https://picsum.photos/seed/cafe1_3/200'], description: 'کافه راشا پاتوق حرفه‌ای‌های مافیا در تهران است. با بهترین گادها و بازیکنان، تجربه‌ای بی‌نظیر از بازی مافیا را داشته باشید.', events: [{id: 1, title: 'تورنومنت هفتگی مافیا'}, {id: 6, title: 'شب مافیا (پیشرفته)'}] },
  2: { id: 2, name: 'کافه برد', city: 'تهران', specialty: 'مجموعه کامل بردگیم', rating: 4.9, img: 'https://picsum.photos/seed/cafe2/800/400', gallery: ['https://picsum.photos/seed/cafe2_1/200', 'https://picsum.photos/seed/cafe2_2/200', 'https://picsum.photos/seed/cafe2_3/200'], description: 'کافه برد با بیش از ۲۰۰ عنوان بازی رومیزی، بزرگترین آرشیو بردگیم در ایران را داراست.', events: [{id: 2, title: 'شب بازی Catan'}] },
};

// FIX: Changed component definition to React.FC to resolve TypeScript error with 'key' prop.
const StarIcon: React.FC<{ className?: string }> = ({ className = '' }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>;

const vibes = [
    { icon: '🤫', label: 'دنج و ساکت' },
    { icon: '☕', label: 'گرم و صمیمی' },
    { icon: '🎉', label: 'شلوغ و پرهیجان' },
    { icon: '💡', label: 'مناسب کار' },
]

const reviews = [
    { name: 'سارا', rating: 5, text: 'بهترین جا برای مافیا! گاد عالی، بازیکن‌ها هم حرفه‌ای.'},
    { name: 'علی', rating: 4, text: 'محیط خوبی داره ولی آخر هفته‌ها خیلی شلوغ میشه.'},
]

const CafeDetail: React.FC<{ cafeId: string; onNavigate: (page: string, params?: any) => void }> = ({ cafeId, onNavigate }) => {
    const cafe = mockCafes[cafeId];

    if (!cafe) {
        return <div className="text-center py-20 text-white">کافه مورد نظر یافت نشد.</div>;
    }

    return (
        <div className="min-h-screen bg-black pt-8 pb-24" style={{ perspective: '1500px' }}>
            <div className="container mx-auto px-4">
                <button onClick={() => onNavigate('cafes')} className="mb-4 text-cyan-400">&larr; بازگشت به لیست کافه‌ها</button>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                    <img src={cafe.img} alt={cafe.name} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 right-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white neon-text-magenta">{cafe.name}</h1>
                        <p className="text-lg text-gray-300">{cafe.specialty}</p>
                    </div>
                     <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 text-md rounded-full flex items-center gap-2 border border-white/10">
                        <StarIcon className="w-5 h-5 text-yellow-400"/>
                        <span className="font-bold">{cafe.rating.toLocaleString('fa-IR')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}}>
                            <h2 className="text-2xl font-bold text-white mb-4">درباره کافه</h2>
                            <p className="text-gray-300 leading-relaxed bg-gray-900/50 p-6 rounded-lg border border-white/10">{cafe.description}</p>
                        </motion.div>
                        
                         <motion.div className="mt-8" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.2}}>
                            <h2 className="text-2xl font-bold text-white mb-4">گالری تصاویر</h2>
                            <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
                                {cafe.gallery.map((img: string, i: number) => <img key={i} src={img} className="w-40 h-28 object-cover rounded-lg flex-shrink-0" />)}
                            </div>
                        </motion.div>

                        <motion.div className="mt-8" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.3}}>
                            <h2 className="text-2xl font-bold text-white mb-4">رویدادهای پیش رو</h2>
                            <div className="space-y-3">
                                {cafe.events.map((event: any) => (
                                    <div key={event.id} onClick={() => onNavigate('eventDetail', {id: event.id})} className="bg-gray-900/50 p-3 rounded-lg flex justify-between items-center border border-white/10 hover:border-cyan-400 transition-colors cursor-pointer">
                                        <p className="font-bold text-white">{event.title}</p>
                                        <span className="text-cyan-400 text-sm">مشاهده جزئیات &larr;</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                         <motion.div className="mt-8" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.4}}>
                            <h2 className="text-2xl font-bold text-white mb-4">نظرات کاربران</h2>
                             <div className="space-y-4">
                                {reviews.map((review, i) => (
                                    <div key={i} className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-bold text-white">{review.name}</p>
                                            <div className="flex items-center gap-1">
                                                {[...Array(review.rating)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-400" />)}
                                                {[...Array(5-review.rating)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-gray-600" />)}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-300">{review.text}</p>
                                    </div>
                                ))}
                             </div>
                        </motion.div>
                    </div>
                    <div className="space-y-8" style={{ transformStyle: 'preserve-3d' }}>
                        <motion.div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.5}} whileHover={{ y: -5, rotateX: 5, scale: 1.03 }}>
                            <h3 className="text-xl font-bold text-white mb-4">وایب کافه چطوره؟</h3>
                             <div className="grid grid-cols-2 gap-3">
                                {vibes.map(vibe => (
                                    <button key={vibe.label} className="text-center p-3 bg-gray-800 rounded-lg hover:bg-fuchsia-500/50 transition-colors">
                                        <div className="text-2xl">{vibe.icon}</div>
                                        <p className="text-xs mt-1 text-gray-300">{vibe.label}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                         <motion.div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.6}} whileHover={{ y: -5, rotateX: 5, scale: 1.03 }}>
                            <h3 className="text-xl font-bold text-white mb-4">منوی کافه (نمونه)</h3>
                             <ul className="text-sm text-gray-300 space-y-2">
                                <li className="flex justify-between"><span>اسپرسو</span> <span>۶۰,۰۰۰</span></li>
                                <li className="flex justify-between"><span>کافه لاته</span> <span>۸۰,۰۰۰</span></li>
                                <li className="flex justify-between"><span>چیزکیک</span> <span>۱۲۰,۰۰۰</span></li>
                            </ul>
                            <button className="w-full text-center mt-4 text-cyan-400 text-sm">مشاهده منوی کامل</button>
                        </motion.div>
                         <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.7}}>
                             <button className="w-full py-3 bg-cyan-500 text-black font-bold rounded-full text-lg hover:bg-cyan-400 transition-colors neon-border-cyan">رزرو میز</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CafeDetail;