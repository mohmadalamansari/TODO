import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import CSS file for styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch-container">
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="toggle-switch-inner"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
