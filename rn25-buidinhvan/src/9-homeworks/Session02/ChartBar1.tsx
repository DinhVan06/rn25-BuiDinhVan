import React from "react";

interface DataRatingProps {
  data: {
    name: string;
    color: string;
    value: number;
  };
}

function CharBar1({ data }: DataRatingProps) {
  return (
    <div className="rating">
      <div style={{ backgroundColor: "#cccccc" }} className="rating_row">
        <div style={{ backgroundColor: data.color}} className="rating_row_name">
          <p className="rating__name">{data.name}</p>
        </div>
        <div className="rating_row_value">
          <div className="rating__value" style={{ backgroundColor: data.color, width: data.value + "%"}}>
            {data.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharBar1;
