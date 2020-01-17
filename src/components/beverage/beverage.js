import React from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
   BeverageWrap,
   BeverageBox,
   Section,
   Item,
   Heading,
   IMG
} from './beverageStyles';

function Beverage (props) {
    return (
        <BeverageWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <BeverageBox>
                <Section>
                    <Item>
                        <Heading>Coffee</Heading>
                        <IMG></IMG>
                    </Item>
                    <Item>
                        <Heading>Water</Heading>
                        <IMG></IMG>
                    </Item>
                </Section>
                <Section>
                    <Item>
                        <Heading>Tea</Heading>
                        <IMG></IMG>
                    </Item>
                    <Item>
                        <Heading>Kombucha</Heading>
                        <IMG></IMG>
                    </Item>
                </Section>
            </BeverageBox>
            <NextBtn
                page={props.page}
                setPage={props.setPage} />
        </BeverageWrap>
    )
}

export default Beverage;