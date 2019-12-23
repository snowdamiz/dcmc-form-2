import React from 'react';
import './App.css';
import './reset.css';
import Header from './components/header/header';

import { AppWrap } from './appStyles';

function App() {
  return (
    <AppWrap>
      <Header />
    </AppWrap>
  );
}

export default App;
