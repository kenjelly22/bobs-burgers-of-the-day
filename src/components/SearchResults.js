import React, {useState} from "react"

const SearchResults = ({burger}) => {
  const [burgerList, setBurgerList] = useState([])

  const handleAddBurger = () => {
    const selectedBurger = {
      name: burger.name,
      price: burger.price,
    }
    fetch("http://localhost:3001/burgers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedBurger),
    })
      .then((r) => r.json())
      .then((selectedBurger) =>
        setBurgerList({
          ...burgerList,
          selectedBurger,
        })
      )
  }

  return (
    <li>
      {burger.name} - {burger.price}
      <button onClick={handleAddBurger}>Add to Menu</button>
    </li>
  )
}

export default SearchResults
