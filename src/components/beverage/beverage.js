import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';

import {
   BeverageWrap
} from './beverageStyles';

function Beverage () {
    return (
        <BeverageWrap>
            <Header />
            <Nav />
        </BeverageWrap>
    )
}

export default Beverage;