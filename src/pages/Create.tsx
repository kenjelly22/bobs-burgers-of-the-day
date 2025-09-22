import React from "react"
import {useNavigate} from "react-router-dom"
import BurgerForm from "../components/BurgerForm"
import "./Create.css"
import {Burger} from "../types"
import {createBurger} from "../fetchHelper"

interface CreateProps {
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const Create: React.FC<CreateProps> = ({setBurgers}) => {
  const navigate = useNavigate()

  const handleCreate = async (data: Omit<Burger, "id">) => {
    try {
      const newBurger = await createBurger(data)
      setBurgers((prev) => [...prev, newBurger])
      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="create-container">
      <BurgerForm onSubmit={handleCreate} />
    </div>
  )
}
export default Create
