import React from 'react'

import { DetailsWrap } from './detailsStyles';
import DetailsIMG from '../../../assets/user.svg';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Details (props) {
    const HandlePage = () => props.setPage(4);

    return (
        <DetailsWrap onClick={HandlePage}>
            <ImgBox>
                <Img src={DetailsIMG} />
            </ImgBox>
            <TextBox>
                <NavLinkTitle>Step Four</NavLinkTitle>
                <NavLinkDesc>Book Now</NavLinkDesc>
            </TextBox>
        </DetailsWrap>
    )
}

export default Details;