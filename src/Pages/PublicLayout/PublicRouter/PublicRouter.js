import React from 'react';


import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/layout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Panier from "../Panier/Panier";
import Article from "../Article/Article";
import ArticleSelect from "../Article/ArticleSelect";
import SignUp from "../Login/SignUp";
import PasswordReset from "../Login/Password-reset";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path ="/home" element={<Home/>}/>
                <Route path ="/article" element={<Article/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/signup" element={<SignUp/>}/>
                <Route path="/password-reset" element={<PasswordReset/>}/>
                <Route path ="/panier" element={<Panier/>}/>
                <Route path ="/articles" element={<ArticleSelect/>}/>
            </Route>
        </Routes>
    );
};

export default PublicRouter;
