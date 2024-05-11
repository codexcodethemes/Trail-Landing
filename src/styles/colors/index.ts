import { css } from "@emotion/react";

// use this colors only if necessary - use Theme for colors
export const Colors = {
    white: "#FFFFFF",
    dark: "#101118",
    darkLighter: "#20222e",
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.white};
        --secondary: ${Colors.darkLighter};
        --tertiary: ${Colors.dark};
    }
`;

// use this for colors
export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
};
