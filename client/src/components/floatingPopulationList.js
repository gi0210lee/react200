import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class floatingPopulationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      responseFPList: "",
      append_FPList: "",
    };
  }

  componentDidMount() {
    this.callFloatPopulListApi();
  }

  callFloatPopulListApi = async () => {
    this.setState({ loading: true });
    axios
      .get(
        "http://openapi.seoul.go.kr:8088/" +
          process.env.REACT_APP_SEOUL_API_KEY +
          "/json/SPOP_LOCAL_RESD_DONG/1/5/",
        {}
      )
      .then((response) => {
        try {
          this.setState({ responseFPList: response });
          this.setState({
            append_FPList: this.floatPopulationAppend(),
          });
          this.setState({ loading: false });
        } catch (error) {
          alert(error);
        }
      })
      .catch((error) => {
        alert(error);

        return false;
      });
  };

  floatPopulationAppend = () => {
    let result = [];
    let FPList = this.state.responseFPList.data;
    let array = FPList.SPOP_LOCAL_RESD_DONG.row;
    array.forEach((data, index) => {
      result.push(
        <tr key={index}>
          <td>{data.STDR_DE_ID}</td>
          <td>{data.TMZON_PD_SE}</td>
          <td>{data.ADSTRD_CODE_SE}</td>
          <td>{data.TOT_LVPOP_CO}</td>
          <td>{data.MALE_F0T9_LVPOP_CO}</td>
          <td>{data.MALE_F10T14_LVPOP_CO}</td>
          <td>{data.MALE_F15T19_LVPOP_CO}</td>
          <td>{data.MALE_F20T24_LVPOP_CO}</td>
          <td>{data.MALE_F25T29_LVPOP_CO}</td>
          <td>{data.MALE_F30T34_LVPOP_CO}</td>
          <td>{data.MALE_F35T39_LVPOP_CO}</td>
          <td>{data.MALE_F40T44_LVPOP_CO}</td>
          <td>{data.MALE_F45T49_LVPOP_CO}</td>
          <td>{data.MALE_F50T54_LVPOP_CO}</td>
          <td>{data.MALE_F55T59_LVPOP_CO}</td>
          <td>{data.MALE_F60T64_LVPOP_CO}</td>
          <td>{data.MALE_F65T69_LVPOP_CO}</td>
          <td>{data.MALE_F70T74_LVPOP_CO}</td>
          <td>{data.FEMALE_F0T9_LVPOP_CO}</td>
          <td>{data.FEMALE_F10T14_LVPOP_CO}</td>
          <td>{data.FEMALE_F15T19_LVPOP_CO}</td>
          <td>{data.FEMALE_F20T24_LVPOP_CO}</td>
          <td>{data.FEMALE_F25T29_LVPOP_CO}</td>
          <td>{data.FEMALE_F30T34_LVPOP_CO}</td>
          <td>{data.FEMALE_F35T39_LVPOP_CO}</td>
          <td>{data.FEMALE_F40T44_LVPOP_CO}</td>
          <td>{data.FEMALE_F45T49_LVPOP_CO}</td>
          <td>{data.FEMALE_F50T54_LVPOP_CO}</td>
          <td>{data.FEMALE_F55T59_LVPOP_CO}</td>
          <td>{data.FEMALE_F60T64_LVPOP_CO}</td>
          <td>{data.FEMALE_F65T69_LVPOP_CO}</td>
          <td>{data.FEMALE_F70T74_LVPOP_CO}</td>
        </tr>
      );
    });
    return result;
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          "로딩 중..."
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>기준일ID</th>
                <th>시간대구분</th>
                <th>행정동코드</th>
                <th>총생활인구수</th>
                <th>남자0세부터9세생활인구수</th>
                <th>남자10세부터14세생활인구수</th>
                <th>남자15세부터19세생활인구수</th>
                <th>남자20세부터24세생활인구수</th>
                <th>남자25세부터29세생활인구수</th>
                <th>남자30세부터34세생활인구수</th>
                <th>남자35세부터39세생활인구수</th>
                <th>남자40세부터44세생활인구수</th>
                <th>남자45세부터49세생활인구수</th>
                <th>남자50세부터54세생활인구수</th>
                <th>남자55세부터59세생활인구수</th>
                <th>남자60세부터64세생활인구수</th>
                <th>남자65세부터69세생활인구수</th>
                <th>남자70세이상생활인구수</th>
                <th>여자0세부터9세생활인구수</th>
                <th>여자10세부터14세생활인구수</th>
                <th>여자15세부터19세생활인구수</th>
                <th>여자20세부터24세생활인구수</th>
                <th>여자25세부터29세생활인구수</th>
                <th>여자30세부터34세생활인구수</th>
                <th>여자35세부터39세생활인구수</th>
                <th>여자40세부터44세생활인구수</th>
                <th>여자45세부터49세생활인구수</th>
                <th>여자50세부터54세생활인구수</th>
                <th>여자55세부터59세생활인구수</th>
                <th>여자60세부터64세생활인구수</th>
                <th>여자65세부터69세생활인구수</th>
                <th>여자70세이상생활인구수</th>
              </tr>
            </thead>
            <tbody>
              {this.state.append_FPList.length > 0
                ? this.state.append_FPList
                : undefined}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default floatingPopulationList;
