import React from 'react';

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
    const HandlePage = () => props.setPage(2);

    return (
        <TimeWrap onClick={HandlePage}>
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