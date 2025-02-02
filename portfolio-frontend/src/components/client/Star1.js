'use client';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import star1 from '@/assets/elements/star1.json';

const Star1 = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Prevents rendering on the server

    return (
        <div>
            <Lottie animationData={star1} loop={true} autoplay={true} />
        </div>
    );
};

export default Star1;
