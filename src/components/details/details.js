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
    SubmitBtn,
    CTA,
} from './detailsStyles';

function Details (props) {

    const handleName = (e) =>  props.setName(e.target.value);
    const handleEmail = (e) => props.setEmail(e.target.value);
    const handlePhone = (e) => props.setPhone(e.target.value);
    const handleAddress = (e) => props.setAddress(e.target.value);
    const handleComment = (e) => props.setComment(e.target.value);

    const errs = props.errors;
    const cta = props.cta;

    return (
        <DetailsWrap>
            <Header reset={props.reset} />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            {cta ? (
                <CTA>
                    <h1>Your Test Drive Appointment Has Been Sent</h1>
                    <div className="line"></div>
                    <h1>If You would like to continue viewing our inventory please click on the button below</h1>
                    <a href="https://www.dcmotorcompany.com/used-vehicles-portland-or">
                        <button className="cto_btn">Inventory</button>
                    </a>
                    
                </CTA>
            ) : (
                <DetailsBox>
                    <h1 className="addr_head">Appointment Location</h1>
                    {errs.includes(43) ? <ErrorMSG>Enter a Valid Address</ErrorMSG> : null }
                    <Input
                        type="text"
                        placeholder="Appointment Address"
                        value={props.address}
                        onChange={handleAddress} />

                    <h1 className="addr_head">Your Information</h1>
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

                    <Textarea
                        type="text"
                        placeholder="Comment"
                        value={props.comment}
                        onChange={handleComment} />
                </DetailsBox>
            ) }
            {cta === false ? (
                <SubmitBox>
                    <SubmitBtn onClick={props.submit}>
                        Schedule
                    </SubmitBtn>
                </SubmitBox>
            ) : null }
        </DetailsWrap>
    )
}

export default Details;