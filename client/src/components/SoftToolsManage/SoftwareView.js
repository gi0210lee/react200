import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Swal from "sweetalert2";
import axios from "axios";

class SoftwareView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      before_swtcode: props.match.params.swtcode,
    };
  }

  componentDidMount() {
    if (this.state.before_swtcode === "register") {
      $(".modifyclass").hide();
    } else {
      this.callSwToolInfoApi();
      $(".saveclass").hide();
    }
  }

  callSwToolInfoApi = async () => {
    try {
      const response = await axios.post("/api/Swtool?type=list", {
        is_Swtcode: this.state.before_swtcode,
      });
      var data = await response.data.json[0];

      $("#is_Swt_toolname").val(data.swt_toolname);
      $("#is_Swt_demo_site").val(data.swt_demo_site);
      $("#is_Giturl").val(data.swt_github_url);
      $("#is_Comments").val(data.swt_comments);
      $("#is_Swt_function").val(data.swt_function);
    } catch (error) {
      alert("작업 중 에러가 발생했습니다.");
      return false;
    }
  };

  submitClick = async (type, e) => {
    this.Swt_toolname_checker = $("#is_Swt_toolname").val();
    this.Swt_demo_site_checker = $("#is_Swt_demo_site").val();
    this.Giturl_checker = $("#is_Giturl").val();
    this.Comments_checker = $("#is_Comments").val();
    this.Swt_function_checker = $("#is_Swt_function").val();

    this.fnValidate = async (e) => {
      if (this.Swt_toolname_checker === "") {
        $("#is_Swt_toolname").addClass("border_validate_err");
        alert("툴 이름을 다시 확인해주세요.");
        return false;
      }
      $("#is_Swt_toolname").removeClass("border_validate_err");

      if (this.Swt_demo_site_checker === "") {
        $("#is_Swt_demo_site").addClass("border_validate_err");
        alert("데모 URL을 다시 확인해주세요.");
        return false;
      }
      $("#is_Swt_demo_site").removeClass("border_validate_err");

      if (this.Giturl_checker === "") {
        $("#is_Giturl").addClass("border_validate_err");
        alert("Github URL을 다시 확인해주세요.");
        return false;
      }
      $("#is_Giturl").removeClass("border_validate_err");

      if (this.Comments_checker === "") {
        $("#is_Comments").addClass("border_validate_err");
        alert("설명을 다시 확인해주세요.");
        return false;
      }
      $("#is_Comments").removeClass("border_validate_err");

      if (this.Swt_function_checker === "") {
        $("#is_Swt_function").addClass("border_validate_err");
        alert("상세기능을 다시 확인해주세요.");
        return false;
      }
      $("#is_Swt_function").removeClass("border_validate_err");
      return true;
    };

    if (this.fnValidate()) {
      var jsonstr = $("form[name='frm']").serialize();
      jsonstr = decodeURIComponent(jsonstr);
      var Json_form = JSON.stringify(jsonstr).replace(/\\"/gi, "");
      Json_form =
        '{"' + Json_form.replace(/\\&/g, '","').replace(/=/gi, '":"') + '"}';
      try {
        const response = await axios.post(
          "/api/Swtool?type=" + type,
          Json_form,
          { headers: { "Content-Type": `application/json` } }
        );
        const body = await response.data;
        if (body === "succ") {
          console.log("succ", body);
          if (type === "save") {
            this.sweetalertSucc("Software Tools 등록이 완료되었습니다.", false);
          } else if (type === "modify") {
            this.sweetalertSucc("Software Tools 수정이 완료됐습니다.", false);
          }
          setTimeout(
            function () {
              this.props.history.push("/SoftwareList");
            }.bind(this),
            1500
          );
        } else {
          alert("1 작업중 오류가 발생하였습니다.");
        }
      } catch (error) {
        console.log(error);
        alert("2 작업중 오류가 발생하였습니다.");
        return false;
      }
    }
  };

  sweetalertSucc = (title, showConfirmButton) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: title,
      showConfirmButton: showConfirmButton,
      timer: 1000,
    });
  };

  render() {
    return (
      <section className="sub_wrap">
        <article className="s_cnt mp_pro_li ct1">
          <div className="li_top">
            <h2 className="s_tit1">Software Tools 등록/수정</h2>
          </div>
          <div className="bo_w re1_wrap re1_wrap_writer">
            <form
              name="frm"
              id="frm"
              action=""
              onSubmit={this.submitClick}
              method="post"
            >
              <input id="is_Swtcode" type="hidden" name="is_Swtcode" />
              <input
                id="is_Email"
                type="hidden"
                name="is_Email"
                value="guest"
              />
              <input
                id="is_beforeSwtcode"
                type="hidden"
                name="is_beforeSwtcode"
                value={this.state.before_swtcode}
              />
              <article className="res_w">
                <p className="ment" style={{ textAlign: "right" }}>
                  <span className="red">(*)</span>표시는 필수입력사항 입니다.
                </p>
                <div className="tb_outline">
                  <table className="table_ty1">
                    <tbody>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_toolname">
                            툴 이름<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Swt_toolname"
                            id="is_Swt_toolname"
                            className=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_demo_site">
                            데모 URL<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Swt_demo_site"
                            id="is_Swt_demo_site"
                            className=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Giturl">
                            Github URL<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <input
                            type="text"
                            name="is_Giturl"
                            id="is_Giturl"
                            className=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Comments">
                            설명<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <textarea
                            name="is_Comments"
                            id="is_Comments"
                            rows=""
                            cols=""
                          ></textarea>
                        </td>
                      </tr>
                      <tr className="div_tb_tr fileb">
                        <th>메뉴얼 파일 #1</th>
                        <td className="fileBox fileBox_w1">
                          <label htmlFor="uploadBtn1" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="manualfile"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="uploadBtn1"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("manual", e)}
                          />
                          <div id="upload_menual"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>메인 이미지</th>
                        <td className="fileBox fileBox1">
                          <label htmlFor="imageSelect" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="imagefile"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="imageSelect"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("file", e)}
                          />
                          <div id="upload_img"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>라벨 이미지</th>
                        <td className="fileBox fileBox2">
                          <label htmlFor="imageSelect2" className="btn_file">
                            파일선택
                          </label>
                          <input
                            type="text"
                            id="imagefile2"
                            className="fileName fileName1"
                            readOnly="readonly"
                            placeholder="선택된 파일 없음"
                          />
                          <input
                            type="file"
                            id="imageSelect2"
                            className="uploadBtn uploadBtn1"
                            onChange={(e) => this.handleFileInput("file2", e)}
                          />
                          <div id="upload_img2"></div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="is_Swt_function">
                            상세 기능<span className="red">(*)</span>
                          </label>
                        </th>
                        <td>
                          <textarea
                            name="is_Swt_function"
                            id="is_Swt_function"
                            rows=""
                            cols=""
                          ></textarea>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="btn_confirm mt20"
                    style={{ marginBottom: "44px" }}
                  >
                    <Link
                      to={"/SoftwareList"}
                      className="bt_ty bt_ty1 cancel_ty1"
                    >
                      취소
                    </Link>
                    <button
                      className="bt_ty bt_ty2 submit_ty1 saveclass"
                      onClick={(e) => this.submitClick("save", e)}
                    >
                      저장
                    </button>
                    <button
                      className="bt_ty bt_ty2 submit_ty1 modifyclass"
                      onClick={(e) => this.submitClick("modify", e)}
                    >
                      수정
                    </button>
                  </div>
                </div>
              </article>
            </form>
          </div>
        </article>
      </section>
    );
  }
}

export default SoftwareView;
