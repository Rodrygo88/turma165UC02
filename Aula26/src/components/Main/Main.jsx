import Card from "../Card/Card"

export default function Main(){
    
    let perguntas = ["O que é um componente no React?","Qual a função do arquivo App.jsx ?","Qual a função do arquivo main.jsx ?", "Quais fases de vida dos componentes"]

    return(
        <>
            <Card pergunta={perguntas[0]} resposta="É um bloco de construção reutilizável para a interface."/>
            <Card pergunta={perguntas[1]} resposta="Serve como o componente principal da aplicação."/>
            <Card pergunta={perguntas[2]} resposta="Serve como o ponto de entrada principal de uma aplicação React."/>
            <Card pergunta={perguntas[3]} resposta="Montagem, Atualização, Desmontagem"/>
        </>
    )
}   