import React from 'react';
import Calendar from 'react-calendar';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
    DatetimeWrap,
    DatetimeBox,
    TimesBox,
    TimesSec,
    TimeBtn,
    ErrorMSG,
} from './datetimeStyles';

function Datetime (props) {
    const errs = props.errors;

    const handleDate = (date) => {
        props.setDate(date);
    }

    const handleTime = (e) => {
        props.setTime(e.target.value);
    }

    return (
        <DatetimeWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />

            <DatetimeBox>
                {errs.includes(20) ? <ErrorMSG>Please Select a Date</ErrorMSG> : null }
                <Calendar
                    onChange={handleDate} 
                    minDate={new Date()}
                    tileClassName="cal_tile" />

                <TimesBox>
                    {errs.includes(21) ? <ErrorMSG className="primary">Please Select a Time</ErrorMSG>: null }
                    <TimesSec>
                        <TimeBtn 
                            value="10:00AM"
                            className={props.time === "10:00AM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>10:00 AM</TimeBtn>
                        <TimeBtn 
                            value="11:00AM"
                            className={props.time === "11:00AM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>11:00 AM</TimeBtn>
                        <TimeBtn 
                            value="12:00PM"
                            className={props.time === "12:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>12:00 PM</TimeBtn>
                    </TimesSec>
                    <TimesSec>
                        <TimeBtn 
                            value="1:00PM"
                            className={props.time === "1:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>1:00 PM</TimeBtn>
                        <TimeBtn 
                            value="2:00PM"
                            className={props.time === "2:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>2:00 PM</TimeBtn>
                        <TimeBtn 
                            value="3:00PM"
                            className={props.time === "3:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>3:00 PM</TimeBtn>
                    </TimesSec>
                </TimesBox>
            </DatetimeBox>
            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </DatetimeWrap>
    )
}

export default Datetime;