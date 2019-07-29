import React from "react";
import {Redirect} from "react-router-dom";

/* views */
import Home from './common/Home'
import Notice from './notice/Notice'
import Login from './common/Login'

import NoticeDetail from './notice/NoticeDetail'
import Join from './common/Join'
import InterviewerNotice from './interviewer/ItvNotice'
import InterviewerAlive from './interviewer/ItvAlive'
import InterviewerModify from './interviewer/Modify'
import InterviewerPr from './interviewer/Pr'
import CorporationNotice from './corporation/CorNotice'
import CorporationModify from './corporation/Modify'
import CorporationPr from './corporation/Pr'
<<<<<<< HEAD
import PRDetail from "./pr/PRDetails"
=======
import PRUpload from "./pr/PrUpload"
import PRDetail from "./pr/Detail"
>>>>>>> parent of 48ea2a4... no message
import PR from "./pr/PR"
import PRUpload from "./pr/PRUpload"
import Alive from "./alive/Alive" 


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
        path: '/interviewerAlive',
        component: InterviewerAlive
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
        component: PRUpload
    },
    {
        path: '/prDetail',
        component: PRDetail
    },
    {
        path: '/pr',
        component: PR
    }, 
    {
        path: '/interview',
        component: Alive
    },
    {
        path: '/prupload',
        component: PRUpload
    },
]