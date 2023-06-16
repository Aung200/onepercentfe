//libraries
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
//components
import Program from './sub/Program';
//css

function index(props) {

  return (
    <Fragment>
        <Routes>
          <Route path="/*" element={<Program />} />
        </Routes>
    </Fragment>
  )
  
}

export default index;