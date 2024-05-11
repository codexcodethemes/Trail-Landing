import styled from "@emotion/styled";
import { Theme } from "@styles/colors";

export const CenterTextStyled = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    position: relative;

    min-height: 250px;
    padding: 100px 0;

    background: ${Theme.secondary};
    position: relative;
    overflow: hidden;

    .icon-wrapper {
        margin-top: 50px;
    }

    h1 {
        font-size: 90px;
        line-height: 90px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 20px;
        color: ${Theme.primary};
    }

    p {
        color: ${Theme.primary};
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
`;
