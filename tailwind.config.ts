import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					purple: 'hsl(var(--neon-purple))',
					blue: 'hsl(var(--neon-blue))',
					green: 'hsl(var(--neon-green))',
					pink: 'hsl(var(--neon-pink))',
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'neon': 'var(--shadow-neon)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsla(263, 70%, 50%, 0.15)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsla(263, 70%, 50%, 0.4)',
						transform: 'scale(1.02)'
					}
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				'slide-up': {
					'from': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'to': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'from': { 
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'to': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in': {
					'from': { opacity: '0' },
					'to': { opacity: '1' }
				},
				'bounce-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.3)'
					},
					'50%': { 
						transform: 'scale(1.1)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'book-open': {
					'0%': { 
						transform: 'rotateY(0deg) perspective(1000px)',
						transformOrigin: 'left center'
					},
					'100%': { 
						transform: 'rotateY(-15deg) perspective(1000px)',
						transformOrigin: 'left center'
					}
				},
				'page-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(-180deg)' }
				},
				'sparkle': {
					'0%, 100%': { 
						opacity: '0',
						transform: 'scale(0)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'pulse-slow': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '0.8'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'tilt': {
					'0%, 50%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'book-open': 'book-open 0.6s ease-out forwards',
				'page-flip': 'page-flip 0.8s ease-in-out forwards',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'tilt': 'tilt 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
