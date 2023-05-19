//libraries
import React from 'react';
//components
import Body from './Layout/Body';
import { Container } from '@mui/material';
//css
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className='app-container'>
        <Body />
      </Container>
    </div>
  );
}

export default App;
