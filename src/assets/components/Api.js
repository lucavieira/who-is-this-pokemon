import React, {useState, useEffect} from "react";
import Button from "../styles/js/Button";
import Image from "../styles/js/Image";
import Input from "../styles/js/Input";
import Congrats from "./Congrats";

const Api = () => {
    const pokemon_number = Math.floor(Math.random() * (1126 - 1)) + 1

    const urlBase = `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`

    const [spritePokemon, setSpritePokemon] = useState()
    const [pokemon, setPokemon] = useState({
        "oculto": '',
        "resposta": ''
    })

    const [resultado, setResultado] = useState()

    useEffect(() => {
        getResponse()
    }, []);

    const getResponse = async () => {
        const dadosGerais = await fetch(urlBase)
        const dados = await dadosGerais.json()
        
        const dadosGeraisPokemon = await fetch(dados.results[pokemon_number].url)
        const dadosPokemon = await dadosGeraisPokemon.json()

        setSpritePokemon(dadosPokemon.sprites.front_default)
        setPokemon({"oculto": dadosPokemon.name, "resposta": ''})
    }

    const getText = (resultado) => {
        setPokemon({"oculto": pokemon.oculto, "resposta": resultado.target.value})
    }

    const showResult = () => {
        if(pokemon.oculto.toUpperCase() == pokemon.resposta.toUpperCase()) {
            setResultado(<Congrats text="Parabéns, Você acertou!!" classe="congrats" />)
        }else {
            setResultado(<Congrats text="Tente novamente!" classe="sorry" />)
        }
    }

    return (
        <>
            <Image src={spritePokemon} alt="Pokémon" />
            <Input type="text" name="pokemon" onChange={resultado => {getText(resultado)}} />
            <Button onClick={showResult}>Enviar</Button>
            <div>{resultado}</div>
        </>
    );
}

export default Api