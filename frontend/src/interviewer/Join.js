import React from 'react'
import { Container, CssBaseline, TextField, Button } from '@material-ui/core';

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
      width: '100%', // Fix IE 11 issue.
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
            itvId: event.target.itvId.value,
            pwd: event.target.pwd.value,
            name: event.target.name.value,
            birth: event.target.birth.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            area: event.target.area.value,
            location: event.target.location.value
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege..'
        }
        axios.post(`http://localhost:9000/interviewers/join`,JSON.stringify(data),{headers: headers})
            .then(res=>{
                alert('회원가입 성공')
                console.log(res.data.result)
            })
            .catch(e=>{
                alert('실패')
            })
    }

    return(
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="name"
                    name="name"
                    label="이름"
                    autoFocus
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="itvId"
                    name="itvId"
                    label="아이디"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="pwd"
                    name="pwd"
                    label="비밀번호"
                    type="password"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="birth"
                    name="birth"
                    label="생년월일 6자리"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="phone"
                    name="phone"
                    label="휴대폰번호"
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="email"
                    name="email"
                    label="이메일"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="area"
                    name="area"
                    label="희망산업/직군"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="location"
                    name="location"
                    label="희망근무지"
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