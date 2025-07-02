import React from "react"

const SearchResults = ({burger, setBurgers}) => {
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
      .then((selectedBurger) => {
        setBurgers((prev) => [...prev, selectedBurger])
      })
  }

  return (
    <li>
      {burger.name} - {burger.price}
      <button onClick={handleAddBurger}>Add to Menu</button>
    </li>
  )
}

export default SearchResults
