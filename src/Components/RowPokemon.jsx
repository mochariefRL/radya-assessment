import React from "react";
const RowPokemon = ({ pokemon, loading}) => {
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
                                <td><a href={`/${item.name}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</a></td>
                            </tr>
                        </>
                    )
                })
        }

        </>
    )
}
export default RowPokemon;