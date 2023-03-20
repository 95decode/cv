import { useState, useEffect } from "react";

type DotProps = {
  x: number;
  y: number;
};

const Dot = ({ x, y }: DotProps) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: "50px",
        height: "50px",
        background: `url('/images/ethereum.png') no-repeat center center / contain`,
      }}
    ></div>
  );
};

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Dot x={position.x} y={position.y} />;
};

export default FollowMouse;
