import React, { useState, useEffect } from 'react';
import './reset.css';

import Vehicle from './components/vehicle/vehicle';
import Datetime from './components/datetime/datetime';
import Beverage from './components/beverage/beverage';
import Details from './components/details/details';
import NextBtn from './components/nextbtn/nextbtn';

function App() {
  const [page, setPage] = useState(4);
  const [productID, setProductID] = useState("");
  const [car, setCar] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [beverage, setBeverage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);

  const submit = () => {
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
}

  switch (page) {
    case(1):
      return <Vehicle 
              page={page}
              setPage={setPage}
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
