import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';

import {
    DatetimeWrap
} from './datetimeStyles';

function Datetime () {
    return (
        <DatetimeWrap>
            <Header />
            <Nav />
        </DatetimeWrap>
    )
}

export default Datetime;