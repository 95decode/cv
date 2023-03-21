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
        style={{ width: "300px", height: "300px", margin: "50px", position: "relative", overflow: "hidden" }}
      >
        <img
          src={imageSrc}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            top: isHover ? "-100%" : "0%",
            transition: "top 0.5s ease",
          }}
        />
        <p style={{ margin: 0, position: "absolute", bottom: "50%", left: "50%", transform: "translateX(-50%)" }}>{text}</p>
      </div>
    </Link>
  );
};

export default ImageCard;
