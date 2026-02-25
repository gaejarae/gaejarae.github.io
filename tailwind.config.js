/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1f2328',
                    muted: '#636c76',
                },
                accent: {
                    blue: '#0969da',
                    green: '#1f883d',
                    orange: '#fd8c73',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            backgroundColor: {
                'github-card': '#ffffff',
                'github-main': '#ffffff',
                'github-side': '#f6f8fa',
            }
        },
    },
    plugins: [],
}
