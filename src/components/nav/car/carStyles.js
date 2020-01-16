import styled from 'styled-components';
import { colors, fonts, media } from '../../../vars';

export const CarWrap = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 3px solid ${props => props.active ? colors.primary : `#f5f5f5`};
`;