import React from 'react'
import { Container, CssBaseline, TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Join(){
    const classes = useStyles();
    
    function handleSubmit(e){
        e.preventDefault();
        const checkStr = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(e.target.itvId.value===''){
            alert('아이디는 필수 입력정보 입니다.')
        }else if(e.target.pwd.value===''){
            alert('비밀번호는 필수 입력정보 입니다.')
        }else if(e.target.pwdchk.value===''){
            alert('비밀번호 확인은 필수 입력정보 입니다.')
        }else if(e.target.pwdchk.value!==e.target.pwd.value){
            alert('비밀번호가 일치하지 않습니다.')
        }else if(e.target.name.value===''){
            alert('이름은 필수 입력정보 입니다.')
        }else if(e.target.birth.value===''){
            alert('생년월일은 필수 입력정보 입니다.')
        }else if(e.target.birth.value.length < 6){
            alert('생년월일 6자리를 입력해 주세요.')
        }else if(e.target.email.value===''){
            alert('이메일은 필수 입력정보 입니다.')
        }else if((e.target.email.value).match(checkStr)===null){
            alert('이메일 형식이 옳바르지 않습니다.')
        }else{
            const data = {
                itvId: e.target.itvId.value,
                pwd: e.target.pwd.value,
                name: e.target.name.value,
                birth: e.target.birth.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                area: e.target.area.value,
                location: e.target.location.value
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege..'
            }
            axios.post(`http://localhost:9000/interviewers/join`,JSON.stringify(data),{headers: headers})
                .then(res=>{
                    alert('회원가입 되었습니다.\n로그인 후 이용해 주세요')
                    document.location.href = '/login'
                })
                .catch(e=>{
                    alert('회원가입에 실패하였습니다.')
                })
        }
    }

    function handleValidation(e){
        e.preventDefault();
        // 공백 제거
        if(e.target.name!=='area' && e.target.name!=='location'){
            if((e.target.value).search(/\s/) != -1){
                e.target.value = e.target.value.replace(' ','')
            }
        }
        // 특수문자 제거 : 이름, 아이디, 생년월일, 휴대폰번호, 산업/직군, 근무지
        if(e.target.name!=='area' && e.target.name!=='email'
            && e.target.name!=='pwd' && e.target.name!=='pwdchk'){
            const checkStr = /[`~!@#$%^&*{}<>()+=_|\-\-\\\'\"\.\,;:\/?]/gi;
            e.target.value = e.target.value.replace(checkStr,'')
/*             if(checkChar.test(e.target.value)){
                e.target.value = e.target.value.replace(checkChar,'')
            } */
        }
        // 한글 제거 : 아이디, 생년월일, 휴대폰번호
        if(e.target.name!=='area' && e.target.name!=='location'
            && e.target.name!=='email' && e.target.name!=='name'){
            const checkStr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 영문 제거 : 생년월일, 휴대폰번호
        if(e.target.name==='birth' || e.target.name==='phone'){
            const checkStr = /[a-zA-Z]/gi
            e.target.value = e.target.value.replace(checkStr, '')
        }
        // 숫자 제거 : 이름
        if(e.target.name==='name'){
            const checkStr = /[0-9]/gi
            e.target.value = e.target.value.replace(checkStr, '')
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
    }

    return(
        <Container component="main" maxWidth="auto">
            <CssBaseline/>
            <form className={classes.form} noValidate onSubmit={handleSubmit} onChange={handleValidation}>
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="name"
                    name="name"
                    label="이름"
                    inputProps={{maxLength: 16}}
                    autoFocus
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="itvId"
                    name="itvId"
                    inputProps={{maxLength: 25}}
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
                    inputProps={{maxLength: 18}}
                    type="password"
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pwdchk"
                    name="pwdchk"
                    label="비밀번호 확인"
                    inputProps={{maxLength: 18}}
                    type="password"
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="birth"
                    name="birth"
                    label="생년월일 6자리"
                    inputProps={{maxLength: 6}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="phone"
                    name="phone"
                    label="휴대폰번호"
                    inputProps={{maxLength: 13}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="email"
                    name="email"
                    label="이메일"
                    inputProps={{maxLength: 97}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="area"
                    name="area"
                    label="희망산업/직군"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="location"
                    name="location"
                    label="희망근무지"
                    inputProps={{maxLength: 33}}
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