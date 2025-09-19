import React from "react"
import {useNavigate} from "react-router-dom"
import BurgerForm from "../components/BurgerForm"
import "./Create.css"
import {Burger} from "../types"

interface CreateProps {
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const Create: React.FC<CreateProps> = ({setBurgers}) => {
  const navigate = useNavigate()

  const handleCreate = (data: Omit<Burger, "id">) => {
    fetch("https://bobs-burgers-data.onrender.com/burgers/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...data, price: `$${data.price}`}),
    })
      .then((r) => r.json())
      .then((createdBurger) => {
        setBurgers((prev) => [...prev, createdBurger])
        navigate("/")
      })
  }

  return (
    <div className="create-container">
      <BurgerForm onSubmit={handleCreate} />
    </div>
  )
}
export default Create
