import React from "react"

const SearchResults = ({burger}) => {
  return (
    <li>
      {burger.name} - {burger.price}
      <button>Add to Menu</button>
    </li>
  )
}

export default SearchResults
