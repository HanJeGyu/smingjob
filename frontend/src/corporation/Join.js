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
            homepage: event.target.homepage.value,
            city: event.target.city.value
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege..'
        }
        axios.post(`http://localhost:9000/corporations/join`,JSON.stringify(data),{headers: headers})
            .then(res=>{
                alert('회원가입 성공')
                console.log(res.data.result)
            })
            .catch(e=>{
                alert('실패')
            })
    }

    function handleChange(e){
        e.preventDefault();
        const num = e.target.value.replace(/[^0-9]/g, "")
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

    return(
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="ceoName"
                    name="ceoName"
                    label="대표명"
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="area"
                    name="area"
                    label="업종"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="city"
                    name="city"
                    label="지역"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="homepage"
                    name="homepage"
                    label="홈페이지"
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmName"
                    name="pmName"
                    label="가입자명"
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
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="corId"
                    name="corId"
                    label="아이디"
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