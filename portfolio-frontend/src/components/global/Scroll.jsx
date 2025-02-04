'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Lenis from 'lenis';
import { useTransform, useScroll, motion } from 'motion/react'; // Ensure this import is correct

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
];

export default function Home() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    });

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, -1100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -1000]);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, // Adjust the smoothness of scrolling (default is 0.1)
            smoothWheel: true, // Enable smooth scrolling for mouse wheel
        });

        const raf = time => {
            lenis.raf(time); // Update Lenis on every frame
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
            lenis.destroy(); // Clean up Lenis instance
        };
    }, []);

    return (
        <main className="flex flex-col">
            <div
                ref={gallery}
                className="h-[175vh]  relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
            >
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
        </main>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className="relative h-[300vh] w-[25%] min-w-[250px] flex flex-col gap-[2vw]"
            style={{ y }}
        >
            {images.map((src, i) => (
                <div key={i} className="h-full w-full relative rounded-[1vw] overflow-hidden">
                    <Image src={`/images/${src}`} alt="image" fill className="object-cover" />
                </div>
            ))}
        </motion.div>
    );
};
