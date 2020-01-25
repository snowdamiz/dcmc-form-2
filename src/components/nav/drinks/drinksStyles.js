import styled from 'styled-components';
import { colors, fonts, media } from '../../../vars';

export const DrinksWrap = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 4px solid ${props => props.active ? colors.green : `#f2f2f2`};
    background-color: #f2f2f2;
    
    &:hover {
        background-color: #EDEDED;
        border-bottom: 4px solid ${props => props.active ? colors.green : `#EDEDED`};

        ${media.tablet} {
            border-bottom: 5px solid ${props => props.active ? colors.green : `#EDEDED`};
        }
    }

    ${media.tablet} {
        border-bottom: 5px solid ${props => props.active ? colors.green : `#f2f2f2`};
    }
`;