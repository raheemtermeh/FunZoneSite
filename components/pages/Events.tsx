import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockEvents = [
  { id: 1, title: 'تورنومنت مافیا', cafe: 'کافه راشا', city: 'تهران', game: 'مافیا', price: '50,000', spots: '3/10', date: '۱۴۰۳/۰۵/۱۰', img: 'https://picsum.photos/seed/event1/400', pos: {top: '20%', left: '30%'} },
  { id: 2, title: 'شب بازی Catan', cafe: 'کافه برد', city: 'تهران', game: 'بردگیم', price: '40,000', spots: '8/12', date: '۱۴۰۳/۰۵/۱۱', img: 'https://picsum.photos/seed/event2/400', pos: {top: '45%', left: '50%'} },
  { id: 3, title: 'آموزش بازی Azul', cafe: 'کافه فکر', city: 'اصفهان', game: 'آموزش', price: 'رایگان', spots: '5/8', date: '۱۴۰۳/۰۵/۱۲', img: 'https://picsum.photos/seed/event3/400', pos: {top: '70%', left: '65%'} },
  { id: 4, title: 'مافیای کلاسیک', cafe: 'کافه شب‌های تهران', city: 'تهران', game: 'مافیا', price: '60,000', spots: '10/12', date: '۱۴۰۳/۰۵/۱۰', img: 'https://picsum.photos/seed/event4/400', pos: {top: '50%', left: '20%'} },
  { id: 5, title: 'دورهمی بردگیم', cafe: 'کافه برد', city: 'تهران', game: 'بردگیم', price: '35,000', spots: 'محدود', date: '۱۴۰۳/۰۵/۱۴', img: 'https://picsum.photos/seed/event5/400', pos: {top: '30%', left: '75%'} },
  { id: 6, title: 'شب مافیا (پیشرفته)', cafe: 'کافه راشا', city: 'کرج', game: 'مافیا', price: '70,000', spots: '1/10', date: '۱۴۰۳/۰۵/۱۵', img: 'https://picsum.photos/seed/event6/400', pos: {top: '80%', left: '15%'} },
];

