import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Alive() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: '면접번호', field: 'liveSeq' },
            { title: '기업이름', field: 'corName' },
            { title: '진행상태', field: 'state' },
            { title: '시작일시', field: 'startDate' },
            { title: '모집 직군', field: 'area' },
            { title: '경력사항', field: 'career' },
            { title: '면접자 이름', field: 'itvName' },
            { title: '면접자 연락처', field: 'itvPhone' },
        ],
        data: [
            { liveSeq: '1', corName: 'kakao', state: '19950712', startDate: '마감', area: '웹 프로그래머', career: '신입', itvName: '김희나', itvPhone:'01052481388' },
            { liveSeq: '2', corName: 'nexon', state: '19920318', startDate: '마감', area: '모바일 UI', career: '경력', itvName: '여우리', itvPhone:'01022118446' },
            { liveSeq: '3', corName: 'naver', state: '19920318', startDate: '마감', area: '웹 디자이너', career: '경력', itvName: '강성훈', itvPhone:'01087752788' },
            { liveSeq: '4', corName: 'next', state: '19920318', startDate: '진행중', area: '서버 개발자', career: '신입', itvName: '이서진', itvPhone:'01023458865' },
            { liveSeq: '5', corName: 'oasis', state: '19920318', startDate: '진행예정', area: '웹 프로그래머', career: '경력', itvName: '이유라', itvPhone:'01014584878' }

        ],
    });

    return (
        <div className={classes.table} >
            <MaterialTable
                title="면접 관리"
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
}