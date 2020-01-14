import React from 'react';

import { CarWrap } from './carStyles';
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
                <Img src="#" />
            </ImgBox>
            <TextBox>
                <NavLinkTitle></NavLinkTitle>
                <NavLinkDesc></NavLinkDesc>
            </TextBox>
        </CarWrap>
    )
}

export default Car;