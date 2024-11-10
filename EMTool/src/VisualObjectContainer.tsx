import React, { useEffect, useRef, useState } from 'react';
import VisualObjectComponent from './VisualObjectComponent';
import Arrow from './Arrow';
import { calculateEdgeIntersection } from './DomHelper';

type VisualObject = {
  id: number;
  label: string;
  link: string;
  status: string;
  dependencies: number[];
};

const GRID_SPACING = 200; // Spacing between grid items

const VisualObjectContainer: React.FC<{ objects: VisualObject[] }> = ({ objects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const componentRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each component
  const [arrows, setArrows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Set refs for each component based on objects
    componentRefs.current = componentRefs.current.slice(0, objects.length);
  }, [objects]);

  useEffect(() => {
    const newArrows: JSX.Element[] = [];

    objects.forEach((obj, i) => {
      obj.dependencies.forEach((depId) => {
        const targetIndex = objects.findIndex((o) => o.id === depId);
        if (targetIndex === -1) return;

        // Get actual bounding rectangles of the components
        const startRect = componentRefs.current[i]?.getBoundingClientRect();
        const endRect = componentRefs.current[targetIndex]?.getBoundingClientRect();

        if (!startRect || !endRect) return;

        const { startEdgeX, startEdgeY, endEdgeX, endEdgeY } = calculateEdgeIntersection(startRect, endRect);

        // Adjust for container's position
        const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
        const relX1 = startEdgeX - containerRect.left;
        const relY1 = startEdgeY - containerRect.top;
        const relX2 = endEdgeX - containerRect.left;
        const relY2 = endEdgeY - containerRect.top;

        newArrows.push(<Arrow key={`${obj.id}-${depId}`} x1={relX1} y1={relY1} x2={relX2} y2={relY2} />);
      });
    });

    setArrows(newArrows);
  }, [objects]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}>
        {arrows}
      </svg>
      {objects.map((obj, i) => (
        <div
          key={obj.id}
          id={`visual-object-${obj.id}`}
          ref={(el) => (componentRefs.current[i] = el)} // Set each component's ref
          style={{
            position: 'absolute',
            left: (i % Math.ceil(Math.sqrt(objects.length))) * GRID_SPACING,
            top: Math.floor(i / Math.ceil(Math.sqrt(objects.length))) * GRID_SPACING,
          }}
        >
          <VisualObjectComponent data={obj} />
        </div>
      ))}
    </div>
  );
};

export default VisualObjectContainer;
