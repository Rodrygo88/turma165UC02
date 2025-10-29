import style from "./Livro.module.css";

export default function Livro({ titulo, autor, ano, genero, url, disponivel, badge, children="Nenhuma informação a mais disponivel"}) {
    return (
        <>
            <div className={style.card}>
            <img src={url}/>
                <span>
                    <h3>Título:</h3> <p>{titulo}</p>
                </span>
                
                <span>
                    <h3>Autor:</h3> <p>{autor}</p>
                </span>
                
                <span>
                    <h3>Ano:</h3> <p>{ano}</p>
                </span>
                
                <span>
                  <h3>Genero:</h3> <p>{genero}</p>  
                </span>
                
                {disponivel ? <p className={style.disponivel}>Disponível</p> : <p className={style.indisponivel}>Indisponível</p>}

                {badge == 0 ? <p className={style.badge}>NEW</p> : <p className={style.badge}>PROMOÇÃO</p>}
                {children}
            </div>

        </>
    )
}