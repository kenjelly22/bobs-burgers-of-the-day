import React from "react"

const SearchResults = ({burger, setBurgers}) => {
  const handleAddBurger = () => {
    const selectedBurger = {
      name: burger.name,
      price: burger.price,
    }
    fetch("https://bobs-burgers-data.onrender.com/burgers/", {
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
