import {useEffect, useState} from "react"
import MenuItem from "../components/MenuItem"

function Menu() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/burgers")
      .then((r) => r.json())
      .then((burgers) => {
        setBurgers(burgers)
      })
  }, [])
  return (
    <>
      <h1>Welcome to Bob's Burgers</h1>
      <div>
        <h2>Menu</h2>
        <ul>
          {burgers.map((burger) => (
            <MenuItem key={burger.id} burger={burger} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default Menu
