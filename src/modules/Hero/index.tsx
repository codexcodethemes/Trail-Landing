import { type FC } from "react";

import {
    CenterText,
    type CenterTextProps,
} from "./variants/CenterText/CenterText";

/**
 * to avoid passing wrong props to the component
 * we can use union type to define the props
 * and use it as a prop in the component
 * this way we can avoid passing wrong props
 * and also we can have a better understanding of the component
 */
type HeroProps = {
    heroType: "center";
    data: CenterTextProps;
};

export const Hero: FC<HeroProps> = ({ heroType, data, ...rest }) => {
    /*
     * content can be passed as children or as content prop
     * if content is passed as children, it will be used as content
     * if content is passed as content prop, it will be used as content via custom html
     */
    if (!data) {
        return null;
    }

    let HeroTypeOutput;
    switch (heroType) {
        case "center":
            HeroTypeOutput = (
                <CenterText {...(data as CenterTextProps)} {...rest} />
            );
            break;
    }

    return (
        <div className="flex items-center justify-center">{HeroTypeOutput}</div>
    );
};
