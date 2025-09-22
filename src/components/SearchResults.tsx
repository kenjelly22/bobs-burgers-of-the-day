import React from "react"
import {Burger} from "../types"
import {createBurger} from "../fetchHelper"

interface SearchResultsProps {
  burger: Burger
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const SearchResults: React.FC<SearchResultsProps> = ({burger, setBurgers}) => {
  const handleAddBurger = () => {
    const selectedBurger = {
      name: burger.name,
      price: burger.price,
    }

    createBurger(selectedBurger)
      .then((newBurger) => {
        setBurgers((prev) => [...prev, newBurger])
      })
      .catch((err) => console.error(err))
  }

  return (
    <tr>
      <td>{burger.name}</td>
      <td>{burger.price}</td>
      <td>
        <button onClick={handleAddBurger}>Add to Menu</button>
      </td>
    </tr>
  )
}

export default SearchResults
