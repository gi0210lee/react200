import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
class SoftwareList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      responseSwtoolList: "",
      append_SwtoolList: "",
    };
  }
  componentDidMount() {
    this.callSwToolListApi();
  }

  callSwToolListApi = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.post("/api/Swtool?type=list", {});

      this.setState({ responseSwtoolList: response });
      this.setState({
        append_SwtoolList: this.SwtoolListAppend(),
      });
      this.setState({ isLoading: false });
    } catch (error) {
      alert("2 작업 중 에러가 발생했습니다.");
      return false;
    }
  };

  SwtoolListAppend = () => {
    let result = [];
    var SwToolList = this.state.responseSwtoolList.data;

    for (let i = 0; i < SwToolList.json.length; i++) {
      var data = SwToolList.json[i];
      var date = data.reg_date;
      var year = date.substr(0, 4);
      var month = date.substr(4, 2);
      var day = date.substr(6, 2);
      var reg_date = year + "." + month + "." + day;

      result.push(
        <tr className="hidden_type" key={i}>
          <td>{data.swt_toolname}</td>
          <td>{data.swt_function}</td>
          <td>{reg_date}</td>
          <td>
            <Link
              to={"/SoftwareView/" + data.swt_code}
              className="bt_c1 bt_c2 w50_b"
            >
              수정
            </Link>
            <a
              href="#n"
              className="bt_c1 w50_b"
              id={data.swt_code}
              onClick={(e) => this.deleteSwtool(e)}
            >
              삭제
            </a>
          </td>
        </tr>
      );
    }
    return result;
  };

  deleteSwtool = (e) => {
    let event_target = e.target;
    this.sweetalertDelete(
      "정말 삭제하시겠습니까?",
      function () {
        axios
          .post("/api/Swtool?type=delete", {
            is_SwtCd: event_target.getAttribute("id"),
          })
          .then((response) => {
            this.callSwToolListApi();
          })
          .catch((errer) => {
            alert("작업 중 에러가 발생했습니다.");
            return false;
          });
      }.bind(this)
    );
  };

  sweetalertDelete = (title, callbackFunc) => {
    Swal.fire({
      title: title,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Delete!", "삭제됐습니다.", "success");
      } else {
        return false;
      }
      callbackFunc();
    });
  };

  render() {
    const { isLoading, append_SwtoolList } = this.state;
    return (
      <>
        <section className="sub_wrap">
          <article className="s_cnt mp_pro_li ct1 mp_prop_li_admin">
            <div className="li_top">
              <h2 className="s_tit1">Software Tools 목록</h2>
              <div className="li_top_sch af">
                <Link to={"/SoftwareView/register"} className="sch_bt2 wi_au">
                  Tool 등록
                </Link>
              </div>
            </div>
            {isLoading ? (
              "Loading..."
            ) : (
              <div className="list_cont list_cont_admin">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>툴 이름</th>
                      <th>기능</th>
                      <th>등록일</th>
                      <th>기능</th>
                    </tr>
                  </thead>
                  <tbody>{append_SwtoolList}</tbody>
                </Table>
              </div>
            )}
          </article>
        </section>
      </>
    );
  }
}

export default SoftwareList;
