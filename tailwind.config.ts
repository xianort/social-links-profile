import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,htm}"],
    theme: {
        colors: {
            grey: {
                700: "hsl(0, 0%, 20%)",
                800: "hsl(0, 0%, 12%)",
                900: "hsl(0, 0%, 8%)",
            },
            white: "hsl(0, 0%, 100%)",
            green: "hsl(75, 94%, 57%)",
        },
        fontFamily: {
            sans: ["Inter", "InterStatic", "sans-serif"],
        },
        keyframes: {
            intro: {
                from: {
                    transform: "scale(0.96)",
                    opacity: "0",
                },
                to: {
                    transform: "scale(1)",
                    opacity: "1",
                },
            },
        },
        animation: {
            intro: "intro 200ms ease-out 300ms backwards",
        },
    },
} satisfies Config;
