import styled from 'styled-components';
import { fonts, colors, media } from '../../vars';

export const VehicleWrap = styled.section`
    width: 100%;
    height: 100vh;
    border: 1px solid blue;
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
    }
`;