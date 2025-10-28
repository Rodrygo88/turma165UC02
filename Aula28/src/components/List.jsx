import Livro from "./Livro";

export default function List({listaLivros}){

    return (
        <>
        {
            listaLivros.map((livro, index) => (
                <Livro key={index} titulo={livro.titulo} autor={livro.autor } ano={livro.ano} genero={livro.genero } url={livro.url }/>
            ))

        }
     

            
            
        </>
    )
}