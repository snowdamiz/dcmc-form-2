import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const DetailsWrap = styled.section`
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

    export const DetailsBox = styled.section`
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 270px;
        margin-top: 30px;

        ${media.phone} {
            width: 340px;
        }
        
        ${media.tablet} {
            width: 400px;
        }

        .primary {
            margin-top: 10px;
        }
    `;

        export const ErrorMSG = styled.span`
            font-size: 13px;
            font-family: ${fonts.text};
            color: red;
            text-align: left;
            align-self: flex-start;
            padding-bottom: 5px;
            margin: 6px 0 0 -10px;
        `;

        export const Input = styled.input`
            width: 100%;
            height: 40px;
            border: 1px solid #D7D7D7;
            margin-bottom: 12px;
            border-radius: 3px;
            background-color: #f8f8f8;
            color: gray;
            padding: 0 10px;
        `;
    
    export const SubmitBox = styled.section`
        width: 100%;
        padding: 20px 0;
        background-color: #f5f5f5;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-flow: colum nowrap;
        justify-content: center;
        align-items: center;
    `;

        export const SubmitBtn = styled.button`
            width: 140px;
            height: 40px;
            border: none;
            background-color: ${colors.green};
            bottom: 30px;
            color: ${colors.white};
        `;