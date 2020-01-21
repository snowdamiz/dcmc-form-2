import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './reset.css';

import Vehicle from './components/vehicle/vehicle';
import Datetime from './components/datetime/datetime';
import Beverage from './components/beverage/beverage';
import Details from './components/details/details';
import NextBtn from './components/nextbtn/nextbtn';

function App() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [productID, setProductID] = useState("");
  const [errors, setErrors] = useState([]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [beverage, setBeverage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [cars, setCars] = useState([]);
  const [sbModel, setSbModel] = useState([]);

  let data = [];

  useEffect(() => {
      function getData() {
        const csvFile = require('./dcm.csv');
        Papa.parse(csvFile, {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: (res) => {
            setRows(res.data);
            data = res.data;
          }
        });
      }

      getData();
      sortData()
  }, [cars])

  
  const sortData = () => {
    setTimeout(() => {
      const getMakes = () => {
        let makes = [];
        let sortedMakes = [];

        for (let i = 0; i < data.length; i++) {
          let carMake = data[i];
          makes.push(carMake.make);
        }

        sortedMakes = [...new Set(makes)];
        setMakes(sortedMakes);
      }
      getMakes();
    }, 500)
  }

  const selectMake = (el) => {
    const original = [...rows];
    let cars = [];
    let models = [];
    let sortedCars = [];
    let sortedModels = [];
    
    for (let i = 0; i < original.length; i++) {
      if (original[i].make === el) {
        cars.push(original[i]);
        models.push(original[i].model);
      }
    }

    sortedCars = [...new Set(cars)];
    sortedModels = [... new Set(models)];

    setCars(sortedCars);
    setModels(sortedModels);
    setYears([]);

    // console.log(cars[0].vin);
    // console.log(cars);
  }

  const selectModel = (el) => {
    const original = [...cars];
    let vehicles = [];
    let years = [];
    let sortedVehicles = [];
    let sortedYears = [];
    
    for (let i = 0; i < original.length; i++) {
      if (original[i].model === el) {
        vehicles.push(original[i]);
        years.push(original[i].year);
      }
    }

    sortedVehicles = [...new Set(vehicles)];
    sortedYears = [...new Set(years)];

    setSbModel(sortedVehicles);
    setYears(sortedYears);

    // console.log(cars);
  }

  const selectYear = (el) => {
    const original = [...sbModel];
    let vehicles = [];
    let sortedVehicles = [];

    for (let i = 0; i < original.length; i++) {
      if (original[i].year === el) {
        vehicles.push(original[i]);
      }
    }

    sortedVehicles = [...new Set(vehicles)];
    setCars(sortedVehicles);

    // console.log(cars);
  }

  const submit = () => {
    setErrors([]);
    let err = [];

    const regexName = /^[a-zA-Z\s]*$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNumber = /^\d+$/;

    if (productID === "") err.push(10);
    if (date === "") err.push(20);
    if (time === "") err.push(21);
    if (beverage === "") err.push(30);
    if (name.length < 5 || name.length > 30 || !regexName.test(name)) err.push(40);
    if (email.length < 6 || email.length > 30 || !regexEmail.test(email)) err.push(41);
    if (phone.length != 10 || !regexNumber.test(phone)) err.push(42);

    setErrors(err);

    setTimeout(() => {
      for (let i = 0; i < err.length; i++) {
        if (err[i] === 10) {
          // setPage(1);
          setTimeout(() => setPage(1));
        } else if (err[i] === 20 || 21 ) {
          setPage(2);
        } else if (err[i] === 30) {
          setPage(3);
        } else {
          setPage(4);
        }
      }
    }, 1000 );
}

  switch (page) {
    case(1):
      return <Vehicle 
              page={page}
              setPage={setPage}
              rows={rows}
              makes={makes}
              models={models}
              years={years}
              cars={cars}
              selectMake={selectMake}
              selectModel={selectModel}
              selectYear={selectYear}
              sbModel={sbModel}
              productID={productID}
              setProductID={setProductID}
              errors={errors}
              setErrors={setErrors} />
    case(2):
      return <Datetime
              page={page}
              setPage={setPage}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              errors={errors}
              setErrors={setErrors} />
    case(3):
      return <Beverage
              page={page}
              setPage={setPage}
              beverage={beverage}
              setBeverage={setBeverage}
              errors={errors}
              setErrors={setErrors} />
    case(4):
      return <Details
              page={page}
              setPage={setPage}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              errors={errors}
              setErrors={setErrors}
              submit={submit} />
  }
}

export default App;
