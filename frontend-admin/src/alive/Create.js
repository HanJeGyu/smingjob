import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Button from "@material-ui/core/Button";


export default class AliveCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corSeq: "",
      corName: "",
      noticeSeq: "",
      area: "",
      career: "",
      itvSeq: "",
      itvName: "",
      itvPhone: "",
      startDate: "",
      startTime: "",
      state: "",
      url:
        "http://localhost:8080/?room=" +
        Math.floor(Math.random() * 100000000 + 1)
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeTextData = text => {
    this.setState({ content: text });
    console.log(text);
  };

  handleSubmit = event => {
    event.preventDefault();

    const noticeSeq = event.target.noticeSeq.value;
    const alives = {
      corSeq: event.target.corSeq.value,
      corName: event.target.corName.value,
      noticeSeq: event.target.noticeSeq.value,
      area: event.target.area.value,
      career: event.target.career.value,
      startDate: event.target.startDate.value,
      startTime: event.target.startTime.value,
      state: "대기중",
      url: event.target.url.value
      // url: "http://localhost:8080/?room=" + Math.floor(Math.random()*100000000 + 1),
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege..'
    }
    axios.post('http://localhost:9001/alives/upload',JSON.stringify(alives),{headers: headers})
    .then(res=>{
      if(res.data.result==='SUCCESS'){
        alert('생성 완료!');
        // 면접자 목록 생성
        axios.post(`http://localhost:9001/awaiters`,{liveSeq:res.data.liveSeq, noticeSeq:noticeSeq},{headers: headers})
        .then(res=>{
          if(res.data.result==='SUCCESS'){
            alert('면접자 목록 생성 성공');
          }else{
            alert('면접자 목록을 만드는 중 문제가 발생하였습니다.');
          }
        })
        .catch(e=>{
          alert('면접자 목록을 만드는데 실패하였습니다.')
        })
      }else{
        alert('면접 방을 만드는 과정에서 문제가 발생하였습니다.');
      }
    })
    .catch(e=>{
      alert('면접 방을 만드는데 실패 하였습니다.')
    })

    

/*     axios({
      method: "post",
      url: "http://localhost:9001/alives/upload",
      data: alives,
      headers: {
        "Content-Type": "application/json"
      }
    }) 
    alert('생성 완료!');
    window.location = '/AliveAdmin'; */
  };

  render() {
    let style = {
      marginTop: "100px"
    };

    let btn = {
      margin: "auto",
      padding: "10px"
    };
    let margin = {
      margin: "70px"
    };
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Container style={style} maxWidth="md">
            <Typography variant="h6" gutterBottom>
              면접 방 생성
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="corSeq"
                  name="corSeq"
                  label="기업 번호"
                  fullWidth
                  autoComplete="corSeq"
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="corName"
                  name="corName"
                  label="기업명"
                  fullWidth
                  autoComplete="corName"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="noticeSeq"
                  name="noticeSeq"
                  label="공고 번호"
                  fullWidth
                  autoComplete="noticeSeq"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="area"
                  name="area"
                  label="직무"
                  fullWidth
                  autoComplete="area"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="career"
                  name="career"
                  label="경력사항 (신입/경력/경력무관/인턴)"
                  fullWidth
                  autoComplete="career"
                  onChange={this.handleChange}
                />
              </Grid>
              {
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="url"
                    name="url"
                    label="면접방 URL"
                    fullWidth
                    autoComplete="url"
                    defaultValue={this.state.url}
                    onChange={this.handleChange}
                  />
                </Grid>
              }
              <Grid item xs={4} sm={2}>
                <TextField
                  id="startDate"
                  name="startDate"
                  label="면접일"
                  type="date"
                  defaultValue="2019-07-24"
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  id="startTime"
                  name="startTime"
                  label="면접시각"
                  type="time"
                  defaultValue="12:00"
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  inputProps={{
                    step: 300
                  }}
                />
              </Grid>

              <Grid container spacing={10}>
                <p style={margin} />
              </Grid>
              <Grid container spacing={3}>
                <Button size="large" style={btn} color="primary" type="submit">
                  Upload
                </Button>{" "}
              </Grid>
            </Grid>
          </Container>
        </form>
      </React.Fragment>
    );
  }
}
