import Section from '@/components/global/Section';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import * as motion from 'motion/react-client';
import TypingEffect from '@/components/client/TypingEffect';

// Import assets
import heroImage from '@/assets/images/hero.png';
import heroBg from '@/assets/images/backgrounds/heroBackground.svg';
import crossArrow from '@/assets/elements/crossArrow.svg';
import headShine from '@/assets/elements/headShine.svg';
import dottedArrow from '@/assets/elements/dottedArrow.svg';
import star2 from '@/assets/elements/star2.svg';
import dots2 from '@/assets/elements/dots2.svg';
import dots3 from '@/assets/elements/dots3.svg';
import RandomMovingDiv from '@/components/client/RandomMovingDiv';
import TextReveal from '@/components/global/TextReveal';

const HeroSection = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <Image
                src={heroBg}
                alt="Hero Background"
                priority
                fill
                className="opacity-5 dark:opacity-40 absolute z-0 object-cover"
            />

            <Section className={'!p-0 z-10 relative'}>
                {/* Hero Section */}
                <div className="flex tablet-lg:flex-col pt-5 min-h-[75vh] relative">
                    {/* <RandomMovingDiv /> */}
                    <div className="absolute z-0 top-0 left-0 tablet-lg:top-[40%] mobile-sm:top-[55%] w-full h-full tablet-lg:h-1/2 flex justify-center items-start">
                        <div className="relative w-full h-[30%] flex justify-center items-center">
                            {/* Animated Gradient Background */}
                            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[50px] flex justify-center items-center ">
                                <div
                                    style={{
                                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                    }}
                                    className="relative inset-0 h-[90%] w-full bg-gradient-to-tr from-accent/10 to-secondary/10 animate-gradient-shift"
                                />
                            </div>

                            {/* Animated Text */}
                            <svg
                                width="100%"
                                height="100%"
                                className="absolute top-0 left-0 opacity-10 animate-floating"
                            >
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dy="0.35em"
                                    fontSize="clamp(3rem, 15vw, 14rem)"
                                    fontWeight="bold"
                                    fill="transparent"
                                    className="text-primary stroke-primary"
                                    style={{ strokeWidth: '0.5px' }}
                                >
                                    Fi Amanillah
                                </text>
                            </svg>
                        </div>
                    </div>
                    {/* Animated Dots */}
                    <div className="absolute bottom-[15%] left-[5%] right-[30%] w-44 flex flex-col gap-2 z-0 tablet-lg:hidden">
                        <motion.div
                            animate={{ x: [-5, 5, -5] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Image src={dots2} alt="dots2" />
                        </motion.div>
                        <motion.div
                            animate={{ x: [5, -5, 5] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Image src={dots3} alt="dots3" />
                        </motion.div>
                    </div>

                    {/* Left Content */}
                    <div className="basis-1/2 flex flex-col justify-center items-start gap-2 p-4 z-10 relative">
                        <TextReveal>
                            <span className="text-4xl font-bold">Hello, It&apos;s me</span>
                        </TextReveal>

                        <TextReveal className={'bg-primary'}>
                            <h1 className="text-6xl font-bold relative text-primary">
                                Fi Amanillah
                            </h1>
                        </TextReveal>

                        <TextReveal>
                            <TypingEffect
                                staticText={"I'm a"}
                                words={[
                                    'Web Developer',
                                    'MERN Stack Developer',
                                    'Frontend Enthusiast',
                                    'Problem Solver',
                                ]}
                            />
                        </TextReveal>

                        <TextReveal className={'bg-muted-foreground'}>
                            I specialize in building high-performance web applications with modern
                            JavaScript technologies like React, Next.js, Node.js, and MongoDB.
                        </TextReveal>

                        <div className="my-3">
                            <Button size="lg">Hire Me</Button>
                            <Button variant="outline" size="lg" className="ml-2">
                                View My Work
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="basis-1/2 flex justify-end items-end z-20 mobile-lg:mt-10">
                        <div>
                            <motion.div
                                initial={{ rotateX: 90, y: 10, opacity: 0 }}
                                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeOut',
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 15,
                                }}
                                className="relative origin-bottom"
                            >
                                <Image
                                    src={heroImage}
                                    alt="Fi Amanillah"
                                    priority
                                    className="w-[90%] drop-shadow-[2px_-2px_2px_rgba(0,0,0,1)]"
                                />

                                {/* Head Shine Animation */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        y: [0, '-5px', 0],
                                        x: [0, '5px', 0],
                                        rotate: [15],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute -top-10 mobile-sm:-top-12 mobile-sm:right-[25%] right-[30%] w-24"
                                >
                                    <Image src={headShine} alt="headShine" />
                                </motion.div>
                            </motion.div>

                            {/* Dotted Arrow Animation */}
                            <motion.div
                                animate={{ x: [0, '5px', 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-[50%] left-[55%] tablet-lg:top-1/2 tablet-lg:left-[15%] mobile-lg:top-[60%]  mobile-lg:left-[5%] w-20 tablet-lg:w-32 mobile-lg:w-20 opacity-65 dark:opacity-100 dark:brightness-[3] mobile-sm:top-[65%]"
                            >
                                <Image src={dottedArrow} alt="dottedArrow" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Cross Arrow Animation */}
                    <motion.div
                        animate={{ rotate: [0, 10, 0], y: [0, '15px', 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-5 right-16 w-20 mobile-sm:w-12 mobile-sm:top-2"
                    >
                        <Image src={crossArrow} alt="crossArrow" />
                    </motion.div>
                    <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[100px] flex justify-center items-end">
                        <div
                            style={{
                                clipPath:
                                    ' polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                            }}
                            className="relative  inset-0  aspect-video w-full bg-gradient-to-tr from-primary/60 to-chart-5/50  "
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default HeroSection;
