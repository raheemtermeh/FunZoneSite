import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Story {
    name: string;
    img: string;
    content: string;
}

interface StoryViewerModalProps {
    stories: Story[];
    startIndex: number;
    onClose: () => void;
}

const StoryViewerModal: React.FC<StoryViewerModalProps> = ({ stories, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % stories.length);
    };

    const goToPrev = () => {
        setCurrentIndex(prev => (prev - 1 + stories.length) % stories.length);
    };

    useEffect(() => {
        const timer = setTimeout(goToNext, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const currentStory = stories[currentIndex];

    return (
        <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-sm h-[80vh] bg-black rounded-2xl overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-0 left-0 right-0 p-2 z-10">
                    <div className="flex items-center gap-1">
                        {stories.map((_, index) => (
                            <div key={index} className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                                {index < currentIndex && <div className="h-full bg-white"></div>}
                                {index === currentIndex && 
                                    <motion.div 
                                        className="h-full bg-white"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 5, ease: 'linear' }}
                                    >
                                    </motion.div>
                                }
                            </div>
                        ))}
                    </div>
                     <div className="flex items-center mt-2">
                        <img src={currentStory.img} className="w-8 h-8 rounded-full object-cover mr-2" alt={currentStory.name} />
                        <span className="text-white text-sm font-bold">{currentStory.name}</span>
                    </div>
                </div>

                <img src={currentStory.content} className="w-full h-full object-cover" alt={`Story from ${currentStory.name}`} />
                
                <div className="absolute inset-y-0 left-0 w-1/2" onClick={goToPrev}></div>
                <div className="absolute inset-y-0 right-0 w-1/2" onClick={goToNext}></div>

                <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl z-20">&times;</button>
            </motion.div>
        </motion.div>
    );
};

export default StoryViewerModal;
