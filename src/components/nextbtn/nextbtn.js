import React from 'react';

import { NextButton } from './nextbtnStyles';

function NextBtn (props) {
    const HandlePage = () => {
        props.setPage(props.page + 1);
    }

    return (
        <NextButton onClick={HandlePage}>Next Step</NextButton>
    )
}

export default NextBtn;