import React from 'react';
import Calendar from 'react-calendar';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
    DatetimeWrap,
    DatetimeBox,
} from './datetimeStyles';

function Datetime (props) {
    const handleDate = (date) => {
        props.setDate(date);
    }

    return (
        <DatetimeWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />

            <DatetimeBox>
                <Calendar
                    onChange={handleDate} 
                    value={props.date}
                    minDate={new Date()}
                    activeStartDate={props.date} />
            </DatetimeBox>
            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </DatetimeWrap>
    )
}

export default Datetime;