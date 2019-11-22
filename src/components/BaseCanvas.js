import React from 'react';
import { Layer, Line } from 'react-konva';

function Base({ type }) {
  const color = type === 'white' ? '#fffdd0' : '#f5deb3';
  return (
    <Layer>
      <Line
          x={100}
          y={110}
          points={[0, 100, 100, 0, 200, 150]}
          tension={0.9}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 100 }}
          fillLinearGradientColorStops={[0, "orange", 1, color]}
          />
    </Layer>
  );
}

export default Base;