import { useState, useRef } from "react";


export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("unknown entity");
  function handleName(){
    setName(playerName.current.value)
    playerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref={playerName} id="name-input" type="text" />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}
