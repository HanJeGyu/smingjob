import React, { useState } from 'react';
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
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function NoticeUpload() {  
  const [value, setValues] = useState({
      title:'',
      area:'',
      career:'',
      content:'',
      tagLocation:'',
      tagAttribute:'',
      tagCareer:'',
      state:'',
      corName: '',
      startDate:'',
      startTime:'',
  });
  
  function handleChange(e){
    e.preventDefault();
    setValues({[e.target.name]: e.target.value})
  }
  function handleDateChange(date){
    setValues({startDate: date})
    console.log(date);     
  }
  function changeTextData(text){
    setValues({content: text})
    console.log(text);  
    }

  function handleSubmit(event){
    
    event.preventDefault();
   
    const notices = {
      title: event.target.title.value,
      area: event.target.area.value,
      career: event.target.career.value,  
      content : value.content,  
      tagLocation: event.target.tagLocation.value,
      tagAttribute: event.target.tagAttribute.value,
      tagCareer: event.target.tagCareer.value,
      state: '진행중',
      corName: event.target.corName.value,  
      startDate: value.startDate,
      startTime: value.startTime, 
      };
      /* console.log(notices.startDate); */
      axios({
        method: 'post',
        url: 'http://localhost:9001/notices/upload',
        data: notices,
        headers: {        
       'Content-Type': 'application/json',
       'Authorization': 'JWT fefege..'
        },    
      }).catch(error => {
        console.log(error.message);
      });
    }        
/* 
      
      let style = {
        marginTop:"100px",   
            
    }
    
    let btn = {   
      margin:"auto",     
      padding:"10px"      
    }
    let margin={
      margin:"70px"
    } */
      return(
      <React.Fragment>
         <form onSubmit={handleSubmit}>
        <Container /*  style={style} */ maxWidth="md" >
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="corName"
                  name="corName"
                  label="기업명"
                  fullWidth
                  autoComplete="corName"
                  onChange={handleChange}
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="area"
                  name="area"
                  label="직무"
                  fullWidth
                  autoComplete="area"
                  onChange={handleChange}
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="career"
                  name="career"
                  label="경력사항 (신입/경력/경력무관/인턴)"
                  fullWidth
                  autoComplete="career"
                  onChange={handleChange}
                />
              </Grid>  
              <Grid item xs={12}>
              <CKEditor
                    id="content"                    
                    editor={ ClassicEditor }
                    data="<p>모집 개요<p>"
                    onInit={ editor => {                        
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        changeTextData(data)
                    } }
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagLocation"
                  name="tag_Location"
                  label="#위치 태그"
                  fullWidth
                  autoComplete="tag_Location"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagAttribute"
                  name="tag_attribute"
                  label="#특성 태그"
                  fullWidth
                  autoComplete="tag_attribute"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagCareer"
                  name="tag_career"
                  label="#요구경력 태그"
                  fullWidth
                  autoComplete="tag_career"
                  onChange={handleChange}
                />
              </Grid>    

    
              <Grid item xs={6} sm={3} > 
              <TextField
                  id="startDate"
                  name="startDate"
                  label="Birthday"
                  type="date"
                  defaultValue="2019-05-24"
                  onChange={handleDateChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              
              </Grid> 
              <Grid item xs={6} sm={3} > 
              <TextField
                  id="startTime"
                  name="startTime"
                  label="Alarm clock"
                  type="time"
                  defaultValue="07:30"
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, 
                  }}
                />

              </Grid> 
        
          <Grid container spacing={10}><p /* style={margin} */></p></Grid>
          <Grid container spacing={3}>
            <Button size="large" /* style={btn} */ color="primary"  type="submit">Upload</Button>   </Grid>
          </Grid>
            </Container>
            </form>
          </React.Fragment>


      )
    }
