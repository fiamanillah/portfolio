import React from 'react';
import bg from '@/assets/images/backgrounds/background2.svg';
import Image from 'next/image';
export default function SectionBackgrpound1() {
    return (
        <div className="absolute top-0 inset-0 z-0">
            <Image
                src={bg}
                alt="bg"
                className="sticky top-0 h-screen  w-full object-cover  -z-10 opacity-10 dark:brightness-50"
            />
        </div>
    );
}
