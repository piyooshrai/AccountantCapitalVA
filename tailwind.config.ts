import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3A2D',
          mid: '#2D5A46',
          light: '#4A8A6E',
        },
        mint: {
          DEFAULT: '#7DD4AA',
          light: '#A8E6C8',
        },
        stone: {
          DEFAULT: '#F5F2EC',
          warm: '#EDE8DF',
        },
        text: {
          dark: '#1A1A1A',
          mid: '#5C5C5C',
          light: '#9A9A9A',
        },
        amber: '#D4A843',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'section-label': ['12px', { fontWeight: '800', letterSpacing: '0.12em' }],
        'section-heading': ['clamp(30px, 3.5vw, 46px)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        card: '8px',
        button: '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'clip-reveal': 'clipReveal 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        clipReveal: {
          '0%': { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' },
        },
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
};

export default config;
