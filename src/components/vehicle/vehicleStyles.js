import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const VehicleWrap = styled.section`
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
            border: 1px solid red;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            margin-top: 20px;

            ${media.tablet} {
                margin-top: 26px;
            }
        `;

            export const Car = styled.div`
            
            `;

                export const VehicleIMG = styled.img`
                
                `;

                export const VehicleInfo = styled.div`
                
                `;

                    export const VehicleHeading = styled.h3`
                    
                    `;

                    export const VehicleTextBox = styled.div`

                    `;

                        export const VehicleTextBoxSec = styled.div`
                        
                        `;

                            export const VehicleText = styled.div`
                            
                            `;