import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            width: {
                'carousel': 'calc(100vw - (100vw - 1180px) / 2)',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                gray: {
                    background: "#121214",
                    elements: "#202024",
                    icon: "#8D8D99",
                    text: "#C4C4CC",
                    title: "#E1E1E6",
                },
                green: {
                    principal: "#00875F",
                    light: "#00B37E",
                },
                brand: {
                    green: "#1EA483",
                    purple: "#7465D4",
                },
            },
        },
    },
    plugins: [],
};
export default config;
