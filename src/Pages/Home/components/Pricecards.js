//libraries
import React, { Fragment } from 'react'
//components
import { Grid } from '@mui/material';
//css
import './styles/pricecards.css/'
import CheckIcon from '@mui/icons-material/Check';

function Pricecards() {
    return (
        <Fragment>
            <div className='pricecard-wrap'>
                <Grid container columnGap={{ md: 2.3 }} rowGap={{ xs: 3.5 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={3} className='card-wrap' >
                        <h5 className='card-heading'>Single Session</h5>
                        <div className='card-price'>
                            <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>80
                        </div>
                        <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/Session</div>
                        <div className='card-package-details-wrap'>
                            <div className='package-details-line'><i><CheckIcon /></i> One to One Consultation</div>
                            <div className='package-details-line'><i><CheckIcon /></i> One to One PT</div>
                            <div className='package-details-line'><i><CheckIcon /></i> Personalised Workout</div>
                            <div className='package-details-line'><i><CheckIcon /></i> Body Assessment</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} className='card-wrap'>
                        <h5 className='card-heading'>Focus Programme</h5>
                        <div className='card-price'>
                            <div style={{ fontSize: '25px', marginRight: '5px' }}>$ </div>280
                        </div>
                        <div className='card-price-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/package</div>
                        <div className='card-package-details-wrap'>
                            <div className='package-details-line'><i><CheckIcon /></i> One to One Consultation</div>
                            <div className='package-details-line'><i><CheckIcon /></i> 8 Weeks Plan</div>
                            <div className='package-details-line'><i><CheckIcon /></i> Personalised Workout</div>
                            <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} className='card-wrap'>
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
                    <Grid item xs={12} md={6} className='card-wrap fourth-wrap fourth-hidden2'>
                        <h5 className='card-heading'>Additional (Focus Programme)</h5>
                        <div className='fourth-session-wrap'>
                            <div className='card-price fourth-price'>
                                <div className='price-group'>
                                    <div style={{ fontSize: '25px', marginRight: '5px' }}>$</div>
                                    <div>500</div>
                                </div>
                                <div className='card-price-type fourth-type' style={{ fontSize: '16px', fontWeight: 'bold' }}>/package</div>
                            </div>

                            <div className='card-package-details-wrap fourth-details-wrap'>
                                <div className='package-details-line'><i><CheckIcon /></i> One to One Consultation</div>
                                <div className='package-details-line'><i><CheckIcon /></i> 4 Weeks Plan</div>
                                <div className='package-details-line'><i><CheckIcon /></i> Nutritional Guidance</div>
                                <div className='package-details-line'><i><CheckIcon /></i> WhatsApp Support</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <h1 className='card-quote'>YOUR GOAL IS MY GOAL 🏅</h1>
            </div>
        </Fragment>
    )
}

export default Pricecards