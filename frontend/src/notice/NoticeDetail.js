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
    const title = '제목...';
    axios.get(`http://localhost:9000/notices/${title}`)
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
      return(
    <React.Fragment>
       
      <Container  style={style} maxWidth="md" >
            <Typography variant="h6" gutterBottom>
              공고 
            </Typography> 

            <Grid container spacing={3}>
              <Grid item xs={12} >
              <Typography>
                {this.state.title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography>
                {this.state.area}
                </Typography>
              </Grid> 
              <Grid item xs={12} sm={4}>
              <Typography>
                {this.state.corName}
                </Typography>
              </Grid> 
              <Grid item xs={12} sm={4}>
              <Typography>
              {this.state.career}
                </Typography>   
              </Grid>
              <Grid item xs={12}>
              <Typography>
              {this.state.content1}
                </Typography>               
              </Grid>     
              <Grid item xs={12} sm={4}>
              <Typography>
              #{this.state.tagLocation}
                </Typography>                
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography>
              #{this.state.tagAttribute}
                </Typography>               
              </Grid>
              <Grid item xs={12} sm={4}>
              <Typography>
              #{this.state.tagCareer}
                </Typography>               
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
          </Container>
         
          </React.Fragment>


      )
    }
}
 /* const [selectedDate, setSelectedDate] = React.useState(new Date('2019-07-14T18:00:00'));

    handleDateChange(date) {
      setSelectedDate(date);
    }  */

