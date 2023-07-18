import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MyPokemon=()=>{
    const [pokeData,setPokeData]=useState([]);

    const TABLE_HEAD = ["Id", "Image", "Name"];

    useEffect(()=>{
        checkUserData();
    },[])

    function checkUserData() {
        const item = localStorage.getItem('pokemonData')
        
        if(item){
            setPokeData(JSON.parse(item))
        }

        // localStorage.removeItem("pokemonData")
      }

    return(
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Pokemon</h2>
                    <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here WebApp for All Pokemon using PokeAPI</p>
                </div>
                <div class="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* <!-- Pricing Card --> */}
                    <div class="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <table className="w-full min-w-max table-auto text-left dark:text-white">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        {head}
                                    </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pokeData.map((item) => {
                                        return (
                                            <>
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td><img src={item.sprites.front_default} alt="" /></td>
                                                    <td>{item.name}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <a href="/" class="ml-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</a>
        </section>
    )
}
export default MyPokemon;