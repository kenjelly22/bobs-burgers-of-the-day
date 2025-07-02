import React from "react"
import MenuItem from "../components/MenuItem"

function Menu({burgers, setBurgers}) {
  const handleDelete = (deletedBurger) => {
    const updatedMenu = burgers.filter((burger) => burger.id !== deletedBurger)
    setBurgers(updatedMenu)
  }

  return (
    <div>
      <h2>Menu</h2>
      <table>
        <tbody>
          {burgers.map((burger) => (
            <MenuItem key={burger.id} burger={burger} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Menu
