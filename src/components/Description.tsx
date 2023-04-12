import React from "react";

interface TextElement {
  text: string;
  level: "h1" | "h2" | "h3" | "h4";
}

interface ImageLink {
  src: string;
  href?: string;
  alt: string;
}

interface DescriptionProps {
  textElements: TextElement[];
  imageLinks?: ImageLink[];
}

const Description: React.FC<DescriptionProps> = ({ textElements, imageLinks }) => {
  return (
    <div
      style={{
        width: "1360px",
        height: "300px",
        margin: "40px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        borderRadius: "15px"
      }}
    >
      <div style={{ alignSelf: "center" }}>
        {textElements.map((element, index) => {
          const Heading = element.level;
          return (
            <Heading key={index} style={{ textAlign: "center", margin: "5px" }}>
              {element.text}
            </Heading>
          );
        })}
      </div>
      {imageLinks && (
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center"
          }}
        >
          {imageLinks.map((imageLink, index) => (
            <a
              key={index}
              href={imageLink.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", margin: "10px", textDecoration: "none" }}
            >
              <img
                src={imageLink.src}
                alt={imageLink.alt}
                style={{ width: "60px", height: "60px" }}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Description;
