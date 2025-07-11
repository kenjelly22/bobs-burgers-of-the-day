import React from "react"
import MenuItem from "../components/MenuItem"
import "./Menu.css"

function Menu({burgers, setBurgers}) {
  const handleDelete = (deletedBurger) => {
    const updatedMenu = burgers.filter((burger) => burger.id !== deletedBurger)
    setBurgers(updatedMenu)
  }

  return (
    <div className="table-wrapper">
      <div className="chalkboard">
        <h2>Menu</h2>
        <table>
          <tbody>
            {burgers.map((burger) => (
              <MenuItem
                key={burger.id}
                burger={burger}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Menu
