import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'علی احمدی', role: 'بنیان‌گذار و مدیرعامل', img: 'https://i.pravatar.cc/150?u=ali' },
  { name: 'سارا محمدی', role: 'مدیر فنی', img: 'https://i.pravatar.cc/150?u=sara' },
  { name: 'رضا قاسمی', role: 'مدیر بازاریابی', img: 'https://i.pravatar.cc/150?u=reza' },
  { name: 'مریم حسینی', role: 'مدیر جامعه کاربران', img: 'https://i.pravatar.cc/150?u=maryam' },
];

const timelineEvents = [
  { year: '۱۴۰۱', event: 'شکل‌گیری ایده اولیه کافه زون در یک دورهمی بازی مافیا.' },
  { year: '۱۴۰۲', event: 'راه‌اندازی نسخه آزمایشی وبسایت با همکاری ۱۰ کافه در تهران.' },
  { year: '۱۴۰۳', event: 'انتشار اپلیکیشن موبایل و عبور از مرز ۵۰,۰۰۰ کاربر فعال.' },
  { year: 'آینده', event: 'گسترش به شهرهای جدید، افزودن رویدادهای ورزشی و ورود به بازارهای بین‌المللی.' },
];

const jobOpenings = [
    { title: 'کارشناس ارشد React', location: 'تهران - حضوری', type: 'تمام وقت'},
    { title: 'مدیر دیجیتال مارکتینگ', location: 'دورکاری', type: 'تمام وقت'},
    { title: 'کارشناس پشتیبانی مشتریان', location: 'تهران - حضوری', type: 'پاره وقت'},
]

const TeamCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => (
    <motion.div
        className="text-center group"
        whileHover={{ scale: 1.05 }}
        style={{ perspective: '1000px' }}
    >
        <motion.div 
            className="relative w-32 h-32 mx-auto rounded-full border-4 border-cyan-500"
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover"/>
            </div>
            <div className="absolute w-full h-full bg-gray-800 rounded-full flex items-center justify-center" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                <p className="text-cyan-400 font-bold p-2 text-sm">{member.role}</p>
            </div>
        </motion.div>
        <h4 className="text-lg font-bold text-white mt-4">{member.name}</h4>
        <p className="text-gray-400 group-hover:hidden">{member.role}</p>
        <p className="text-cyan-400 hidden group-hover:block">سلام!</p>
    </motion.div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-cyan">
                داستان کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                ما باور داریم که بهترین لحظات زندگی در کنار هم و با سرگرمی‌های جذاب رقم می‌خورد. کافه زون با هدف ایجاد یک پلتفرم جامع برای علاقه‌مندان به بازی‌های گروهی و دورهمی‌های کافه‌ای ایجاد شد تا پیدا کردن و رزرو کردن سرگرمی بعدی شما، از همیشه آسان‌تر باشد.
            </p>
        </motion.div>
        
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12">تیم ما</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map(member => <TeamCard key={member.name} member={member} />)}
            </div>
        </div>

        <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">مسیر ما</h2>
            <div className="relative border-r-2 border-cyan-500/50 mr-4">
                {timelineEvents.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="absolute w-5 h-5 bg-cyan-500 rounded-full -right-2.5 border-4 border-black ring-2 ring-cyan-500"></div>
                        <div className="bg-gray-900/50 border border-white/10 p-4 rounded-lg mr-10 w-full">
                            <p className="font-bold text-xl text-cyan-400 mb-1">{item.year}</p>
                            <p className="text-white">{item.event}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        
         <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-white mb-12">فرصت‌های شغلی</h2>
            <div className="max-w-3xl mx-auto space-y-4">
            {jobOpenings.map((job, index) => (
                 <motion.div
                    key={index}
                    className="bg-gray-900/50 border border-white/10 rounded-lg p-4 flex justify-between items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                 >
                    <div>
                        <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                        <p className="text-sm text-gray-400">{job.location} - {job.type}</p>
                    </div>
                    <button className="px-4 py-1 border border-cyan-400 text-cyan-400 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition-colors">ارسال رزومه</button>
                 </motion.div>
            ))}
            </div>
        </div>

        <div>
            <h2 className="text-3xl font-bold text-center text-white mb-12">ارتباط با ما</h2>
            <div className="flex flex-col lg:flex-row gap-8 bg-gray-900/50 border border-white/10 rounded-2xl p-8">
                <div className="lg:w-1/2">
                    <h3 className="text-xl text-white font-bold mb-4">فرم تماس</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="نام" className="w-full bg-gray-800 p-2 rounded"/>
                        <input type="email" placeholder="ایمیل" className="w-full bg-gray-800 p-2 rounded"/>
                        <textarea placeholder="پیام شما" rows={5} className="w-full bg-gray-800 p-2 rounded"></textarea>
                        <button type="submit" className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-full">ارسال</button>
                    </form>
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-xl text-white font-bold mb-4">آدرس ما</h3>
                    <p className="text-gray-400 mb-4">تهران، خیابان ولیعصر، پارک ملت، برج سایه، طبقه ۱۰</p>
                    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                        [ نقشه در اینجا قرار میگیرد ]
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;