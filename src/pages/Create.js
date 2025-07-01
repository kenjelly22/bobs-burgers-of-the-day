import React, {useState} from "react"

const Create = () => {
  const [newBurger, setNewBurger] = useState({
    name: "",
    price: "",
  })
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
        />
        <br />
        <input
          type="text"
          name="price"
          value={newBurger.price}
          placeholder="burger price..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  )
}
export default Create
