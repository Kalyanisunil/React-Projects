import React, { useState } from "react";
import Light from "./Light";

function Room() {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleToggle = () => {
    setIsLightOn((prev) => !prev); // toggles the light
  };

  const roomStatus = isLightOn ? "The room is bright" : "The room is dark";

  return (
    <div>
      <Light isLightOn={isLightOn} onToggle={handleToggle} />
      <p>{roomStatus}</p>
    </div>
  );
}

export default Room;
