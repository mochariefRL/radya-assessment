import React from "react";
const RowPokemon = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.sprites.front_default} alt="" /></td>
                                <td>{item.name}</td>
                                <td><button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</button></td>
                            </tr>
                        </>
                    )
                })
        }

        </>
    )
}
export default RowPokemon;