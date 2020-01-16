import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const DetailsWrap = styled.section`
    width: 100%;
    height: 100vh;
    border: 1px solid blue;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

    export const SubmitBtn = styled.button`
        width: 120px;
        height: 30px;
        border: 1px solid red;
        bottom: 40px;
        position: absolute;
    `;