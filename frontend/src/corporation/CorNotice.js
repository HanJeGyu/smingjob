import React from 'react';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'
import { blue } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';

import ApplicantModal from './ApplicantModal'

const top = 50 + Math.round(Math.random() * 20) - 10;
const left = 50 + Math.round(Math.random() * 20) - 10;

const useStyles = theme => ({
    table: {
        width: '100%',
        minWidth: 1500,
        margin: "100px 50px"
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    modal: {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
});

class CorNotice extends React.Component {
    constructor(){
        super()
        this.state = {
            columns: [
                { title: '공고명', field: 'title' },
                { title: '접수일', field: 'noticeStartDate', type: 'numeric' },
                { title: '접수시작시각', field: 'noticeStartTime', type: 'numeric' },
                { title: '면접일', field: 'aliveStartDate', type: 'numeric' },
                { title: '면접시작시각', field: 'aliveStartTime', type: 'numeric' },
                { title: '진행상태', field: 'state', lookup: { 1: '접수중', 2: '면접예정', 3: '종료', 99: '중단'}},
                { field: 'list2', emptyValue: '면접자목록' },
                { title: '면접자목록SEQ', field: 'liveSeq', hidden: true }
            ],
            data: [],
            open: false,
            liveSeq: ''
        }
    }
    
    componentDidMount=()=>{
        const corSeq = sessionStorage.getItem('authSeq')
        axios.get(`http://localhost:9000/notices/noticeLiveList/${corSeq}`)
            .then(res=>{
                this.setState({data: res.data})
            })
            .catch(e=>{
                alert('데이터를 불러오지 못했습니다.\n관리자에게 문의해 주세요')
            })
    }

    handleClick=(e, rowData)=>{
        if(e.target.innerHTML==='면접자목록'){
            this.setState({liveSeq: rowData.liveSeq})
            this.setState({open: true})
        }
    }

    handleClose = () => {
        this.setState({open:false})
    };

    goDetail = noticeSeq => {
        alert("seq:" + noticeSeq);
        // sessionStorage.pradminSeq=seq;
        window.open("/NoticeDetail/" + noticeSeq, '_blank');
      };

    render(){
        const { classes } = this.props
        
        return (
            <div className={classes.tableWrapper} >
            <MaterialTable
                className={classes.table}
                title="공고목록"
                columns={this.state.columns}
                data={this.state.data}
                onRowClick={(event, rowData) => {
                    alert('rowData'+ rowData.noticeSeq);
                    this.goDetail(rowData.noticeSeq);
                  }}

                editable={{
                }}
            />
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            >
                <div className={classes.modal}>
                    <ApplicantModal liveSeq={this.state.liveSeq} />
                </div>
            </Modal>
            </div>
        );
    }
}

export default withStyles(useStyles)(CorNotice)