//libraries
import React, { Fragment } from 'react'
//components
import { Container, Grid } from '@mui/material';
//css
import '../components/styles/pricecards.css'
import CheckIcon from '@mui/icons-material/Check';

function Pricecards() {
    return (
        <Fragment>
            <div className='pricecard-wrap'>
                <Container style={{padding: "0px"}}>
                    <Grid container columnGap={{ md: 2.3 }} rowGap={{ xs: 3.5 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={3} className='card-wrap' >
                            <h5 className='card-heading'>1:1 Personal Training</h5>
                            <div className='card-package-details-wrap firstCard'>
                                <div style={{width: '100%',fontSize:'18px',display: 'flex', justifyContent:'space-between'}}><div>10 Sessions</div><div style={{fontWeight:'bold'}}>$800</div></div>
                                <div style={{width: '100%',fontSize:'18px',display: 'flex', justifyContent:'space-between'}}><div>20 Sessions</div><div style={{fontWeight:'bold'}}>$1500</div></div>   
                                <div style={{width: '100%',fontSize:'18px',display: 'flex', justifyContent:'space-between'}}><div>30 Sessions</div><div style={{fontWeight:'bold'}}>$2100</div></div>      
                            </div>
                            <div style={{marginTop:'10px', fontSize:'12px', fontStyle:"italic"}}>*Full Payment Upfront</div>
                        </Grid>
                        <Grid item xs={12} md={3} className='card-wrap'>
                            <h5 className='card-heading'>Online program</h5>
                            <div className='card-price'>
                                <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>600
                            </div>
                            <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/month</div>
                            <div className='card-package-details-wrap'>
                                <div className='package-details-line'><i><CheckIcon /></i><div>Workout Programs</div></div>
                                <div className='package-details-line'><i><CheckIcon /></i> Community Support</div>
                                <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                            </div>
                            <div style={{marginTop:'10px', fontSize:'12px', fontStyle:"italic"}}>*More details will be shared during consultation.</div>
                            <div style={{marginTop:'10px',fontSize:'12px', fontStyle:"italic"}}>*Add full support & customisation option for an additional <strong>$169</strong> per month.</div>
                        </Grid>
                        {/* <Grid item xs={12} md={3} className='card-wrap'>
                            <h5 className='card-heading'>Meal Programme</h5>
                            <div className='card-price'>
                                <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>150
                            </div>
                            <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/package</div>
                            <div className='card-package-details-wrap'>
                                <div className='package-details-line'><i><CheckIcon /></i> One to One Consultation</div>
                                <div className='package-details-line'><i><CheckIcon /></i> 4 Weeks Plan</div>
                                <div className='package-details-line'><i><CheckIcon /></i> Nutritional Guidance</div>
                                <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} className='card-wrap fourth-hidden'>
                            <h5 className='card-heading'>Additional (Focus Programme)</h5>
                            <div className='card-price'>
                                <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>500*
                            </div>
                            <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/package</div>
                            <div className='card-package-details-wrap'>
                                <div className='package-details-line'><i><CheckIcon /></i> One to One PT/Week</div>
                                <div className='package-details-line'><i><CheckIcon /></i> 8 Weeks Plan</div>
                                <div className='package-details-line'><i><CheckIcon /></i> Personalised Workout</div>
                                <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                                <div className='package-details-line' style={{ fontSize: '14px' }}> * T&C Applies</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className='card-wrap fourth-wrap fourth-hidden2'>
                            <h5 className='card-heading'>Additional (Focus Programme)</h5>
                            <div className='fourth-session-wrap'>
                                <div className='card-price fourth-price'>
                                    <div className='price-group'>
                                        <div style={{ fontSize: '25px', marginRight: '5px' }}>$</div>
                                        <div>500*</div>
                                    </div>
                                    <div className='card-price-type fourth-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/package</div>
                                </div>

                                <div className='card-package-details-wrap fourth-details-wrap'>
                                    <div className='package-details-line'><i><CheckIcon /></i> One to One PT/Week</div>
                                    <div className='package-details-line'><i><CheckIcon /></i> 8 Weeks Plan</div>
                                    <div className='package-details-line'><i><CheckIcon /></i> Personalised Workout</div>
                                    <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                                    <div className='package-details-line' style={{ fontSize: '14px' }}> * T&C Applies</div>
                                </div>
                            </div>
                        </Grid> */}
                    </Grid>
                </Container>
                {/* <h1 className='card-quote'>YOUR GOAL IS MY GOAL !</h1> */}
            </div>
        </Fragment>
    )
}

export default Pricecards
