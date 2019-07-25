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

    function handleSubmit(e){
        e.preventDefault();
        const checkStr = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(e.target.corRegNo.value===''){
            alert('사업자등록번호는 필수 입력정보 입니다.')
        }else if(e.target.name.value===''){
            alert('회사명은 필수 입력정보 입니다.')
        }else if(e.target.ceoName.value===''){
            alert('대표명은 필수 입력정보 입니다.')
        }else if(e.target.area.value===''){
            alert('업종은 필수 입력정보 입니다.')
        }else if(e.target.pmName.value===''){
            alert('가임자명은 필수 입력정보 입니다.')
        }else if(e.target.pmPhone.value===''){
            alert('가입자연락처는 필수 입력정보 입니다.')
        }else if(e.target.pmEmail.value===''){
            alert('가입자이메일은 필수 입력정보 입니다.')
        }else if((e.target.pmEmail.value).match(checkStr)===null){
            alert('이메일 형식이 옳바르지 않습니다.')
        }else if(e.target.corId.value===''){
            alert('아이디는 필수 입력정보 입니다.')
        }else if(e.target.pwd.value===''){
            alert('비밀번호는 필수 입력정보 입니다.')
        }else if(e.target.pwdchk.value===''){
            alert('비밀번호 확인은 필수 입력정보 입니다.')
        }else if(e.target.pwdchk.value!==e.target.pwd.value){
            alert('비밀번호가 일치하지 않습니다.')
        }else{
            const data = {
                corId: e.target.corId.value,
                pwd: e.target.pwd.value,
                corRegNo: e.target.corRegNo.value,
                name: e.target.name.value,
                ceoName: e.target.ceoName.value,
                area: e.target.area.value,
                pmName: e.target.pmName.value,
                pmPhone: e.target.pmPhone.value,
                pmEmail: e.target.pmEmail.value,
                homepage: e.target.homepage.value,
                city: e.target.city.value
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege..'
            }
            axios.post(`http://localhost:9000/corporations/join`,JSON.stringify(data),{headers: headers})
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
        if(e.target.name!=='name' && e.target.name!=='area'
            && e.target.name!=='city' && e.target.name!=='ceoName'){
            if((e.target.value).search(/\s/) !== -1){
                e.target.value = e.target.value.replace(' ','')
            }
        }
        // 특수문자 제거 : 사업자번호, 회사명, 대표명, 가입자명, 연락처, 아이디
        if(e.target.name==='corRegNo' || e.target.name==='name'
            || e.target.name==='ceoName' || e.target.name==='pmName'
            || e.target.name==='pmPhone' || e.target.name==='corId'){
            const checkStr = /[`~!@#$%^&*{}<>()+=_|\-\-\\\'\"\.\,;:\/?]/gi;
            e.target.value = e.target.value.replace(checkStr,'')
        }
        // 한글 제거 : 사업자번호, 연락처, 아이디
        if(e.target.name==='corRegNo' || e.target.name==='pmPhone'
            || e.target.name==='corId'){
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
        // 하이픈(-) 추가 사업자등록번호
        if(e.target.name==='corRegNo'){
            const num = e.target.value.replace(/[^0-9]/g, '')
            let corRegNo = ''
            if(num.length < 4) {
                return num;
            } else if(num.length < 6) {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3);
            } else if(num.length < 10) {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3, 2);
                corRegNo += "-";
                corRegNo += num.substr(5);
            } else {
                corRegNo += num.substr(0, 3);
                corRegNo += "-";
                corRegNo += num.substr(3, 2);
                corRegNo += "-";
                corRegNo += num.substr(5);
            }
            e.target.value = corRegNo
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
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="ceoName"
                    name="ceoName"
                    label="대표명"
                    inputProps={{maxLength: 16}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="area"
                    name="area"
                    label="업종"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="city"
                    name="city"
                    label="지역"
                    inputProps={{maxLength: 33}}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    id="homepage"
                    name="homepage"
                    label="홈페이지"
                    inputProps={{maxLength: 99}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmName"
                    name="pmName"
                    label="가입자명"
                    inputProps={{maxLength: 16}}
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
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pmEmail"
                    name="pmEmail"
                    label="가입자이메일"
                    inputProps={{maxLength: 97}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="corId"
                    name="corId"
                    label="아이디"
                    inputProps={{maxLength: 25}}
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
                    inputProps={{maxLength: 18}}
                />
                <TextField
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    id="pwdchk"
                    name="pwdchk"
                    label="비밀번호 확인"
                    type="password"
                    inputProps={{maxLength: 18}}
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