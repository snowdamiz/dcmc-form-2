import React, { useState } from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import Water from '../../assets/water.jpg';
import Tea from '../../assets/tea.jpg';
import Coffee from '../../assets/coffee.jpg';
import Kombucha from '../../assets/kombucha.jpg';

import {
   BeverageWrap,
   BeverageBox,
   Section,
   Item,
   Heading,
   IMG,
   ErrorMSG,
} from './beverageStyles';

function Beverage (props) {
    const bev = ['coffee', 'water', 'tea', 'kombucha'];
    const errs = props.errors;

    function handleBev(id, e) {
        props.setBeverage(id);
    }

    return (
        <BeverageWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage} />
            <BeverageBox>
                <h1 className="head">Choice of Drink</h1>
                {errs.includes(20) ? <ErrorMSG>Please Selecet a Refreshment</ErrorMSG> : null }
                <Section>
                    <Item
                        id={bev[0]}
                        className={props.beverage === bev[0] ? 'active' : null }
                        onClick={(e) => handleBev(bev[0], e)}>
                        <Heading
                            className={props.beverage === bev[0] ? 'activeHeading heading' : 'heading' }> Coffee
                        </Heading>
                        <IMG src={Coffee} />
                    </Item>
                    <Item
                        id={bev[1]}
                        className={props.beverage === bev[1] ? 'active' : null }
                        onClick={(e) => handleBev(bev[1], e)}>
                        <Heading
                            className={props.beverage === bev[1] ? 'activeHeading heading' : 'heading' }> Water
                        </Heading>
                        <IMG src={Water} />
                    </Item>
                </Section>
                <Section>
                    <Item
                        id={bev[2]}
                        className={props.beverage === bev[2] ? 'active' : null }
                        onClick={(e) => handleBev(bev[2], e)}>
                        <Heading
                            className={props.beverage === bev[2] ? 'activeHeading heading' : 'heading' }> Tea
                        </Heading>
                        <IMG src={Tea} />
                    </Item>
                    <Item
                        id={bev[3]}
                        className={props.beverage === bev[3] ? 'active' : null }
                        onClick={(e) => handleBev(bev[3], e)}>
                        <Heading
                            className={props.beverage === bev[3] ? 'activeHeading heading' : 'heading' }> Kombucha
                        </Heading>
                        <IMG src={Kombucha} />
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