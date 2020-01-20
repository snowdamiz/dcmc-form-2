import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const NavWrap = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
    margin-top: 2px;

    ${media.phone} {
        height: 70px;
    }

    ${media.tablet} {
        height: 76px;
    }
`;

    export const ImgBox = styled.div``;

        export const Img = styled.img`
            width: 22px;

            ${media.phone} {
                width: 24px;
            }

            ${media.tablet} {
                width: 26px;
            }
            
        `;

    export const TextBox = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        display: none;

        // ${media.phone} {
        //     display: flex;
        // }
    `;

        export const NavLinkTitle = styled.p`
            font-family: ${fonts.text};
            color: ${colors.dark};
            font-size: 14px;
            font-weight: 700;
            margin-top: 3px;

            ${media.tablet} {
                margin-top: 6px;
                font-size: 15px;
            }
        `;

        export const NavLinkDesc = styled.p`
            font-family: ${fonts.text};
            color: ${colors.dark};
            font-size: 13px;
            margin-top: 2px;

            ${media.tablet} {
                font-size: 14px;
            }
        `;