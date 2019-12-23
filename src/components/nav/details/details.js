import React from 'react'

import { DetailsWrap } from './detailsStyles';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Details () {
    return (
        <DetailsWrap>
            <ImgBox>
                <Img src="#" />
            </ImgBox>
            <TextBox>
                <NavLinkTitle></NavLinkTitle>
                <NavLinkDesc></NavLinkDesc>
            </TextBox>
        </DetailsWrap>
    )
}

export default Details;