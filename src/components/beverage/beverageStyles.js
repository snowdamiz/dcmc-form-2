import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const BeverageWrap = styled.section`
    width: 100%;
    height: 100vh;
    // border: 1px solid blue;
    box-shadow: 0px 0px 10px #B7B7B7;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    ${media.tablet} {
        width: 560px;
        max-height: 800px;
        margin: 0px auto;
        position: relative;
        margin-top: 20px;
    }
`;

    export const BeverageBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 40px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }
    `;

        export const Section = styled.section`
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        `;

            export const Item = styled.div`
                width: 44%;
                border: 1px solid blue;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
            `;

                export const Heading = styled.h3`
                    font-family: ${fonts.heading};
                    font-size: 15px;
                    padding: 10px;
                `;

                export const IMG = styled.img`
                    border: 1px solid green;
                    width: 100%;
                `;