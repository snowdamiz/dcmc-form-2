import React from 'react';

import CloseBtn from '../../assets/delete.svg';
import {
    HeaderWrap,
    H1,
    Close,
} from './headerStyles';

function Header (props) {
    return (
        <HeaderWrap>
            <H1 onClick={props.reset}>D<span>&</span>C Test Drive</H1>
            <a href="https://www.dcmotorcompany.com/">
                <Close src={CloseBtn} />
            </a>
        </HeaderWrap>
    )
}

export default Header;