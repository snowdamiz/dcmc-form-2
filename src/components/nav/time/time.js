import React, { useState, useEffect } from 'react';

import { TimeWrap } from './timeStyles';
import TimeIMG from '../../../assets/calendar.svg';
import { 
    ImgBox,
    Img,
    TextBox,
    NavLinkTitle,
    NavLinkDesc,
} from '../navStyles';

function Time (props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (props.page === 2) setActive(true);
    }, [props.page])

    const HandlePage = () => props.setPage(2);

    return (
        <TimeWrap
            onClick={HandlePage}
            active={active} >
            <ImgBox>
                <Img src={TimeIMG} />
            </ImgBox>
            <TextBox>
                <NavLinkTitle>Step Two</NavLinkTitle>
                <NavLinkDesc>Date & Time</NavLinkDesc>
            </TextBox>        
        </TimeWrap>
    )
}

export default Time;