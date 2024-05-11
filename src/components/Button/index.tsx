import * as S from "./styled";
import type { FC } from "react";

type ButtonProps = {
    children: any;
    link?: string;
    variant?: "primary" | "secondary";
    target?: "_blank" | "_self" | "_parent";
    align?: "left" | "center" | "right";
    asButton?: boolean;
    type?: "button" | "submit" | "reset";
};

/**
 * Button component
 * @param {string} link - link to the page
 * @example
 * <Button link="#">text</Button>
 */
export const Button: FC<ButtonProps> = ({
    link,
    target,
    children,
    align = "center",
    variant = "primary",
    asButton,
    type,
    ...rest
}) => {
    // render button as normal button, otherwise as link
    const ButtonComponent = asButton ? S.Button : S.ButtonLink;

    const primaryClass =
        "inline-flex items-center justify-center ml-3 border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary bg-tertiary hover:bg-secondary font-medium";

    const secondaryClass =
        "flex items-center px-4 py-3 transition duration-150 ease-in-out text-primary hover:text-tertiary";
    let classes;

    switch (variant) {
        case "primary":
            classes = primaryClass;
            break;
        case "secondary":
            classes = secondaryClass;
            break;
        default:
            classes = primaryClass;
            break;
    }

    let alignClasses;

    switch (align) {
        case "left":
            alignClasses = "justify-start";
            break;
        case "center":
            alignClasses = "justify-center";
            break;
        case "right":
            alignClasses = "justify-end";
            break;
        default:
            alignClasses = "justify-center";
            break;
    }

    return (
        <S.ButtonWrapper $align={align}>
            <ButtonComponent
                href={link}
                target={target}
                {...rest}
                $variant={variant}
                className={"p-2 px-4" + " " + classes + " " + alignClasses}
            >
                {children}
            </ButtonComponent>
        </S.ButtonWrapper>
    );
};
