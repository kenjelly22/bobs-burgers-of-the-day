import React, {useState} from "react"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = ({target: {value}}) => {
    setSearchTerm(value)
  }

  const handleSearch = () => {
    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
      .then((r) => r.json())
      .then((burgers) => {
        const filteredBurgers = burgers.filter((burger) =>
          burger.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(filteredBurgers)
        setSearchTerm("")
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
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Search
