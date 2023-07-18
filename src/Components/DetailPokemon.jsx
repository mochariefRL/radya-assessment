import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";

function DetailPokemon() {
    const param = useParams()
    const [dataDetailPokemon, setDataPokemon] = useState(null);

    const getPokemon=async()=>{
        const result=await axios.get(`https://pokeapi.co/api/v2/pokemon/${param.name}`)
        setDataPokemon(result.data)
     }

    useEffect(function () {
        getPokemon();
    }, []);

    const handleClick = () => {
        var existingPokemon = JSON.parse(localStorage.getItem("pokemonData"));
        if(existingPokemon == null) {
            existingPokemon = [];
        }
        
        existingPokemon.push(dataDetailPokemon);
        localStorage.setItem('pokemonData', JSON.stringify(existingPokemon))
        alert("Pokemon Added!")
    };

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className='pt-3 text-right'>
                    <a href="/mypokemon" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">My Pokemon</a>
                </div>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img className='w-full' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataDetailPokemon?.id}.svg`} alt="" />
                    <div class="mt-4 md:mt-0">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{param.name}</h2>
                        <p class="font-light text-gray-500 md:text-lg dark:text-gray-400">Type : </p>
                        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                            {
                                dataDetailPokemon?.types.map(poke=>{
                                    return(
                                        <>
                                            <li class="flex items-center">
                                                <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                </svg>
                                                {poke.type.name}
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                        <p class="mt-2 font-light text-gray-500 md:text-lg dark:text-gray-400">Stats : </p>
                        <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mb-5">
                            {
                                dataDetailPokemon?.stats.map(poke=>{
                                    return(
                                        <>
                                            <li class="flex items-center">
                                                <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                                </svg>
                                                {poke.stat.name}:{poke.base_stat}
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <a href="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</a>
                        <button onClick={handleClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to my pokemon</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailPokemon