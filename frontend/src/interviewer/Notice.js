import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles} from "@material-ui/core/styles";


export default function NoticeList() {

    const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

     })); 

     const classes = useStyles();
     const [state, setState] = React.useState({
        columns: [
        { title: '공고명', field: 'title' },
        { title: '접수일', field: 'startDate', type: 'numeric' },      
        { title: '접수시각', field: 'startTime', type: 'numeric'},
        { title: '접수상태', field: 'state', lookup: { 12: '진행중', 15: '진행예정', 17: '마감'},
        },
        ],
        data: [
        { title: '11', startDate: '190715', startTime: '1800',state: 12 },
        { title: '22', startDate: '190715', startTime: '1900',state: 15 },
        { title: '3', startDate: '190716', startTime: '1800',state: 12 },
        { title: '4', startDate: '190715', startTime: '1800',state: 17 },
        { title: '5', startDate: '190718', startTime: '1800',state: 12 },
        { title: '6', startDate: '190719', startTime: '1800',state: 12 },
        { title: '7', startDate: '190719', startTime: '1800',state: 12 },
        { title: '88', startDate: '190719', startTime: '1800',state: 12 },
        { title: '9', startDate: '190719', startTime: '1800',state: 12 },
        { title: '10000', startDate: '190719', startTime: '1800',state: 12 },
        

        ],
    });

    return (
        <div className={classes.table} >
        <MaterialTable
        title="공고 관리"
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