import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.header`
    width: 100%;
    border-bottom: 3px solid ${colors.green};
    background-color: ${colors.green};
    height: 56px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    ${media.tablet} {
        min-height: 60px;
        // justify-content: center;
    }

    ${media.largeTablet} {
        min-height: 70px;
    }
`;

    export const H1 = styled.h1`
        color: ${colors.white};
        font-size: 18px;
        font-family: "Times New Roman", Times, serif;
        font-weight: 500;
        margin-left: 14px;
        cursor: pointer;

        ${media.tablet} {
            font-size: 20px;
            // margin-left: 0;
        }

        ${media.largeTablet} {
            font-size: 22px;
            margin-left: 16px;
        }

        ${media.modern} {
            font-size: 26px;
            margin-left: 20px;
        }

        span {
            font-size: 16px;
        }
    `;

    export const Close = styled.img`
        width: 18px;
        height: 18px;
        // border: 1px solid red;
        margin-right: 15px;
        cursor: pointer;
    `;