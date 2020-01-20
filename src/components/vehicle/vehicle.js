import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
    VehicleWrap,
    VehicleBox,
} from './vehicleStyles';

function Vehicle (props) {
    return (
        <VehicleWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage}/>

            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </VehicleWrap>
    )
}

export default Vehicle;