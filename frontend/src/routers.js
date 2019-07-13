import React from "react";
import {Redirect} from "react-router-dom";

/* views */
import Hello from './components/Hello'
import Notice from './notice/Notice'
import Login from './interviewer/Login'

export const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/notice" />
    },
    {
        path: '/home',
        component: Hello
    },
    {
        path: '/notice',
        component: Notice
    },
    {
        path: '/login',
        component: Login
    }
]