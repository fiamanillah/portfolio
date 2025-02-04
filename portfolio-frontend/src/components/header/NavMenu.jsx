'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function NavMenu() {
    const links = [
        {
            link: '#home', // ID of the section
            name: 'Home',
        },
        {
            link: '#about', // ID of the section
            name: 'About',
        },
        {
            link: '#skills', // ID of the section
            name: 'Skills',
        },
        {
            link: '#projects', // ID of the section
            name: 'Projects',
        },
        {
            link: '#contact', // ID of the section
            name: 'Contact',
        },
    ];

    // Function to handle smooth scrolling
    const handleScroll = (e, href) => {
        e.preventDefault(); // Prevent default anchor behavior
        const section = document.querySelector(href); // Find the section by ID
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };

    return (
        <div className="flex items-center tablet-lg:flex-col">
            {links.map(link => (
                <Link
                    href={link.link}
                    key={link.name}
                    onClick={e => handleScroll(e, link.link)} // Add smooth scroll behavior
                >
                    <Button variant="ghost" className="tablet-lg:text-start">
                        {link.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
