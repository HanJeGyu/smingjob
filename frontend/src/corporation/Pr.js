import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from "@material-ui/core/styles";


export default function Pr() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: '구직자 명', field: 'itvName' },
            { title: '제목', field: 'heart', type: 'title' },
            { title: '스크랩일', field: 'upload', type: 'dateScrap' },
        ],
        data: [
            { itvName: '이유나', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20190615' },
            { itvName: '김석준', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20180910' },
            { itvName: '황예은', title: '항상 진심으로 일에 임하는 사람입니다.', dateScrap: '20180202' },
            { itvName: '이미연', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20180110' },
            { itvName: '구준표', title: '뽑아주신다면 최선을 다하겠습니다!', dateScrap: '20170315' },


        ],
    });

    return (
        <div className={classes.table} >
            <MaterialTable
                title="스크랩한 Pr 목록"
                columns={state.columns}
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
                onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
            />
        </div>
    );
}