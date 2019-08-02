import React, { Component } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default class Alive extends Component {
  state = {
    alives: [],
    columns: [
      // { title: "No", field: "liveSeq" },
      { title: "기업이름", field: "corName" },
      { title: "진행상태", field: "state" },
      { title: "시작일시", field: "startDate" },
      { title: "모집 직군", field: "area" },
      { title: "경력사항", field: "career" },
      { title: "면접자 이름", field: "itvName" },
      { title: "면접자 연락처", field: "itvPhone" }
    ],
  };

  componentDidMount() {
    axios.get("http://localhost:9001/alives")
    .then(res=>{
      const alives = res.data;
      this.setState({alives})
    })
  }

  delete(id) {
    axios.delete("http://localhost:9001/alives/" + id)
    .then(res => {
      window.location.reload();
    })
  }
/*   goDetail=(seq)=>{
    console.log("seq:"+seq);
    sessionStorage.aliveadminSeq=seq;
    window.location = '/aliveDetail/'+sessionStorage.aliveadminSeq; 
    } */
  
    createAlive=()=>{
      alert('면접방 생성');
      // window.open ('http://localhost:8080/', '_blank');
  /*     let name = "ysh";
      let content = "dd";
      window.location = 'http://localhost:8080?'+name+":"+content */
      window.location = '/AliveCreate';
    }

  render() {
      let state = this.state;
      let style = {
          margin: "100px 50px"
      };
      
    return (
      <div>
        <MaterialTable
          title="면접 관리"
          columns={state.columns}
          data={state.alives}
          actions={[
            {
              icon: 'add',
              tooltip: '면접방 생성',
              isFreeAction: true,
              onClick: (event) => this.createAlive()
            }
          ]}
          style= {style}
/*           onRowClick={(event, rowData)=> {             
            this.goDetail(rowData.liveSeq);                  
          }} */
          editable={{
/*             onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                //   const data = [...state.data];
                //   data.push(newData);
                //   setState({ ...state, data });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                //   const data = [...state.data];
                //   data[data.indexOf(oldData)] = newData;
                //   setState({ ...state, data });
                }, 600);
              }), */
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.delete(oldData.liveSeq);
                }, 600);
              })
          }}
        />
      </div>
    );
  }
}
