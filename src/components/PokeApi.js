import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeApi = () => {
    // Estado para armazenar os dados do Pokémon
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        // Função para buscar dados do Pokémon
        const fetchPokemonData = async () => {
            try {
                // Usando Axios para fazer uma solicitação GET para a PokeAPI
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
                setPokemon(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do Pokémon:", error);
            }
        };

        fetchPokemonData();
    }, []); // O array vazio indica que este efeito não depende de nenhuma variável de estado e deve ser executado apenas uma vez após a montagem do componente.

    // Renderiza os dados do Pokémon, se disponíveis
    if (pokemon) {
        return (
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        );
    }

    // Renderiza um estado de carregamento se os dados ainda não estiverem disponíveis
    return <div>Carregando...</div>;
};

export default PokeApi;
