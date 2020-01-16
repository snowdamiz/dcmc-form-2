import styled from 'styled-components';
import { colors, fonts, media } from '../../../vars';

export const DetailsWrap = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 4px solid ${props => props.active ? colors.primary : `#f5f5f5`};

    &:hover {
        background-color: #f1f1f1;
        border-bottom: 4px solid ${props => props.active ? colors.primary : `#f1f1f1`};

        ${media.tablet} {
            border-bottom: 5px solid ${props => props.active ? colors.primary : `#f1f1f1`};
        }
    }

    ${media.tablet} {
        border-bottom: 5px solid ${props => props.active ? colors.primary : `#f5f5f5`};
    }
`;