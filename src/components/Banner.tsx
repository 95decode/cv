import React from "react";

interface TextElement {
  text: string;
  level: "h1" | "h2" | "h3";
}

interface BannerProps {
  textElements: TextElement[];
}

const Banner: React.FC<BannerProps> = ({ textElements }) => {
  return (
    <div
      style={{
        width: "1500px",
        height: "300px",
        margin: "50px",
        display: "flex", position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      {textElements.map((element, index) => {
        const Heading = element.level;
        return <Heading key={index}>{element.text}</Heading>;
      })}
    </div>
  );
};

export default Banner;