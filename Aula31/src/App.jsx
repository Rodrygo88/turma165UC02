import Contador from "./components/Contador/Contador";
import Contador02 from "./components/Contador02/Contador02";

import style from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [tema, setTema] = useState(false);
  const [mensagem, setMensagem] = useState("");


  useEffect(()=>{
    const hora = new Date().getHours(); 
    if (hora >= 18 || hora <= 5){
      setTema(false);
    }else{
      setTema(true);
    }
  },[])
    useEffect(() => {
      if (hora > 4 && hora < 12) {
          setMensagem('Bom dia!') 
      } else if(hora >11 && hora < 18) {
          setMensagem('Boa Tarde!') 
      }else if(hora > 17 && hora < 24){
          setMensagem('Boa Noite!')
      }else{
          setMensagem('Boa Madrugada!')
      }
    }, [])

  return (
    <>
    <div  className={tema ? style.light : style.dark }>
      <h2>{mensagem}</h2>
      <Contador />
      <Contador02 />        
      <button onClick={()=> setTema(!tema)}>{tema ? "Tema Escuro" : "Tema Claro"} </button>

    </div>
    
    </>
  )
}

export default App
