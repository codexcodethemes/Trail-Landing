import { css } from "@emotion/react";

// use this colors only if necessary - use Theme for colors
export const Colors = {
    primary: "#FFFFFF",
    secondary: "#131923",
    tertiary: "#2872d1",
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.primary};
        --secondary: ${Colors.secondary};
        --tertiary: ${Colors.tertiary};
    }
`;

// use this for colors
export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
};
