import React from 'react'
import { Container, CssBaseline, Typography, Avatar, Grid, TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Join(){
    const classes = useStyles();

    function handleSubmit(event){
        event.preventDefault();
        const data = {
            corId: event.target.corId.value,
            pwd: event.target.pwd.value,
            corRegNo: event.target.corRegNo.value,
            name: event.target.name.value,
            ceoName: event.target.ceoName.value,
            area: event.target.area.value,
            pmName: event.target.pmName.value,
            pmPhone: event.target.pmPhone.value,
            pmEmail: event.target.pmEmail.value,
            homepage: event.target.homepage.value,
            city: event.target.city.value
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege..'
        }
        axios.post(`http://localhost:9000/corporations/join`,JSON.stringify(data),{headers: headers})
            .then(res=>{
                alert('회원가입 되었습니다.\n로그인 후 이용해 주세요')
                document.location.href = '/login'
            })
            .catch(e=>{
                alert('회원가입에 실패하였습니다.')
            })
    }

    function handleValidation(e){
        e.preventDefault();
        // 공백 제거
        if(e.target.name!=='name' && e.target.name!=='area'
            && e.target.name!=='city'){
            if((e.target.value).search(/\s/) != -1){
                e.target.value = e.target.value.replace(' ','')
            }
        }
        // 특수문자 제거 : 사업자번호, 회사명, 대표명, 가입자명, 연락처, 아이디
        if(e.target.name==='corRegNo' || e.target.name==='name'
            || e.target.name==='ceoName' || e.target.name!=='pmName'
            || e.target.name==='pmPhone' || e.target.name!=='corId'){
            const checkStr = /[`~!@#$%^&*{}<>()+=_|\-\-\\\'\"\.\,;:\/?]/gi;
            e.target.value = e.target.value.replace(checkStr,'')
        }
        // 한글 제거 : 사업자번호, 연락처, 아이디
        if(e.target.name==='corRegNo' || e.target.name==='pmPhone'
            || e.target.name==='corId'){
            const checkStr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 영문 제거 : 사업자번호, 연락처
        if(e.target.name==='corRegNo' || e.target.name==='pmPhone'){
            const checkStr = /[a-zA-Z]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 숫자 제거 : 이름
        if(e.target.name==='pmName'){
            const checkStr = /[0-9]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 하이픈(-) 추가 가입자연락처
        if(e.target.name==='pmPhone'){
            const num = e.target.value.replace(/[^0-9]/g, '')
            let phone = ''
            if(num.length < 4) {
                return num;
            } else if(num.length < 7) {
                phone += num.substr(0, 3);
                phone += "-";
                phone += num.substr(3);
            } else if(num.length < 11) {
                phone += num.substr(0, 3);
                phone += "-";
                phone += num.substr(3, 3);
                phone += "-";
                phone += num.substr(6);
            } else {
                phone += num.substr(0, 3);
                phone += "-";
                phone += num.substr(3, 4);
                phone += "-";
                phone += num.substr(7);
            }
            e.target.value = phone
        }
        // 하이픈(-) 추가 사업자등록번호
        if(e.target.name==='corRegNo'){
            const num = e.target.value.replace(/[^0-9]/g, '')
            let corRegNo = ''
            if(num.length < 4) {
                return num;
            } else if(num.length < 6) {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3);
            } else if(num.length < 10) {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3, 2);
                corRegNo += "-";
                corRegNo += num.substr(5);
            } else {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3, 2);
                corRegNo += "-";
                corRegNo += num.substr(5);
            }
            e.target.value = corRegNo
        }
    }

    return(
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <form className={classes.form} noValidate onSubmit={handleSubmit} onChange={handleValidation}>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="corRegNo"
                    name="corRegNo"
                    label="사업자등록번호"
                    inputProps={{maxLength: 12}}
                    autoFocus
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="name"
                    name="name"
                    label="회사명"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="ceoName"
                    name="ceoName"
                    label="대표명"
                    inputProps={{maxLength: 16}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="area"
                    name="area"
                    label="업종"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="city"
                    name="city"
                    label="지역"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="homepage"
                    name="homepage"
                    label="홈페이지"
                    inputProps={{maxLength: 99}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmName"
                    name="pmName"
                    label="가입자명"
                    inputProps={{maxLength: 16}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmPhone"
                    name="pmPhone"
                    label="가입자연락처"
                    inputProps={{maxLength: 13}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmEmail"
                    name="pmEmail"
                    label="가입자이메일"
                    inputProps={{maxLength: 97}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="corId"
                    name="corId"
                    label="아이디"
                    inputProps={{maxLength: 25}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pwd"
                    name="pwd"
                    label="비밀번호"
                    type="password"
                    inputProps={{maxLength: 18}}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    가입하기
                </Button>
            </form>
        </Container>
    )
}