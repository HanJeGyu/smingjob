import React from "react";
import {Redirect} from "react-router-dom";

/* views */
import Home from './components/Home'
import Notice from './notice/Notice'
import Login from './common/Login'

import NoticeDetail from './notice/NoticeDetail'
import Join from './common/Join'
import InterviewerNotice from './interviewer/ItvNotice'
import InterviewerModify from './interviewer/Modify'
import InterviewerPr from './interviewer/Pr'
import CorporationNotice from './corporation/CorNotice'
import CorporationModify from './corporation/Modify'
import CorporationPr from './corporation/Pr'

import PrUpload from "./pr/PrUpload"
import PrDetail from "./pr/PrDetail"

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
        path: '/noticeDetail',
        component: NoticeDetail
    },  
    {
        path: '/login',
        component: Login
    },
    {
        path: '/join',
        component: Join
    },
    {
        path: '/interviewerNotice',
        component: InterviewerNotice
    },
    {
        path: '/interviewerModify',
        component: InterviewerModify
    },
    {
        path: '/interviewerPr',
        component: InterviewerPr
    },
    {
        path: '/corporationNotice',
        component: CorporationNotice
    },
    {
        path: '/corporationModify',
        component: CorporationModify
    },
    {
        path: '/corporationPr',
        component: CorporationPr
    }, 
    {
        path: '/prUpload',
        component: PrUpload
    },
    {
        path: '/prDetail',
        component: PrDetail
    },
]