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

    ${media.largeTablet} {
        width: 800px;
    }

    ${media.modern} {
        width: 1300px;
    }
`;

    export const VehicleBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 290px;
        margin-top: 30px;

        ${media.phone} {
            width: 320px;
        }
        
        ${media.tablet} {
            width: 500px;
        }

        ${media.largeTablet} {
            width: 720px;
        }

        ${media.modern} {
            width: 1200px;
        }
    `;

        export const SelectionBox = styled.div`
            width: 100%;
            // border: 1px solid red;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;

            ${media.tablet} {
                width: 450px;
            }
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
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            margin-top: 25px;
            // border: 1px solid red;

            ${media.tablet} {
                margin-top: 30px;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: center;
            }
        `;

            export const Car = styled.div`
                width: 100%;
                // border: 1px solid ${colors.green};
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                cursor: pointer;
                border: 6px solid transparent;
                
                &:active,
                &:hover {
                    border: 6px solid ${colors.green};
                }

                ${media.tablet} {
                    width: 220px;
                }

                ${media.largeTablet} {
                    width: 250px;
                }

                ${media.largeTablet} {
                    width: 224px;
                }

                ${media.modern} {
                    width: 280px;
                }
            `;

                export const VehicleIMG = styled.img`
                    width: 100%;
                    height: 190px;
                    background-color: ${colors.gray};

                    ${media.phone} {
                        height: 216px;
                    }

                    ${media.tablet} {
                        height: 150px;
                    }

                    ${media.largeTablet} {

                    }

                    ${media.modern} {
                        height: 190px;
                    }
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
                        background-color: ${colors.green};
                        width: 270px;
                        // margin-left: -1px;
                        // min-height: 30px;

                        ${media.phone} {
                            width: 300px;
                        }

                        ${media.tablet} {
                            width: 200px;
                            font-size: 15px;
                        }

                        ${media.largeTablet} {
                            width: 204px;
                        }

                        ${media.modern} {
                            width: 260px;
                            padding: 16px 10px;
                        }
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
                        width: 99.6%;
                        padding: 14px 0;

                        ${media.tablet} {
                            width: 99.4%;
                        }

                        ${media.largeTablet} {
                            width: 99.2%;
                        }
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

                                ${media.tablet} {
                                    font-size: 13px;
                                }
                            `;
                    
                    export const ErrorMSG = styled.span`
                        font-size: 13px;
                        font-family: ${fonts.text};
                        color: red;
                        text-align: left;
                        align-self: center;
                        padding-bottom: 5px;
                        margin: 16px 0 0 -10px;
                    `;