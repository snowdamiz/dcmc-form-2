import React from 'react';
import Car from './car/car';
import Time from './time/time';
import Drinks from './drinks/drinks';
import Details from './details/details';

import {
    NavWrap
} from './navStyles';

function Nav (props) {
    return (
        <NavWrap>
            <Car
                page={props.page}
                setPage={props.setPage}
                setProductID={props.setProductID} />
            <Time 
                page={props.page}
                setPage={props.setPage} />
            <Drinks 
                page={props.page}
                setPage={props.setPage} />
            <Details 
                page={props.page}
                setPage={props.setPage} />
        </NavWrap>
    )
}

export default Nav;