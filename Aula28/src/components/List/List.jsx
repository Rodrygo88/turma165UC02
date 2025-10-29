import Livro from "../Livro/Livro";
import style from "./List.module.css";

export default function List({listaLivros = []}) {


    return (
        <>
            <div className={style.catalogo}>
            
                {
                    listaLivros.length>0 ?
                    listaLivros.map((livro, index) => (
                        <Livro key={index} titulo={livro.titulo} autor={livro.autor} ano={livro.ano} genero={livro.genero} url={livro.url} disponivel={livro.disponivel} badge={livro.badge}/>
                    )) : <p>Sem livros</p>
                }
            </div>

        </>
    )
}