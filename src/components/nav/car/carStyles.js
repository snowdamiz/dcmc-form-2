import styled from 'styled-components';
import { colors, fonts, media } from '../../../vars';

export const CarWrap = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${colors.primary};
`;