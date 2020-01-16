import React from 'react';

import { DrinksWrap } from './drinksStyles';
import DrinkIMG from '../../../assets/drink.svg';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Drinks (props) {
    const HandlePage = () => props.setPage(3);

    return (
        <DrinksWrap onClick={HandlePage}>
            <ImgBox>
                <Img src={DrinkIMG} />
            </ImgBox>
            <TextBox>
                <NavLinkTitle>Step Three</NavLinkTitle>
                <NavLinkDesc>Beverage</NavLinkDesc>
            </TextBox>
        </DrinksWrap>
    )
}

export default Drinks;