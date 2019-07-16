import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import { minWidth } from '@material-ui/system';

export default function Pr() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px",

        },

    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'No', field: 'prNum' },
            { title: '구직자ID', field: 'id' },
            { title: '제목', field: 'title' },
            { title: '동영상', field: 'content' },
            { title: '업로드일', field: 'dateUpload' },
        ],
        data: [
            { prNum: '1', id: 'asdfg', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', content: 'eknew2031421809153715091521092134809', dateUpload: '20170715' },
            { prNum: '2', id: 'leowj', title: '꿈속 코딩을 경험해본적 있습니다.', content: 'eknew2031421809153715091521092134809', dateUpload: '20170728' },
            { prNum: '3', id: 'donowl', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', content: 'eknew2031421809153715091521092134809', dateUpload: '20180104' },
            { prNum: '4', id: 'xlzjow', title: '항상 진심으로 일에 임하는 사람입니다.', content: 'eknew2031421809153715091521092134809', dateUpload: '20180120' },
            { prNum: '5', id: 'enwi90', title: '뽑아주신다면 최선을 다하겠습니다!', content: 'eknew2031421809153715091521092134809', dateUpload: '20180203' },
        ],
    });

    return (
        <div className={classes.table} >
            <MaterialTable
                title="자기 PR 관리"
                columns={state.columns}
                onRowClick="moodal"
                data={state.data}
                editable={{
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