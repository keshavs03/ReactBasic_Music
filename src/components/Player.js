import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <i className="skip-back" class="fas fa-step-backward"></i>
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        {/* <FontAwesomeIcon className="skip-back" size="2x" icon={}/> */}
        {/* <FontAwesomeIcon className="play" size="2x" icon={faPlay} /> */}
        <i className="skip-back" class="fas fa-step-backward"></i>
      </div>
    </div>
  );
};

export default Player;
