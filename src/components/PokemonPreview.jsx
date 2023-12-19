import axios from "axios"
import { useEffect } from "react"

const PokemonPreview = ({ pokemonURL }) => {

    useEffect(() => {
        axios.
        get(pokemonURL)
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <article>PokemonPreview</article>
  )
}

export default PokemonPreview