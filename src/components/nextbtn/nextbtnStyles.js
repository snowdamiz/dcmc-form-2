import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const NextBox = styled.section`
    width: 100%;
    padding: 20px 0;
    background-color: #f2f2f2;
    // position: absolute;
    bottom: 0;
    display: flex;
    flex-flow: colum nowrap;
    justify-content: center;
    align-items: center;
`;

    export const NextButton = styled.button`
        width: 140px;
        height: 40px;
        border: none;
        background-color: ${colors.green};
        bottom: 30px;
        color: ${colors.white};
    `;