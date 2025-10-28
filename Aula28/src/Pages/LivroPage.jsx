import List from "../components/List";

export default function LivroPage() {
    const livros = [
        {
        titulo: "Livro1",
        autor: "Autor1",
        ano: "Ano1",
        genero: "Genero1",
        url: ""
    },

        {
        titulo: "Livro2",
        autor: "Autor2",
        ano: "Ano2",
        genero: "Genero2",
        url: ""
    },
        {
        titulo: "Livro3",
        autor: "Autor3",
        ano: "Ano3",
        genero: "Genero3",
        url: ""
    }
    ]

    return (
        <>
        <header>
            <h1>Catálogo de Livros</h1>
        </header>
        <main>
            <List listaLivros={livros}/>
        </main>
        <footer>
            <p>2025</p>
        </footer>
            
        </>
    )
}