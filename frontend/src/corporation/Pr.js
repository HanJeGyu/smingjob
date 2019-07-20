import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'

const useStyles = theme => ({
    table: {
        margin: "100px 50px"
    }
});

class Pr extends React.Component {
    constructor(){
        super()
        this.state = {
            columns: [
                { title: '구직자 명', field: 'itvName' },
                { title: '제목', field: 'title', type: 'title' },
                { title: '스크랩일', field: 'dateScrap', type: 'dateScrap' },
            ],
            data: []
/*             data: [
                { itvName: '이유나', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20190615' },
                { itvName: '김석준', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20180910' },
                { itvName: '황예은', title: '항상 진심으로 일에 임하는 사람입니다.', dateScrap: '20180202' },
                { itvName: '이미연', title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', dateScrap: '20180110' },
                { itvName: '구준표', title: '뽑아주신다면 최선을 다하겠습니다!', dateScrap: '20170315' },
            ], */
        }
    }

/*     componentDidMount(){
        const corId = '1'
        axios.get(`http://localhost:9000/aliveinterviewer//${corId}`)
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
                    title="PR 스크랩"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    const data = [...this.state.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    this.setState({ ...this.state, data });
                                }, 600);
                            }),
                    }}
                    onRowClick
                />
            </div>
        );
    }
}

export default withStyles(useStyles)(Pr)