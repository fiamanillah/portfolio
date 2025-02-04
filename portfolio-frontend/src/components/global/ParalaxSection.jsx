'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Section from '@/components/global/Section';

export default function ParalaxSection() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <Section>
            <main ref={container} className="w-full relative h-[200vh]">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />
            </main>
        </Section>
    );
}

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div
            style={{ scale, rotate }}
            className="sticky top-20 h-screen bg-[#C72626] "
        ></motion.div>
    );
};

const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.div
            style={{ scale, rotate }}
            className="sticky top-20 h-screen bg-primary"
        ></motion.div>
    );
};
