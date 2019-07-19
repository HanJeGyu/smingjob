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

export default class NoticeUpload extends React.Component {

  constructor(props){
    super(props);
    this.state={  
      title:'',
      area:'',
      career:'',
      content1:'',
      tagLocation:'',
      tagAttribute:'',
      tagCareer:'',
      state:'',
      corName: '',
      startDate:'',
      startTime:'',
    };
   
  }

    handleChange=(e)=>{
      this.setState({[e.target.name]: e.target.value})
      console.log("change")
    }

    handleSubmit = event =>{
      event.preventDefault();   
      const noticeSeq = '1';       
      const data = {
       title: event.target.title.value,
       area: event.target.area.value,
       career: event.target.career.value,
       content1: event.target.content1.value,
       tagLocation: event.target.tagLocation.value,
       tagAttribute: event.target.tagAttribute.value,
       tagCareer: event.target.tagCareer.value,
       state: event.target.state.value,
       corName: event.target.corName.value,    
     };
     const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege..'
       }
       axios.put(`http://localhost:9001/notices/modify/${noticeSeq}`,JSON.stringify(data),{headers: headers})
            .then(res=>{       
              /*   window.location.reload() */
            })
            .catch(e=>{                
            })
    }
    
 /*      selectedDate(){
        React.useState(new Date('2019-07-14T18:00:00'))
      }
      handleDateChange=date=> {
        this.setState({startTime: date.target.value})
      }  */
    componentWillMount=()=>{
        const noticeSeq = '1';
        axios.get(`http://localhost:9001/notices/${noticeSeq}`)
            .then(res=>{
               this.setState(res.data)
               console.log(res.data)
            })
            .catch(e=>{           
               console.log(e.res)
            })
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
         <form onSubmit={this.handleSubmit}>
        <Container  style={style} maxWidth="md" >
            <Typography variant="h6" gutterBottom>
              공고 업로드
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField            
                  id="title"
                  name="title"
                  label="공고 제목"
                  fullWidth
                  autoComplete="title"
                  value={this.state.title}
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
                  value={this.state.corName}
                  onChange={this.handleChange}
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="area"
                  name="area"
                  label="직무"
                  fullWidth
                  autoComplete="area"
                  value={this.state.area}
                  onChange={this.handleChange}
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="career"
                  name="career"
                  label="경력사항 (신입/경력/경력무관/인턴)"
                  fullWidth
                  autoComplete="career"
                  value={this.state.career}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField            
                  id="content1"
                  name="content"
                  label="모집 개요"
                  multiline
                  rows="5"
                  fullWidth
                  autoComplete="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </Grid>     
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagLocation"
                  name="tagLocation"
                  label="#위치 태그"
                  fullWidth
                  autoComplete="tagLocation"
                  value={this.state.tagLocation}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagAttribute"
                  name="tagAttribute"
                  label="#특성 태그"
                  fullWidth
                  autoComplete="tagAttribute"
                  value={this.state.tagAttribute}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagCareer"
                  name="tagCareer"
                  label="#요구경력 태그"
                  fullWidth
                  autoComplete="tagCareer"
                  value={this.state.tagCareer}
                  onChange={this.handleChange}
                />
              </Grid>   
              <Grid item xs={12} >
                <TextField            
                  id="state"
                  name="state"
                  label="진행상태"
                  fullWidth
                  autoComplete="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </Grid> 

     {/*       <MuiPickersUtilsProvider utils={DateFnsUtils}>    
          <Grid item xs={6} sm={3} > 
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="접수 시작일"
                value={this.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              /></Grid>        
            <Grid item xs={6} sm={3}>
              <KeyboardTimePicker
                margin="normal"
                id="mui-pickers-time"
                label="접수 시작시각"
                value={this.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              /></Grid>
          </MuiPickersUtilsProvider>   */}   
          <Grid container spacing={10}><p style={margin}></p></Grid>
          <Grid container spacing={3}>
            <Button size="Large" style={btn} color="primary"  type="submit">수정</Button>   </Grid>
          </Grid>
            </Container>
            </form>
          </React.Fragment>


      )
    }
}
 /*   const [selectedDate, setSelectedDate] = React.useState(new Date('2019-07-14T18:00:00'));

    handleDateChange(date) {
      setSelectedDate(date);
    } 
    */
