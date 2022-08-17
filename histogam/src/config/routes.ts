import React from "react";

import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { ForgotPassword } from "../auth/ForgotPassword";

export interface IRoute {}

export const routes: IRoute[] = [

    {
        path: "/",
        exact: true,
        component: Login,
        name: "Login Page",
        protected:false
    } ,  

    {
        path: "/home",
        exact: true,
        component: Home,
        name : "Home Page",
        protected:true
    },  
    
    {
        path: "/register",
        exact: true,
        component: Register,
        name : "Register Page",
        protected:false
    } , 

    {
        path: "/forgot",
        exact: true,
        component: ForgotPassword,
        name : "Forgot Password Page",
        protected:false
    }

    // {
    //     path: "/change-password",
    //     exact: true,
    //     component: ChangePassword,
    //     name : "Change Password Page",
    //     protected:true
    // }
];
