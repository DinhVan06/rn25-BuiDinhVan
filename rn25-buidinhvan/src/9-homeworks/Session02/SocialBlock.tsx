import React from "react";

interface SocialBlockProps {
  cocial1: {
    text: string;
    color: string;
    iconName: string;
    total?: number;
  };
}

function SocialBlock({cocial1}: SocialBlockProps) {
  return <div>SocialBlock</div>;
}

export default SocialBlock;
