//libraries
import React, { Fragment } from 'react';
//components
import { Container, Grid } from '@mui/material';
//css
import '../components/styles/testimonial.css';
import '../../../Custom/animationBtn1.css';

function Testimonial() {
    return (
        <Fragment>
            <div className='testimonial-wrap'>
                {/* <p className='testimonial-title'>Testinonials from us</p>
                <Container>
                    <Grid container columnGap={{ md: 2.3 }} rowGap={{ xs: 3.5 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container columnGap={{ md: 2.3 }} rowGap={{ xs: 3.5 }} style={{ marginTop: '20px' }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} className='testimonial-card-wrap'>
                            <div className='testimonial-content-wrap'>
                                <p>Jack, Data</p>
                                <p>Having been with the program for a few months now, i see that I have gained many insights.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container> */}
                {/* <div className='signUpbtn-wrap'>
                    <a className="animated-button1" href="https://forms.gle/xpaMfYjY2AVTdKga7" target='blank'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Join Us Now!
                    </a>
                </div> */}
                <div class="box-3">
                    <a className="btn btn-three" href="https://forms.gle/xpaMfYjY2AVTdKga7" target='blank'>
                        <span>Join Us Now!</span>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonial