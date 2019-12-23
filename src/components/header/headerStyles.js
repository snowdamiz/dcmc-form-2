import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.header`
    width: 100%;
    border: 1px solid red;
    height: 46px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    div {
        width: 30px;
        height: 30px;
        border: 1px solid gray;
        margin-right: 14px;
    }
`;

    export const H1 = styled.h1`
        color: ${colors.dark};
        font-size: 20px;
        font-family: ${fonts.heading};
        font-weight: 600;
        margin-left: 14px;
    `;