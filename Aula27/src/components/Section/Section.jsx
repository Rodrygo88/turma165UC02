import style from "./Section.module.css";

export default function Section({conteudo}){
    return(
        <>
            <section className={style.section}>
                <p>{conteudo}</p>
            </section>
        </>
    )
}