import React, { Component } from "react";
import MaterialTable from "material-table";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";

export default class Pr extends Component {
  state = {
    pr: [],
    columns: [
      //   { title: "No", field: "prSeq" },
      { title: "구직자ID", field: "itvId" },
      { title: "연락처", field: "phone" },
      { title: "제목", field: "title" },
      { title: "동영상", field: "content" },
      { title: "업로드일", field: "dateUpload" }
    ]
  };

  componentDidMount() {
    axios.get("http://localhost:9001/prs").then(res => {
      const pr = res.data;
      this.setState({ pr });
    });
  }

  delete(id) {
    axios.delete("http://localhost:9001/prs/" + id).then(res => {
      window.location.reload();
    });
  }
  goDetail = seq => {
    alert("seq:" + seq);
    // localStorage.pradminSeq=seq;
    window.location = "http://localhost:9000/prDetail/" + seq;
  };

  render() {
    let state = this.state;
    let style = {
      margin: "100px 50px"
    };

    return (
      <div>
        <MaterialTable
          title="자기 PR 관리"
          columns={state.columns}
          // onRowClick="moodal"
          data={state.pr}
          style={style}

          onRowClick={(event, rowData) => {
            alert('rowData'+ rowData.prSeq);
            // this.goDetail(rowData.prSeq);
          }}

          editable={{
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.delete(oldData.prSeq);
                }, 600);
              })
          }}
        />
      </div>
    );
  }
}
