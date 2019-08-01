import React from 'react'
import {Avatar, Button, CssBaseline, TextField, Grid,
    withStyles, Typography, Container, InputBase } from '@material-ui/core';
    
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    btn: {
        margin: theme.spacing(2),
        height: '70%',
        width: '60%'
    },
    typography: {
        color: '#ff0000'
    }
});

class Findpwd extends React.Component{
    constructor(){
        super()
        this.state = {
            chktext: ''
        }
    }

    handleSubmit=async(e)=>{
        e.preventDefault()
        let findId = e.target.findId.value
        if(findId===''){
            this.setState({chktext:'아이디를 입력해주세요'})
        }else{
            // 개인회원에서 체크
            let count = 0
            await axios.get(`http://localhost:9000/interviewers/checkId/${findId}`)
                .then(res=>{
                    if(res.data===0){
                        count = count+1
                        console.log('진입확인1')
                        console.log(count)
                        // 기업회원에서 체크
                        
                    }
                })
            await axios.get(`http://localhost:9000/corporations/checkId/${findId}`)
                .then(res=>{
                    if(res.data===0){
                        count = count+1
                        console.log('진입확인2')
                        console.log(count)
                    }
                })
            console.log(`마지막 ${count}`)
            if(count===2){
                console.log('텍스트변경')
                this.setState({chktext:'입력한 아이디가 존재하지 않습니다.'})
            }
        }
    }

    render(){
        const {classes} = this.props
        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    비밀번호 찾기
                </Typography>
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="findId"
                                name="findId"
                                label="비밀번호를 찾을 아이디"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                찾기
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Typography className={classes.typography} id="chktext" variant="h10" gutterBottom>
                    {this.state.chktext}
                </Typography> 
            </div>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Findpwd)