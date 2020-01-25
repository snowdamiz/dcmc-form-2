import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav'; 

import {
    DetailsWrap,
    DetailsBox,
    ErrorMSG,
    Input,
    Textarea,
    SubmitBox,
    SubmitBtn
} from './detailsStyles';

function Details (props) {

    const handleName = (e) =>  props.setName(e.target.value);
    const handleEmail = (e) => props.setEmail(e.target.value);
    const handlePhone = (e) => props.setPhone(e.target.value);
    const handleAddress = (e) => props.setAddress(e.target.value);
    const handleComment = (e) => props.setComment(e.target.value);

    const errs = props.errors;

    return (
        <DetailsWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <DetailsBox>
                {errs.includes(40) ? <ErrorMSG>Enter a Valid Name</ErrorMSG> : null }
                <Input 
                    type="text"
                    placeholder="Name"
                    value={props.name}
                    onChange={handleName} />

                {errs.includes(41) ? <ErrorMSG>Enter a Valid Email Address</ErrorMSG> : null }
                <Input
                    type="text"
                    placeholder="Email"
                    value={props.email}
                    onChange={handleEmail} />

                {errs.includes(42) ? <ErrorMSG>Enter a Valid Phone Number</ErrorMSG> : null }
                <Input
                    type="text"
                    placeholder="Phone"
                    value={props.phone}
                    onChange={handlePhone} />

                {errs.includes(43) ? <ErrorMSG>Enter a Valid Address</ErrorMSG> : null }
                <Input
                    type="text"
                    placeholder="Pick Up Address"
                    value={props.address}
                    onChange={handleAddress} />

                <Textarea
                    type="text"
                    placeholder="Comment"
                    value={props.comment}
                    onChange={handleComment} />
            </DetailsBox>  
            <SubmitBox>
                <SubmitBtn onClick={props.submit}>Submit</SubmitBtn>
            </SubmitBox>
        </DetailsWrap>
    )
}

export default Details;