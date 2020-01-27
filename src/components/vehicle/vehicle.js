import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Nav from '../nav/nav';

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
    VehicleText,
    ErrorMSG,
} from './vehicleStyles';

function Vehicle (props) {
    const [showMakeType, setShowMakeType] = useState(false);
    const [showModelType, setShowModelType] = useState(false);
    const [showYearType, setShowYearType] = useState(false);

    const makes = props.makes;
    const models = props.models;
    const years = props.years;
    const cars = props.cars;
    const sbModel = props.sbModel;

    useEffect(() => {
        if (cars.length > 0) {
            setShowMakeType(true);
        } else { setShowMakeType(false) }

        if (years.length > 0) {
            setShowMakeType(false);
            setShowModelType(true);
        } else { setShowModelType(false) }

        if (cars.length === 1) {
            setShowModelType(false);
            setShowYearType(true);
        } else { setShowYearType(false) }

    }, [cars, sbModel, years]);

    const handleSelection = (e, el) => {
        props.setProductID(el.vin);

        setTimeout(() => {
            props.setPage(2);
        }, 300);
    }

    const errs = props.errors;

    return (
        <VehicleWrap>
            <Header />
            <Nav
                page={props.page}
                setPage={props.setPage}
                setProductID={props.setProductID} />
            <VehicleBox>
                <h1 className="head">Select Vehicle</h1>
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
                {errs.includes(10) ? <ErrorMSG>Plase Select a Vehicle</ErrorMSG> : null }
                <CarBox productID={props.productID}>
                    {showMakeType ? (
                        props.cars.map((el) => {
                            return (
                                <Car
                                    key={el.vin}
                                    onClick={(e) => handleSelection(e, el) }>
                                    <VehicleIMG src={el["image[0].url"]} />
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
                                <Car 
                                    key={el.vin}
                                    onClick={(e) => handleSelection(e, el) }>
                                    <VehicleIMG src={el["image[0].url"]} />
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
                                <Car
                                    key={el.vin}
                                    onClick={(e) => handleSelection(e, el) }>
                                    <VehicleIMG src={el["image[0].url"]} />
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