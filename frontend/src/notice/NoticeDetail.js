import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
/* import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
 */
const careers =[
    {label : '신입'},
    {label : '경력'},
    {label : '인턴'},
    {label : '경력무관'}
].map(career=> ({
    value: career.label,
    label: career.label,
  }));

/*   const useStyles = makeStyles({
    grid: {
      width: '60%',
    },
  }); */
  
export default function AddressForm() {
  /*   const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const classes = useStyles();
  
    function handleDateChange(date) {
      setSelectedDate(date);
    } */
    
  return (
    <React.Fragment>
   <Container  maxWidth="md">
      <Typography variant="h6" gutterBottom>
        공고 업로드
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="title"
            name="title"
            label="공고 제목"
            fullWidth
            autoComplete="title"
          />
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="직무"
            fullWidth
            autoComplete="lname"
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="career"
            name="career"
            label="경력사항"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>  
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="tag_location"
            name="tag_location"
            label="#위치 태그"
            fullWidth
            autoComplete="tag_location"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="tag_attribute"
            name="tag_attribute"
            label="#특성 태그"
            fullWidth
            autoComplete="tag_attribute"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="tag_career"
            name="tag_career"
            label="#요구경력 태그"
            fullWidth
            autoComplete="tag_career"
          />
        </Grid>
{/*         <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="mui-pickers-time"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider> */}
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