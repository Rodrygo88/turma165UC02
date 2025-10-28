export default function Livro({titulo, autor, ano, genero,url}){
    return (
        <>
            <h3>Título</h3>
            <p>{titulo}</p>
            <h3>Autor</h3>
            <p>{autor}</p>
            <h3>Ano</h3>
            <p>{ano}</p>
            <h3>Genero</h3>
            <p>{genero}</p>
            <h3>Capa</h3>
            <img src={url}/>
        </>
    )
}