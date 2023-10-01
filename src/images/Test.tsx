// components/SVGIcon.tsx
import React from "react";

interface SVGIconProps {
  width: string;
  height: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
    </svg>
  );
};

export default SVGIcon;
