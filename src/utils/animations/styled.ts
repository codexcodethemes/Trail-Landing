import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const FadeInKeyframes = keyframes`
    from {
        transform: translateY(50px);
        opacity: 0.01;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`;
