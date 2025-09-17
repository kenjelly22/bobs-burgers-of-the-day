import React from "react"
import MenuItem, {Burger} from "../components/MenuItem"
import "./Menu.css"

interface MenuProps {
  burgers: Burger[]
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const Menu: React.FC<MenuProps> = ({burgers, setBurgers}) => {
  const handleDelete = (id: number) => {
    setBurgers(burgers.filter((burger) => burger.id !== id))
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
                onDeleteClick={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Menu
