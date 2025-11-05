import React from 'react';

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm2 2h12v12H6V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.6 15.5l5.8-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.4 15.5L9.6 8.5" />
    </svg>
);


const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={2} />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round" />
    </svg>
);

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const Footer: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 neon-text-cyan cursor-pointer" onClick={() => onNavigate('home')}>کافه زون</h3>
            <p className="text-gray-400 mb-6 text-sm">
              پلتفرم جامع رزرو کافه و رویدادهای سرگرمی. بهترین تجربه را برای شما می‌سازیم.
            </p>
            <h4 className="text-md font-semibold mb-2 text-white">عضویت در خبرنامه هفتگی</h4>
            <form className="flex items-center gap-2 mb-6 max-w-sm mx-auto md:mx-0">
                <input type="email" placeholder="ایمیل شما" className="w-full bg-gray-800 border border-white/10 rounded-md px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"/>
                <button type="submit" className="px-4 py-1.5 bg-cyan-500 text-black font-bold text-sm rounded-md whitespace-nowrap">ثبت نام</button>
            </form>
            <div className="flex justify-center md:justify-start space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><TelegramIcon /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">برای کاربران</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('events')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">رویدادها</button></li>
              <li><button onClick={() => onNavigate('cafes')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">کافه‌ها</button></li>
              <li><button onClick={() => onNavigate('tutorials')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">آموزش بازی</button></li>
              <li><button onClick={() => onNavigate('leaderboard')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">جدول امتیازات</button></li>
            </ul>
          </div>
          <div>
             <h3 className="text-lg font-semibold mb-4 text-white">برای کسب و کارها</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('partnership')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">ثبت کافه</button></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">برگزاری رویداد</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">همکاری تجاری</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4 text-white">کافه زون</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">درباره ما</button></li>
              <li><button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-cyan-400 transition-colors bg-transparent border-none">وبلاگ</button></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">تماس با ما</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">قوانین و مقررات</a></li>
            </ul>
             <div className="mt-4">
                <p className="text-gray-500">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
                <p className="text-gray-500">آدرس: تهران، ...</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex justify-between items-center">
          <p>&copy; 1403 - تمامی حقوق برای کافه زون محفوظ است.</p>
          <div className="flex items-center gap-2">
            <span>تم تاریک</span>
            <button className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-1">
                <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full shadow-lg"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;