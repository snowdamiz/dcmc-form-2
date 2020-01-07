import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav'; 

import {
    DetailsWrap
} from './detailsStyles';

function Details (props) {
    return (
        <DetailsWrap>
            <Header />
            <Nav /> 
        </DetailsWrap>
    )
}

export default Details;