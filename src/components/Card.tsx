import React from "react";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div style={{ width: "300px", height: "300px", margin: "50px", position: "relative", overflow: "hidden", backgroundColor: "#f8f9fa" }}>
        <p style={{ margin: 0, position: "absolute", bottom: "50%", left: "50%", transform: "translateX(-50%)" }}>{text}</p>
    </div>
  );
};

export default Card;
