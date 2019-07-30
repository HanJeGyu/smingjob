import React from 'react';
import MaterialTable from 'material-table';

import axios from 'axios'


export default class ItvAlive extends React.Component {
    constructor(props){
        super(props)
        this.state={
            columns: [
                { title: '회사명', field: 'corName' },
                { title: '면접일', field: 'startDate', type: 'numeric' },
                { title: '면접시작시간', field: 'startTime', type: 'numeric' },
                { title: '면접결과', field: 'result'},
                //{ title: '면접결과', field: 'result', lookup: { 0: '미진행', 1: '면접예정', 2: '미열람', 3: '매칭성공', 3: '실패'}},
            ],
            data: []
        }
    }

    componentDidMount(){
        const itvSeq = sessionStorage.getItem('authSeq')
        axios.get(`http://localhost:9000/awaiters/aliveList/${itvSeq}`)
        .then(res=>{
            this.setState({data: res.data});
        })
        .catch(e=>{
            alert('데이터를 불러오지 못했습니다.')
        })
    }

    render(){
        let style = {
            margin:"100px 50px",
            marginBottom:"0"
        }
        return (
            
                <MaterialTable
                    style ={style}
                    title="면접목록"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                }}
            />
            
        );
    }
}


