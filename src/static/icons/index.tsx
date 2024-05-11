import { type FC } from "react";

import IconHome from "./icon-home.svg";
import IconService from "./icon-service.svg";
import IconContact from "./icon-contact.svg";
import IconWork from "./icon-work.svg";
import IconPerson from "./icon-person.svg";
import IconThemeDark from "./icon-theme-dark.svg";
import IconThemeLight from "./icon-theme-light.svg";
import IconFacebook from "./icon-facebook.svg";
import IconInstagram from "./icon-instagram.svg";
import IconTwitter from "./icon-twitter.svg";
import IconLinkedIn from "./icon-linkedin.svg";
import IconGithub from "./icon-github.svg";
import IconArrowDown from "./icon-arrow-down.svg";
import IconArrowCircle from "./icon-arrow-circle.svg";

export const icons = {
    home: IconHome,
    service: IconService,
    contact: IconContact,
    work: IconWork,
    person: IconPerson,
    themeDark: IconThemeDark,
    themeLight: IconThemeLight,
    facebook: IconFacebook,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedIn,
    github: IconGithub,
    arrowDown: IconArrowDown,
    arrowCircle: IconArrowCircle,
};

type IconName = {
    iconData: keyof typeof icons;
    alt: string;
};

/**
 * Icon is a component that renders an image with the specified icon name
 * @example
 * <Icon iconData="home" alt="home" />
 * for change color of icon use css filter
 */
export const Icon: FC<IconName> = ({ alt, iconData, ...rest }) => {
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

import IconAstro from "./icon-astro.svg";
import IconReact from "./icon-react.svg";
import IconNext from "./icon-next.js.svg";
import IconNetlify from "./icon-netlify.svg";

export { IconAstro, IconReact, IconNext, IconGithub, IconNetlify };
