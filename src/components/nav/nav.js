import React from 'react';
import Car from './car/car';
import Time from './time/time';
import Drinks from './drinks/drinks';
import Details from './details/details';

import {
    NavWrap
} from './navStyles';

function Nav () {
    return (
        <NavWrap>
            <Car />
            <Time />
            <Drinks />
            <Details />
        </NavWrap>
    )
}

export default Nav;