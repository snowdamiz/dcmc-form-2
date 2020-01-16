import React from 'react';

import CloseBtn from '../../assets/delete.svg';
import {
    HeaderWrap,
    H1,
    Close,
} from './headerStyles';

function Header () {
    return (
        <HeaderWrap>
            <H1>VIP Test Drive</H1>
            {/* <Close src={CloseBtn} /> */}
        </HeaderWrap>
    )
}

export default Header;