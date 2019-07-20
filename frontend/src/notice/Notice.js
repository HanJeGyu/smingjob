import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import axios from 'axios'
import Pagination from "material-ui-flat-pagination";

export default class Notice extends React.Component{
  constructor(props) {
    super(props);
     this.state={
      notices:[],
        minValue: 0,
        maxValue: 6,          
        offset:0 
  } 
}
changePage=(pageNum,offset)=> {
  console.log(pageNum)
  this.setState({ minValue: (pageNum - 1)*6,
                  maxValue: pageNum * 6, 
                  offset});

}
  componentDidMount(){
    axios.get('http://localhost:9000/notices')
    .then(res=>{
      const notices = res.data;
      this.setState({notices});
      
  })
  }
 /*  detail(e){
    e.preventDefault();
    window.location = '/NoticeDetail/';

} */
  render(){
    let cardGrid ={
      paddingTop: '3%',      
    }
    let  card= {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e3ecf4'
    }
    let cardContent= {
      flexGrow: 1,
    }
  
    let searching= {
      padding: '2px 4px',  
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      textAlign:'center',
      margin:'auto',
      marginTop: '30px',      
    }
    let input= {
      marginLeft: 8,
      flex: 1,
    }
    let iconButton= {
      padding: 10,
    }
   
    let area ={
      color: '#404040',
      
    }
    let title ={
      textAlign: 'center',
      color: '#336699 ',
      fontWeight: 'bold'
    }
    let state = {
      textAlign: 'right',
      color: '#ba3838',
      fontWeight: 'bold'
    }
    let tags= {
      textAlign: 'center',
      color: 'SteelBlue '
    }
    let page={
      textAlign:'center',
      margin:'3%'
    }
    let data = this.state.notices;    
  return(  
    <React.Fragment>
       {/*검색 */}
       <Container  maxWidth="md">   
          <Paper style={searching} >
      {/*    <IconButton className={classes.iconButton} aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <InputBase
            style={input}
            placeholder="지역. 직무 등 키워드를 입력해주세요."
            inputProps={{ 'aria-label': '검색' }}
          />
          <IconButton style={iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
       </Container>


       <Container style ={cardGrid}  maxWidth="md">
       <Grid container spacing={6} >
        {data && data.slice(this.state.minValue,this.state.maxValue).map(notice => <Grid item key={notice} xs={12} sm={6} md={4} >
            <Card style ={card} /* onClick={this.detail(id)} */>           
              <CardContent style ={cardContent}>                        
                <Typography style ={area} variant="h10" gutterBottom>
                  {notice.area} - {notice.career}
                </Typography> 
                <Typography><p /></Typography>                       
                <Typography style={title} gutterBottom variant="h4" component="h2" >
                  {notice.corName}
                </Typography>
                <Typography><p /></Typography>    
                <Typography  style ={tags} gutterBottom variant="h6" >
                  #{notice.tagLocation}  #{notice.tagAttribute}  #{notice.tagArea}
                </Typography>
                <Typography><p /></Typography>    
                <Typography style ={state} >
                {notice.state}
                </Typography>
              
              </CardContent>
          
            </Card>           
             </Grid>
              )}
              </Grid>
              <div style={page}>
             <Pagination
                  limit={6}
                  total={this.state.notices.length}
                  offset={this.state.offset}
                  onClick={(e, offset) =>this.changePage(offset/6+1, offset)}
                /> </div>
              </Container>
              </React.Fragment>

  )
}
}