import React from 'react';

import { DrinksWrap } from './drinksStyles';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Drinks () {
    return (
        <DrinksWrap>
            <ImgBox>
                <Img src="#" />
            </ImgBox>
            <TextBox>
                <NavLinkTitle></NavLinkTitle>
                <NavLinkDesc></NavLinkDesc>
            </TextBox>
        </DrinksWrap>
    )
}

export default Drinks;