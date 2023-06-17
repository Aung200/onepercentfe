//libraries
import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
//components
import Contact from './sub/Contact';
//css

function index(props) {

  return (
    <Fragment>
        <Routes>
          <Route path="/*" element={<Contact />} />
        </Routes>
    </Fragment>
  )
  
}

export default index;