import React, {Component} from 'react';
import './PRtest2.css'
import axios from 'axios'

class PRtest2 extends Component {
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

    onChangeHandler=event=>{
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          });
    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)      
        console.log(this.state.selectedFile.type);     

        axios.post("http://localhost:8000/upload",data,{})
        .then(res => {
            console.log(res.statusText)
            
        })
}
    render(){
    return (        
        <div class="container">
            <div class="row">
                <div class="offset-md-3 col-md-6">               
                    <div class="form-group files">
                        <label>자기pr동영상 올리기 </label>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                     </div>
                     <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                </div>
            </div>
        </div>
   
    );
};
}

export default PRtest2;