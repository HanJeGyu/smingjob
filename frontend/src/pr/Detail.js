import React, { Component  } from "react";
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
  constructor(props) {
    super(props);

    this.state = {
      gallery: []
    };
  }
  componentDidMount() {
    /*
       const seq = localStorage.prSeq;  
       axios.get(`http://localhost:9000/prs/${seq}`)
       */

    axios
      .get("https://res.cloudinary.com/du6wt3fmd/image/list/mp4.json")
      .then(res => {
        console.log(res.data.resources);
        this.setState({ gallery: res.data.resources });
      });
  }
  SendScrap = () => {
    const data = {
      prSeq: localStorage.getItem("prSeq"),
      corSeq: localStorage.getItem("authSeq")
    };
    alert(localStorage.getItem("prSeq"));
    alert(localStorage.getItem("authSeq"));
    alert("ㅗㅑ");

    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT fefege.."
    };
    axios
      .post(`http://localhost:9000/scraps/`, JSON.stringify(data), {
        headers: headers
      })
      .then(res => {

      })
      .catch(e => {

      });
  };
  uploadWidget() {
    // . . .
  }
  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <FavoriteIcon
          className="favorite_icon"
          color="error"
          fontSize="large"
          onClick={this.SendScrap}
        />
        <StayCurrentPortraitIcon color="Primary" fontSize="large" />

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
