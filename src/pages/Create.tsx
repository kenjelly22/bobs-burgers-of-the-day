import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import BurgerForm from "../components/BurgerForm"
import "./Create.css"

interface Burger {
  name: string
  price: string
}

interface CreateProps {
  setBurgers: React.Dispatch<React.SetStateAction<Burger[]>>
}

const Create: React.FC<CreateProps> = ({setBurgers}) => {
  const [newBurger, setNewBurger] = useState<Burger>({
    name: "",
    price: "",
  })

  const navigate = useNavigate()

  const handleChange = ({
    target: {name, value},
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewBurger((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("https://bobs-burgers-data.onrender.com/burgers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newBurger.name,
        price: `$${newBurger.price}`,
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
