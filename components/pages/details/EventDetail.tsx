import React from 'react';
import { motion } from 'framer-motion';

const mockEvents: { [key: string]: any } = {
  1: { id: 1, title: 'تورنومنت مافیا', cafe: 'کافه راشا', city: 'تهران', game: 'مافیا', price: '50,000', spots: '3/10', date: '۱۴۰۳/۰۵/۱۰', time: '۱۹:۰۰', img: 'https://picsum.photos/seed/event1/800/400', description: 'در بزرگترین تورنومنت مافیای تهران شرکت کنید و مهارت‌های خود را به چالش بکشید. جوایز نفیسی برای تیم برنده در نظر گرفته شده است.', attendees: ['https://i.pravatar.cc/40?u=a', 'https://i.pravatar.cc/40?u=b', 'https://i.pravatar.cc/40?u=c'], cafeId: 1 },
  2: { id: 2, title: 'شب بازی Catan', cafe: 'کافه برد', city: 'تهران', game: 'بردگیم', price: '40,000', spots: '8/12', date: '۱۴۰۳/۰۵/۱۱', time: '۱۸:۰۰', img: 'https://picsum.photos/seed/event2/800/400', description: 'یک شب پر از استراتژی و رقابت با بازی محبوب Catan. مناسب برای بازیکنان حرفه‌ای و مبتدی.', attendees: [], cafeId: 2 },
};

const mockSquads = [
    { name: 'تیم حرفه‌ای‌ها', members: 2, needed: 2, description: 'دنبال دو بازیکن حرفه‌ای برای تکمیل تیم هستیم.'},
    { name: 'فقط برای فان!', members: 3, needed: 1, description: 'یه نفر پایه برای بازی و خنده می‌خوایم.'},
]

const EventDetail: React.FC<{ eventId: string; onNavigate: (page: string, params?: any) => void }> = ({ eventId, onNavigate }) => {
    const event = mockEvents[eventId];

    if (!event) {
        return <div className="text-center py-20 text-white">رویداد مورد نظر یافت نشد.</div>;
    }

    return (
        <div className="min-h-screen bg-black pt-8 pb-24">
            <div className="container mx-auto px-4">
                 <button onClick={() => onNavigate('events')} className="mb-4 text-cyan-400">&larr; بازگشت به لیست رویدادها</button>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 right-6">
                        <span className="text-md bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full mb-2 inline-block">{event.game}</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white neon-text-cyan">{event.title}</h1>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}}>
                             <h2 className="text-2xl font-bold text-white mb-4">توضیحات رویداد</h2>
                             <p className="text-gray-300 leading-relaxed bg-gray-900/50 p-6 rounded-lg border border-white/10">{event.description}</p>
                        </motion.div>

                        <motion.div className="mt-8" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.2}}>
                            <h2 className="text-2xl font-bold text-white mb-4">تیم تشکیل بده!</h2>
                            <p className="text-sm text-gray-400 mb-4">تنهایی؟ نگران نباش! اینجا می‌تونی به تیم‌های دیگه ملحق بشی یا تیم خودت رو بسازی.</p>
                             <div className="space-y-3 mb-4">
                                {mockSquads.map((squad, i) => (
                                    <div key={i} className="bg-gray-900/50 p-3 rounded-lg flex justify-between items-center border border-white/10">
                                        <div>
                                            <p className="font-bold text-white">{squad.name} ({squad.members}/{squad.members + squad.needed})</p>
                                            <p className="text-xs text-gray-400">{squad.description}</p>
                                        </div>
                                        <button className="text-sm bg-fuchsia-500 text-white px-3 py-1 rounded-full">ملحق شو</button>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full text-center py-2 border border-fuchsia-400 text-fuchsia-400 rounded-full hover:bg-fuchsia-400 hover:text-black transition-colors">
                                + ایجاد تیم جدید
                            </button>
                        </motion.div>
                    </div>

                     <div className="space-y-8">
                        <motion.div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.3}}>
                            <h3 className="text-xl font-bold text-white mb-4">اطلاعات کلی</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li onClick={() => onNavigate('cafeDetail', {id: event.cafeId})} className="cursor-pointer hover:text-cyan-400"><strong>کافه:</strong> {event.cafe}</li>
                                <li><strong>تاریخ:</strong> {event.date}</li>
                                <li><strong>ساعت:</strong> {event.time}</li>
                                <li><strong>قیمت:</strong> <span className="text-lime-400">{event.price} تومان</span></li>
                            </ul>
                            <div className="mt-6">
                                <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                                    <span>ظرفیت</span>
                                    <span>{event.spots}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                        </motion.div>
                         <motion.div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10" initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.4}}>
                            <h3 className="text-xl font-bold text-white mb-4">شرکت‌کنندگان ({event.attendees.length})</h3>
                             <div className="flex items-center">
                                {event.attendees.map((avatar: string) => <img key={avatar} src={avatar} className="w-10 h-10 rounded-full border-2 border-black -ml-3" />)}
                                <div className="w-10 h-10 rounded-full bg-gray-700 -ml-3 flex items-center justify-center text-xs text-white border-2 border-black">+{10 - event.attendees.length}</div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.5}}>
                             <button className="w-full py-3 bg-fuchsia-500 text-white font-bold rounded-full text-lg hover:bg-fuchsia-400 transition-colors neon-border-magenta">رزرو و پرداخت</button>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EventDetail;
