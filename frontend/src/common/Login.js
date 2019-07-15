import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
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

  function handleChange(event){
    setValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`회원종류 1: 개인회원, 2: 기업회원 \n선택된 라디오버튼${value}`)
    let url = ''
    if(value==='1'){
      url = 'http://localhost:9000/interviewer'
    }else if(value==='2'){
      url = 'http://localhost:9000/corporation'
    }else{
      alert('선택값 오류')
    }
    const data = {
      itvId: event.target.id.value,
      pwd: event.target.pwd.value
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege..'
    }
    axios.post(`${url}/login`, JSON.stringify(data), {headers: headers})
      .then(res=>{
        alert('통신성공')
      })
      .catch(e=>{
        alert('로그인에 실패하였습니다.')
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
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
            id="id"
            name="id"
            label="ID"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pwd"
            name="pwd"
            label="Password"
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
