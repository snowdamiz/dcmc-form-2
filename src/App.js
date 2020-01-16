import React, { useState, useEffect } from 'react';
import './reset.css';

import Vehicle from './components/vehicle/vehicle';
import Datetime from './components/datetime/datetime';
import Beverage from './components/beverage/beverage';
import Details from './components/details/details';

function App() {
  const [page, setPage] = useState(1);
  const [productID, setProductID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [beverage, setBeverage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  switch (page) {
    case(1):
      return <Vehicle 
              page={page}
              setPage={setPage} />
    case(2):
      return <Datetime
              page={page}
              setPage={setPage} />
    case(3):
      return <Beverage
              page={page}
              setPage={setPage} />
    case(4):
      return <Details
              page={page}
              setPage={setPage}  />
  }
}

export default App;
