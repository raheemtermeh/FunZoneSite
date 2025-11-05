
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ to }: { to: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = {
                stop: () => {},
            };
            
            const animate = (start: number, end: number, duration: number) => {
                let startTime: number | null = null;
                const step = (currentTime: number) => {
                    if (!startTime) startTime = currentTime;
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    setCount(Math.floor(progress * (end - start) + start));
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            };

            animate(0, to, 2000);
            
            return () => controls.stop();
        }
    }, [inView, to]);

    return <span ref={ref}>{count.toLocaleString('fa-IR')}</span>;
};

const partnershipTiers = [
    { title: 'همکار کافه', price: 'رایگان', features: ['ثبت کافه و رویداد', 'دسترسی به پنل مدیریت', 'پشتیبانی پایه'] },
    { title: 'اسپانسر رویداد', price: 'تماس بگیرید', features: ['نمایش ویژه در صفحه اصلی', 'کمپین‌های تبلیغاتی مشترک', 'گزارش‌گیری پیشرفته'] },
    { title: 'سرمایه‌گذار استراتژیک', price: 'مذاکره', features: ['مشارکت در سود', 'عضویت در هیئت مشاوران', 'دسترسی به داده‌های کلان'] },
]

const faqs = [
    { q: 'چگونه می‌توانم کافه خود را ثبت کنم؟', a: 'از طریق پنل کافه‌داران می‌توانید به سادگی و به صورت رایگان کافه و رویدادهای خود را ثبت کنید.' },
    { q: 'مدل درآمدی کافه زون چیست؟', a: 'ما درصدی از هزینه هر رزرو موفق را به عنوان کمیسیون دریافت می‌کنیم. ثبت کافه رایگان است.' },
    { q: 'آیا امکان همکاری تبلیغاتی وجود دارد؟', a: 'بله، برای اطلاع از پکیج‌های اسپانسری و همکاری‌های ویژه، لطفا با ما تماس بگیرید.' },
];

const Investment: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section className="py-24 bg-black bg-grid">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 neon-text-cyan">
                ایده و سرمایه‌گذاری
            </h2>
            <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
                ما به دنبال گسترش دنیای سرگرمی هستیم. اگر ایده‌ای خلاقانه برای رویدادها دارید یا به دنبال فرصتی برای سرمایه‌گذاری در یک پلتفرم رو به رشد هستید، جای شما اینجاست. با ما تماس بگیرید و بخشی از آینده کافه زون باشید.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                <h3 className="text-5xl font-bold text-cyan-400"><AnimatedCounter to={50000} />+</h3>
                <p className="text-gray-400 mt-2">کاربر فعال</p>
            </div>
            <div className="bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                <h3 className="text-5xl font-bold text-cyan-400"><AnimatedCounter to={200} />+</h3>
                <p className="text-gray-400 mt-2">کافه همکار</p>
            </div>
            <div className="bg-gray-900/50 border border-white/10 p-6 rounded-lg">
                <h3 className="text-5xl font-bold text-cyan-400"><AnimatedCounter to={1000} />+</h3>
                <p className="text-gray-400 mt-2">رویداد موفق</p>
            </div>
        </div>

        <h3 className="text-3xl font-bold text-center text-white mb-8">فرصت‌های همکاری</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnershipTiers.map((tier, i) => (
                <motion.div 
                    key={tier.title} 
                    className="bg-gray-900 border border-cyan-500/20 rounded-2xl p-8 flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">{tier.title}</h4>
                    <p className="text-xl font-semibold text-white mb-6">{tier.price}</p>
                    <ul className="space-y-3 text-gray-300 flex-grow">
                        {tier.features.map(f => <li key={f} className="flex items-center gap-2">✓ {f}</li>)}
                    </ul>
                    <button className="mt-8 w-full py-2 border border-cyan-400 text-cyan-400 font-bold rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                        اطلاعات بیشتر
                    </button>
                </motion.div>
            ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-white mb-6">سوالات متداول</h3>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden">
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-right p-4 font-semibold text-white flex justify-between items-center">
                                {faq.q}
                                <span>{openFaq === i ? '-' : '+'}</span>
                            </button>
                            {openFaq === i && <div className="p-4 pt-0 text-gray-400">{faq.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                className="lg:w-1/2 w-full bg-gray-900/50 border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h3 className="text-2xl font-bold text-white mb-4">با ما در ارتباط باشید</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="نام شما" className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <input type="email" placeholder="ایمیل شما" className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <textarea placeholder="پیام شما..." rows={4} className="w-full bg-gray-800/60 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
                    <button type="submit" className="w-full px-8 py-3 bg-cyan-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-cyan-400 neon-border-cyan hover:shadow-none">
                        ارسال پیام
                    </button>
                </form>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Investment;
