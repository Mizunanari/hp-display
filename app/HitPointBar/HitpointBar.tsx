"use client";

import "./styles.css";

export default function HealthBar({ maxHp = 100, hp = 100 } = {}) {
  const barWidth = (hp / maxHp) * 100;
  let barColor = 'green';
  if (barWidth >= 50) {
    barColor = 'green';
  } else if (barWidth >= 10) {
    barColor = 'orange';
  } else {
    barColor = 'red';
  }
  return (
    <div className="health-bar">
      <div className="bar" style={{ width: `${barWidth}%`, backgroundColor: `${barColor}` }}></div>
      <div className="hit" style={{ width: `${0}%` }}></div>
      <div
        style={{
          position: "absolute",
          top: "5px",
          left: 0,
          right: 0,
          textAlign: "center"
        }}
      >
      </div>
    </div>
  );
};
