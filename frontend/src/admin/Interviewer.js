import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Interviewer() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: '구직자ID', field: 'id' },
            { title: '구직자명', field: 'name' },
            { title: '생년월일', field: 'birth' },
            { title: '전화번호', field: 'phone'},
            { title: '이메일', field: 'email' },
            { title: '희망산업/직군', field: 'area' },
            { title: '희망근무지역', field: 'location' },
            { title: '가입일', field: 'dateJoin' }
        ],
        data: [
            { id: 'asdfg', name: '김선호', birth: '19950712', phone: '01025546894', email: 'asdfg@gmail.com', area: '웹 프로그래머', location:'성남 분당구', dateJoin: '20170715' },
            { id: 'tilei', name: '이서연', birth: '19920318', phone: '01078835656', email: 'tilei@naver.com', area: '모바일 UI', location:'서울 영등포구', dateJoin: '20170718' },
            { id: 'dlenl', name: '이나연', birth: '19920318', phone: '01078835656', email: 'dlenl@naver.com', area: '웹 디자이너', location:'부천 원미구', dateJoin: '20170802' },
            { id: 'xlien', name: '김사나', birth: '19920318', phone: '01078835656', email: 'xlien@naver.com', area: '서버 개발자', location:'성남 분당구', dateJoin: '20170910' },
            { id: 'enkuwi09', name: '서희수', birth: '19920318', phone: '01078835656', email: 'enkuwi09@gmail.com', area: '웹 프로그래머', location:'서울 강남구', dateJoin: '20171206' }

        ],
    });

    return (
        <div className={classes.table} >
            <MaterialTable
                title="개인회원 관리"
                columns={state.columns}
                data={state.data}
                editable={{
/*                     onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }), */
/*                     onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }), */
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