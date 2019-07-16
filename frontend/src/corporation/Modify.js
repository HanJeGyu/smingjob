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
        <Container component="main" maxWidth="lx">
            <CssBaseline/>
            <form className={classes.form} noValidate>
                <Grid container>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            사업자등록번호
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="corRegNo"
                            name="corRegNo"
                            disabled
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            회사명
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="name"
                            name="name"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            대표명
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="ceoName"
                            name="ceoName"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            업종
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
                            지역
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="city"
                            name="city"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            홈페이지
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="homepage"
                            name="homepage"
                        />
                    </Grid>
                    <Grid sm={1}>
                        <Box lineHeight={6}>
                            가입자명
                        </Box>
                    </Grid>
                    <Grid sm={11}>
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            id="pmName"
                            name="pmName"
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
                            id="corId"
                            name="corId"
                            disabled
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