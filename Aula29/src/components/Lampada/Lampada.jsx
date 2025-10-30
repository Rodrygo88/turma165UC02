import { useState } from "react"

import off from "./off.png"
import on from "./on.png"

export default function Lampada(){
    
    const [lampada, setLampada] = useState(false);
    return (
      <>    
        <img src={lampada ? off: on}/>
        <button onClick={ ()=> setLampada(lampada ? false: true)}> {lampada ? "ON": "OFF"}</button>

      </>
    )
  }