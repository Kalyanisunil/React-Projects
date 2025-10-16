import React from 'react';

function Light({ isLightOn, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isLightOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default Light;
