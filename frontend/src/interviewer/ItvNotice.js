import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'



export default  class ItvNotice extends React.Component {
    constructor(props){
        super(props)
        this.state={
            columns: [
                { title: '공고명', field: 'title' },
                { title: '회사명', field: 'corName' },
                { title: '접수시작일', field: 'startDate', type: 'numeric' },
                { title: '접수시작시간', field: 'startTime', type: 'numeric' },
                { title: '접수상태', field: 'state'},
                //{ title: '접수상태', field: 'state', lookup: { 0: '미지원', 1: '접수중', 2: '접수완료', 3: '지원실패', 99: '참여불가'}},
            ],
            data: [],
          
        }
    }

    componentDidMount(){
        const itvSeq = sessionStorage.getItem('authSeq')
        axios.get(`http://localhost:9000/applicants/noticeList/${itvSeq}`)
        .then(res=>{
            this.setState({data: res.data});
        })
        .catch(e=>{
            alert('데이터를 불러오지 못했습니다.\n관리자에게 문의해 주세요')
        })
    }

    goDetail = noticeSeq => {     
        sessionStorage.noticeSeq=noticeSeq;
        window.open("/NoticeDetail");
      };

  /*   handleClick=(e, rowData)=>{
       this.props.history.pushState(rowData.noticeSeq, '/notice') 
    } */

    render(){
        let style = {
            margin:"100px 50px",
            marginBottom:"0"
        }     

       
        return (
          
                <MaterialTable                   
                    title="지원목록"
                    style={style}
                    columns={this.state.columns}
                    data={this.state.data}
                    onRowClick={(event, rowData) => {                   
                    this.goDetail(rowData.noticeSeq);
                  }}
                    
                />
            
        );
    }
}

