import React, { Component } from 'react';
import axios from 'axios'
import MaterialTable from 'material-table';

class test extends Component {
    constructor(props){
        super(props);
        this.state={ 
          
          applicants:[],
          columns: [
            { title: '이름', field: 'itvName'}, 
            { title: '이메일', field: 'email'}, 
            { title: '연락처', field: 'phone' },            
            { title: '생년월일', field: 'birth' },      
            { title: '희망지역', field: 'location'},
            { title: '희망직무', field: 'area'},
            { title: '접수상태', field: 'appState', type: 'numeric' }, 
            ],
        };
       
      }
    componentWillMount=()=>{
        localStorage.noticeadminseq ='1';
        const seq= localStorage.noticeadminseq;
    axios.get(`http://localhost:9001/applicants/${seq}`)
    .then(res =>{
       this.setState(res.data)
       console.log("appli:"+res.data)
       .catch(e=>{           
        console.log(e.res)
     })
    })
    }
    render() {
        const state = this.state;
        return (
            <div>
                <MaterialTable title="지원자 관리" 
                columns={state.columns} 
                data={state.applicants}  
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
            </div>
        );
    }
}

export default test;