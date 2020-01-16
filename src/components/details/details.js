import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav'; 

import {
    DetailsWrap,
    SubmitBtn
} from './detailsStyles';

function Details (props) {
    return (
        <DetailsWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <SubmitBtn>Submit</SubmitBtn>
        </DetailsWrap>
    )
}

export default Details;