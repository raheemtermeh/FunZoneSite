import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const BellIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);


const Header: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
          onNavigate('search', { query: searchQuery });
          setIsSearchOpen(false);
          setSearchQuery('');
      }
  }

  const navItems = [
    { label: 'رویدادها', page: 'events' },
    { label: 'کافه‌ها', page: 'cafes' },
    { label: 'آموزش', page: 'tutorials' },
    { label: 'درباره ما', page: 'about' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold tracking-wider neon-text-cyan cursor-pointer" onClick={() => onNavigate('home')}>
            کافه زون
          </div>
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group bg-transparent border-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
             <motion.button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Search"
              whileTap={{ scale: 0.9 }}
             >
                <SearchIcon className="w-6 h-6" />
             </motion.button>
             <motion.button onClick={() => onNavigate('notifications')} className="p-2 text-gray-300 hover:text-cyan-400 transition-colors relative" whileTap={{ scale: 0.9 }}>
                <BellIcon className="w-6 h-6"/>
                <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-fuchsia-500 ring-2 ring-black"></span>
             </motion.button>
             <div className="relative">
                <motion.button onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-cyan-500 flex items-center justify-center" whileTap={{ scale: 0.9 }}>
                    <UserIcon className="w-6 h-6 text-cyan-400" />
                </motion.button>
                <AnimatePresence>
                {isProfileOpen && (
                    <motion.div 
                        className="absolute left-0 mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <button onClick={() => {onNavigate('profile'); setIsProfileOpen(false);}} className="w-full text-right block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">پروفایل</button>
                        <button onClick={() => {onNavigate('profile', {tab: 'passport'}); setIsProfileOpen(false);}} className="w-full text-right block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">گذرنامه کافه زون</button>
                        <button onClick={() => {onNavigate('profile', {tab: 'bookings'}); setIsProfileOpen(false);}} className="w-full text-right block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">رزروهای من</button>
                        <hr className="border-white/10 my-1"/>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">خروج</a>
                    </motion.div>
                )}
                </AnimatePresence>
             </div>
          </div>
        </div>
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              className="pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="جستجوی رویداد یا کافه..."
                  className="w-full bg-gray-900/50 border border-cyan-500/50 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 neon-border-cyan"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
