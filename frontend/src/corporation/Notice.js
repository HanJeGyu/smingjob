import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    table: {
        width: '100%',
        minWidth: 1500,
        margin: "100px 50px"
    },
    tableWrapper: {
        overflowX: 'auto',
    }
  }));

export default function Notice() {

     const classes = useStyles();
     const [state, setState] = React.useState({
        columns: [
            { title: '공고명', field: 'title' },
            { title: '접수일', field: 'noticeStartDate', type: 'numeric' },
            { title: '접수시작시각', field: 'noticeStartTime', type: 'numeric'},
            { title: '면접일', field: 'aliveStartDate', type: 'numeric' },
            { title: '면접시작시각', field: 'aliveStartTme', type: 'numeric' },
            { title: '진행상태', field: 'state', lookup: { 1: '접수중', 2: '면접예정', 3: '종료', 99: '중단'}},
            { title: '면접자목록', field: 'list'}
        ],
        data: [
            { title: '[정보보안] 보안 개발 담당자 ', noticeStartDate: '190715', noticeStartTime: '1800', aliveStartDate: '190720', aliveStartTme: '1300', state: 3, list: '목록보기' },
            { title: '[정보보안] 시스템 보안 담당자 ', noticeStartDate: '190715', noticeStartTime: '1800', aliveStartDate: '190721', aliveStartTme: '1400', state: 3, list: '목록보기'},
            { title: '[정보보안] 보안성 심의 및 보안 기획 담당자 ', noticeStartDate: '190715', noticeStartTime: '1800', aliveStartDate: '190722', aliveStartTme: '1400', state: 3, list: '목록보기' },
        ],
    });

    return (
        <div className={classes.tableWrapper} >
        <MaterialTable
            className={classes.table}
            title="공고목록"
            columns={state.columns}
            data={state.data}
            editable={{
            }}
        />
        </div>
    );
    }