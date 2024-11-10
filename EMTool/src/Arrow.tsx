import React from 'react';

type ArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const Arrow: React.FC<ArrowProps> = ({ x1, y1, x2, y2 }) => {
  const arrowHeadSize = 5; // Size of the arrowhead

  return (
    <g>
      {/* Draw the line */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="red"
        strokeWidth="2"
      />

      {/* Optional arrowhead */}
      <polygon
        points={`0,0 -${arrowHeadSize},${arrowHeadSize} -${arrowHeadSize},-${arrowHeadSize}`}
        fill="red"
        transform={`translate(${x2},${y2}) rotate(${Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)})`}
      />
    </g>
  );
};

export default Arrow;
