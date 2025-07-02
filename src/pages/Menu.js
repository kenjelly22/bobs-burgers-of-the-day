import React from "react"
import MenuItem from "../components/MenuItem"

function Menu({burgers, setBurgers}) {
  const handleDelete = (deletedBurger) => {
    const updatedMenu = burgers.filter((burger) => burger.id !== deletedBurger)
    setBurgers(updatedMenu)
  }

  return (
    <>
      <h1>Welcome to Bob's Burgers</h1>
      <div>
        <h2>Menu</h2>
        <ul>
          {burgers.map((burger) => (
            <MenuItem key={burger.id} burger={burger} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default Menu
