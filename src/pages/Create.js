import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import BurgerForm from "../components/BurgerForm"
import "./Create.css"

const Create = ({setBurgers}) => {
  const [newBurger, setNewBurger] = useState({
    name: "",
    price: "",
  })

  const navigate = useNavigate()

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
        navigate("/")
      })
  }

  return (
    <div className="create-container">
      <BurgerForm
        newBurger={newBurger}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
export default Create
