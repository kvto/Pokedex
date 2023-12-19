import { IconSearch } from "@tabler/icons-react";
import axios from "axios"
import { useEffect, useState } from "react"

const Pokemons = () => {

    const [allPokemons, setAllPokemons] = useState([]);

   useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then((data) => setAllPokemons(data.results))
    .catch((err) => console.log(err))
   }, [])
    
  return  <section className="p-4 py-5">
    <form>
        <div className="bg-white p-2">
            <input type="text" placeholder="Search your Pokemon" />
            <button>
                <IconSearch />
            </button>
        </div>
    </form>
  </section>
  
}

export default Pokemons