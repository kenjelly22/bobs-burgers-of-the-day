import React, {useState} from "react"

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
      <form className="add-burger-form" onSubmit={handleSubmit}>
        <h3>Create a Burger</h3>
        <input
          type="text"
          name="name"
          value={newBurger.name}
          placeholder="burger name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="price"
          value={newBurger.price}
          placeholder="burger price..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Burger"
          className="submit"
        />
      </form>
    </div>
  )
}
export default Create
