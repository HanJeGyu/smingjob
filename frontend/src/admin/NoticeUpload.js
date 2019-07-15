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

const careers =[
    {label : '신입'},
    {label : '경력'},
    {label : '인턴'},
    {label : '경력무관'}
].map(career=> ({
    value: career.label,
    label: career.label,
  }));


export default function AddressForm() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-07-14T21:11:54'));

    function handleDateChange(date) {
      setSelectedDate(date);
    } 
    
  return (
      
  <React.Fragment>
   <Container  maxWidth="md" >
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
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField            
            id="lastName"
            name="lastName"
            label="직무"
            fullWidth
            autoComplete="lname"
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField            
            id="career"
            name="career"
            label="경력사항"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField            
            id="content"
            name="content"
            label="모집 개요"
            multiline
            rows="5"
            fullWidth
            autoComplete="content"
          />
        </Grid>     
        <Grid item xs={12} sm={4}>
          <TextField            
            id="tag_location"
            name="tag_location"
            label="#위치 태그"
            fullWidth
            autoComplete="tag_location"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField            
            id="tag_attribute"
            name="tag_attribute"
            label="#특성 태그"
            fullWidth
            autoComplete="tag_attribute"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField            
            id="tag_career"
            name="tag_career"
            label="#요구경력 태그"
            fullWidth
            autoComplete="tag_career"
          />
        </Grid>    

     <MuiPickersUtilsProvider utils={DateFnsUtils}>    
     <Grid item xs={6} sm={3} > {/*   container justify="space-around"> */}
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="접수 시작일"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></Grid>        
       <Grid item xs={6} sm={3}>
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="접수 시작시각"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /></Grid>
    </MuiPickersUtilsProvider>    
    <Grid container spacing={10} ></Grid>
    
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        
       </Grid>
      </Container>
    </React.Fragment>
  
  );
}