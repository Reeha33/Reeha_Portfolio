/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1400px",
        },
        extend: {
            fontFamily: {
                primary: ["var(--font-sans)"],
            },
            colors: {
                background: {
                    DEFAULT: "#0F172A",  // main dark background
                    secondary: "#1E293B" // lighter dark section
                },
                text: {
                    primary: "#E2E8F0", // main text
                    muted: "#94A3B8"    // secondary text
                },
                accent: {
                    DEFAULT: "#10B981", // emerald green
                    hover: "#059669"
                },
                highlight: {
                    DEFAULT: "#FBBF24", // amber for buttons/highlights
                    hover: "#FACC15"
                },
            },
        },
    },
    plugins: [],
};
