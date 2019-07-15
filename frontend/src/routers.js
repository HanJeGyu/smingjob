import React from "react";
import {Redirect} from "react-router-dom";

/* views */
import Home from './components/Home'
import Notice from './notice/Notice'
import Login from './common/Login'
import CorporationAdmin from './admin/Corporation';
import NoticeDetail from './notice/NoticeDetail'
import NoticeList from './admin/NoticeList'
import NoticeUpload from './admin/NoticeUpload'
import NoticeModify from './admin/NoticeModify'
import NoticeDetailAdmin from './admin/NoticeDetailAdmin'



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
        path: '/noticeList',
        component: NoticeList
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
        path: '/login',
        component: Login
    },
    {
        path: '/corporationAdmin',
        component: CorporationAdmin
    }
]