/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'bg-image': "url('https://wallpaperaccess.com/full/4116303.jpg')"
        'bg-image': "url('https://img.freepik.com/free-vector/hand-drawn-yellow-day-background_23-2149417532.jpg?w=2000')"
      },
    },
  },
  plugins: [],
}
