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
            prs: [],
            columns: [
                { title: '구직자 명', field: 'name' },
                { title: '제목', field: 'title'},
                { title: '스크랩일', field: 'dateScrap'},
            ]
        }
    }

    componentDidMount(){
        const corId = localStorage.getItem("authSeq");
        axios.get(`http://localhost:9000/prs/cor/${corId}`)
        .then(res=>{
            const prs = res.data;
            this.setState({prs});
        })
        .catch(e=>{
            alert('데이터를 불러오지 못했습니다.')
        })
    }

    render(){
        let state = this.state;
        const { classes } = this.props
        return (
            <div className={classes.table} >
                <MaterialTable
                    title="PR 스크랩"
                    columns={state.columns}
                    data={state.prs}
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