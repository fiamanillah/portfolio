'use client';

import * as motion from 'motion/react-client';
import { useState, useEffect } from 'react';

const TypingEffect = ({ staticText, words }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
    const typingSpeed = isDeleting ? 50 : 120;
    const delayBetweenWords = 1500;

    useEffect(() => {
        let timeout;
        if (!isDeleting && text === words[wordIndex]) {
            timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setWordIndex(prev => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setText(prev =>
                    isDeleting ? prev.slice(0, -1) : words[wordIndex].slice(0, prev.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <motion.h3
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {staticText} <span className="text-secondary text-2xl ">{text}</span>
            <motion.span
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                className="text-secondary  text-2xl"
            >
                |
            </motion.span>
        </motion.h3>
    );
};

export default TypingEffect;
