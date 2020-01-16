import React from 'react';

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
    const HandlePage = () => props.setPage(1);

    return (
        <CarWrap onClick={HandlePage}>
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