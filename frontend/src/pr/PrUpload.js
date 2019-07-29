import React, {Component} from 'react';
import './PRUpload.css'
import axios from 'axios'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';

export default class PRtest2 extends Component {
    constructor(props) {
        super(props);
          this.state = {
            phone:'',
            title:'',
            content:'',
            area:'',
            tagLocation:'',
            tagAttribute:'',
            tagCareer:'',
            name:'',
            prLocation:'',
            itvSeq:'',
            url: '',
            email: ''
          }
       
      }
      handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
       /*  console.log(e) */
      }
  
      changeTextData = (text) => {
        this.setState({content: text})
        /* console.log(text);    */  
      }
  
      handleSubmit = (event) =>{
         event.preventDefault();    
  
        const prs = {
            phone:this.state.phone,
            title:event.target.title.value,
            content:this.state.content,
            area:event.target.area.value,
            tagLocation:event.target.tagLocation.value,
            tagAttribute:event.target.tagAttribute.value,
            tagCareer:event.target.tagCareer.value,
            name:this.state.name,
            prLocation:event.target.prLocation.value,
            itvSeq:localStorage.authSeq,
            url: this.state.url  ,
            email: event.target.email.value      
       };
          axios({
               method: 'post',
               url: 'http://localhost:9000/prs/upload',
               data: prs,
               headers: {           
              'Content-Type': 'application/json'
               }, 
              
             });
      }   
    onChangeHandler=event=>{     
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          });
   
}

    onClickHandler = () => {
        console.log("upload")
        const data = new FormData() 
        data.append('file', this.state.selectedFile)      
        console.log(this.state.selectedFile.type);     

        axios.post("http://localhost:8000/upload",data,{})
        .then(res => {
            console.log(res.statusText);           
            /* console.log(res.data.filename); */
            this.setState({url:res.data.filename})
            console.log("url:"+this.state.url)
        })
}

componentWillMount=()=>{
    const seq = localStorage.authSeq;
    console.log("itvID:"+localStorage.authSeq);
    axios.get(`http://localhost:9000/interviewers/pr/${seq}`)
        .then(res=>{
           this.setState(res.data)
          
        })
        .catch(e=>{           
        
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
    return (        
        <React.Fragment>
         <form onSubmit={this.handleSubmit}>
         <Container  style={style} maxWidth="md" >
         <Typography variant="h6" gutterBottom>
             PR동영상 업로드
            </Typography>
          
           <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField            
                  id="title"
                  name="title"
                  label="제목"
                  fullWidth
                  autoComplete="title"
                  onChange={this.handleChange}
                />
                </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="name"
                  name="name"
                  label="이름(변경불가)"
                  fullWidth
                  autoComplete="name"
                  value={this.state.name}                  
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="phone"
                  name="phone"
                  label="핸드폰(변경불가)"
                  fullWidth
                  autoComplete="phone"
                  value={this.state.phone}                 
                />
              </Grid> 
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="email"
                  name="email"
                  label="이메일"
                  fullWidth
                  autoComplete="email"
                  value={this.state.email}  
                  onChange={this.handleChange}               
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="area"
                  name="area"
                  label="희망직무"
                  fullWidth
                  autoComplete="area"
                  onChange={this.handleChange}
                />
              </Grid> 
              <Grid item xs={12} sm={6}>
                <TextField            
                  id="prLocation"
                  name="pr_location"
                  label="희망지역"
                  fullWidth
                  autoComplete="prLocation"
                  onChange={this.handleChange}
                />
              </Grid>  
              <Grid item xs={12}>
              <CKEditor
                    id="content"                    
                    editor={ ClassicEditor }
                    data="<p>자기소개<p>"
                    onInit={ editor => {                        
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                      /*   console.log( { event, editor, data } ); */
                        this.changeTextData(data)
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
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagAttribute"
                  name="tag_attribute"
                  label="#특성 태그"
                  fullWidth
                  autoComplete="tag_attribute"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField            
                  id="tagCareer"
                  name="tag_career"
                  label="#요구경력 태그"
                  fullWidth
                  autoComplete="tag_career"
                  onChange={this.handleChange}
                />
              </Grid>    
              <Grid container spacing={10}><p style={margin}></p></Grid>
           
                <Grid class="offset-md-3 col-md-6">               
                    <div class="form-group files">
                        <label>자기pr동영상 올리기 </label>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                     </div>
                     <Button type="button"  onClick={this.onClickHandler}>동영상 업로드(*필수)</Button>
                </Grid>
           
            <Grid container spacing={10}><p style={margin}></p></Grid>
          <Grid container spacing={3}>
            <Button size="large" style={btn} color="primary"  type="submit">게시물 업로드</Button>   </Grid>
             </Grid>
        </Container>
        </form>
  </React.Fragment>
    );
};
}
