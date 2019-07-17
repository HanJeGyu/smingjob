import React from 'react'
import PropTypes from 'prop-types';
import { Container, CssBaseline, Grid, TextField, Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = theme => ({
    form: {
        marginTop: theme.spacing(4),
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
});

class Modify extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            itvId: '',
            pwd: '',
            brith: '',
            phone: '',
            email: '',
            area: '',
            location: ''
        }
    }
    componentWillMount(){
        const itvid = 'test'
        axios.get(`http://localhost:9000/interviewers/${itvid}`)
            .then(res=>{
                this.setState(res.data)
            })
            .catch(e=>{
                alert('정보를 불러오지 못 했습니다.')
            })
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            itvId: e.target.itvId.value,
            pwd: e.target.pwd.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            area: e.target.area.value,
            location: e.target.location.value
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege..'
        }
        axios.put(`http://localhost:9000/interviewers/modify`,JSON.stringify(data),{headers: headers})
            .then(res=>{
                alert('통신성공')
                console.log(res.data.result)
            })
            .catch(e=>{
                alert('회원정보 수정 실패')
            })
    }

    render(){
        const { classes } = this.props
        return(
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
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
                                value={this.state.name}
                                onChange={this.handleChange}
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
                                value={this.state.pwd}
                                onChange={this.handleChange}
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
                                disabled
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
                                value={this.state.phone}
                                onChange={this.handleChange}
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
                                value={this.state.email}
                                onChange={this.handleChange}
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
                                value={this.state.area}
                                onChange={this.handleChange}
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
                                value={this.state.location}
                                onChange={this.handleChange}
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
                        수정하기
                    </Button>
                </form>
            </Container>
        )
    }
}

Modify.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Modify)