import React, {useState} from "react"
import BurgerForm from "../components/BurgerForm"

const Create = ({setBurgers}) => {
  const [newBurger, setNewBurger] = useState({
    name: "",
    price: "",
  })

  const handleChange = ({target: {name, value}}) => {
    const updatedBurger = {
      ...newBurger,
      [name]: value,
    }
    setNewBurger(updatedBurger)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3001/burgers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newBurger.name,
        price: `$` + newBurger.price,
      }),
    })
      .then((r) => r.json())
      .then((createdBurger) => {
        setBurgers((prev) => [...prev, createdBurger])
        setNewBurger({name: "", price: ""})
      })
  }

  return (
    <div className="container">
      <BurgerForm
        newBurger={newBurger}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
export default Create
