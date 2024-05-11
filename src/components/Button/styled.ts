import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonWrapper = styled.div<{
    $align?: "left" | "center" | "right";
}>`
    display: flex;
    justify-content: ${({ $align }) => $align || "flex-start"};
`;

export const ButtonLink = styled.a<{
    $variant: "primary" | "secondary";
}>`
    /**
        if needed make custom css for buttons
    */

    /* ${({ $variant }) => $variant === "primary" && PrimaryVariant};
    ${({ $variant }) => $variant === "secondary" && SecondaryVariant}; */
`;

export const Button = ButtonLink.withComponent("button");

const PrimaryVariant = css``;

const SecondaryVariant = css``;
