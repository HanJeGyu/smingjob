import React, { Component } from 'react';



class PrUpload extends Component {
    constructor(props) {
        super(props);

      }
    /*   checkUploadResult = (resultEvent) =>{
          if(resultEvent.event === 'success'){
              console.log(this.props.currentUser.id);
              this.props.postPhoto({user_id: this.props.currentUser.id,
              caption:'',
            url:resultEvent.info.secure_url})
            .then(this.props.history.push('/profile'))
          }
      }
    showWidget = (widget) =>{
        widget.open()
    } */
    uploadWidget() {
        window.cloudinary.openUploadWidget({ cloud_name: 'du6wt3fmd', upload_preset: 'nikmc5s7', tags:['test']},
            function(error, result) {
                console.log(result);
            });
    }
    render() {
      /*   let widget = window.cloudinary.createUploadWidget({
            cloudName: "du6wt3fmd",
            uploadPreset: "nikmc5s7"},
            (error,result) => {this.checkUploadResult(result)})
 */
        
        return (
          
            <div id='photo-form-container'>
              {/*   <button onClick={this.showWidget}>Upload Photo </button> */}
              <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                   
                </div>
            </div>
            
        );
    }
}

export default PrUpload;