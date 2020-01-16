import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.header`
    width: 100%;
    border-bottom: 3px solid ${colors.dark};
    background-color: ${colors.white};
    height: 48px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        height: 55px;
    }
`;

    export const H1 = styled.h1`
        color: ${colors.dark};
        font-size: 20px;
        font-family: ${fonts.heading};
        font-weight: 600;
        margin-left: 14px;

        ${media.tablet} {
            font-size: 22px;
        }
    `;

    export const Close = styled.img`
        width: 20px;
        height: 20px;
        // border: 1px solid red;
        margin-right: 15px;
    `;