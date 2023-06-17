import React, { Fragment } from 'react'
//components
import { Container, Grid } from '@mui/material';
//css
import '../components/styles/packages.css';
import '../../Home/components/styles/pricecards.css'
import '../../../Custom/animationBtn1.css'
import CheckIcon from '@mui/icons-material/Check';


function Packages() {
    return (
        <Fragment>
            <div className='packages-wrap'>
                <Container style={{ padding: "0px" }}>
                    <Grid container columnGap={{ md: 2.3 }} rowGap={{ xs: 3.5 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12} md={3} className='card-wrap'>
                            <h5 className='card-heading'>Gold Achievers
                                <div style={{ marginTop: '10px', fontSize: '12px', fontStyle: "italic" }}>*Subjected to availability</div>
                            </h5>
                            <div className='card-price'>
                                <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>159
                            </div>
                            <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/month</div>
                            <div className='card-package-details-wrap'>
                                <div className='package-details-line'><i><CheckIcon /></i><div>Full Program</div></div>
                                <div className='package-details-line'><i><CheckIcon /></i>Progress Tracking</div>
                                <div className='package-details-line'><i><CheckIcon /></i>Community Support</div>
                            </div>
                            <div style={{ marginTop: '10px', fontSize: '12px', fontStyle: "italic" }}>*Valuable Sharing By experienced IPPT Gold Achievers</div>
                            <div style={{ marginTop: '10px', fontSize: '12px', fontStyle: "italic" }}>*Add full support & customisation option for an additional <strong>$169</strong> per month.</div>
                        </Grid>
                    </Grid>
                </Container>
                <div class="box-3">
                    <a className="btn btn-three" href="https://forms.gle/oJjbwRWLnJF7twnS9" target='blank'>
                        <span>Sign Up Now!</span>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Packages