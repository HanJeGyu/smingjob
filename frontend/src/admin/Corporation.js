import React, { Component } from "react";
import MaterialTable from "material-table";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from 'axios'

export default class corporations extends Component {
  state = {
    corporations: [],
    columns: [
      { title: "기업id", field: "corId" },
      { title: "기업명", field: "name" },
      { title: "산업/직군", field: "area" },
      { title: "인사담당자명", field: "pmName" },
      { title: "전화번호", field: "pmPhone" },
      { title: "회사위치", field: "city" },
      { title: "가입일", field: "dateJoin" }
    ]
  };

  componentDidMount() {
    axios.get(`http://localhost:9000/corporations`)
    .then(res => {
      const corporations = res.data;
      this.setState({ corporations });
  
    })
  }

  render() {
      let state = this.state;
      let style = {
          margin: "100px 50px"
      }
    return (
      <div>
        <MaterialTable
          title="기업회원 관리"
          columns={state.columns}
          data={state.corporations}
          style={style}
          editable={{
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data.splice(data.indexOf(oldData), 1);
                  this.setState({ ...state, data });
                }, 600);
              })
          }}
        />
      </div>
    );
  }
}

/* const useStyles = makeStyles(theme => ({
        table: {
            margin: "100px 50px"
        }

    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: '기업id', field: 'corId' },
            { title: '기업명', field: 'name' },
            { title: '산업/직군', field: 'area' },
            { title: '인사담당자명', field: 'pmName'},
            { title: '전화번호', field: 'pmPhone' },
            { title: '회사위치', field: 'city' },
            { title: '가입일', field: 'dateJoin' }
        ],
        data: [
            { corId: 'kakao', name: '카카오', area: '포털 및 기타 인터넷 정보매개 서비스업', pmName: '이신혜', pmPhone: '0233451039', city: '성남 분당구', dateJoin: '20170715' },
            { corId: 'woowahan', name: '우아한형제들', area: '모바일·APP', pmName: '주민호', pmPhone: '0263982231', city: '서울 송파구', dateJoin: '20171008' },
            { corId: 'nhn', name: 'NHN', area: '유선 온라인 게임 소프트웨어 개발 및 공급업', pmName: '임주아', pmPhone: '0258834655', city: '성남 분당구', dateJoin: '20180125' },
            { corId: 'hsep', name: '한성기업', area: '식품가공', pmName: '이신형', pmPhone: '0285597645', city: '서울 송파구', dateJoin: '20180310' },
            { corId: 'tway', name: '티웨이항공', area: '항공 여객 운송업', pmName: '김수미', pmPhone: '0216593347', city: '서울 강남구', dateJoin: '201803411' },
            { corId: 'gsretail', name: 'GS리테일', area: '백화점·유통·도소매', pmName: '서수호', pmPhone: '0289967411', city: '서울 강남구', dateJoin: '20180506' },

        ],
    }); */
