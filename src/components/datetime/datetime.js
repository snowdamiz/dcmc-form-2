import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
    DatetimeWrap
} from './datetimeStyles';

function Datetime (props) {
    return (
        <DatetimeWrap>
            <Header />
            <Nav />
            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </DatetimeWrap>
    )
}

export default Datetime;