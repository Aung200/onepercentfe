//libraries
import React, { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
//components
import Header from "../Header/index";
import Footer from "../Footer/index";
import FloatingWhatsapp from "../../Custom/FloatingWhatsapp";
//importing pages
const Home = lazy(() => import('../../Pages/Home'));
const Program = lazy(() => import('../../Pages/Program'));
const Contact = lazy(() => import('../../Pages/Contact'));

function Body(props) {
    return (
        <Fragment>
            <Suspense fallback={
                <div style={{textAlign:'center'}}>Please wait while we are isLoading the page</div>
            }>
                <Header />
                <Routes>
                    <Route exact path="/*" element={<Home />} />
                    <Route exact path="/program" element={<Program />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                <FloatingWhatsapp/>
                <Footer />
            </Suspense>
        </Fragment>
    )
}

export default Body