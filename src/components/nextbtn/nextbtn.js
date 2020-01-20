import React from 'react';

import { NextBox, NextButton } from './nextbtnStyles';

function NextBtn (props) {
    const HandlePage = () => {
        props.setPage(props.page + 1);
    }

    return (
        <NextBox>
            <NextButton onClick={HandlePage}>Next Step</NextButton>
        </NextBox>
    )
}

export default NextBtn;