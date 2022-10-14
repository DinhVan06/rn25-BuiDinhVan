import { relative } from "path";
import React from "react";

import styles from "../../../9-homeworks/Session02/block-ui-4/ChartColum.module.css";

interface ChartColumnProps {
  text?: string;
  total?: number;
  itemChartColumns: Array<ItemChartColumns>;
}

interface ItemChartColumns {
  color?: string;
  percentages?: number;
  weekday?: string;
}

function ChartColumn(props: ChartColumnProps) {
  return (
    <div className={styles.chartColumn}>
      <div className={styles.text}>
        <span>{props.text}</span>
      </div>
      <div className={styles.total}>
        <span style={{color:'#63B8FF'}}>{props.total}</span>
      </div>
      <div style={{ backgroundColor: "#f9f9f9", padding: "12px 0" }}>
        <div style={{ display: "flex" }}>
          <div className={styles.columns}>
            <div className={styles.itemColumn}>
              <div
                className={styles.item}
                style={{
                  height: props.itemChartColumns[0].percentages + "%",
                  backgroundColor: props.itemChartColumns[0].color,
                }}
              ></div>
            </div> 
            <p style={{ fontSize: "10px" }}>
              {props.itemChartColumns[0].weekday}
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.itemColumn}>
              <div
                className={styles.item}
                style={{
                  height: props.itemChartColumns[1].percentages + "%",
                  backgroundColor: props.itemChartColumns[1].color,
                }}
              ></div>
            </div> 
            <p style={{ fontSize: "10px" }}>
              {props.itemChartColumns[1].weekday}
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.itemColumn}>
              <div
                className={styles.item}
                style={{
                  height: props.itemChartColumns[2].percentages + "%",
                  backgroundColor: props.itemChartColumns[2].color,
                }}
              ></div>
            </div> 
            <p style={{ fontSize: "10px" }}>
              {props.itemChartColumns[2].weekday}
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.itemColumn}>
              <div
                className={styles.item}
                style={{
                  height: props.itemChartColumns[3].percentages + "%",
                  backgroundColor: props.itemChartColumns[3].color,
                }}
              ></div>
            </div> 
            <p style={{ fontSize: "10px" }}>
              {props.itemChartColumns[3].weekday}
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.itemColumn}>
              <div
                className={styles.item}
                style={{
                  height: props.itemChartColumns[4].percentages + "%",
                  backgroundColor: props.itemChartColumns[4].color,
                }}
              ></div>
            </div> 
            <p style={{ fontSize: "10px" }}>
              {props.itemChartColumns[4].weekday}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartColumn;
