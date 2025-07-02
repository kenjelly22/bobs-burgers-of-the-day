import React from "react"

const BurgerForm = ({newBurger, onChange, onSubmit}) => {
  return (
    <form className="add-burger-form" onSubmit={onSubmit}>
      <h3>Create a Burger</h3>
      <input
        type="text"
        name="name"
        value={newBurger.name}
        placeholder="burger name..."
        className="input-text"
        onChange={onChange}
      />
      <br />
      <input
        type="number"
        name="price"
        value={newBurger.price}
        placeholder="burger price..."
        className="input-text"
        onChange={onChange}
      />
      <br />
      <input
        type="submit"
        name="submit"
        value="Create New Burger"
        className="submit"
      />
    </form>
  )
}

export default BurgerForm
