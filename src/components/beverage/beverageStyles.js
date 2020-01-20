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

            // ACTIVE CLASS FOR SELECTED ITEM
            .active {
                border: 6px solid ${colors.green};
                background-color: ${colors.green};
                ${media.tablet} {
                    border: 8px solid ${colors.green};
                }
            }
        `;

            export const Item = styled.div`
                width: 40%;
                // border: 1px solid blue;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 10px #CDCDCD;
                border: 6px solid transparent;
                cursor: pointer;

                ${media.tablet} {
                    border: 8px solid transparent;
                }

                &:hover {
                    border: 6px solid ${colors.green};
                    background-color: ${colors.green};

                    ${media.tablet} {
                        border: 8px solid ${colors.green};
                    }

                    .heading {
                        font-weight: 800;
                        color: ${colors.white};
                        text-shadow: 0px 0px 4px #626262;
                    }
                }

                .activeHeading {
                    font-weight: bold;
                    color: ${colors.white};
                    text-shadow: 0px 0px 4px #626262;
                }
            `;

                export const Heading = styled.h3`
                    font-family: ${fonts.text};
                    font-size: 15px;
                    padding: 14px;
                    font-weight: 600;
                `;

                export const IMG = styled.img`
                    // border: 1px solid green;
                    width: 100%;
                `;