import React, { useState, useEffect } from 'react';
import './reset.css';
import Vehicle from './components/vehicle/vehicle';

function App() {
  const [page, setPage] = useState(1);

  switch (page) {
    case(1):
      return <Vehicle />
    case(2):
      return <Vehicle />
    case(3):
      return <Vehicle />
    case(4):
      return <Vehicle />
  }
}

export default App;
