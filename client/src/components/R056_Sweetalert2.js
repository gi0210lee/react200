import React, { Component } from "react";
import Swal from "sweetalert2";

class Sweetalert2 extends Component {
  constructor(props) {
    super(props);
    // Swal.fire("1. SweetAlert").then((result) => {
    //   alert("2 result.value : " + result.value);
    // });
  }

  saveAlert = (flag, positionflag, e) => {
    Swal.fire({
      position: positionflag,
      icon: "success",
      title: flag + "됐습니다.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  deleteAlert = (e) => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4B088A",
      cancelButtonColor: "#01DF01",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("Deleted", "sweetalert2 삭제 완료", "success");
      }
    });
  };

  render() {
    return (
      <div>
        <h1>sweetalert2</h1>
        <button onClick={(e) => this.saveAlert("저장", "center")}>저장</button>
        <button onClick={(e) => this.saveAlert("수정", "bottom-end")}>
          수정
        </button>
        <h1 id="deleteId">delete sweetalert2</h1>
        <button onClick={(e) => this.deleteAlert("수정", "bottom-end")}>
          삭제
        </button>
      </div>
    );
  }
}

export default Sweetalert2;
