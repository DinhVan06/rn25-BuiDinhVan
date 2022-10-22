import React from "react";

import "../block-ui-2/Block-ui-2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface DataProfileProps {
  data: {
    icon?: string;
    name?: string;
    color?: string;
    follower?: number;
  };
}

function Profile({ data }: DataProfileProps) {
  return (
    <div>
      <div className="profile">
        <div className="profile_row">
          <div style={{marginRight:'20px'}}>
            <FontAwesomeIcon
              style={{fontSize: 30, width:'40px'}}
              icon={`${data.icon}` as IconProp}
            />
          </div>
          <div className="profile_row_name">
            <p className="profile_name">{data.name}</p>
          </div>
          <div className="profile_row_color">
            <div
              className="profile_color"
              style={{
                backgroundColor: data.color,
                width: data.follower + "%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
