import React from "react"
import "./Search.css"
import { FaSearch, FaChevronRight } from "react-icons/fa"
const Search = ({ handleSearch, handleInput, searchResult }) => {
  const data = searchResult
  return (
    <div className="container">
      <h2 className="title">Search User</h2>
      <p>To Add a new user write the name and press enter</p>
      <div className="SearchContainer">
        <span className="icon">
          <FaSearch />
        </span>

        <form className="form" onSubmit={(e) => handleSearch(e)}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleInput(e.target.value)}
          ></input>
          <div className="line" />
          {data.length > 0
            ? data.map((item, index) => (
                <ul key={index}>
                  <li>
                    <FaChevronRight />
                    {item}
                  </li>
                </ul>
              ))
            : null}
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Search
