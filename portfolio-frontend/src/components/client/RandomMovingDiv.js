'use client';
import { useState, useEffect, useRef } from 'react';
import * as motion from 'motion/react-client';

const RandomMovingDiv = () => {
    // State to hold random positions for the animation
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    // Reference to the parent div to get its dimensions
    const parentRef = useRef(null);

    // Randomly generate a number between min and max in pixels
    const getRandomPosition = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    useEffect(() => {
        const updatePosition = () => {
            if (parentRef.current) {
                // Get parent dimensions
                const parentWidth = parentRef.current.offsetWidth;
                const parentHeight = parentRef.current.offsetHeight;

                // Calculate random position within the parent boundaries, considering the child's size (20px by 20px)
                setPosition({
                    x: getRandomPosition(0, parentWidth - 20), // Horizontal position
                    y: getRandomPosition(0, parentHeight - 20), // Vertical position
                });
            }
        };

        // Set an interval to change position every 3 seconds
        const interval = setInterval(updatePosition, 3000);

        // Initial position update
        updatePosition();

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="absolute bottom-0 left-0 inset-0 flex justify-center items-center -z-40">
            <div ref={parentRef} className="relative w-full h-full blur-[180px]">
                <motion.div
                    className="absolute w-64 h-56 transform-gpu overflow-hidden flex justify-center items-center"
                    style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    }}
                    initial={{
                        x: 200, // Use state to animate random x position
                        y: 400, // Use state to animate random y position
                    }}
                    animate={{
                        x: position.x, // Use state to animate random x position
                        y: position.y, // Use state to animate random y position
                    }}
                    transition={{
                        duration: 8, // Speed of animation
                        ease: 'easeInOut',
                        repeat: Infinity, // Repeat the animation infinitely
                        repeatDelay: 1, // Delay before repeating the animation
                    }}
                >
                    <div className="relative inset-0 h-[90%] w-full bg-gradient-to-tr from-primary/50 to-secondary/50 animate-gradient-shift" />
                </motion.div>
            </div>
        </div>
    );
};

export default RandomMovingDiv;
