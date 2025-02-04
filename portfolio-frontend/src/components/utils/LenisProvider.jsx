'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

const LenisProvider = () => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on unmount
        };
    }, []);

    return null; // No UI needed, just for side effects
};

export default LenisProvider;
