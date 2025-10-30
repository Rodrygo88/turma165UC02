import { useState } from "react"

export default function Lampada(){
    const [lampada, setLampada] = useState("https://img.freepik.com/vetores-gratis/lampada-realistica-isolada-de-vetor-sobre-branco_1284-41931.jpg?semt=ais_hybrid&w=740&q=80");

    return (
      <>    

        <img src={lampada}/>
        <button onClick={ ()=> setLampada("https://e7.pngegg.com/pngimages/922/441/png-clipart-of-yellow-light-bulb-incandescent-light-bulb-lighting-creative-bulb-flag-fashion-thumbnail.png")}> Acender!</button>

      </>
    )
  }
  
  