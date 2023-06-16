//libraries
import React, { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
//components
import Header from "../Header/index";
import Footer from "../Footer/index";
//importing pages
const Home = lazy(() => import('../../Pages/Home'));
const Program = lazy(() => import('../../Pages/Program'));

function Body(props) {
    return (
        <Fragment>
            <Suspense fallback={
                <div>Please wait while we are isLoading the page</div>
            }>
                <Header />
                <Routes>
                    <Route exact path="/*" element={<Home />} />
                    <Route exact path="/program" element={<Program />} />
                </Routes>
                <Footer />
            </Suspense>
        </Fragment>
    )
}

export default Body