const BookmarkIcon = ({isBookmarked}: {isBookmarked: boolean}) => (
    <svg className={`w-6 h-6 transition-colors ${isBookmarked ? 'text-fuchsia-500 fill-current' : 'text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
)

const FilterSidebar = () => (
    <div className="w-full lg:w-1/4 bg-gray-900/50 border border-white/10 rounded-2xl p-6 h-fit">
        <h3 className="text-xl font-bold text-white mb-6">فیلترها</h3>
        <div className="space-y-6">
            <div>
                <label className="text-gray-300">نوع بازی</label>
                <select className="w-full mt-2 bg-gray-800 border border-white/10 rounded-md p-2 text-white">
                    <option>همه</option>
                    <option>مافیا</option>
                    <option>بردگیم</option>
                    <option>آموزش</option>
                </select>
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
                <label className="text-gray-300">تاریخ</label>
                <input type="text" placeholder="مثلا: ۱۴۰۳/۰۵/۱۰" className="w-full mt-2 bg-gray-800 border border-white/10 rounded-md p-2 text-white placeholder-gray-500" />
            </div>
             <div>
                <label className="text-gray-300">محدوده قیمت</label>
                <input type="range" className="w-full mt-2" />
            </div>
            <button className="w-full py-2 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">اعمال فیلتر</button>
        </div>
    </div>
);

const EventCard: React.FC<{ event: typeof mockEvents[0]; onNavigate: (page: string, params?: any) => void; }> = ({ event, onNavigate }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
    <motion.div 
        className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ y: -5, scale: 1.02 }}
        onClick={() => onNavigate('eventDetail', { id: event.id })}
    >
        <div className="relative">
            <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
            <button onClick={(e) => {e.stopPropagation(); setIsBookmarked(!isBookmarked)}} className="absolute top-2 left-2 bg-black/40 p-1.5 rounded-full backdrop-blur-sm z-10">
                <BookmarkIcon isBookmarked={isBookmarked} />
            </button>
        </div>
        <div className="p-4">
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">{event.game}</span>
            <h4 className="text-lg font-bold text-white mt-2">{event.title}</h4>
            <p className="text-sm text-gray-400">{event.cafe} - {event.city}</p>
            <div className="flex justify-between items-center mt-4 text-sm">
                <span className="text-gray-300">{event.date}</span>
                <span className="text-lime-400 font-semibold">{event.price} تومان</span>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                    <span>ظرفیت باقی‌مانده</span>
                    <span>{event.spots}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
            </div>
            <button className="w-full mt-4 py-2 bg-fuchsia-500 text-white font-bold rounded-full hover:bg-fuchsia-400 transition-colors">مشاهده جزئیات</button>
        </div>
    </motion.div>
    )
};

const MapView: React.FC<{ onNavigate: (page: string, params?: any) => void; }> = ({ onNavigate }) => {
    const [hoveredEvent, setHoveredEvent] = useState<any>(null);
    return (
         <div className="w-full h-[500px] lg:h-full bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500 border border-white/10 relative overflow-hidden bg-grid">
            {mockEvents.map(event => (
                <div key={event.id} className="absolute" style={{ top: event.pos.top, left: event.pos.left, transform: 'translate(-50%, -50%)' }}>
                    <motion.div 
                        className="w-4 h-4 rounded-full bg-cyan-400 cursor-pointer"
                        animate={{ scale: [1, 1.5, 1], transition: { duration: 2, repeat: Infinity } }}
                        onHoverStart={() => setHoveredEvent(event)}
                        onHoverEnd={() => setHoveredEvent(null)}
                        onClick={() => onNavigate('eventDetail', { id: event.id })}
                    />
                </div>
            ))}
            {hoveredEvent && (
                <motion.div 
                    className="absolute bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-2 text-xs text-white pointer-events-none"
                    style={{ top: hoveredEvent.pos.top, left: hoveredEvent.pos.left, transform: 'translate(-50%, -120%)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {hoveredEvent.title}
                </motion.div>
            )}
        </div>
    )
}

const CalendarView = () => (
    <div className="w-full h-[500px] lg:h-full bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500 border border-white/10">
        <p>نمای تقویم به زودی اضافه می‌شود...</p>
    </div>
);


const EventsPage: React.FC<{ onNavigate: (page: string, params?: any) => void; }> = ({ onNavigate }) => {
    const [viewMode, setViewMode] = useState('grid');
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-cyan">
            رویدادهای کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            بهترین رویدادهای مافیا، بردگیم و سرگرمی را پیدا و رزرو کنید.
            </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar />
            <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 bg-gray-800 border border-white/10 p-1 rounded-full">
                        <button onClick={() => setViewMode('grid')} className={`px-3 py-1 text-sm rounded-full ${viewMode === 'grid' ? 'bg-cyan-500 text-black' : 'text-gray-300'}`}>لیست</button>
                        <button onClick={() => setViewMode('map')} className={`px-3 py-1 text-sm rounded-full ${viewMode === 'map' ? 'bg-cyan-500 text-black' : 'text-gray-300'}`}>نقشه</button>
                        <button onClick={() => setViewMode('calendar')} className={`px-3 py-1 text-sm rounded-full ${viewMode === 'calendar' ? 'bg-cyan-500 text-black' : 'text-gray-300'}`}>تقویم</button>
                    </div>
                    <select className="bg-gray-800 border border-white/10 rounded-md p-2 text-white">
                        <option>جدیدترین</option>
                        <option>محبوب‌ترین</option>
                    </select>
                </div>
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {mockEvents.map(event => <EventCard key={event.id} event={event} onNavigate={onNavigate} />)}
                    </div>
                ) : viewMode === 'map' ? (
                    <MapView onNavigate={onNavigate} />
                ) : (
                    <CalendarView />
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;