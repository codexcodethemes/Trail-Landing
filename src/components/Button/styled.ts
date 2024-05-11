import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const ButtonWrapper = styled.div<{
    $align?: "left" | "center" | "right";
}>`
    display: flex;
    justify-content: ${({ $align }) => $align || "flex-start"};
    margin-top: 20px;
`;

export const ButtonLink = styled.a<{
    $variant: "primary" | "secondary";
}>`
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;

    ${({ $variant }) => $variant === "primary" && PrimaryVariant};
    ${({ $variant }) => $variant === "secondary" && SecondaryVariant};
`;

export const Button = ButtonLink.withComponent("button");

const PrimaryVariant = css`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${Theme.secondary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: transparent;
    color: ${Theme.secondary};

    &:hover {
        background: ${Theme.secondary};
        color: ${Theme.primary};
    }
`;

const SecondaryVariant = css`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${Theme.tertiary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: ${Theme.tertiary};
    color: ${Theme.primary};

    &:hover {
        background: transparent;
        color: ${Theme.tertiary};
    }
`;
