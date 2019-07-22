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

class ItvNotice extends React.Component {
    constructor(props){
        super(props)
        this.state={
            columns: [
                { title: '공고명', field: 'title' },
                { title: '회사명', field: 'corName' },
                { title: '접수시작일', field: 'startDate', type: 'numeric' },
                { title: '접수시작시간', field: 'startTime', type: 'numeric' },
                { title: '접수상태', field: 'state', lookup: { 0: '미지원', 1: '접수중', 2: '접수완료', 3: '지원실패', 99: '참여불가'}},
            ],
            data: []
        }
    }

    componentDidMount(){
        const itvSeq = localStorage.getItem('authSeq')
        axios.get(`http://localhost:9000/applicant/noticeList/${itvSeq}`)
        .then(res=>{
            this.setState({data: res.data});
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
                    title="지원목록"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                    }}
                />
            </div>
        );
    }
}

export default withStyles(useStyles)(ItvNotice);