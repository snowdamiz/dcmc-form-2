import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
   BeverageWrap
} from './beverageStyles';

function Beverage (props) {
    return (
        <BeverageWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </BeverageWrap>
    )
}

export default Beverage;