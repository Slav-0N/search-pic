import { useRef } from "react";

const UseRef = ({ source }) => {
  const playerRef = useRef();
  const play = () => {
    playerRef.current.play();
  };
  const pause = () => {
    playerRef.current.pause();
  };

  const playyy = "play >>>";

  return (
    <>
      <video ref={playerRef} src={source}>
        sorry!!!
      </video>
      <div>
        <button onClick={() => play()}>{playyy} </button>
        <button onClick={() => pause()}>pause ||</button>
      </div>
    </>
  );
};
export default UseRef;
