import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'
import Pagination from "material-ui-flat-pagination";



export default class PR extends React.Component{
  constructor(props) {
    super(props);
     this.state={
        prs:[],
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
    axios.get('http://localhost:9000/prs')
    .then(res=>{
      const prs = res.data;
      this.setState({prs});      
  })
  }

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

    let name={
        textAlign: 'center',
        letterSpacing: '8px',
        color: '#336699 ',
        fontWeight: 'bold'
    }
    let title ={    
      color: '#3e4444 ',
      fontWeight: 'bold'
    }
    let state = {
      textAlign: 'right',
      color: '#ba3838',
      fontWeight: 'bold'
    }
    let tags= {     
      color: 'SteelBlue ',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
      paddingLeft: '10%',           
    }
    let page={
      textAlign:'center',
      margin:'3%'
    }
  let data = this.state.prs;

  return(  
   
    <React.Fragment>
       {/*검색 */}
       <Container  maxWidth="md">   
          <Paper style={searching} >
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
        {data && data.slice(this.state.minValue,this.state.maxValue).map(pr => <Grid item key={pr} xs={12} sm={6} md={4} >
            <Card style ={card} /* onClick={this.detail(id)} */>           
              <CardContent style ={cardContent}>  
                <Typography><p /></Typography>                       
                <Typography style={name} gutterBottom variant="h4" component="h2" >
                  {pr.name}
                </Typography>
                <Typography><p /></Typography>  
                <Typography style={title} gutterBottom variant="h6" >
                {pr.title}
                </Typography>
                <Typography><p /></Typography> 
                <Typography  style ={tags} gutterBottom variant="h8" >
                  #{pr.tagLocation}  #{pr.tagAttribute}  #{pr.tagCareer}
                </Typography>
                <Typography><p /></Typography>    
                <Typography style ={state} >
                {pr.state}
                </Typography>
              
              </CardContent>
          
            </Card>           
             </Grid>
              )}
              </Grid>
            <div style={page}>
             <Pagination
                  limit={6}
                  total={this.state.prs.length}
                  offset={this.state.offset}
                  onClick={(e, offset) =>this.changePage(offset/6+1, offset)}
                /> </div>
              </Container>
              </React.Fragment>
            

  )
}
}