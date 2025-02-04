'use client';

import Image from 'next/image';
import { useTransform, useScroll, motion } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { SquareArrowOutUpRight, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ParallaxStack({ projects }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={containerRef} className="relative ">
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.03; // Smooth scaling effect
                return (
                    <Card
                        key={i}
                        index={i}
                        project={project}
                        progress={scrollYProgress}
                        range={[i * 0.15, 1]} // Adjusted range for smooth transition
                        targetScale={targetScale}
                    />
                );
            })}
        </main>
    );
}
const Card = ({ project, progress, range, targetScale, index }) => {
    const cardRef = useRef(null);

    // Slight initial up-scale for effect (applied to the card, not the image)
    const scale = useTransform([progress], range, [1, targetScale]);

    // Moves cards up smoothly
    const translateY = useTransform(progress, [0, 1.5], [index * 50, 15]);

    return (
        <motion.div ref={cardRef} className="sticky w-full top-20 h-screen" style={{ translateY }}>
            <motion.div
                className={` w-full  tablet-lg:min-h-[50vh] mobile-lg:min-h-[60vh]   rounded-2xl overflow-hidden bg-card relative shadow-lg hover:shadow-[0px_5px_20px] hover:shadow-muted border border-border ${project.color}  origin-top z-10`}
                style={{ scale }}
            >
                <div className="flex mobile-lg:flex-col justify-between w-full relative z-20">
                    <div className="basis-4/6  rounded-3xl p-4 mobile-sm:p-2 overflow-hidden">
                        <div className="w-full h-full overflow-hidden rounded-xl border border-border">
                            <Image
                                src={project.image}
                                width={1400}
                                height={1000}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="basis-2/6  flex flex-col gap-3  justify-between p-4 mobile-sm:p-2 mobile-sm:pt-0 relative">
                        <div className="">
                            <h2 className="mobile-sm:text-2xl">{project.title}</h2>
                            <p className="mobile-sm:text-md mobile-sm:max-h-[20vh] mobile-sm:overflow-y-auto mobile-sm:text-ellipsis">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 ">
                                {project.techUsed.map(tech => (
                                    <Badge
                                        className={` rounded-sm text-sm shadow-lg text-nowrap`}
                                        key={tech}
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 items-end justify-between">
                            <div className="flex gap-2">
                                <Button>
                                    Code
                                    <Code className="translate-y-[-2.5px]" />
                                </Button>
                                <Link
                                    href={project.demoLink}
                                    target="blank"
                                    className="text-foreground no-underline"
                                >
                                    <Button
                                        variant="outline"
                                        className="flex items-center font-bold"
                                    >
                                        Demo
                                        <SquareArrowOutUpRight className="translate-y-[-2.5px]" />
                                    </Button>
                                </Link>
                            </div>
                            <Image
                                src={project.logo}
                                alt="project logo"
                                className="absolute right-2 bottom-2 w-20"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
