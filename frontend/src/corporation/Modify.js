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
            corRegNo: '',
            corId: '',
            pwd: '',
            name: '',
            ceoName: '',
            area: '',
            pmName: '',
            pmPhone: '',
            city: '',
            homepage: ''
        }
    }
    componentDidMount(){
        const corId = localStorage.getItem('authId')
        axios.get(`http://localhost:9000/corporations/${corId}`)
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
        if(e.target.name!=='name' && e.target.name!=='area'
            && e.target.name!=='city' && e.target.name!=='ceoName'){
            if((e.target.value).search(/\s/) !== -1){
                e.target.value = e.target.value.replace(' ','')
            }
        }
        // 특수문자 제거 : 사업자번호, 회사명, 대표명, 가입자명, 연락처, 아이디
        if(e.target.name==='name' || e.target.name==='ceoName' 
            || e.target.name==='pmName' || e.target.name==='pmPhone'){
            const checkStr = /[`~!@#$%^&*{}<>()+=_|\-\-\\\'\"\.\,;:\/?]/gi;
            e.target.value = e.target.value.replace(checkStr,'')
        }
        // 한글 제거 : 사업자번호, 연락처, 아이디
        if(e.target.name==='corRegNo' || e.target.name==='pmPhone'){
            const checkStr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 영문 제거 : 사업자번호, 연락처
        if(e.target.name==='corRegNo' || e.target.name==='pmPhone'){
            const checkStr = /[a-zA-Z]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 숫자 제거 : 가입자이름
        if(e.target.name==='pmName'){
            const checkStr = /[0-9]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 하이픈(-) 추가 가입자연락처
        if(e.target.name==='pmPhone'){
            const num = e.target.value.replace(/[^0-9]/g, '')
            const checkStr = /^01([0|1|6|7|8|9]?)$/;
            let phone = ''
            // 휴대전화 일때
            if(checkStr.test(num.substr(0,3))){
                if(num.length < 10) {
                    phone = num;
                }else if(num.length === 10) {
                    phone += num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 3);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length === 11){
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
                }else if(num.length === 9) {
                    phone = num.substr(0, 2);
                    phone += "-";
                    phone += num.substr(2, 3);
                    phone += "-";
                    phone += num.substr(5);
                }else if(num.length === 10 && num.substr(0,2) === '02') {
                    phone = num.substr(0, 2);
                    phone += "-";
                    phone += num.substr(2, 4);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length === 10 && num.substr(0,2) !== '02') {
                    phone = num.substr(0, 3);
                    phone += "-";
                    phone += num.substr(3, 3);
                    phone += "-";
                    phone += num.substr(6);
                }else if(num.length === 11) {
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
        const data = {
            corId: e.target.corId.value,
            pwd: e.target.pwd.value,
            name: e.target.name.value,
            ceoName: e.target.ceoName.value,
            area: e.target.area.value,
            pmName: e.target.pmName.value,
            pmPhone: e.target.pmPhone.value,
            pmEmail: e.target.pmEmail.value,
            city: e.target.city.value,
            homepage: e.target.homepage.value
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege..'
        }
        axios.put(`http://localhost:9000/corporations/modify`,JSON.stringify(data),{headers: headers})
            .then(res=>{
                alert('회원정보가 수정 되었습니다.')
                window.location.reload();
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
                <form className={classes.form} noValidate onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                                value={this.state.corRegNo}
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
                                value={this.state.name}
                                inputProps={{maxLength: 33}}
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
                                value={this.state.ceoName}
                                inputProps={{maxLength: 16}}
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
                                value={this.state.area}
                                inputProps={{maxLength: 33}}
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
                                value={this.state.city}
                                inputProps={{maxLength: 33}}
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
                                value={this.state.homepage}
                                inputProps={{maxLength: 99}}
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
                                value={this.state.pmName}
                                inputProps={{maxLength: 16}}
                            />
                        </Grid>
                        <Grid sm={1}>
                            <Box lineHeight={6}>
                                가입자연락처
                            </Box>
                        </Grid>
                        <Grid sm={11}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="pmPhone"
                                name="pmPhone"
                                value={this.state.pmPhone}
                                inputProps={{maxLength: 13}}
                            />
                        </Grid>
                        <Grid sm={1}>
                            <Box lineHeight={6}>
                                가입자이메일
                            </Box>
                        </Grid>
                        <Grid sm={11}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                id="pmEmail"
                                name="pmEmail"
                                value={this.state.pmEmail}
                                inputProps={{maxLength: 97}}
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
                                value={this.state.corId}
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
                                inputProps={{maxLength: 18}}
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
}

Modify.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(Modify)