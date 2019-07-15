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

    return(
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
            <form className={classes.form} noValidate>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="corRegNo"
                            name="corRegNo"
                            label="사업자등록번호"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="name"
                            name="name"
                            label="회사명"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="ceoName"
                            name="ceoName"
                            label="대표명"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="area"
                            name="area"
                            label="업종"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="city"
                            name="city"
                            label="지역"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="homepage"
                            name="homepage"
                            label="홈페이지"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="pmName"
                            name="pmName"
                            label="가입자명"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="corId"
                            name="corId"
                            label="아이디"
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