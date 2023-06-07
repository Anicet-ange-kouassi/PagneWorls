import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../../Composants/Public/Header/Header";
import Footer from "../../../Composants/Public/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
