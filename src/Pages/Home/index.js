//libraries
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
//components
import Home from './sub/Home';
//css

function index(props) {

  return (
    <Fragment>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
    </Fragment>
  )
  
}

export default index;