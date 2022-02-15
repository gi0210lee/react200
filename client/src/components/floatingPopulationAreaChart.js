import React, { Component } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class floatingPopulationListChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseFPList: "",
      append_FPList: "",
    };
  }

  componentDidMount = () => {
    this.appendFPList();
  };

  appendFPList = async () => {
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
            append_FPList:
              this.state.responseFPList.data.SPOP_LOCAL_RESD_DONG.row,
          });
          console.log(this.state.append_FPList);
        } catch (error) {
          alert(error);
        }
      })
      .catch((error) => {
        alert(error);
        return false;
      });
  };
  render() {
    return (
      <AreaChart
        width={1000}
        height={300}
        data={this.state.append_FPList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ADSTRD_CODE_SE" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line
          type="monotone"
          dataKey="TOT_LVPOP_CO"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        <Area
          type="monotone"
          dataKey="MALE_F35T39_LVPOP_CO"
          stroke="#8a9a0c"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="FEMALE_F35T39_LVPOP_CO"
          stroke="#82ca9d"
          fill="#8214d1"
        />
      </AreaChart>
    );
  }
}

export default floatingPopulationListChart;
