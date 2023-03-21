import React from "react";
import { animateScroll as scroll } from "react-scroll";

const DownButton: React.FC = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom({ duration: 300 });
  };

  return (
    <button
      onClick={scrollToBottom}
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        borderRadius: "50%",
        backgroundColor: "#000000",
        color: "white",
        border: "none",
        padding: "10px",
        cursor: "pointer",
        fontSize: "1.2em",
      }}
    >
      &#x25BC;
    </button>
  );
};

export default DownButton;