import React, { Component } from 'react';
import axios from 'axios'
import MaterialTable from 'material-table';



export default class ApplicantList extends Component {
    constructor(props){
        super(props);
        this.state={ 
          
          applicants:[],
          columns: [
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
        localStorage.noticeadminseq ='1';
        const seq= localStorage.noticeadminseq;
    axios.get('http://localhost:9001/applicants/1')
    .then(res =>{
       this.setState({applicants: res.data})
    })
       .catch(e=>{           
       
     })
   
    }
    render() {
        const state = this.state;
        return (
            <div>
               <MaterialTable title="지원자 관리" 
                columns={state.columns} 
                data={state.applicants}  
                onRowClick={(event, rowData)=> {
                    console.log('rowData', rowData.itvSeq);                    
                  }}
                />  
              
            </div>
        );
    }
}

