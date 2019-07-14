import React from "react";
import {Redirect} from "react-router-dom";

/* views */
import Home from './components/Home'
import Notice from './notice/Notice'
import Login from './interviewer/Login'
import AdminHome from './admin/AdminHome';


export const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/notice" />
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/notice',
        component: Notice
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin',
        component: AdminHome
    }
]