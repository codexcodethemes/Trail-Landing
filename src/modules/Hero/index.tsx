import { type FC } from "react";
import * as S from "./styled";
import {
    CenterText,
    type CenterTextProps,
} from "./variants/CenterText/CenterText";
import { TextImage, type TextImageProps } from "./variants/TextImage/TextImage";

/**
 * to avoid passing wrong props to the component
 * we can use union type to define the props
 * and use it as a prop in the component
 * this way we can avoid passing wrong props
 * and also we can have a better understanding of the component
 */
type HeroProps =
    | {
          heroType: "center";
          data: CenterTextProps;
      }
    | {
          heroType: "textImage";
          data: TextImageProps;
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
        case "textImage":
            HeroTypeOutput = (
                <TextImage {...(data as TextImageProps)} {...rest} />
            );
            break;
    }

    /**
     * if any of hero types need to be full width,  make check here with boolean
     * like:
     * const isFullWidth = heroType === "center" ? true : false;
     */
    const isFullWidth = false;

    return (
        <S.HeroWrapper $isFullWidth={isFullWidth}>
            {HeroTypeOutput}
        </S.HeroWrapper>
    );
};
