import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const VehicleWrap = styled.section`
    width: 100%;
    min-height: 100%;
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
        min-height: 800px;
        margin: 0px auto;
        position: relative;
        margin-top: 20px;
        overflow-y: auto;
    }
`;

    export const VehicleBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 310px;
        margin-top: 30px;
        // border: 1px solid purple;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }
    `;

        export const SelectionBox = styled.div`
            width: 100%;
            // border: 1px solid red;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        `;

            export const Select = styled.select`
                width: 30%;
                border: 1px solid #D7D7D7;
                padding: 6px 8px;
                color: ${colors.dark};
            `;

                export const Option = styled.option`

                `;

        export const CarBox = styled.div`
            width: 100%;
            // border: 1px solid red;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            margin-top: 25px;

            ${media.tablet} {
                margin-top: 30px;
            }
        `;

            export const Car = styled.div`
                width: 100%;
                // border: 1px solid ${colors.green};
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            `;

                export const VehicleIMG = styled.img`
                    width: 100%;
                    // height: auto;
                    min-height: 150px;
                    border-left: 1px solid ${colors.gray};
                    border-right: 1px solid ${colors.gray};
                    background-color: ${colors.gray};
                `;

                export const VehicleInfo = styled.div`
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                `;

                    export const VehicleHeading = styled.h3`
                        font-family: ${fonts.text};
                        font-weight: 700;
                        color: ${colors.white};
                        align-self: flex-start;
                        padding: 10px;
                        font-size: 17px;
                        // border: 1px solid red;
                        border-left: 1px solid ${colors.green};
                        border-right: 1px solid ${colors.green};
                        background-color: ${colors.green};
                        width: 290px;
                        margin-left: -1px;
                    `;

                    export const VehicleTextBox = styled.div`
                        box-sizing: box;
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: center;
                        align-items: center;
                        // border: 1px solid green;
                        border-right: 1px solid ${colors.gray};
                        border-left: 1px solid ${colors.gray};
                        border-bottom: 1px solid ${colors.gray};
                        width: 100%;
                        padding: 14px 0;
                    `;

                        export const VehicleTextBoxSec = styled.div`
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            padding: 6px 0;
                        `;

                            export const VehicleText = styled.p`
                                font-family: ${fonts.text};
                                color: ${colors.dark};
                                font-size: 14px;
                                padding: 0 10px;
                            `;