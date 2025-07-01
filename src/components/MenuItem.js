import React from "react"

const MenuItem = ({burger}) => {
  return (
    <li>
      {burger.name} - {burger.price}
    </li>
  )
}

export default MenuItem
