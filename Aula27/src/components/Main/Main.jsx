import Section from "../Section/Section";

export default function Main({}){
    const lista = ["Conteudo01", "Conteudo02", "Conteudo03", "Conteudo04"];
    return(
        <>
        {lista.map((i, index) => (
            <Section key={index} conteudo={i}/>
        ))
        }
            
        </>
    )
}