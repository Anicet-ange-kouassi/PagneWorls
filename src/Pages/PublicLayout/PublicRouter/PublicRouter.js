import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Panier from "../Panier/Panier";
import Article from "../Article/Article";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path ="/home" element={<Home/>}/>
                <Route path ="/article" element={<Article/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/panier" element={<Panier/>}/>
            </Route>

        </Routes>
    );
};

export default PublicRouter;
