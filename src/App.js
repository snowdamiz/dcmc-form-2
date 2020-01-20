import React, { useState, useEffect } from 'react';
import './reset.css';

import Vehicle from './components/vehicle/vehicle';
import Datetime from './components/datetime/datetime';
import Beverage from './components/beverage/beverage';
import Details from './components/details/details';
import NextBtn from './components/nextbtn/nextbtn';

function App() {
  const [page, setPage] = useState(2);
  const [productID, setProductID] = useState("");
  const [date, setDate] = useState(new Date());
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

    if (name.length < 5 || name.length > 30) err.push(61);
    if (!regexName.test(name)) err.push(62);

    if (email.length < 10 || email.length > 30) err.push(71);
    if (!regexEmail.test(email)) err.push(72);

    if (phone.length != 10) err.push(81);
    if (!regexNumber.test(phone)) err.push(82);

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
