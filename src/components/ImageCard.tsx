import React, { useState } from "react";
import { Link } from "react-scroll";

interface ImageCardProps {
  imageSrc: string;
  alt: string;
  text: string;
  target: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, alt, text, target }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <Link to={target} smooth={true} duration={500}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ 
          width: "400px", 
          height: "400px", 
          margin: "40px", 
          position: "relative", 
          overflow: "hidden", 
          backgroundColor: "#f8f9fa", 
          borderRadius: "15px" 
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          style={{
            width: "340px", 
            height: "340px",
            objectFit: "contain",
            position: "relative",
            top: isHover ? "-100%" : "0%",
            transition: "top 0.5s ease",
            margin: "30px"
          }}
        />
        <p style={{ margin: 0, position: "absolute", bottom: "50%", left: "50%", transform: "translateX(-50%)" }}>{isHover ? text : ""}</p>
      </div>
    </Link>
  );
};

export default ImageCard;
