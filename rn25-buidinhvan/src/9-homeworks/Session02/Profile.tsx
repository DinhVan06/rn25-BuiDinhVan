import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAndroid } from "@fortawesome/free-solid-svg-icons";

interface DataProfileProps {
  data: {
    icon: string;
    name: string;
    color: string;
    follower: number;
  };
}

function Profile({ data }: DataProfileProps) {
  return (
    <div>
      <div className="profile">
        <div className="profile_row">
            <div className="profile_row_name">
                <p className="profile_name">{data.name}</p>
            </div>
            <div className="profile_row_color">
                <div className="profile_color" style = {{backgroundColor : data.color, width: data.follower + "%"}}>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Profile;
