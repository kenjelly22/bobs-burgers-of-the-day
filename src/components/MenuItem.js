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
    <tr>
      <td>
        <button onClick={handleDeleteClick}>X</button>
      </td>
      <td>{burger.name}</td> <td>{burger.price}</td>
    </tr>
  )
}

export default MenuItem
