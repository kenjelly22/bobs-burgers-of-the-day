import React, {useState} from "react"
import SearchResults from "../components/SearchResults"
import "./Search.css"

interface Burger {
  id: number
  name: string
  price: string
}

interface SearchProps {
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const formatName = (name: string): string => {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const Search: React.FC<SearchProps> = ({setBurgers}) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [burgerList, setBurgerList] = useState<Burger[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (!value.trim()) {
      setBurgerList([])
      return
    }

    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
      .then((r) => r.json())
      .then((burgers: Burger[]) => {
        const reFormattedName = burgers.map((burger) => ({
          ...burger,
          name: formatName(burger.name),
        }))

        const filteredBurgers = reFormattedName.filter((burger) =>
          burger.name.toLowerCase().includes(value.toLowerCase())
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
