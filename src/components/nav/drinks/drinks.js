import React, { useState, useEffect } from 'react';

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
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.page === 3) setActive(true);
    }, [props.page])

    const HandlePage = () => props.setPage(3);

    return (
        <DrinksWrap 
            onClick={HandlePage}
            active={active} >
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