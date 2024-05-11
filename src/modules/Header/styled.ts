import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const HeaderStyled = styled.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`;

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${MediaQuery.max("lg")} {
        padding: 0 20px;
    }
`;
