import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'

const useStyles = theme => ({
    table: {
        margin:"100px",
        marginBottom:"0"
    }
}); 

class Pr extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            columns: [
                { title: '제목', field: 'title' },
                { title: '스크랩 수', field: 'heart', type: 'numeric' },      
                { title: '업로드일자', field: 'upload', type: 'numeric'},
            ],
            data: []
/*             data: [
                { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '1', upload: '20190615'},
                { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '3', upload: '20180910'},
                { title: '항상 진심으로 일에 임하는 사람입니다.', heart: '5', upload: '20180202'},
                { title: '안녕하십니까 꼼꼼하고 성실한 인재입니다.', heart: '10', upload: '20180110'},
                { title: '뽑아주신다면 최선을 다하겠습니다!', heart: '0', upload: '20170315'},
            ], */
        }
    }

/*     componentDidMount(){
        const itvId = '1'
        axios.get(`http://localhost:9000/pr/${itvId}`)
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
            title="자기 PR 목록"
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

Pr.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(Pr)