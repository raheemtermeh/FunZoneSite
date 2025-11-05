import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StoryViewerModal from './modals/StoryViewerModal';

const storiesData = [
    { name: 'کافه راشا', img: 'https://picsum.photos/seed/story1/100', content: 'https://picsum.photos/seed/storycontent1/600/800' },
    { name: 'کافه برد', img: 'https://picsum.photos/seed/story2/100', content: 'https://picsum.photos/seed/storycontent2/600/800' },
    { name: 'کافه هنر', img: 'https://picsum.photos/seed/story3/100', content: 'https://picsum.photos/seed/storycontent3/600/800' },
    { name: 'شب‌های تهران', img: 'https://picsum.photos/seed/story4/100', content: 'https://picsum.photos/seed/storycontent4/600/800' },
    { name: 'گیم‌لند', img: 'https://picsum.photos/seed/story5/100', content: 'https://picsum.photos/seed/storycontent5/600/800' },
    { name: 'کافه فکر', img: 'https://picsum.photos/seed/story6/100', content: 'https://picsum.photos/seed/storycontent6/600/800' },
    { name: 'کافه جدید', img: 'https://picsum.photos/seed/story7/100', content: 'https://picsum.photos/seed/storycontent7/600/800' },
    { name: 'کافه مافیا', img: 'https://picsum.photos/seed/story8/100', content: 'https://picsum.photos/seed/storycontent8/600/800' },
];

const Stories: React.FC = () => {
    const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

    return (
        <>
            <section className="py-12 bg-black/50">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl font-bold text-center mb-8 neon-text-cyan"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        استوری کافه‌ها
                    </motion.h2>
                    <div className="flex items-start space-x-8 space-x-reverse pb-4 overflow-x-auto custom-scrollbar">
                        {storiesData.map((story, index) => (
                            <motion.div 
                                key={index}
                                className="flex flex-col items-center flex-shrink-0 text-center group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedStoryIndex(index)}
                            >
                                <div className="w-20 h-20 p-1 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500">
                                    <div className="bg-black w-full h-full p-0.5 rounded-full">
                                        <img src={story.img} alt={story.name} className="w-full h-full rounded-full object-cover"/>
                                    </div>
                                </div>
                                <span className="mt-2 text-xs font-medium text-gray-300">{story.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <AnimatePresence>
                {selectedStoryIndex !== null && (
                    <StoryViewerModal 
                        stories={storiesData} 
                        startIndex={selectedStoryIndex} 
                        onClose={() => setSelectedStoryIndex(null)} 
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Stories;
