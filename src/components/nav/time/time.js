import React from 'react';

import { TimeWrap } from './timeStyles';
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
                <Img src="#" />
            </ImgBox>
            <TextBox>
                <NavLinkTitle></NavLinkTitle>
                <NavLinkDesc></NavLinkDesc>
            </TextBox>        
        </TimeWrap>
    )
}

export default Time;