import { type FC } from "react";
import * as S from "./styled";

export type CenterTextProps = {
    children: React.ReactNode | any;
};

export const CenterText: FC<CenterTextProps> = ({ children }) => {
    // do not render if there are no elements
    if (!children) {
        return null;
    }

    return <S.CenterTextStyled>{children}</S.CenterTextStyled>;
};
