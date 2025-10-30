import { useState } from "react"
import style from "../Exemplo/Exemplo.module.css"
import Mensagem from "../Mensagem/Mensagem";
import Lampada from "../Lampada/Lampada";

export default function Exemplo(){
    const [valor, setValor] = useState(0);

    return (
      <>    

        <div>
            <p>O valor atual é: {valor}</p>
            <button onClick={ ()=> setValor(valor + 1)}>Aumentar!</button>
            <button onClick={ ()=> setValor(valor > 0 ? valor - 1 : 0)}> Diminuir!</button>
            <button onClick={ ()=> setValor(0)}>Limpar!</button>
            <Mensagem />
            <br />
            <Lampada />
        </div>
        
      </>
    )
  }
  
  