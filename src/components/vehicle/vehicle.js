import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';

import {
    VehicleWrap
} from './vehicleStyles';

function Vehicle () {
    return (
        <VehicleWrap>
            <Header />
            <Nav />
        </VehicleWrap>
    )
}

export default Vehicle;