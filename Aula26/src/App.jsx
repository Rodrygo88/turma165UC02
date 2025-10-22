import Card from "./components/Card/Card"


function App() {
  let perguntas = ["O que é um componente no React?","Qual a função do arquivo App.jsx ?","Qual a função do arquivo main.jsx ?", "Quais fases de vida dos componentes"]
  return (
    <>
      <Card pergunta={perguntas[0]} resposta="aaa"/>
      <Card pergunta={perguntas[1]} resposta="bbb"/>
      <Card pergunta={perguntas[2]} resposta="ccc"/>
      <Card pergunta={perguntas[3]} resposta="ddd"/>
      
    </>
  )
}

export default App
