import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav'; 

import {
    DetailsWrap,
    DetailsBox,
    Input,
    SubmitBox,
    SubmitBtn
} from './detailsStyles';

function Details (props) {

    const handleName = (e) =>  props.setName(e.target.value);
    const handleEmail = (e) => props.setEmail(e.target.value);
    const handlePhone = (e) => props.setPhone(e.target.value);

    return (
        <DetailsWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <DetailsBox>
                <Input 
                    type="text"
                    placeholder="Name"
                    value={props.name}
                    onChange={handleName} />
                <Input
                    type="text"
                    placeholder="Email"
                    value={props.email}
                    onChange={handleEmail} />
                <Input
                    type="text"
                    placeholder="Phone"
                    value={props.phone}
                    onChange={handlePhone} />
            </DetailsBox>  
            <SubmitBox>
                <SubmitBtn onClick={props.submit}>Submit</SubmitBtn>
            </SubmitBox>
        </DetailsWrap>
    )
}

export default Details;