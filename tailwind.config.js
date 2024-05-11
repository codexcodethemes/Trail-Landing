const Colors = require("./src/styles/colors").Colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: Colors.primary,
                secondary: Colors.secondary,
                tertiary: Colors.tertiary,
            },
        },
    },
};
