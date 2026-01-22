// tailwind.config.js
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
    },
  },
};
