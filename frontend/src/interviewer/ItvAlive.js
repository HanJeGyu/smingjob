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

class ItvAlive extends React.Component {
    constructor(props){
        super(props)
        this.state={
            notices: [],
            columns: [
                { title: '공고명', field: 'title' },
                { title: '회사명', field: 'corName' },
                { title: '면접일', field: 'startDate', type: 'numeric' },
                { title: '면접시작시간', field: 'startTime', type: 'numeric' },
                { title: '면접결과', field: 'result', lookup: { 0: '미진행', 1: '매칭성공', 2: '확인중', 3: '실패'}},
            ],
            data: []
        }
    }

/*     componentDidMount(){
        const itvId = '1'
        axios.get(`http://localhost:9000/applicant/alivelist/${itvId}`)
        .then(res=>{
            this.setState({data: res.data});
        })
        .catch(e=>{
            alert('데이터를 불러오지 못했습니다.')
        })
    } */

    render(){
        const { classes } = this.props
        return (
            <div className={classes.table} >
                <MaterialTable
                title="면접목록"
                columns={this.state.columns}
                data={this.state.data}
                editable={{
                }}
            />
            </div>
        );
    }
}

export default withStyles(useStyles)(ItvAlive);