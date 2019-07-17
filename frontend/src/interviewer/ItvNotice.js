import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";


export default function ItvNotice() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

     })); 

     const classes = useStyles();
     const [state, setState] = React.useState({
        columns: [
            { title: '공고명', field: 'title' },
            { title: '회사명', field: 'corName' },
            { title: '면접예정일', field: 'startDate', type: 'numeric' },
            { title: '면접시작시간', field: 'startTime', type: 'numeric' },
            { title: '접수상태', field: 'state', lookup: { 1: '참여중', 2: '접수중', 3: '종료', 99: '참여불가'}},
            { title: '면접결과', field: 'result', lookup: { 1: '매칭성공', 2: '확인중', 3: '실패'}},
        ],
        data: [
            { title: '[정보보안] 보안 개발 담당자 ', corName: '카카오뱅크', startDate: '190715', startTime: '1800',state: 3, result: 1 },
            { title: '[정보보안] 시스템 보안 담당자 ', corName: '카카오뱅크', startDate: '190715', startTime: '1900',state: 2, result: 2 },
            { title: '[정보보안] 보안성 심의 및 보안 기획 담당자 ', corName: '카카오뱅크', startDate: '190716', startTime: '1800',state: 99, result: 2 },
            { title: '2019년 부문별 인재 채용', corName: '티몬', startDate: '190715', startTime: '1800',state: 1, result: 1 },
            { title: 'JAVA 웹 개발 부문 대규모 채용 전형', corName: '(주)인라이플', startDate: '190718', startTime: '1800',state: 2, result: 2 }
        ],
    });

    return (
        <div className={classes.table} >
        <MaterialTable
        title="지원목록"
        columns={state.columns}
        data={state.data}
        editable={{
        }}
        />
        </div>
    );
    }