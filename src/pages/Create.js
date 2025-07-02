import React, {useState} from "react"

const Create = () => {
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

  return (
    <div className="container">
      <form className="add-burger-form">
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
