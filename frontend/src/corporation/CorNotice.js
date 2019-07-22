import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'


const useStyles = theme => ({
    table: {
        width: '100%',
        minWidth: 1500,
        margin: "100px 50px"
    },
    tableWrapper: {
        overflowX: 'auto',
    }
});

class CorNotice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            columns: [
                { title: '공고명', field: 'title' },
                { title: '접수일', field: 'noticeStartDate', type: 'numeric' },
                { title: '접수시작시각', field: 'noticeStartTime', type: 'numeric'},
                { title: '면접일', field: 'aliveStartDate', type: 'numeric' },
                { title: '면접시작시각', field: 'aliveStartTime', type: 'numeric' },
                { title: '진행상태', field: 'state', lookup: { 1: '접수중', 2: '면접예정', 3: '종료', 99: '중단'}},
                { title: '면접자목록', field: 'list'}
            ],
            data: []
        }
    }
    
    componentDidMount=()=>{
        const corSeq = localStorage.getItem('authSeq')
        axios.get(`http://localhost:9000/notices/noticeLiveList/${corSeq}`)
            .then(res=>{
                this.setState({data: res.data})
            })
            .catch(e=>{
                alert('데이터를 불러오지 못했습니다.\n관리자에게 문의해 주세요')
            })
    }

    render(){
        const { classes } = this.props
        return (
            <div className={classes.tableWrapper} >
            <MaterialTable
                className={classes.table}
                title="공고목록"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                }}
            />
            </div>
        );
    }
}

export default withStyles(useStyles)(CorNotice)