import React, { Component } from "react";
import axios from "axios";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { render } from "react-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import PhoneIcon from "@material-ui/icons/Phone";
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PersonIcon from "@material-ui/icons/Person";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      scrapSeq: "",
      corSeq: localStorage.getItem("authSeq"),
      prSeq: localStorage.getItem("prSeq"),
      countNum: ""
    };
  }

  componentDidMount() {
    /*
       const seq = localStorage.prSeq;  =
       axios.get(`http://localhost:9000/prs/${seq}`)
       */

/*     axios
      .get("https://res.cloudinary.com/du6wt3fmd/image/list/mp4.json")
      .then(res => {
        console.log(res.data.resources);
        this.setState({ gallery: res.data.resources });
      }); */

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
  uploadWidget() {
    // . . .
  }
  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <span>{this.state.test}</span>

      {/* 기업만 아이콘들 보이게 처리해야함. */}
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
        ) : "interviewer" }
{/*         {this.state.countNum >= 1 ? (
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
        )} */}
        {localStorage.getItem('authType') === '2' ? <StayCurrentPortraitIcon color="Primary" fontSize="large" /> : '안보이지롱'}
        {/* <StayCurrentPortraitIcon color="Primary" fontSize="large" /> */}

        {/*                 <div className="gallery">
                    <CloudinaryContext cloudName="du6wt3fmd">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                           
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                           
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div> */}
      </div>
    );
  }
}
