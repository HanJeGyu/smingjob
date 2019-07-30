import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';

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
      applicants:[],
      appcolumns: [
        { title: '이름', field: 'name'}, 
        { title: '생년월일', field: 'birth' },  
        { title: '연락처', field: 'phone' }, 
        { title: '이메일', field: 'email'}, 
        { title: '희망직무', field: 'area'}, 
        { title: '희망지역', field: 'location'},                    
        { title: '지원상태', field: 'appState'},                    
        ],
    
    };
   
  }
  componentWillMount=()=>{
    const seq = sessionStorage.noticeadminSeq;  
    axios.get('http://localhost:9001/notices/'+seq)
        .then(res=>{
            this.setState(res.data)
           console.log(res.data)
        })
        .catch(e=>{           
           console.log(e.res)
        })
   
    axios.get('http://localhost:9001/applicants/'+seq)
    .then(res =>{
       this.setState({applicants: res.data})
    })
       .catch(e=>{ })   
    }
   
changeAppState=(seq)=>{   
      axios.put('http://localhost:9001/applicants/'+seq)
              .then(res=>{       
                window.location.reload();
              })
              .catch(e=>{                
              })
  } 

gomodify(seq){
  sessionStorage.noticeSeq = seq  ;
  window.location ="/noticemodify/"+ sessionStorage.noticeSeq 
}
    render(){     
       

    let style = {
        marginTop:"100px",  
    }      
    let margin={
      margin:"5%"
    } 
    let margin2={
      margin:"6%"
    } 
    let taggrid={
      fontWeight:'bold',
      letterSpacing: '2px',
      color:'#336699'
    }
    let btn_m={     
      marginBottom:'20px',
      marginLeft:'90%'
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
              <Grid item xs={12}> 모집개요  
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
          <Grid >
             <Button size="large" variant="contained" color="primary" style={btn_m}
                onClick={()=>this.gomodify(this.state.noticeSeq)}>
               수정
             </Button>
          </Grid>
          <Grid container spacing={10}><p style={margin2}></p></Grid>
          <Grid item xs={12}>         
          <MaterialTable title="지원자 관리" 
                columns={this.state.appcolumns} 
                data={this.state.applicants}  
                 onRowClick={(event, rowData)=> {
                    console.log('rowData', rowData.applicantSeq);
                    this.changeAppState(rowData.applicantSeq);                     
                  }}
                />  
          </Grid>
          <Grid container spacing={10}><p style={margin2}></p></Grid>  
          </Container>
         
          </React.Fragment>


      )
    }
}

