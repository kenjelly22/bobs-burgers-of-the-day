import React, {useState} from "react"
import SearchResults from "../components/SearchResults"

const Search = ({burgerList, setBurgerList}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = ({target: {value}}) => {
    setSearchTerm(value)

    if (!value.trim()) {
      setBurgerList([])
      return
    }

    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
      .then((r) => r.json())
      .then((burgers) => {
        const filteredBurgers = burgers.filter((burger) =>
          burger.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setBurgerList(filteredBurgers)
      })
  }

  return (
    <div className="searchbar">
      <h1>Find a Burger</h1>
      <div>
        <input
          className="ui search"
          type="text"
          id="search"
          value={searchTerm}
          placeholder="search burgers..."
          onChange={handleChange}
        />
      </div>
      <div>
        <ul>
          {burgerList.map((burger) => (
            <SearchResults key={burger.id} burger={burger} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search
