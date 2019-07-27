import React, { Component } from "react";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {     
      scrapSeq: "",
      corSeq: localStorage.getItem("authSeq"),
      prSeq: localStorage.getItem("prSeq"),
      countNum: "",
      phone:'',
      title:'',
      content:'',
      area:'',
      tagLocation:'',
      tagAttribute:'',
      tagCareer:'',
      name:'',
      prLocation:'',
      itvSeq:'',
      url: '',
      dateUpload:''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/prs/PrDetail/57`)
    .then(res=>{
       this.setState(res.data)
       console.log(res.data)
    })
    .catch(e=>{           
       console.log(e.res)
    })


    // 만약 현재 기업 seq랑 현재 pr seq가 일치하는 데이터가 있으면
    //click을 true로 없으면 false로 셋팅함.
    axios
    .get(`http://localhost:9000/scraps/${this.state.corSeq}/${this.state.prSeq}`)
    .then(res => {
       this.setState({countNum : res.data }); 
    })
    .catch(e => {});
  }
  
  SendScrap = () => {
    if (this.state.countNum < 1) {
      const data = {
        corSeq: this.state.corSeq,
        prSeq: this.state.prSeq
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      };
      axios
        .post(`http://localhost:9000/scraps/`, JSON.stringify(data), {
          headers: headers
        })
        .then(res => {
          // this.setState({scrapSeq : res.data});
          this.setState({countNum : 1});
          alert("찜하기!");
        })
        .catch(e => {});

    } else {
        axios
        .get(`http://localhost:9000/scraps/getScrapSeq/${this.state.corSeq}/${this.state.prSeq}`)
        .then(res => {
           this.setState({scrapSeq : res.data }); 
           axios
           .delete(`http://localhost:9000/scraps/${this.state.scrapSeq}`)
           .then(e => {
             this.setState({countNum : 0});
             alert("찜하기 취소");
           })
           .catch(e => {});
        })
        .catch(e=>{
          alert("실패");
        }) 
      
  
    }
  };
 
  render() {
    let style = {
        marginTop:"100px",   
            
    }
    
    let btn = {   
      margin:"auto",     
      padding:"10px"      
    }
    let margin={
      margin:"70px"
    }
    let url=this.state.url
    return (
        <React.Fragment> 
      <div className="main">
        <h1>자기 PR + {this.state.prSeq}</h1>
    {localStorage.getItem('authType') === '2' ?
    

        
         <Container  style={style} maxWidth="md" >
         <Typography variant="h6" gutterBottom>
             PR동영상 업로드
            </Typography>
          
           <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField            
                  id="title"
                  name="title"
                  label="제목"
                  fullWidth
                  autoComplete="title"
                  value={this.state.title}         
                />
                </Grid>
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="name"
                  name="name"
                  label="이름"
                  fullWidth
                  autoComplete="name"
                  value={this.state.name}                  
                />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="phone"
                  name="phone"
                  label="연락처"
                  fullWidth
                  autoComplete="phone"
                  value={this.state.phone}                 
                />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="area"
                  name="area"
                  label="희망직무"
                  fullWidth
                  autoComplete="area"
                  value={this.state.area}  
                />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="prLocation"
                  name="pr_location"
                  label="희망지역"
                  fullWidth
                  autoComplete="prLocation"
                  value={this.state.prLocation}
                />
              </Grid>  
              <Grid item xs={12}>   
                <div  dangerouslySetInnerHTML={ {__html: this.state.content} }></div>           
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagLocation"
                  name="tag_Location"
                  label="#위치 태그"
                  fullWidth
                  autoComplete="tag_Location"
                  value={this.state.tagLocation}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagAttribute"
                  name="tag_attribute"
                  label="#특성 태그"
                  fullWidth
                  autoComplete="tag_attribute"
                  value={this.state.tagAttribute}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagCareer"
                  name="tag_career"
                  label="#요구경력 태그"
                  fullWidth
                  autoComplete="tag_career"
                  value={this.state.tagCareer}
                />
              </Grid>    
              <Grid container spacing={10}><p style={margin}></p></Grid>
        </Grid>
        <Grid>

    <video width="700"  controls>
         <source type="video/mp4" src = "catcat.mp4"  /> 
     </video> 
</Grid>
    </Container>

    
    : '' }



      {/* 기업만 아이콘들 보이게 처리. */}
      {/* 이미 스크랩 했을 시 채워진 하트, 스크랩 한 적 없으면 빈 하트로 표시*/}
      {localStorage.getItem('authType') === '2' ?  this.state.countNum >= 1 ? (      
          <FavoriteIcon
            className="favorite_icon"
            color="error"
            fontSize="large"
            onClick={this.SendScrap}
          />
        ) : (
          <FavoriteBorderIcon
            className="favorite_border_icon"
            color="error"
            fontSize="large"
            onClick={this.SendScrap}
          /> 
          
        ) : "interviewer는 " }

        {localStorage.getItem('authType') === '2' ? <StayCurrentPortraitIcon color="Primary" fontSize="large" /> : '안보이지롱'}
       
      </div>
      </React.Fragment>
    );
  }
}
