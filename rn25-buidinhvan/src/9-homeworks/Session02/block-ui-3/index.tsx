import React from "react";
import SocialBlock from "./SocialBlock";

function Socialblock() {
  return (
    <div className="container">
      <div className={`row `}>
        <div className="col-3">
          <SocialBlock
            iconName="fa-brands fa-facebook-f"
            text="FaceBook"
            total={5000000}
            unit="Likes"
            color="blue"
          />
        </div>
        <div className="col-3">
          <SocialBlock
            iconName="fa-brands fa-twitter"
            text="Twitter"
            total={40000}
            unit="Tweets"
            color="#31C7DD"
          />
        </div>
        <div className="col-3">
        <SocialBlock
        iconName="fa-brands fa-google-plus-g"
        text="Google +"
        total={460000}
        unit="Plus"
        color="#F78153"
      />
        </div>
        <div className="col-3">
        <SocialBlock
        iconName="fa-brands fa-pinterest"
        text="Pinterest"
        total={34000}
        unit="Pins"
        color="red"
      />
        </div>
      </div>
    </div>
  );
}

export default Socialblock;
