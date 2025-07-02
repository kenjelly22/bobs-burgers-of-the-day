import React, {useState} from "react"
import SearchResults from "../components/SearchResults"
import "./Search.css"

const formatName = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const Search = ({setBurgers}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [burgerList, setBurgerList] = useState([])

  const handleChange = ({target: {value}}) => {
    setSearchTerm(value)

    if (!value.trim()) {
      setBurgerList([])
      return
    }

    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
      .then((r) => r.json())
      .then((burgers) => {
        const reFormattedName = burgers.map((burger) => ({
          ...burger,
          name: formatName(burger.name),
        }))

        const filteredBurgers = reFormattedName.filter((burger) =>
          burger.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setBurgerList(filteredBurgers)
      })
  }

  return (
    <div className="table-wrapper">
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
          <table>
            <tbody>
              {burgerList.map((burger) => (
                <SearchResults
                  key={burger.id}
                  burger={burger}
                  setBurgers={setBurgers}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Search
