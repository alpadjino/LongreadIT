import React, { useEffect, useRef, useState } from "react";
import { petals } from '@constants/circularDiagram';

const wrapText = (text, maxWidth) => {
  const words = text.split(" ");
  let lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = currentLine.length + word.length + 1;
    if (width > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine += ` ${word}`;
    }
  }
  lines.push(currentLine);
  return lines;
};


const CircularDiagram = () => {
  const radius = 150;
  const center = 200;
  const petalAngle = (2 * Math.PI) / petals.length;

  const createPetalPath = (index) => {
    const angle = index * petalAngle;
    const startX = center + radius * Math.cos(angle);
    const startY = center + radius * Math.sin(angle);

    const controlX1 = center + (radius + 40) * Math.cos(angle + petalAngle / 4);
    const controlY1 = center + (radius + 40) * Math.sin(angle + petalAngle / 4);

    const controlX2 =
      center + (radius + 40) * Math.cos(angle + (3 * petalAngle) / 4);
    const controlY2 =
      center + (radius + 40) * Math.sin(angle + (3 * petalAngle) / 4);

    const endX = center + radius * Math.cos(angle + petalAngle);
    const endY = center + radius * Math.sin(angle + petalAngle);

    return `
      M ${center},${center} 
      L ${startX},${startY} 
      Q ${controlX1},${controlY1} ${endX},${endY} 
      Q ${controlX2},${controlY2} ${startX},${startY} 
      Z
    `;
  };

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 400 400"
      style={{ background: "#000" }}
    >
      {petals.map((petal, index) => {
        const textLines = wrapText(petal.label, 15);
        const Icon = petal.icon;
        return (
          <g key={petal.id}>
            <path
              d={createPetalPath(index)}
              fill={petal.color}
              stroke="#fff"
              strokeWidth="2"
            />
            <foreignObject
              x={
                center +
                (radius + 20) * Math.cos(index * petalAngle + petalAngle / 2) -
                10
              }
              y={
                center +
                (radius + 20) * Math.sin(index * petalAngle + petalAngle / 2) -
                10
              }
              width="20"
              height="20"
            >
              {<Icon size={20} />}
            </foreignObject>
            <text
              x={
                center +
                (radius / 1.5) * Math.cos(index * petalAngle + petalAngle / 2)
              }
              y={
                center +
                (radius / 1.5) * Math.sin(index * petalAngle + petalAngle / 2)
              }
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="11"
              fontFamily="Proxima Nova"
              fontWeight="600"
              fill="#fff"
            >
              {textLines.map((line, i) => (
                <tspan
                  key={i}
                  x={
                    center +
                    (radius / 1.5) *
                      Math.cos(index * petalAngle + petalAngle / 2)
                  }
                  dy={i * 15}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default CircularDiagram;
