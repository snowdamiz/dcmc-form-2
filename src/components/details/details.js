import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';

import {
    DetailsWrap
} from './detailsStyles';

function Details () {
    return (
        <DetailsWrap>
            <Header />
            <Nav />
        </DetailsWrap>
    )
}

export default Details;