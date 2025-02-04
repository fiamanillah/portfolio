module.exports = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                oxanium: 'var(--font-oxanium)', // Use the CSS variable
            },
            screens: {
                'desktop-xl': {
                    max: '1535px',
                },
                'laptop-xl': {
                    max: '1279px',
                },
                'tablet-lg': {
                    max: '1023px',
                },
                'mobile-lg': {
                    max: '767px',
                },
                'mobile-sm': {
                    max: '639px',
                },
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            animation: {
                floating: 'floating 4s ease-in-out infinite',
                'gradient-move': 'gradientMove 6s infinite linear',
                'gradient-shift': 'gradientShift 8s infinite ease-in-out',
            },
            keyframes: {
                floating: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradientMove: {
                    '0%': { transform: 'translateX(-10%)' },
                    '100%': { transform: 'translateX(10%)' },
                },
                gradientShift: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))',
                },
                info: {
                    DEFAULT: 'hsl(var(--info))',
                    foreground: 'hsl(var(--info-foreground))',
                },
                border: 'hsl(var(--border))',
                borderStrong: 'hsl(var(--border-strong))',
                borderSolid: 'hsl(var(--border-solid))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))',
                },
            },

            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '*': { margin: '0', padding: '0' },
                        color: 'hsl(var(--foreground))',

                        h1: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '3.5rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                        },
                        h2: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '2rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                        },
                        h3: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '1.75rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                        },
                        h4: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                        },
                        h5: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '1.25rem',
                            fontWeight: '600',
                        },
                        h6: {
                            color: 'hsl(var(--foreground))',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                        },
                        p: {
                            color: 'hsl(var(--muted-foreground))',
                            fontSize: '1rem',
                            lineHeight: '1.75',
                            marginBottom: '1.5rem',
                        },
                        span: {
                            color: 'hsl(var(--muted-foreground))',
                            fontSize: '1rem',
                            lineHeight: '1.75',
                        },
                        a: {
                            color: 'hsl(var(--primary))',
                            textDecoration: 'underline',
                            fontWeight: '500',
                            '&:hover': {
                                color: 'hsl(var(--foreground))',
                            },
                        },
                        blockquote: {
                            color: 'hsl(var(--foreground))',
                            borderLeftColor: 'hsl(var(--primary))',
                            borderLeftWidth: '4px',
                            paddingLeft: '1rem',
                            fontStyle: 'italic',
                            marginBottom: '1.5rem',
                        },
                        ul: {
                            listStyleType: 'none',
                            paddingLeft: '0',
                            marginBottom: '0',
                        },
                        ol: {
                            listStyleType: 'none',
                            paddingLeft: '0',
                            marginBottom: '0',
                        },
                        li: {
                            color: 'hsl(var(--foreground))',
                            marginBottom: '0',
                        },
                        strong: {
                            color: 'hsl(var(--foreground))',
                            fontWeight: '600',
                        },
                        em: {
                            color: 'hsl(var(--foreground))',
                            fontStyle: 'italic',
                        },
                        code: {
                            color: 'hsl(var(--foreground))',
                            backgroundColor: 'hsl(var(--muted))',
                            padding: '0.25rem 0.5rem',
                            borderRadius: 'var(--radius)',
                            fontFamily: 'monospace',
                        },
                        pre: {
                            color: 'hsl(var(--foreground))',
                            backgroundColor: 'hsl(var(--muted))',
                            padding: '1rem',
                            borderRadius: 'var(--radius)',
                            overflowX: 'auto',
                            marginBottom: '1.5rem',
                        },
                        hr: {
                            borderColor: 'hsl(var(--border))',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
