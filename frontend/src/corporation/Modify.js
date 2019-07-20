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
        const corId = 'kakao'
        axios.get(`http://localhost:9000/corporations/${corId}`)
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
            corId: e.target.corId.value,
            pwd: e.target.pwd.value,
            name: e.target.name.value,
            ceoName: e.target.ceoName.value,
            area: e.target.area.value,
            pmName: e.target.pmName.value,
            pmPhone: e.target.pmPhone.value,
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
                <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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