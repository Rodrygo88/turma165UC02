import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import img from "../../assets/poke.png"
import style from"./Home.module.css";

export default function Home(){
    const [nomeBusca, setNomeBusca] = useState("pikachu");
    const [pokemon, setPokemon] = useState(null);
    const [erro, setErro] = useState("");

    useEffect(()=>{
        if(nomeBusca === ""){
            return
        }

        async function buscarPokemon() {
            try{
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`)
                if(!resposta.ok){
                    throw new Error("Pokemón não encontrado!")
                }
                const dados = await resposta.json();
                const info = {
                    nome: dados.name,
                    imagem: dados.sprites.front_default,
                    tipo: dados.types[0].type.name
                }

                console.log(info);
                setPokemon(info);
                setErro("");

            } catch(error){
                setErro(error.message);
            }
        }

        buscarPokemon();


    },[nomeBusca]);

    return (
        <>  
            <div>
                <h2>Buscar Pokemón</h2>
                <input type="text" placeholder="Digite o nome do Pokemón" onKeyDown={(e) => {
                    if(e.key === "Enter") setNomeBusca(e.target.value)
                }}/>

                <section>
                    <img src={img}/>
                    {pokemon && <PokemonCard nome={pokemon.nome} tipo={pokemon.tipo} imagem={pokemon.imagem} className={style.tela}/> }
                </section>

                {erro && <p>{erro}</p>}
            </div>
            
        </>
    )
}