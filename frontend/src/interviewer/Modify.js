import React from 'react'
import { Container, CssBaseline, Grid, TextField, Button, Typography, Box } from '@material-ui/core';

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
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typography: {
        display: 'flex',
        verticalAlign: 'middle'
    }
  }));

export default function Join(){
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <form className={classes.form} noValidate>
                <Grid container>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            이름
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="name"
                            name="name"
                            autoFocus
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            아이디
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="itvId"
                            name="itvId"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            비밀번호
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="pwd"
                            name="pwd"
                            type="password"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            생년월일
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="birth"
                            name="birth"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            휴대폰번호
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="phone"
                            name="phone"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            이메일주소
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="email"
                            name="email"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            산업/직군
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="area"
                            name="area"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            희망근무지
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="location"
                            name="location"
                        />
                    </Grid>
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
            </form>
        </Container>
    )
}