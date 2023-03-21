import React from "react";
import { animateScroll as scroll } from "react-scroll";

const UpButton: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        borderRadius: "50%",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "10px",
        cursor: "pointer",
        fontSize: "1.2em",
      }}
    >
      &#x25B2;
    </button>
  );
};

export default UpButton;