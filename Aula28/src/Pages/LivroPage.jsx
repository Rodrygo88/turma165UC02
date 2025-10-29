import List from "../components/List/List";
import style from "./LivroPage.module.css";
import { bancoLivros } from "../data/banco";

export default function LivroPage() {

    return (
        <>
        <header>
            <h1>Catálogo de Livros</h1>
        </header>
        <main>
            <List listaLivros={bancoLivros}/>
        </main>
        <footer>
            <h2>Todos os direitos reservados - 2025</h2>
        </footer>
            
        </>
    )
}