import React from "react";
import ChartColumn from "../../../9-homeworks/Session02/block-ui-4/ChartColumn";

function ChartColumnProps() {
  let percentages = [
    { color: "#DD0000", percentages: 30, weekday: "MON" },
    { color: "#00FF00", percentages: 20, weekday: "TUE" },
    { color: "#FFFF00", percentages: 65, weekday: "WED" },
    { color: "#63B8FF", percentages: 80, weekday: "THU" },
    { color: "#EE7600", percentages: 75, weekday: "FRI" },
  ];
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ChartColumn text="TODAY'S VISITORS" total={24.599} itemChartColumns={percentages} />
        <ChartColumn text="YESTERDAY'S VISITORS" total={15.699} itemChartColumns={percentages} />
        <ChartColumn text="TOTAL DOWNLOADS" total={1.24599} itemChartColumns={percentages} />
        <ChartColumn text="CURRENT INCOME" total={54.599} itemChartColumns={percentages} />
      </div>
    </div>
  );
}

export default ChartColumnProps;
