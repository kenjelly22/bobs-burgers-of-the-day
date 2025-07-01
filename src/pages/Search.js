import React, {useState} from "react"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = ({target: {value}}) => {
    setSearchTerm(value)
  }

  return (
    <div className="searchbar">
      <div>
        <input
          className="ui search"
          type="text"
          id="search"
          value={searchTerm}
          placeholder="Search for a Burger"
          onChange={handleChange}
        ></input>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
