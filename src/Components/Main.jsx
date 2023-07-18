import React from "react";
import RowPokemon from "./RowPokemon";
import Pokeinfo from "./PokeInfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]= useState("https://pokeapi.co/api/v2/pokemon/?limit=10")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const TABLE_HEAD = ["Id", "Image", "Name", "Action"];

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }

    useEffect(()=>{
        pokeFun();
    },[url])

    return(
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pokemon</h2>
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
                                        <td>{head}</td>
                                    </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <RowPokemon pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                            </tbody>
                        </table>
                        <div className="text-right">
                            {  prevUrl && <button onClick={()=>{
                                setPokeData([])
                            setUrl(prevUrl) 
                            }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Previous</button>}

                            {  nextUrl && <button onClick={()=>{
                                setPokeData([])
                            setUrl(nextUrl) 
                            }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Next</button>}

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </section>
    )
}
export default Main;