import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    군구: "광진구",
    "유동 인구 수": 4000,
    "비유동 인구 수": 2300,
  },
  {
    군구: "동대문구",
    "유동 인구 수": 5000,
    "비유동 인구 수": 2400,
  },
  {
    군구: "마포구",
    "유동 인구 수": 5400,
    "비유동 인구 수": 3400,
  },
  {
    군구: "구로구",
    "유동 인구 수": 4321,
    "비유동 인구 수": 3400,
  },
  {
    군구: "강남구",
    "유동 인구 수": 4040,
    "비유동 인구 수": 5400,
  },
];

class rechartsSimpleLineChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  render() {
    return (
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="군구" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="유동 인구 수"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="비유동 인구 수" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default rechartsSimpleLineChart;
