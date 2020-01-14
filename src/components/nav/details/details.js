import React from 'react'

import { DetailsWrap } from './detailsStyles';
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