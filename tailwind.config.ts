import { colors } from "@/constants/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
};
