import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import Pagination from "material-ui-flat-pagination";

export default class Alive extends React.Component{
  constructor(props) {
    super(props);
     this.state={
        alives:[],
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
    axios.get('http://localhost:9000/alives')
    .then(res=>{
      const alives = res.data;
      this.setState({alives});
      
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
    let area ={
      color: '#404040',      
    }
    let date={
      textAlign: 'center',
      color: '#3e4444 ',
      fontWeight: 'bold',
    }
    let time={
      textAlign: 'center',
      color: '#3e4444 ',
      letterSpacing: '6px',
      fontWeight: 'bold',
    }
    let title ={
      textAlign: 'center',
      color: '#336699 ',
      fontWeight: 'bold'
    }
    let state = {
      textAlign: 'right',
      color: 'SteelBlue',
      fontWeight: 'bold'
    }
    let page={
      textAlign:'center',
      margin:'3%'
    }
    let data = this.state.alives;
  return(  
    <React.Fragment>
       <Container style ={cardGrid}  maxWidth="md">
       <Grid container spacing={6} >
       {data && data.slice(this.state.minValue,this.state.maxValue).map(alive => <Grid item key={alive} xs={12} sm={6} md={4} >
            <Card style ={card} /* onClick={this.detail(id)} */>           
              <CardContent style ={cardContent}>                        
                <Typography style ={area} variant="h10" gutterBottom>
                  {alive.area} - {alive.career}
                </Typography> 
                <Typography><p /></Typography>      
                <Typography style={date} variant="h5" gutterBottom>
                  {alive.startDate}
                </Typography>  
                <Typography style={time} variant="h5" gutterBottom>
                  {alive.startTime}
                </Typography>        
                <Typography><p /></Typography>                    
                <Typography style={title} gutterBottom variant="h3" component="h2" >
                  {alive.corName}
                </Typography>        
                <Typography><p /></Typography>    
                <Typography style ={state} >
                {alive.state}
                </Typography>
              
              </CardContent>
          
            </Card>           
             </Grid>
              )}
              </Grid>
              <div style={page}>
             <Pagination
                  limit={6}
                  total={this.state.alives.length}
                  offset={this.state.offset}
                  onClick={(e, offset) =>this.changePage(offset/6+1, offset)}
                /> </div>
              </Container>
              </React.Fragment>

  )
}
}