import React, { useState, useEffect } from 'react'

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
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.page === 4) setActive(true);
    }, [props.page])

    const HandlePage = () => props.setPage(4);

    return (
        <DetailsWrap 
            onClick={HandlePage}
            active={active} >
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