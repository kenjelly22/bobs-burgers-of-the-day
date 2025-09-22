import React, {useState} from "react"
import SearchResults from "../components/SearchResults"
import "./Search.css"
import {Burger} from "../types"
import {searchBurgers} from "../fetchHelper"

interface SearchProps {
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
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
    searchBurgers(value).then(setBurgerList)
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
