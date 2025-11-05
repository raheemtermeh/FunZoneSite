import React from 'react';
import { motion } from 'framer-motion';

const mockCafes = [
  { id: 1, name: 'کافه راشا', city: 'تهران', specialty: 'تخصصی مافیا', rating: 4.8, img: 'https://picsum.photos/seed/cafe1/400', capacity: 'شلوغ' },
  { id: 2, name: 'کافه برد', city: 'تهران', specialty: 'مجموعه کامل بردگیم', rating: 4.9, img: 'https://picsum.photos/seed/cafe2/400', capacity: 'متوسط' },
  { id: 3, name: 'کافه فکر', city: 'اصفهان', specialty: 'بازی‌های فکری و آموزشی', rating: 4.5, img: 'https://picsum.photos/seed/cafe3/400', capacity: 'خلوت' },
  { id: 4, name: 'کافه شب‌های تهران', city: 'تهران', specialty: 'محیط دنج و قهوه عالی', rating: 4.6, img: 'https://picsum.photos/seed/cafe4/400', capacity: 'متوسط' },
  { id: 5, name: 'گیم‌لند', city: 'کرج', specialty: 'اتاق فرار و بازی‌های گروهی', rating: 4.7, img: 'https://picsum.photos/seed/cafe5/400', capacity: 'شلوغ' },
  { id: 6, name: 'کافه هنر', city: 'تهران', specialty: 'موسیقی زنده و گالری', rating: 4.4, img: 'https://picsum.photos/seed/cafe6/400', capacity: 'خلوت' },
];

const capacityColors: { [key: string]: string } = {
    'خلوت': 'bg-green-500/20 text-green-400',
    'متوسط': 'bg-yellow-500/20 text-yellow-400',
    'شلوغ': 'bg-red-500/20 text-red-400',
};

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);


const FilterSidebar = () => (
    <div className="w-full lg:w-1/4 bg-gray-900/50 border border-white/10 rounded-2xl p-6 h-fit">
        <h3 className="text-xl font-bold text-white mb-6">فیلتر کافه‌ها</h3>
        <div className="space-y-6">
            <div>
                <label className="text-gray-300">نام کافه</label>
                <input type="text" className="w-full mt-2 bg-gray-800 border border-white/10 rounded-md p-2 text-white" />
            </div>
             <div>
                <label className="text-gray-300">شهر</label>
                <select className="w-full mt-2 bg-gray-800 border border-white/10 rounded-md p-2 text-white">
                    <option>همه</option>
                    <option>تهران</option>
                    <option>کرج</option>
                    <option>اصفهان</option>
                </select>
            </div>
            <div>
                <label className="text-gray-300">نوع بازی موجود</label>
                <div className="mt-2 space-y-2 text-sm">
                    <label className="flex items-center"><input type="checkbox" className="ml-2 bg-transparent"/>مافیا</label>
                    <label className="flex items-center"><input type="checkbox" className="ml-2"/>بردگیم</label>
                    <label className="flex items-center"><input type="checkbox" className="ml-2"/>اتاق فرار</label>
                </div>
            </div>
            <button className="w-full py-2 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">جستجو</button>
        </div>
    </div>
);

const CafeCard: React.FC<{ cafe: typeof mockCafes[0]; onNavigate: (page: string, params: any) => void }> = ({ cafe, onNavigate }) => (
    <motion.div 
        className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ y: -5, scale: 1.02 }}
        onClick={() => onNavigate('cafeDetail', { id: cafe.id })}
    >
        <div className="relative">
            <img src={cafe.img} alt={cafe.name} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 text-sm rounded-full flex items-center gap-1">
                <StarIcon className="w-4 h-4 text-yellow-400"/>
                <span>{cafe.rating.toLocaleString('fa-IR')}</span>
            </div>
            <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs ${capacityColors[cafe.capacity]}`}>{cafe.capacity}</div>
             <div className="absolute bottom-0 p-4 text-right w-full flex justify-between items-end">
                <div>
                    <h4 className="text-lg font-bold text-white">{cafe.name}</h4>
                    <p className="text-sm text-gray-300">{cafe.specialty}</p>
                </div>
                <button className="text-xs bg-fuchsia-500 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">مشاهده جزئیات</button>
            </div>
        </div>
    </motion.div>
);

const CafesPage: React.FC<{ onNavigate: (page: string, params: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-magenta">
                کافه‌های عضو کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                بهترین کافه‌ها برای بازی، دورهمی و ساختن خاطرات خوب.
            </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar />
            <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-white">نمایش ۶ کافه</p>
                    <select className="bg-gray-800 border border-white/10 rounded-md p-2 text-white">
                        <option>بالاترین امتیاز</option>
                        <option>محبوب‌ترین</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {mockCafes.map(cafe => <CafeCard key={cafe.id} cafe={cafe} onNavigate={onNavigate} />)}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CafesPage;
