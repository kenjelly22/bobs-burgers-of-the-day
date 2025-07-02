import React from "react"

const MenuItem = ({burger, onDelete}) => {
  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/burgers/${burger.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(burger.id))
  }

  return (
    <li>
      {burger.name} - {burger.price}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}

export default MenuItem
