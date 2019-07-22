import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { textAlign } from '@material-ui/system';

export default class NoticeDetail extends React.Component {

  constructor(props){
    super(props);
    this.state={ 
      noticeSeq:'', 
      title:'',
      area:'',
      career:'',
      content:'',
      tagLocation:'',
      tagAttribute:'',
      tagCareer:'',
      state:'',
      corName: '',
      startDate: '',
      startTime:'',
      
    };
   
  }
  componentWillMount=()=>{
    const seq = localStorage.noticeSeq;  
    axios.get(`http://localhost:9000/notices/${seq}`)
        .then(res=>{
            this.setState(res.data)
           console.log(res.data)
        })
        .catch(e=>{           
           console.log(e.res)
        })
}
apply=()=>{
console.log("지원");
//지원하기 메소드...

}

    render(){     
       

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
    let taggrid={
      fontWeight:'bold',
      letterSpacing: '2px',
      color:'#336699'
    }
   
    let codes = this.state.content
   return(
    <React.Fragment>
       
      <Container variant="outline" style={style} maxWidth="md" >
            <Typography variant="h6" gutterBottom>
              공고 
            </Typography> 

            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField 
                  label="공고 제목"
                  value={this.state.title}
                  fullWidth                 
                  ReadOnly
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField 
                  label="기업명"
                  value={this.state.corName}
                  fullWidth   
                  ReadOnly           
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField  
                  label="직무"
                  value={this.state.area}
                  fullWidth
                  ReadOnly
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField 
                  label="요구경력 및 직급"
                  value={this.state.career}
                  fullWidth
                  ReadOnly                 
                />
              </Grid>
              <Grid item xs={12}>   
                <div  dangerouslySetInnerHTML={ {__html: codes} }></div>           
              </Grid>     
      
               <Grid >
              <Typography style={taggrid} >#{this.state.tagLocation}  #{this.state.tagAttribute} #{this.state.tagCareer} </Typography>
              </Grid>
        
             
              <Grid item xs={12} sm={4}>
              <Typography>
              {this.state.startDate}
                </Typography>               
              </Grid>  

              <Grid item xs={12} sm={4}>
              <Typography>
              {this.state.startTime}
                </Typography>               
              </Grid>   
          <Grid container spacing={10}><p style={margin}></p></Grid>
          <Grid container spacing={3}>
            <Button size="Large" style={btn} color="primary" onClick={this.apply}>지원하기</Button>   </Grid>
          </Grid> 

          <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      수정
                    </Button>
          </Container>
         
          </React.Fragment>


      )
    }
}
 /* const [selectedDate, setSelectedDate] = React.useState(new Date('2019-07-14T18:00:00'));

    handleDateChange(date) {
      setSelectedDate(date);
    }  */

