import React from "react"
import {Burger} from "../types"
import {deleteBurger} from "../fetchHelper"

interface MenuItemProps {
  burger: Burger
  onDeleteClick: (id: number) => void
}

const MenuItem: React.FC<MenuItemProps> = ({burger, onDeleteClick}) => {
  const handleDeleteClick = (): void => {
    deleteBurger(burger.id)
      .then(() => onDeleteClick(burger.id))
      .catch((err) => console.error(err))
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
