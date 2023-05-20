//libraries
import React, { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
//components
import Header from "../Header/index";
import Footer from "../Footer/index";
//importing pages
const Home = lazy(() => import('../../Pages/Home'));

function Body(props) {
    return (
        <Fragment>
            <Suspense fallback={
                <div>Please wait while we are isLoading the page</div>
            }>
                <Header />
                <Home />
                <Routes>
                    <Route exact path="/onepercentfe" element={<Home />} />
                </Routes>
                <Footer />
            </Suspense>
        </Fragment>
    )
}

export default Body