import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { ExpansionPanelDetails } from '@material-ui/core';
import { tsConstructSignatureDeclaration } from '@babel/types';



export default class NoticeList extends React.Component{
    

    constructor(props){
        super(props)
        

    this.state={
        notices: [],
        columns: [
            { title: '접수상태', field: 'state'}, 
            { title: 'noticeseq', field: 'noticeSeq'}, 
            { title: '공고명', field: 'title' },            
            { title: '기업명', field: 'corName' },      
            { title: '모집부문', field: 'area'},
            { title: '요구경력', field: 'career'},
            { title: '접수일', field: 'startDate', type: 'numeric' },      
            { title: '접수시각', field: 'startTime', type: 'numeric'},                     
            ],
            
    }
}

    componentDidMount(){
        axios.get('http://localhost:9001/notices')
        .then(res=>{
            const notices = res.data;
            this.setState({notices});
        })
    }
    upload(e){
        e.preventDefault();
        window.location = '/NoticeUpload';

    }
    delete(id){
        alert(id);
        axios.delete('http://localhost:9001/notices/' + id)
        .then(res => {
            
        })
    }
    goDetail=(seq)=>{
    console.log("seq:"+seq);
    localStorage.noticeadminSeq=seq;
    window.location = '/noticeDetail/'+localStorage.noticeadminSeq; 
    } 
     
       
    render(){
        /* let seq= state.notices.noticeSeq */
        let state = this.state;
        let style = {
            margin:"100px 50px",
            marginBottom:"0"
        }
        let btn = {
            marginLeft:"50px",
            padding:"0",
            paddingTop:"5px"
        
        }
        let upload = this.upload

        return(
            <div>
                <MaterialTable title="공고 관리" 
                columns={state.columns} 
                data={state.notices}                 
               
               /* onRowClick={(e) => {
                  seq= e.dataItem.noticeSeq
                   this.detail(this.state.notices.noticeSeq)}} */
                style={style}
                onRowClick={(event, rowData)=> {
                    console.log('rowData', rowData.noticeSeq);  
                    this.goDetail(rowData.noticeSeq);                  
                  }}
                editable={{
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.delete(oldData.noticeSeq);
                                console.log("seq"+oldData.noticeSeq)
                            }, 600);
                        }),
                 
                }}
                
                />
                <Button size="large" color="primary" style={btn} onClick={upload}>Upload</Button>  
            </div>
        )
    }
}
