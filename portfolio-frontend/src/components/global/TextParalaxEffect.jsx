'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import Picture1 from '@/assets/elements/star2.svg';
import Picture2 from '@/assets/elements/star2.svg';
import Picture3 from '@/assets/elements/star2.svg';

import Image from 'next/image';
import { useRef } from 'react';
import SectionBackgrpound1 from './SectionBackgrpound1';

export default function TextParalaxEffect() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    return (
        <main className="overflow-hidden relative">
            {/* <SectionBackgrpound1 /> */}
            <div ref={container}>
                <Slide src={Picture1} direction={'left'} left={'-40%'} progress={scrollYProgress} />
                <Slide
                    src={Picture2}
                    direction={'right'}
                    left={'-25%'}
                    progress={scrollYProgress}
                />
            </div>
        </main>
    );
}

const Slide = props => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);
    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className="relative flex  whitespace-nowrap  "
        >
            <Phrase src={props.src} />
            <Phrase src={props.src} />
            <Phrase src={props.src} />
            <Phrase src={props.src} />
        </motion.div>
    );
};

const Phrase = ({ src }) => {
    return (
        <div className={'px-5 flex gap-5 items-center '}>
            <p className="text-[5vw] leading-[5vw]">Web Developer</p>
            <span className="relative h-[3vw] aspect-[1/1] rounded-full overflow-hidden">
                <Image
                    style={{ objectFit: 'cover' }}
                    src={src}
                    alt="image"
                    fill
                    className="brightness-[2] dark:brightness-[4.5]"
                />
            </span>
        </div>
    );
};
