import React, { useState, useEffect } from 'react';

import { CarWrap } from './carStyles';
import CarIMG from '../../../assets/car.svg';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Car (props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.page === 1) setActive(true);
    }, [props.page])

    const HandlePage = () => props.setPage(1);

    return (
        <CarWrap 
            onClick={HandlePage}
            active={active} >
            <ImgBox>
                <Img src={CarIMG} />
            </ImgBox>
            <TextBox>
                <NavLinkTitle>Step One</NavLinkTitle>
                <NavLinkDesc>Vehicle</NavLinkDesc>
            </TextBox>
        </CarWrap>
    )
}

export default Car;