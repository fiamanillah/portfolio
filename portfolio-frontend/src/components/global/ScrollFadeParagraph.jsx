'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

export default function AnimatedText({
    text,
    tag: Tag = 'p',
    containerClass = '',
    wordClass = '',
    motionClass = '',
}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.9', 'start 0.25'],
    });

    const words = text.split(' ');

    return (
        <div ref={container} className={`flex flex-wrap leading-tight p-0 ${containerClass}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                        tag={Tag}
                        wordClass={wordClass}
                        motionClass={motionClass}
                    >
                        {word}
                    </Word>
                );
            })}
        </div>
    );
}

const Word = ({ children, progress, range, tag: Tag, wordClass, motionClass }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className={`relative mr-1 mt-0 ${wordClass}`}>
            <Tag className={`absolute opacity-70 ${wordClass}`}>{children}</Tag>
            <motion.span style={{ opacity }} className={`${motionClass}`}>
                {children}
            </motion.span>
        </span>
    );
};
