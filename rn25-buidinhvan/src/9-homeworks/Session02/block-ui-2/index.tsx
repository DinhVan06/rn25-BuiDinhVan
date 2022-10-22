import React from "react";
import Profile from "../../../9-homeworks/Session02/block-ui-2/Profile";
type Props = {};

function ProFile({}: Props) {
  let proFile = [
    {
      icon: "fa-brands fa-android",
      name: "HTML",
      color: "#51D567",
      follower: 60,
    },
    { icon: "fa-brands fa-apple", name: "CSS", color: "#F65354", follower: 50 },
    { icon: "fa-brands fa-php", name: "PHP", color: "#34C8DF", follower: 30 },
    { icon: "fa-brands fa-java", name: "JAVA", color: "#FFD700", follower: 70 },
    { icon: "fa-brands fa-adn", name: ".NET", color: "#BA55D3", follower: 40 },
  ];
  return (
    <div>
      <div>
        <Profile data={proFile[0]} />
        <br />
        <Profile data={proFile[1]} />
        <br />
        <Profile data={proFile[2]} />
        <br />
        <Profile data={proFile[3]} />
        <br />
        <Profile data={proFile[4]} />
      </div>
    </div>
  );
}

export default ProFile;
