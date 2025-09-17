import React from "react"

export interface Burger {
  id: number
  name: string
  price: string
}

interface MenuItemProps {
  burger: Burger
  onDeleteClick: (id: number) => void
}

const MenuItem: React.FC<MenuItemProps> = ({burger, onDeleteClick}) => {
  const handleDeleteClick = (): void => {
    fetch(`https://bobs-burgers-data.onrender.com/burgers/${burger.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteClick(burger.id))
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
