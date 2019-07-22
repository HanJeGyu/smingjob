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
            birth: '',
            phone: '',
            email: '',
            area: '',
            location: ''
        }
    }
    componentDidMount(){
        const itvSeq = localStorage.getItem('authId')
        axios.get(`http://localhost:9000/interviewers/${itvSeq}`)
            .then(res=>{
                this.setState(res.data)
            })
            .catch(e=>{
                alert('정보를 불러오지 못 했습니다.')
            })
    }

    handleChange=(e)=>{
        e.preventDefault();
        // 공백 제거
        if(e.target.name!=='area' && e.target.name!=='location'){
            if((e.target.value).search(/\s/) != -1){
                e.target.value = e.target.value.replace(' ','')
            }
        }
        // 특수문자 제거 : 이름, 아이디, 생년월일, 휴대폰번호, 산업/직군, 근무지
        if(e.target.name!=='area' && e.target.name!=='email'
            && e.target.name!=='pwd'){
            const checkStr = /[`~!@#$%^&*{}<>()+=_|\-\-\\\'\"\.\,;:\/?]/gi;
            e.target.value = e.target.value.replace(checkStr,'')
        }
        // 한글 제거 : 아이디, 생년월일, 휴대폰번호
        if(e.target.name!=='area' && e.target.name!=='location'
            && e.target.name!=='email' && e.target.name!=='name'){
            const checkStr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 영문 제거 : 생년월일, 휴대폰번호
        if(e.target.name==='phone'){
            const checkStr = /[a-zA-Z]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 숫자 제거 : 이름
        if(e.target.name==='name'){
            const checkStr = /[0-9]/gi
            e.target.value = e.target.value.replace(checkStr,'')
        }
        // 하이픈(-) 추가
        if(e.target.name==='phone'){
            const num = e.target.value.replace(/[^0-9]/g, '')
            const checkStr = /^01([0|1|6|7|8|9]?)$/;
            let phone = ''
            // 휴대전화 일때
            if(checkStr.test(num.substr(0,3))){
                if(num.length < 10) {
                    phone = num;
                }else if(num.length == 10) {
                    phone += num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 3);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length == 11){
                    phone += num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 4);
                    phone += "-";
                    phone += num.substr(7);
                }
            }else{ 
            // 일반전화 일때
                if(num.length < 9) {
                    phone = num;
                }else if(num.length == 9) {
                    phone = num.substr(0, 2);
                    phone += "-";
                    phone += num.substr(2, 3);
                    phone += "-";
                    phone += num.substr(5);
                }else if(num.length == 10 && num.substr(0,2) == '02') {
                    phone = num.substr(0, 2);
                    phone += "-";
                    phone += num.substr(2, 4);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length == 10 && num.substr(0,2) != '02') {
                    phone = num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 3);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length == 11) {
                    phone = num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 4);
                    phone += "-";
                    phone += num.substr(7);
                }
            }
            e.target.value = phone
        }
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const checkStr = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(e.target.itvId.value===''){
            alert('아이디는 필수 입력정보 입니다.')
        }else if(e.target.pwd.value===''){
            alert('비밀번호를 입력해주세요.')
        }else if(e.target.name.value===''){
            alert('이름은 필수 입력정보 입니다.')
        }else if(e.target.email.value===''){
            alert('이메일은 필수 입력정보 입니다.')
        }else if((e.target.email.value).match(checkStr)===null){
            alert('이메일 형식이 옳바르지 않습니다.')
        }else{
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
                    alert('회원정보가 수정 되었습니다.')
                })
                .catch(e=>{
                    alert('회원정보 수정되지 못했습니다.')
                })
        }
    }

    render(){
        const { classes } = this.props
        return(
            <Container component="main" maxWidth="lg">
                <CssBaseline/>
                <form className={classes.form} noValidate onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                                value={this.state.itvId}
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
                                value={this.state.birth}
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
                                inputProps={{maxLength: 13}}
                                value={this.state.phone}
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
    classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Modify)