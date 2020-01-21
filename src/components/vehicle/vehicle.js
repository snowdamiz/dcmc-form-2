import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';
import NextBtn from '../nextbtn/nextbtn';

import {
    VehicleWrap,
    VehicleBox,
    SelectionBox,
    Select,
    Option,
    CarBox,
    Car,
    VehicleIMG,
    VehicleInfo,
    VehicleHeading,
    VehicleTextBox,
    VehicleTextBoxSec,
    VehicleText
} from './vehicleStyles';

function Vehicle (props) {
    const [showMakeType, setShowMakeType] = useState(false);
    const [showModelType, setShowModelType] = useState(false);
    const [showYearType, setShowYearType] = useState(false);

    const makes = props.makes;
    const models = props.models;
    const years = props.years;

    useEffect(() => {
        if (props.cars.length > 0) {
            setShowMakeType(true);
            console.log('Showing all make');
        } else { setShowMakeType(false) }

        if (props.years.length > 0) {
            setShowMakeType(false);
            setShowModelType(true);

            console.log('Showing all model');
        } else { setShowModelType(false) }

        if (props.cars.length === 1) {
            setShowModelType(false);
            setShowYearType(true);

            console.log('Showing all Year');
        } else { setShowYearType(false) }
    }, [props.cars, props.sbModel, props.years]);

    return (
        <VehicleWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage}/>
            <VehicleBox>
                <SelectionBox>
                    <Select defaultValue="Make" onChange={(e) => props.selectMake(e.target.value)}>
                        <Option disabled hidden value="Make">Make</Option>
                        {makes.map((el) => {
                            return <Option key={el} value={el}>{el}</Option>
                        })}
                    </Select>
                    <Select defaultValue="Model" onChange={(e) => props.selectModel(e.target.value)}>
                        <Option disabled hidden value="Model">Model</Option>
                        {models.map((el) => {
                            return <Option key={el} value={el}>{el}</Option>
                        })}
                    </Select>
                    <Select defaultValue="Year" onChange={(e) => props.selectYear(e.target.value)}>
                        <Option disabled hidden value="Year">Year</Option>
                        {years.map((el) => {
                            return <Option key={el} value={el}>{el}</Option>
                        })}
                    </Select>
                </SelectionBox>
                <CarBox>
                    {showMakeType ? (
                        props.cars.map((el) => {
                            return (
                                <Car key={el.vin}>
                                    <VehicleIMG src="#" />
                                    <VehicleInfo>
                                        <VehicleHeading>{el.title}</VehicleHeading>
                                        <VehicleTextBox>
                                            <VehicleTextBoxSec>
                                                <VehicleText>VIN:</VehicleText>
                                                <VehicleText>{el.vin}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Color:</VehicleText>
                                                <VehicleText>{el.exterior_color}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Price:</VehicleText>
                                                <VehicleText>{el.price}</VehicleText>
                                            </VehicleTextBoxSec>
                                        </VehicleTextBox>
                                    </VehicleInfo>
                                </Car>
                            )
                        })
                    ) : null }
                    {showModelType ? (
                        props.sbModel.map((el) => {
                            return (
                                <Car key={el.vin}>
                                    <VehicleIMG src="#" />
                                    <VehicleInfo>
                                        <VehicleHeading>{el.title}</VehicleHeading>
                                        <VehicleTextBox>
                                            <VehicleTextBoxSec>
                                                <VehicleText>VIN:</VehicleText>
                                                <VehicleText>{el.vin}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Color:</VehicleText>
                                                <VehicleText>{el.exterior_color}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Price:</VehicleText>
                                                <VehicleText>{el.price}</VehicleText>
                                            </VehicleTextBoxSec>
                                        </VehicleTextBox>
                                    </VehicleInfo>
                                </Car>
                            )
                        })
                    ) : null }
                    {showYearType ? (
                        props.cars.map((el) => {
                            return (
                                <Car key={el.vin}>
                                    <VehicleIMG src="#" />
                                    <VehicleInfo>
                                        <VehicleHeading>{el.title}</VehicleHeading>
                                        <VehicleTextBox>
                                            <VehicleTextBoxSec>
                                                <VehicleText>VIN:</VehicleText>
                                                <VehicleText>{el.vin}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Color:</VehicleText>
                                                <VehicleText>{el.exterior_color}</VehicleText>
                                            </VehicleTextBoxSec>
                                            <VehicleTextBoxSec>
                                                <VehicleText>Price:</VehicleText>
                                                <VehicleText>{el.price}</VehicleText>
                                            </VehicleTextBoxSec>
                                        </VehicleTextBox>
                                    </VehicleInfo>
                                </Car>
                            )
                        })
                    ) : null }
                </CarBox>
            </VehicleBox>
            {/* <NextBtn
                page={props.page}
                setPage={props.setPage} /> */}
        </VehicleWrap>
    )
}

export default Vehicle;