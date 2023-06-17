import React, { Fragment } from 'react'
//components
import ProgramIntro from '../components/ProgramIntro'
import Packages from '../components/Packages'
//css
import '../components/styles/index.css'


function Program() {
  return (
    <Fragment>
      <div className='program-wrap'>
        <ProgramIntro/>
        <Packages/>
      </div>
    </Fragment>
  )
}

export default Program