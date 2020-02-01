import React, { useState } from 'react';
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
    const [disabled, setDisabled] = useState([]);

    const errs = props.errors;

    const handleDate = (date) => {
        props.setDate(date);

        let selectedDate = date.toString().split(" ");
        let today = new Date().toString().split(" ");

        if (selectedDate[0] === today[0] && selectedDate[1] === today[1] && selectedDate[2] === today[2]) {
            console.log(today[0], today[1], today[2]);
            console.log(selectedDate[0], selectedDate[1], selectedDate[2]);

            let time = selectedDate[4].toString().split(":");
            console.log(time);

            if (time[0] > 10) {
                setDisabled([10]);
            } else setDisabled([]);

            if (time[0] > 11) {
                setDisabled([10, 11]);
            } else setDisabled([]);
            
            if (time[0] > 12) {
                setDisabled([10, 11, 12]);
            } else setDisabled([]);

            if (time[0] > 13) {
                setDisabled([10, 11, 12, 1]);
            } else setDisabled([]);

            if (time[0] > 14) {
                setDisabled([10, 11, 12, 1, 2]);
            } else setDisabled([]);

            if (time[0] > 15) {
                setDisabled([10, 11, 12, 1, 2, 3])
            } else setDisabled([]);
        } else {
            setDisabled([]);
        }
    }

    const handleTime = (e) => {
        props.setTime(e.target.value);
    }

    console.log(disabled);

    return (
        <DatetimeWrap>
            <Header reset={props.reset} />
            <Nav
                page={props.page}
                setPage={props.setPage} />

            <DatetimeBox>
                <h1 className="head">Select Date & Time</h1>
                {errs.includes(20) ? <ErrorMSG>Please Select a Date</ErrorMSG> : null }
                <Calendar
                    onChange={handleDate} 
                    minDate={new Date()}
                    value={props.date}
                    tileClassName="cal_tile" />

                <TimesBox>
                    {errs.includes(21) ? <ErrorMSG className="primary">Please Select a Time</ErrorMSG>: null }
                    <TimesSec>
                        {disabled.includes(10) ? null : (
                            <TimeBtn 
                            value="10:00AM"
                            className={props.time === "10:00AM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>10:00 AM</TimeBtn>
                        )}

                        {disabled.includes(11) ? null : (
                            <TimeBtn 
                            value="11:00AM"
                            className={props.time === "11:00AM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>11:00 AM</TimeBtn>
                        )}

                        {disabled.includes(12) ? null : (
                            <TimeBtn 
                            value="12:00PM"
                            className={props.time === "12:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>12:00 PM</TimeBtn>
                        )}

                    </TimesSec>
                    <TimesSec>
                        {disabled.includes(1) ? null : (
                            <TimeBtn 
                            value="1:00PM"
                            className={props.time === "1:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>1:00 PM</TimeBtn>
                        )}

                        {disabled.includes(2) ? null : (
                            <TimeBtn 
                            value="2:00PM"
                            className={props.time === "2:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>2:00 PM</TimeBtn>
                        )}

                        {disabled.includes(3) ? null : (
                            <TimeBtn 
                            value="3:00PM"
                            className={props.time === "3:00PM" ? 'activeTime' : null }
                            onClick={(e) => handleTime(e)}>3:00 PM</TimeBtn>
                        )}
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