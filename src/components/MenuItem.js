import React from "react"

const MenuItem = ({burger, onDelete}) => {
  const handleDeleteClick = () => {
    fetch(`https://bobs-burgers-data.onrender.com/burgers/${burger.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(burger.id))
  }

  return (
    <tr>
      <td>
        <span onClick={handleDeleteClick} className="delete-icon" role="button">
          ❌
        </span>
      </td>
      <td>{burger.name}</td>
      <td>{burger.price}</td>
    </tr>
  )
}

export default MenuItem
