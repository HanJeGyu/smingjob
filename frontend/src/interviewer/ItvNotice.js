import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'

const useStyles = theme => ({
    table: {
        margin:"100px",
        marginBottom:"0"
    }
}); 

class ItvNotice extends React.Component {
    constructor(props){
        super(props)
        this.state={
            notices: [],
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
    componentWillMount(){
        
        axios.get('http://localhost:9000/applicant/noticeList')
        .then(res=>{
            this.setState(res.data);
        })
    }

    render(){
        const { classes } = this.props
        return (
            <div className={classes.table} >
                <MaterialTable
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