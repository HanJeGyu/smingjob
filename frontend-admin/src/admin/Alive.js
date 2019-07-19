import React, { Component } from "react";
import MaterialTable from "material-table";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
          style= {style}
          onRowClick
          editable={{
            onRowAdd: newData =>
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
              }),
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
