import React from 'react'
import { Container, CssBaseline, Typography, Avatar, Grid, TextField, Button } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';


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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Join(){
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    개인회원가입
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="name"
                                name="name"
                                label="이름"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="itvId"
                                name="itvId"
                                label="아이디"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="pwd"
                                name="pwd"
                                label="비밀번호"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="birth"
                                name="birth"
                                label="생년월일 6자리"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="phone"
                                name="phone"
                                label="휴대폰번호"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="email"
                                name="email"
                                label="이메일"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="area"
                                name="area"
                                label="희망산업/직군"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="location"
                                name="location"
                                label="희망근무지"
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            가입하기
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}