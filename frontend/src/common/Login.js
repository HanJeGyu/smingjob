import React, {useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Link,
        Grid, Typography, Container, RadioGroup, Radio} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [value, setValue] = useState('1')

  function handleChange(e){
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`회원종류 1: 개인회원, 2: 기업회원 \n선택된 라디오버튼${value}`)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege..'
    }
    if(value==='1'){
      const url = 'http://localhost:9000/interviewers'
      const data = {
        itvId: e.target.loginId.value,
        pwd: e.target.pwd.value
      }
      axios.post(`${url}/login`, JSON.stringify(data), {headers: headers})
      .then(res=>{
        alert(`${res.data.name} 님 환영합니다.`)
        localStorage.setItem('authSeq', res.data.itvSeq)
        localStorage.setItem('authId', res.data.itvId)
        document.location.href = '/'
      })
      .catch(e=>{
        alert('로그인에 실패하였습니다.')
      })
    }else if(value==='2'){
      const url = 'http://localhost:9000/corporations'
      const data = {
        corId: e.target.loginId.value,
        pwd: e.target.pwd.value
      }
      axios.post(`${url}/login`, JSON.stringify(data), {headers: headers})
      .then(res=>{
        alert(`${res.data.name} 님 환영합니다.`)
        localStorage.setItem('authSeq', res.data.corSeq)
        localStorage.setItem('authId', res.data.corId)
        document.location.href = '/'
      })
      .catch(e=>{
        alert('로그인에 실패하였습니다.')
      })
    }else{
      alert('선택값 오류')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <RadioGroup
          name="selection"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="1" control={<Radio />} label="개인회원" />
          <FormControlLabel value="2" control={<Radio />} label="기업회원" />
        </RadioGroup>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="loginId"
            name="loginId"
            label="아이디"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pwd"
            name="pwd"
            label="비밀번호"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/join" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
