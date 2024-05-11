import { type FC } from "react";

import IconReact from "./icon-react.svg";
import IconChecked from "./icon-checked.svg";
import IconTestimonial from "./icon-testimonial.svg";

export const icons = {
    checked: IconChecked,
    testimonial: IconTestimonial,
    react: IconReact,
};

export type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<React.ButtonHTMLAttributes<HTMLElement> & IconName> = ({
    alt,
    iconData,
    ...rest
}) => {
    const icon = icons[iconData];

    return (
        <img
            src={icon.src}
            alt={alt}
            width={icon.width}
            height={icon.height}
            data-icon="true"
            {...rest}
        />
    );
};
