import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";
import axios from 'axios'




export default class NoticeList extends React.Component{
    
    state={
        notices: [],
        columns: [
            { title: '접수상태', field: 'state', lookup: { ing: '진행중', wait: '진행예정', fin: '마감'}},   
            { title: '공고명', field: 'title' },            
            { title: '접수일', field: 'startDate', type: 'numeric' },      
            { title: '접수시각', field: 'startTime', type: 'numeric'},
                     
            ],
    }

    componentDidMount(){
        axios.get('http://localhost:9000/notices')
        .then(res=>{
            const notices = res.data;
            this.setState({notices});
        })
    }
    render(){
        let state = this.state;
        let style = {
            margin:"100px 100px"
        }
        return(
            <div>
                <MaterialTable title="공고 관리" columns={state.columns} data={state.notices} style={style} />
              {/*  {this.state.notices.map(notice => <tr><td>{notice.title}</td><td>{notice.tagLocation}</td></tr>)}  */}
          
            </div>
        )
    }
}



 /*    return (
        <div className={classes.table} >
        <MaterialTable
        title="공고 관리"
        columns={state.columns}
        data={state.data}
        editable={{
            onRowAdd: newData =>
            new Promise(resolve => {
                setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
                }, 600);
            }),
            onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
                setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
                }, 600);
            }),
            onRowDelete: oldData =>
            new Promise(resolve => {
                setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
                }, 600);
            }),
        }}
        />
        </div>
    );
    }  */