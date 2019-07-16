import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";


export default function Pr() {
    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

     })); 

     const classes = useStyles();
     const [state, setState] = React.useState({
        columns: [
        { title: '제목', field: 'title' },
        { title: '받은 하트', field: 'heart', type: 'numeric' },      
        { title: '업로드일자', field: 'upload', type: 'numeric'},
        ],
        data: [
        { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '1', upload: '20190615'},
        { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '3', upload: '20180910'},
        { title: '항상 진심으로 일에 임하는 사람입니다.', heart: '5', upload: '20180202'},
        { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '10', upload: '20180110'},
        { title: '뽑아주신다면 최선을 다하겠습니다!', heart: '0', upload: '20170315'},
        

        ],
    });

    return (
        <div className={classes.table} >
        <MaterialTable
        title="자기 PR 목록"
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