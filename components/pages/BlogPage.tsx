import React from 'react';
import { motion } from 'framer-motion';

const mockPosts = [
    {id: 1, title: "۵ استراتژی برای برد قطعی در مافیا", category: "آموزش", author: "علی احمدی", date: "۱۴۰۳/۰۵/۰۱", img: "https://picsum.photos/seed/blog1/600/400"},
    {id: 2, title: "معرفی بهترین کافه‌های تهران برای بردگیم", category: "معرفی کافه", author: "سارا محمدی", date: "۱۴۰۳/۰۴/۲۵", img: "https://picsum.photos/seed/blog2/600/400"},
    {id: 3, title: "چگونه یک رویداد موفق در کافه خود برگزار کنیم؟", category: "برای کافه‌داران", author: "کافه زون", date: "۱۴۰۳/۰۴/۲۰", img: "https://picsum.photos/seed/blog3/600/400"},
    {id: 4, title: "مصاحبه با 'کافه برد': راز موفقیت در چیست؟", category: "مصاحبه", author: "رضا قاسمی", date: "۱۴۰۳/۰۴/۱۵", img: "https://picsum.photos/seed/blog4/600/400"},
];

const BlogPostCard: React.FC<{ post: typeof mockPosts[0] }> = ({ post }) => (
    <motion.div 
        className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 255, 255, 0.1)' }}
    >
        <div className="relative h-56">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 right-4">
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">{post.category}</span>
                <h3 className="text-xl font-bold text-white mt-2">{post.title}</h3>
            </div>
        </div>
        <div className="p-4 flex justify-between items-center text-sm text-gray-400">
            <span>{post.author}</span>
            <span>{post.date}</span>
        </div>
    </motion.div>
);

const BlogPage: React.FC<{ onNavigate: (page: string, params?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black pt-12 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 neon-text-cyan">
                مجله کافه زون
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                جدیدترین مقالات، آموزش‌ها و مصاحبه‌ها در دنیای سرگرمی و کافه‌گردی.
            </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
                <BlogPostCard post={mockPosts[0]} />
            </div>
            {mockPosts.slice(1).map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                >
                    <BlogPostCard post={post} />
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
