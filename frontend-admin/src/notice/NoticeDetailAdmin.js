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
    const seq = localStorage.noticeadminSeq;  
    axios.get('http://localhost:9001/notices/'+seq)
        .then(res=>{
            this.setState(res.data)
           console.log(res.data)
        })
        .catch(e=>{           
           console.log(e.res)
        })
   
}

gomodify(seq){
  localStorage.noticeSeq = seq  ;
  window.location ="/noticemodify/"+ localStorage.noticeSeq 
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
       
      <Container  style={style} maxWidth="md" >
            <Typography variant="h6" gutterBottom>
              공고 
            </Typography> 

            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField 
                  label="공고 제목"
                  value={this.state.title}
                  fullWidth  
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField 
                  label="기업명"
                  value={this.state.corName}
                  fullWidth          
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField  
                  label="직무"
                  value={this.state.area}
                  fullWidth                  
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField 
                  label="요구경력 및 직급"
                  value={this.state.career}
                  fullWidth                               
                />
              </Grid>
              <Grid item xs={12}>   
                <div  dangerouslySetInnerHTML={ {__html: codes} }></div>           
              </Grid>     

              <Grid item xs={12}>   
              <Typography style={taggrid} >#{this.state.tagLocation} 
               #{this.state.tagAttribute} #{this.state.tagCareer} </Typography>
              </Grid>
             
              <Grid item xs={4} sm={2}> 
              <TextField                 
                  label="접수일"                                               
                  value={this.state.startDate} 
                  />              
              </Grid>        
              <Grid item xs={4} sm={2} > 
              <TextField                
                  label="접수시각"
                  value={this.state.startTime}
                   />
              </Grid> 
     
          <Grid container spacing={10}><p style={margin}></p></Grid>
         
         
       
          </Grid> 

          <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary" onClick={()=>this.gomodify(this.state.noticeSeq)}>
                      수정
                    </Button>

          <Grid item xs={12}>
          지원자 목록 
          
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

