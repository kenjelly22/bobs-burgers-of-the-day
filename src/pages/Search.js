import React, {useState} from "react"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [allBurgers, setAllBurgers] = useState([])

  const handleChange = ({target: {value}}) => {
    setSearchTerm(value)
  }

  const handleSearch = () => {
    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
      .then((r) => r.json())
      .then((burgers) => {
        setAllBurgers(burgers)
        const filteredBurgers = burgers.filter((burger) =>
          burger.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setAllBurgers(filteredBurgers)
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
          placeholder="Search for new Burger"
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Search
