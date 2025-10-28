import Section from "../Section/Section";
import style from "./Main.module.css";

export default function Main({ }) {
    const lista = ["Olha o sapo dentro do saco", "o saco com o sapo dentro", "o sapo batendo papo", "e o papo soltando vento"];
    return (
        <>
            <main className={style.corpo}>
                {lista.map((i, index) => (
                    <Section key={index} conteudo={i} />
                ))
                }
            </main>


        </>
    )
} 