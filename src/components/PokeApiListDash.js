import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonThumbnail from "./PokemonThumbnail";

const PokeApiListDash = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    useEffect(() => {
        const fetchPokemonList = async () => {
            if (!nextUrl) return;

            try {
                const response = await axios.get(nextUrl);
                const newPokemonData = response.data.results;

                // Buscar detalhes adicionais para cada Pokémon
                const pokemonDetails = await Promise.all(newPokemonData.map(async (pokemon) => {
                    const pokemonDetailResponse = await axios.get(pokemon.url);
                    return {
                        ...pokemonDetailResponse.data,
                        image: pokemonDetailResponse.data.sprites.front_default // URL da imagem
                    };
                }));

                setPokemonList(prev => [...prev, ...pokemonDetails]);
                setNextUrl(response.data.next);
            } catch (error) {
                console.error("Erro ao buscar a lista de Pokémon:", error);
            }
        };

        fetchPokemonList();
    }, [nextUrl]);

    return (
        <div className="app-container">
            <h1>Pokemon Kingdom</h1>
            <div className="pokemon-container">
                <div className="all-container">
                    {pokemonList.map((pokemon, index) => (
                        <PokemonThumbnail
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image} // Passando a URL da imagem para o componente filho
                        />
                    ))}
                </div>
                {nextUrl && (
                    <button className="load-more" onClick={() => {}}>
                        More Pokemons
                    </button>
                )}
            </div>
        </div>
    );
};

export default PokeApiListDash;
