import React from "react"

const BurgerForm = ({newBurger, onChange, onSubmit}) => {
  return (
    <form className="add-burger-form" onSubmit={onSubmit}>
      <h1>Create a Burger</h1>
      <p>Create your own burger below and it will be added to the Menu!</p>
      <input
        type="text"
        name="name"
        value={newBurger.name}
        placeholder="burger name..."
        className="create input-text"
        onChange={onChange}
      />
      <br />
      <input
        type="number"
        name="price"
        value={newBurger.price}
        placeholder="burger price..."
        className="create input-text"
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
