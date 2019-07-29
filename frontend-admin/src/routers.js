import React from "react";
import {Redirect} from "react-router-dom";

/* views */

import Home from './common/Home'
import Login from './common/Login'
import CorporationAdmin from './corporation/Corporation'
import InterviewerAdmin from "./interviewer/Interviewer"
import NoticeDetail from './notice/Detail'
import NoticeList from './notice/List'
import NoticeUpload from './notice/Upload'
import NoticeModify from './notice/Modify'
import NoticeDetailAdmin from './notice/Detail'
import Join from './common/Join'
import InterviewerModify from './interviewer/Modify'
import CorporationModify from './corporation/Modify'
import PrAdmin from "./pr/Pr"
import AliveAdmin from "./alive/Alive"
import AliveDetail from "./alive/Detail"
import LoginAdmin from "./common/Login"


export const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/noticeDetail',
        component: NoticeDetail
    }, 
    {
        path: '/noticeUpload',
        component: NoticeUpload
    },
    {
        path: '/noticeModify',
        component: NoticeModify
    },
    {
        path: '/NoticeDetailAdmin',
        component: NoticeDetailAdmin
    },    
    {
        path: '/NoticeAdmin',
        component: NoticeList
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/corporationAdmin',
        component: CorporationAdmin
    },
    {
        path: '/interviewerAdmin',
        component: InterviewerAdmin
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/interviewerModify',
        component: InterviewerModify
    },
    {
        path: '/corporationModify',
        component: CorporationModify
    },
    {
        path: '/prAdmin',
        component: PrAdmin
    },
    {
        path: '/aliveAdmin',
        component: AliveAdmin
    },
    {
        path: '/aliveDetail',
        component: AliveDetail
    },
    {
        path: '/homeAdmin',
        component: LoginAdmin
    },

]